/* tslint:disable:max-classes-per-file */
import * as es from 'estree'
import { isBoolean, isInteger, isNumber, isString } from 'lodash'

import { RuntimeSourceError } from '../errors/runtimeSourceError'
import { Pair, pair } from '../stdlib/list'
import { Context, Environment, Value } from '../types'
import { evaluateBinaryExpression, evaluateUnaryExpression } from '../utils/operators'
import * as rttc from '../utils/rttc'
import {
    get_stack_pointer,
    heap_allocate,
    heap_assign,
    heap_deallocate,
    heap_lookup,
    HEAP_TYPE,
    initialize_machine,
    REVERSE_TYPES,
    set_stack_pointer,
    stack_allocate,
    type_sizes
} from './memory'
import { isTypeMatch, isUndeclared, unassigned, undeclared } from './type_checking'

class Thunk {
    public value: Value
    public isMemoized: boolean
    constructor(public exp: es.Node, public env: Environment) {
        this.isMemoized = false
        this.value = null
    }
}

function* forceIt(val: any, context: Context): Value {
    if (val instanceof Thunk) {
        if (val.isMemoized) return val.value

        pushEnvironment(context, val.env)
        const evalRes = yield* actualValue(val.exp, context)
        popEnvironment(context)
        val.value = evalRes
        val.isMemoized = true
        return evalRes
    } else return val
}

export function* actualValue(exp: es.Node, context: Context): Value {
    const evalResult = yield* evaluate(exp, context)
    const forced = yield* forceIt(evalResult, context)
    return forced
}

const handleRuntimeError = (context: Context, error: RuntimeSourceError): never => {
    context.errors.push(error)
    context.runtime.environments = context.runtime.environments.slice(
        -context.numberOfOuterEnvironments
    )
    throw error
}

function* visit(context: Context, node: es.Node) {
    context.runtime.nodes.unshift(node)
    yield context
}

function* leave(context: Context) {
    context.runtime.break = false
    context.runtime.nodes.shift()
    yield context
}

const popEnvironment = (context: Context) => context.runtime.environments.shift()
export const pushEnvironment = (context: Context, environment: Environment) => {
    context.runtime.environments.unshift(environment)
    context.runtime.environmentTree.insert(environment)
}

export type Evaluator<T extends es.Node> = (node: T, context: Context) => IterableIterator<Value>

function* evaluateBlockStatement(context: Context, node: es.BlockStatement) {
    let result
    for (const statement of node.body) {
        result = yield* evaluate(statement, context)
    }
    return result
}

const push = (array: Array<any>, ...items: any): Array<any> => {
    array.splice(array.length, 0, ...items)
    return array
}

const peek = (array: Array<any>): any => array.slice(-1)[0]

const assign = (lval: string, val: any, env: Pair<any, any>): void => {
    if (env == null) throw new Error('Unbound name: ' + lval)
    if (env[0].hasOwnProperty(lval)) {
        env[0][lval][1] = val
    } else {
        assign(lval, val, env[1])
    }
}

const scanBlock = (stmts: any): Array<Pair<string, string>> => {
    const locals = []
    while (stmts.type !== 'StatementEmpty') {
        const firstStatement = stmts.first
        if (firstStatement.type === 'DclStatement') {
            locals.push(pair(firstStatement.d.t.type, firstStatement.d.id.text))
        } else if (
            firstStatement.type === 'ExprStatement' &&
            firstStatement.val.type === 'DclAssignment'
        ) {
            locals.push(pair(firstStatement.val.d.t.type, firstStatement.val.d.id.text))
        }
        stmts = stmts.rest
    }
    return locals
}

const lookup = (lval: string, env: Pair<any, any>): any => {
    if (env == null) {
        throw new Error('Unbound name: ' + lval)
    }
    if (env[0].hasOwnProperty(lval)) {
        const v = env[0][lval]
        return v
    }
    return lookup(lval, env[1])
}

const extendEnvironment = (
    lvals: Array<Pair<string, string>>,
    vals: Array<any>,
    env: Pair<any, any>
): Pair<any, any> => {
    if (lvals.length > vals.length) {
        throw new Error('Too many arguments provided to extendEnvironment')
    }

    if (lvals.length < vals.length) {
        throw new Error('Too few arguments provided to extendEnvironment')
    }
    const new_frame = {}

    for (let i = 0; i < lvals.length; i++) {
        new_frame[lvals[i][1]] = pair(lvals[i][0], vals[i])
    }

    return pair(new_frame, env)
}

// Interpreter configurations:
// A: agenda: stack of commands
// S: stash: stack of values
// E: environment: list of frames

// agenda A

// The agenda A is a stack of commands that still need
// to be executed by the interpreter. The agenda follows
// stack discipline: pop, push, peek at end of the array.

// Commands are nodes of syntax tree or instructions.

// Instructions are objects whose tag value ends in '_i'.

// Execution initializes A as a singleton array
// containing the given program.

let A: Array<any>

// stash S

// stash S is array of values that stores intermediate
// results. The stash follows strict stack discipline:
// pop, push, peek at the end of the array.

// Execution initializes stash S as an empty array.

let S: Array<any>

// environment E

// See *environments* above. Execution initializes
// environment E as the global environment.

let E: Pair<any, any>

/**
 * WARNING: Do not use object literal shorthands, e.g.
 *   {
 *     *Literal(node: es.Literal, ...) {...},
 *     *ThisExpression(node: es.ThisExpression, ..._ {...},
 *     ...
 *   }
 * They do not minify well, raising uncaught syntax errors in production.
 * See: https://github.com/webpack/webpack/issues/7566
 */
// tslint:disable:object-literal-shorthand
// prettier-ignore
export const evaluators: { [nodeType: string]: Evaluator<es.Node> } = {
    StatementList: function* (node: any, context: Context) {
        push(A, node.rest, node.first)
    },

    StatementEmpty: function* (node: any, context: Context) {
        // Do Nothing
    },

    SingleParam: function* (node: any, context: Context) {
       throw new Error(`not supported yet: ${node.type}`)
    },

    MultiParam: function* (node: any, context: Context) {
        throw new Error(`not supported yet: ${node.type}`)
    },

    FunProg: function* (node: any, context: Context) {
        const funcName = node.fun.id.text
        const funcType = node.fun.t.type + 'Function'
        E[0][funcName] = pair(funcType, undeclared)
        push(A, node.prog, node.fun)
    },

    Lambda: function* (node: any, context: Context) {
        throw new Error(`not supported yet: ${node.type}`)
    },

    MainProg: function* (node: any, context: Context) {
        push(A, node.mn.blk)
    },

    ParamsList: function* (node: any, context: Context) {
        throw new Error(`not supported yet: ${node.type}`)
    },

    ParamsEmpty: function* (node: any, context: Context) {
        throw new Error(`not supported yet: ${node.type}`)
    },

    IntType: function* (node: any, context: Context) {
        // Do Nothing
    },

    BoolType: function* (node: any, context: Context) {
        // Do Nothing
    },

    StringType: function* (node: any, context: Context) {
        // Do Nothing
    },

    CharType: function* (node: any, context: Context) {
        // Do nothing
    },

    IntStarType: function* (node: any, context: Context) {
        // Do Nothing
    },

    BoolStarType: function* (node: any, context: Context) {
        // Do Nothing
    },

    CharStarType: function* (node: any, context: Context) {
        // Do nothing
    },

    ArgsList: function* (node: any, context: Context) {
        push(A, node.list)
    },

    ArgsEmpty: function* (node: any, context: Context) {
        // Do Nothing
    },

    IdLvalue: function* (node: any, context: Context) {
        push(S, node.id.text)
    },

    BracketLvalue: function* (node: any, context: Context) {
        push(A, node.lv)
    },
    
    DerefAddress: function* (node: any, context: Context) {
        push(A, node.expr)
    },

    SingleArg: function* (node: any, context: Context) {
        push(A, node.first)
    },

    MultiArgs: function* (node: any, context: Context) {
        push(A, node.rest, node.first)
    },

    Assignment: function* (node: any, context: Context) {
        push(A, { type: 'Assignment_i' }, node.lv, node.val)
    },

    FunctionAssignment: function* (node: any, context: Context) {
        push(A, {type:'FunctionAssignment_i', lv: node.lv}, node.val)
    },

    IfStatement: function* (node: any, context: Context) {
        push(A, {type: 'Branch_i', cons: node.cons}, node.pred)
    },

    IfElseStatement: function* (node: any, context: Context) {
        push(A, {type: 'Branch_i', cons: node.cons, alt: node.alt}, node.pred)
    },

    WhileStatement: function* (node: any, context: Context) {
        push(A, {type: 'While_i', pred: node.pred, body: node.body}, node.pred)
    },
    
    ForStatement: function* (node: any, context: Context) {
        push(A, { type: 'For_i', pred: node.pred, repeat: node.repeat, body: node.body }, node.pred)
    },

    PrintfStatement: function* (node: any, context: Context) {
        push(A, {type: 'Print_i'}, node.body)
    },

    DclStatement: function* (node: any, context: Context) {
        push(A, node.d)
    },

    DclAssignment: function* (node: any, context: Context) {
        push(A, { type: 'Assignment', lv: { type: 'IdLvalue', id: node.d.id}, val: node.val }, node.d)
    },

    ReturnStatement: function* (node: any, context: Context) {
        // TODO: Implement properly with functions
        push(A, { type: 'Reset_i'}, node.val)
    },

    FreeStatement: function* (node: any, context: Context) {
        push(A, {type: 'Free_i' }, node.val)
    },

    ExprStatement: function* (node: any, context: Context) {
        push(A, { type: 'Pop_i' }, node.val)
    },

    BreakStatement: function* (node: any, context: Context) {
        push(A, { type: 'Break_i' })
    },

    ContinueStatement: function* (node: any, context: Context) {
        push(A, { type: 'Continue_i' })
    },

    Parentheses: function* (node: any, context: Context) {
        push(A, node.val)
    },

    IntLiteral: function* (node: any, context: Context) {
        push(S, node.val)
    },

    StringLiteral: function* (node: any, context: Context) {
        push(S, node.val)
    },

    CharLiteral: function* (node: any, context: Context) {
        push(S, node.val)
    },

    BoolLiteral: function* (node: any, context: Context) {
        push(S, node.val)
    },

    UnopExpr: function* (node: any, context: Context) {
        push(A, {type: "UnopExpr_i", sym: node.unop}, node.first)
    },

    BinopExpr: function* (node: any, context: Context) {
        push(A, {type: "BinopExpr_i", sym: node.binop}, node.first, node.second)
    },

    BinlogExpr: function* (node: any, context: Context) {
        push(A, {type: "BinlogExpr_i", sym: node.binlog}, node.first, node.second)
    },

    IdExpr: function* (node: any, context: Context) {
        const [_, addr] = lookup(node.id.text, E)
        if(isUndeclared(addr)) {
            throw new Error(`Lookup of undeclared variable ${node.id.text}`)
        }
        const val = heap_lookup(addr)
        push(S, val)
    },

    FnExpr: function* (node: any, context: Context) {
        let numArgs = 0
        if (node.arglst.type !== 'ArgsEmpty') {
            let args = node.arglst.list
              while (args.type !== 'SingleArg') {
                  numArgs++
                  args = args.rest
              }
              numArgs++
        }
        push(A, {type: "FnExpr_i", arity: numArgs, funcName: node.id.text }, node.arglst)
        const [_, fn_expr] = lookup(node.id.text, E)
        push(S, fn_expr)
    },

    MallocExpr: function* (node: any, context: Context) {
        push(A, { type: 'MallocExpr_i' }, node.first)
    },

    StarExpr: function* (node: any, context: Context) {
        push(A, { type: 'StarExpr_i' }, node.first)
    },

    AmpersandExpr: function* (node: any, context: Context) {
        push(A, { type: 'AmperSandExpr_i'}, node.first)
    },

    Function: function* (node: any, context: Context) {
        const params = []
        if (node.prms.type === 'ParamsList') {
            let paramsList = node.prms.list
            while (paramsList.type !== 'SingleParam') {
                const param = paramsList.first
                params.push(pair(param.t, param.id.text))
                paramsList = paramsList.rest
            }
            params.push(pair(paramsList.first.t, paramsList.first.id.text))
        }
        
        push(A, { 
            type: 'FunctionAssignment', 
            lv: node.id.text, 
            val: { 
                type: 'Closure', 
                funcName: node.id.text, 
                funcType: node.t.type, 
                prms: params, 
                blk: node.blk, 
                env: JSON.parse(JSON.stringify(E))
            }})
    },

    Closure: function* (node: any, context: Context) {
        push(S, node)
    },

    Block: function* (node: any, context: Context) {
        const locals: Array<Pair<string,string>> = scanBlock(node.stmnts)
        const unDeclaredList: Array<any> = locals.map(_ => undeclared)
        if (!(A.length === 0)) {
            push(A, {type: 'Environment_i', env: E, sp: get_stack_pointer() })
        }
        push(A, node.stmnts)
        E = extendEnvironment(locals, unDeclaredList, E)
    },

    Dcl: function* (node: any, context: Context) {
        const addr = stack_allocate(node.t.type, type_sizes[node.t.type])
        assign(node.id.text, addr, E)
    },

    Predicate: function* (node: any, context: Context) {
        push(A, node.pred)
    },

    GlobVarDcl: function* (node: any, context: Context) {
        const varName = node.glob.id.text
        const varType = node.glob.t.type
        if (varName in E[0]) {
            throw new Error("Global variable " + varName + " has already been declared")
        }
        E[0][varName] = pair(varType, undeclared)
        push(A, node.prog, node.glob)
    },

    GlobVarDclAssignment: function* (node: any, context: Context) {
        const varName = node.glob.id.text
        const varType = node.glob.t.type
        if (varName in E[0]) {
            throw new Error("Global variable " + varName + " has already been declared")
        }
        E[0][varName] = pair(varType, undeclared)
        if (node.val.type != 'IntLiteral' && node.val.type != 'BoolLiteral' && node.val.type != 'CharLiteral') {
            throw new Error("Global variable declaration must be of type Int, Bool, or Char")
        }
        push(A, node.prog, {type: "Pop_i"} , { type: 'Assignment', lv: { type: 'IdLvalue', id: node.glob.id}, val: node.val}, node.glob)
    },

    // Instructions
    MallocExpr_i: function* (node: any, context: Context) {
        const bytes_to_allocate = S.pop()
        const addr = heap_allocate('AnyType', bytes_to_allocate)
        push(S, addr)
    },

    Free_i: function* (node: any, context: Context) {
        const addr = S.pop()
        heap_deallocate(addr)
    },

    StarExpr_i: function* (node: any, context: Context) {
        const addr = S.pop()
        if(!isNumber(addr)) {
            throw new Error(`Can't dereference a non address value: ${addr}`)
        }
        const val = heap_lookup(addr)
        push(S, val)
    },

    AmperSandExpr_i: function* (node: any, context: Context) {
        const lvalue = S.pop()
        const [_, addr] = lookup(lvalue, E)
        push(S, addr)
    },

    UnopExpr_i: function* (node: any, context: Context) {
        const value = S.pop()
        const error = rttc.checkUnaryExpression(node, node.sym, value)
        if (error) {
            handleRuntimeError(context, error)
        }
        push(S, evaluateUnaryExpression(node.sym, value))
    },

    BinopExpr_i: function* (node: any, context: Context) {
        const leftValue = S.pop()
        const rightValue = S.pop()
        const error = rttc.checkBinaryExpression(node, node.sym, leftValue, rightValue)
        if (error) {
            handleRuntimeError(context, error)
        }
        push(S, evaluateBinaryExpression(node.sym.children[0].text, leftValue, rightValue))
    },

    BinlogExpr_i: function* (node: any, context: Context) {
        const leftValue = S.pop()
        const rightValue = S.pop()
        const error = rttc.checkBinaryExpression(node, node.sym, leftValue, rightValue)
        if (error) {
            handleRuntimeError(context, error)
        }

        push(S, evaluateBinaryExpression(node.sym.children[0].text, leftValue, rightValue))
    },

    Assignment_i: function* (node: any, context: Context) {
        const lvalue = S.pop()
        const new_val = peek(S)
        if(isNumber(lvalue)) {
            // Lvalue is address (dereference address)
            const type = REVERSE_TYPES[HEAP_TYPE[lvalue]]
            heap_assign(type, new_val, lvalue)
        }
        else if(isString(lvalue)) {
            // Lvalue is variable name
            const [type, addr] = lookup(lvalue, E)
            if(isUndeclared(addr)) {
                throw new Error('Assignment to undeclared variable')
            }
            if(!isNumber(addr)) {
                throw new Error('Invalid variable value. Should be address')
            }
            heap_assign(type, new_val, addr)
        }
        else {
            throw new Error(`Invalid lvalue: ${lvalue}`)
        }
    },

    FunctionAssignment_i: function* (node: any, context: Context) {
      assign(node.lv, S.pop(), E)
    },

    Environment_i: function* (node: any, context: Context) {
        E = node.env
        set_stack_pointer(node.sp)
    },

    Branch_i: function* (node: any, context: Context) {
        if (S.pop()) {
            push(A, node.cons)
        } else if (node.alt) {
            push(A, node.alt)
        }
    },

    Pop_i: function* (node: any, context: Context) {
        S.pop()
    },

    While_i: function* (node: any, context: Context) {
        if (S.pop()) {
            push(A, node, node.pred, node.body)
        }
    },

    For_i: function* (node: any, context: Context) {
        if(S.pop()) {
            push(A, node, node.pred, { type: 'ExprStatement', val: node.repeat }, node.body)
        }
    },

    FnExpr_i: function* (node: any, context: Context) {
        const arity = node.arity
        const args = []

        for (let i = arity - 1; i >= 0; i--) {
            args[i] = S.pop()
        }
        const func = S.pop()

        if (A.length === 0 || peek(A).type === 'Environment_i') {
            // Current E is not needed
            push(A, { type: 'FnTypeCheck_i', funcType: func.funcType }, { type: 'Mark_i' })
        } else if (peek(A).type === 'Reset_i') {
            // Tail call case
            A.pop()
        } else {
            push(A, { type: 'Environment_i', env: E, sp: get_stack_pointer() }, { type: 'FnTypeCheck_i', funcName: func.funcName, funcType: func.funcType }, { type: 'Mark_i' })
        }
        push(A, func.blk)
        if (func.prms.length != args.length) {
            throw new Error('Incorrect number of arguments provided to function ' + func.funcName)
        }
        const addresses = []
        for (let i = 0; i < args.length; i++) {
            if (!isTypeMatch(args[i], func.prms[i][0].type)) {
                throw new Error('Parameter type mismatch for function ' + func.funcName + ': Parameter ' + func.prms[i][1] + ' should be of type ' + func.prms[i][0].type)
            }
            addresses[i] = stack_allocate(func.prms[i][0].type, type_sizes[func.prms[i][0].type])
            heap_assign(func.prms[i][0].type, args[i], addresses[i])
        }
        E = extendEnvironment(func.prms, addresses, func.env)
    },

    FnTypeCheck_i: function* (node: any, context: Context) {
        const retVal = peek(S)
        if ((node.funcType == 'StringType' && !isString(retVal)) ||
            (node.funcType == 'BoolType' && !isBoolean(retVal)) ||
            (node.funcType == 'IntType' && !isInteger(retVal))) {
            throw new Error('Type mismatch: Function ' + node.funcName + ' should return type ' + node.funcType)
        }
    },

    Reset_i: function* (node: any, context: Context) {
        if (A.length !== 0 && A.pop().type !== 'Mark_i') {
            push(A, node)
        }
    },

    Print_i: function* (node: any, context: Context) {
        console.log(S.pop())
    },

    Break_i: function* (node: any, context: Context) {
        let next = A.pop()
        while(next.type !== 'While_i' && next.type !== 'For_i'){
            if(next.type === 'Environment_i'){
                E = next.env
            }
            next = A.pop()
        }
    },

    Continue_i: function* (node: any, context: Context) {
        // TODO: fix continue for for loops
        let next = A.pop()
        while(next.type !== 'While_i' && next.type !== 'For_i'){
            if(next.type === 'Environment_i'){
                E = next.env
            }
            next = A.pop()
        }
        push(A, next, next.pred)
    },
}
// tslint:enable:object-literal-shorthand

const step_limit = 100000

export function* evaluate(node: es.Node, context: Context) {
    // An environment is null or a pair whose head is a frame
    // and whose tail is an environment.
    const global_frame = {}
    const global_environment = null

    A = []
    A.push(node)
    S = []
    E = pair(global_frame, global_environment)

    initialize_machine(1000) // start program with 1000 bytes of memory

    let i = 0
    while (i < step_limit) {
        if (A.length === 0) {
            break
        }

        // Debugging
        // console.log('PRINTING A')
        // console.log(A)
        // console.log('PRINTING S')
        // console.log(S)
        // console.log('PRINTING E')
        // console.log(E)
        // console.log('PRINTING HEAP')
        // console.log(HEAP)
        // console.log('------------------------------')

        const cmd = A.pop()
        yield* evaluators[cmd.type](cmd, context)
        i++
    }

    if (i === step_limit) {
        throw new Error('step limit ' + step_limit + ' exceeded')
    }
    if (S.length > 1 || S.length < 1) {
        throw new Error('internal error: stash must be singleton but is not')
    }
    yield* leave(context)
    return S[0]
}
