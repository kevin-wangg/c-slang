/* tslint:disable:max-classes-per-file */
import * as es from 'estree'
import { isBoolean, isInteger, isNumber, isString, isUndefined } from 'lodash'

import { RuntimeSourceError } from '../errors/runtimeSourceError'
import { Pair, pair } from '../stdlib/list'
import { is_number } from '../stdlib/misc'
import { Context, Environment, Value } from '../types'
import { evaluateBinaryExpression, evaluateUnaryExpression } from '../utils/operators'
import * as rttc from '../utils/rttc'

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

const unassigned = { type: 'Unassigned' }
const isUnassigned = (v: any): boolean => {
    return (
        v !== null && typeof v === 'object' && v.hasOwnProperty('type') && v.type === 'Unassigned'
    )
}

const undeclared = { type: 'Undeclared' }
const isUndeclared = (v: any): boolean => {
    return (
        v !== null && typeof v === 'object' && v.hasOwnProperty('type') && v.type === 'Undeclared'
    )
}

const push = (array: Array<any>, ...items: any): Array<any> => {
    array.splice(array.length, 0, ...items)
    return array
}

const peek = (array: Array<any>): any => array.slice(-1)[0]

const isIntFunc = (val: any): boolean => {
    return (
        val !== null &&
        typeof val === 'object' &&
        val.hasOwnProperty('type') &&
        val.type === 'Closure' &&
        val.funcType === 'IntType'
    )
}

const isBoolFunc = (val: any): boolean => {
    return (
        val !== null &&
        typeof val === 'object' &&
        val.hasOwnProperty('type') &&
        val.type === 'Closure' &&
        val.funcType === 'BoolType'
    )
}

const isStringFunc = (val: any): boolean => {
    return (
        val !== null &&
        typeof val === 'object' &&
        val.hasOwnProperty('type') &&
        val.type === 'Closure' &&
        val.funcType === 'StringType'
    )
}

const isTypeMatch = (val: any, type: string): boolean => {
    return (
        val == unassigned ||
        type === 'AnyType' ||
        (type == 'StringType' && isString(val)) ||
        (type == 'BoolType' && isBoolean(val)) ||
        (type == 'IntType' && isInteger(val)) ||
        (type == 'StringTypeFunction' && isStringFunc(val)) ||
        (type == 'BoolTypeFunction' && isBoolFunc(val)) ||
        (type == 'IntTypeFunction' && isIntFunc(val)) ||
        (type === 'IntStarType' &&
            isInteger(val) &&
            (HEAP_TYPE[val] === TYPES['IntType'] || HEAP_TYPE[val] === TYPES['AnyType'])) ||
        (type === 'BoolStarType' &&
            isInteger(val) &&
            (HEAP_TYPE[val] === TYPES['BoolType'] || HEAP_TYPE[val] === TYPES['AnyType']))
    )
}

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
    while (stmts.type != 'StatementEmpty') {
        const firstStatement = stmts.first
        if (firstStatement.type == 'DclStatement' || firstStatement.type == 'DclAssignment') {
            locals.push(pair(firstStatement.d.t.type, firstStatement.d.id.text))
        }
        stmts = stmts.rest
    }
    return locals
}

const scanProg = (node: any): Array<Pair<string, string>> => {
    const functions: Array<Pair<string, string>> = []
    while (node.type != 'MainProg') {
        const funcName = node.fun.id.text
        const funcType = node.fun.t.type + 'Function'
        functions.push(pair(funcType, funcName))
        node = node.prog
    }
    return functions
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

// Memory stuff

const type_sizes = {
    BoolType: 1,
    IntType: 4,
    IntStarType: 4,
    BoolStarType: 4
}

const TYPES = {
    IntType: 0,
    BoolType: 1,
    IntStarType: 2,
    BoolStarType: 3,
    AnyType: 4
}

const REVERSE_TYPES = ['IntType', 'BoolType', 'IntStarType', 'BoolStarType', 'AnyType']

let HEAP: Uint8Array
let HEAP_TYPE: Uint8Array
let heap_size: number

const heap_make = (bytes: number) => {
    const data = new ArrayBuffer(bytes) // By default every value is initialized to 0
    const view = new Uint8Array(data)
    return view
}

const initialize_machine = (heapsize_bytes: number) => {
    HEAP = heap_make(heapsize_bytes)
    HEAP_TYPE = heap_make(heapsize_bytes)
    heap_size = heapsize_bytes
}

const heap_allocate = (type: string, bytes: number) => {
    for (let i = 0; i < heap_size; ++i) {
        if (HEAP[i] == 0) {
            let ok = true
            for (let j = i; j <= i + bytes; ++j) {
                if (HEAP[j] != 0) {
                    ok = false
                    break
                }
            }
            if (ok) {
                HEAP[i] = bytes
                for (let j = i + 1; j <= i + bytes; ++j) {
                    HEAP_TYPE[j] = TYPES[type]
                }
                return i + 1
            }
        } else {
            i += HEAP[i]
        }
    }
    return -1
}

const heap_deallocate = (addr: number) => {
    const number_of_bytes = HEAP[addr - 1]
    HEAP[addr - 1] = 0
    for (let i = addr; i < addr + number_of_bytes; ++i) {
        HEAP[i] = 0
    }
}

const heap_get = (addr: number) => {
    return HEAP[addr]
}

const heap_set = (addr: number, val: number) => {
    HEAP[addr] = val
}

const heap_get_bool = (addr: number) => {
    const byte = heap_get(addr)
    if (byte === 1) {
        return true
    }
    return false
}

const heap_set_bool = (addr: number, b: boolean) => {
    const val = b ? 1 : 0
    heap_set(addr, val)
    HEAP_TYPE[addr] = TYPES['BoolType']
}

const heap_get_int = (addr: number) => {
    const first_byte = heap_get(addr)
    const second_byte = heap_get(addr + 1)
    const third_byte = heap_get(addr + 2)
    const fourth_byte = heap_get(addr + 3)
    return (first_byte << 24) | (second_byte << 16) | (third_byte << 8) | fourth_byte
}

const heap_set_int = (addr: number, num: number) => {
    heap_set(addr, get_int_first_byte(num))
    heap_set(addr + 1, get_int_second_byte(num))
    heap_set(addr + 2, get_int_third_byte(num))
    heap_set(addr + 3, get_int_fourth_byte(num))
    HEAP_TYPE[addr] = TYPES['IntType']
    HEAP_TYPE[addr + 1] = TYPES['IntType']
    HEAP_TYPE[addr + 2] = TYPES['IntType']
    HEAP_TYPE[addr + 3] = TYPES['IntType']
}

const get_int_first_byte = (num: number) => {
    return (num & 0xff000000) >> 24
}

const get_int_second_byte = (num: number) => {
    return (num & 0x00ff0000) >> 16
}

const get_int_third_byte = (num: number) => {
    return (num & 0x0000ff00) >> 8
}

const get_int_fourth_byte = (num: number) => {
    return num & 0x000000ff
}

const heap_set_int_star = (addr: number, pointer: number) => {
    heap_set(addr, get_int_first_byte(pointer))
    heap_set(addr + 1, get_int_second_byte(pointer))
    heap_set(addr + 2, get_int_third_byte(pointer))
    heap_set(addr + 3, get_int_fourth_byte(pointer))
    HEAP_TYPE[addr] = TYPES['IntStarType']
    HEAP_TYPE[addr + 1] = TYPES['IntStarType']
    HEAP_TYPE[addr + 2] = TYPES['IntStarType']
    HEAP_TYPE[addr + 3] = TYPES['IntStarType']
}

const heap_set_bool_star = (addr: number, pointer: number) => {
    heap_set(addr, get_int_first_byte(pointer))
    heap_set(addr + 1, get_int_second_byte(pointer))
    heap_set(addr + 2, get_int_third_byte(pointer))
    heap_set(addr + 3, get_int_fourth_byte(pointer))
    HEAP_TYPE[addr] = TYPES['BoolStarType']
    HEAP_TYPE[addr + 1] = TYPES['BoolStarType']
    HEAP_TYPE[addr + 2] = TYPES['BoolStarType']
    HEAP_TYPE[addr + 3] = TYPES['BoolStarType']
}

const heap_assign = (type: string, val: any, env_addr: number) => {
    if (isTypeMatch(val, type)) {
        if (type === 'IntStarType') {
            heap_set_int_star(env_addr, val)
        } else if (type === 'BoolStarType') {
            heap_set_bool_star(env_addr, val)
        } else if (isNumber(val)) {
            heap_set_int(env_addr, val)
        } else if (isBoolean(val)) {
            heap_set_bool(env_addr, val)
        } else {
            throw new Error('Variable type in heap not yet supported')
        }
    } else {
        throw new Error(`Type mismatch: ${type} ${val}`)
    }
}

const heap_lookup = (env_addr: number) => {
    const type = HEAP_TYPE[env_addr]
    if (type == TYPES['IntType'] || type == TYPES['IntStarType'] || type == TYPES['BoolStarType']) {
        return heap_get_int(env_addr)
    } else if (type == TYPES['BoolType']) {
        return heap_get_bool(env_addr)
    } else {
        throw new Error(`${type} lookup in heap not yet supported`)
    }
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
      const functionDefinitions: Array<Pair<string,string>> = scanProg(node)
      for (let i = 0; i < functionDefinitions.length; i++) {
          E[0][functionDefinitions[i][1]] = pair(functionDefinitions[i][0], undeclared)
      }
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

    IntStarType: function* (node: any, context: Context) {
        // Do Nothing
    },

    BoolStarType: function* (node: any, context: Context) {
        // Do Nothing
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

    PrintfStatement: function* (node: any, context: Context) {
        push(A, {type: 'Print_i'}, node.body)
    },

    DclStatement: function* (node: any, context: Context) {
        push(A, node.d)
    },

    DclAssignment: function* (node: any, context: Context) {
        push(A,{ type: 'Assignment', lv: { type: 'IdLvalue', id: node.d.id}, val: node.val}, node.d)
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
        // TODO: Implement parameter handling
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
        assign(node.id.text, unassigned, E)
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
                env: E
            }})
    },

    Closure: function* (node: any, context: Context) {
        push(S, node)
    },

    Block: function* (node: any, context: Context) {
        const locals: Array<Pair<string,string>> = scanBlock(node.stmnts)
        const unDeclaredList: Array<any> = locals.map(_ => undeclared)
        if (!(A.length === 0)) {
            push(A, {type: 'Environment_i', env: E})
        }
        push(A, node.stmnts)
        E = extendEnvironment(locals, unDeclaredList, E)
    },

    Dcl: function* (node: any, context: Context) {
        const addr = heap_allocate(node.t.type, type_sizes[node.t.type])
        assign(node.id.text, addr, E)
    },

    Predicate: function* (node: any, context: Context) {
        push(A, node.pred)
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
        const new_val = S.pop()
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
    },

    Branch_i: function* (node: any, context: Context) {
        if(S.pop()){
            push(A, node.cons)
        } else if(node.alt){
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
            push(A, { type: 'Environment_i', env: E }, { type: 'FnTypeCheck_i', funcName: func.funcName, funcType: func.funcType }, { type: 'Mark_i' })
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
            addresses[i] = heap_allocate(func.prms[i][0].type, type_sizes[func.prms[i][0].type])
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
        while(next.type != 'While_i'){
            if(next.type == 'Environment_i'){
                E = next.env
            }
            next = A.pop()
        }
    },

    Continue_i: function* (node: any, context: Context) {
        let next = A.pop()
        while(next.type != 'While_i'){
            if(next.type == 'Environment_i'){
                E = next.env
            }
            next = A.pop()
        }
        push(A, next, next.pred)
    },
}
// tslint:enable:object-literal-shorthand

// An environment is null or a pair whose head is a frame
// and whose tail is an environment.
const global_frame = {}
const global_environment = null
const step_limit = 1000000

export function* evaluate(node: es.Node, context: Context) {
    A = []
    A.push(node)
    S = []
    E = pair(global_frame, global_environment)

    initialize_machine(10000) // start program with 10000 bytes of memory

    let i = 0
    while (i < step_limit) {
        if (A.length === 0) {
            break
        }

        // Debugging
        console.log('PRINTING A')
        console.log(A)
        console.log('PRINTING S')
        console.log(S)
        console.log('PRINTING E')
        console.log(E)
        console.log('PRINTING HEAP')
        console.log(HEAP)
        console.log('------------------------------')

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
