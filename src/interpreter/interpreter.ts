/* tslint:disable:max-classes-per-file */
import * as es from 'estree'
import { isBoolean, isInteger, isString, isUndefined } from 'lodash'

import { RuntimeSourceError } from '../errors/runtimeSourceError'
import { Pair, pair } from '../stdlib/list'
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

const push = (array: Array<any>, ...items: any): Array<any> => {
    array.splice(array.length, 0, ...items)
    return array
}

const peek = (array: Array<any>): any => array.slice(-1)[0]

const isTypeMatch = (lval: string, val: any, type: string): boolean => {
    if (type == 'StringType' && isString(val)) {
        return true
    } else if (type == 'BoolType' && isBoolean(val)) {
        return true
    } else if (type == 'IntType' && isInteger(val)) {
        return true
    }
    return false
}

const assign = (lval: string, val: any, env: Pair<any, any>): void => {
    if (env == null) throw new Error('unbound name: ' + lval)
    if (env[0].hasOwnProperty(lval)) {
        const type = env[0][lval][0]
        if (isTypeMatch(lval, val, type)) {
            env[0][lval][1] = val
        } else {
            throw new Error('Type mismatch: ' + lval + ' is a ' + type)
        }
    } else {
        assign(lval, val, env[1])
    }
}

const scan = (stmts: any): Array<Pair<string, string>> => {
    const locals = []
    while (stmts.type != 'StatementEmpty') {
        const firstStatement = stmts.first
        if (firstStatement.type == 'DclStatement' || firstStatement.type == 'DclAssignment') {
            locals.push(pair(firstStatement.d.id.text, firstStatement.d.t.type))
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
        const v = env[0][lval][1]
        if (isUnassigned(v)) throw new Error('Unassigned name for ' + lval)
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
        new_frame[lvals[i][0]] = pair(lvals[i][1], vals[i])
    }

    return pair(new_frame, E)
}

const unassigned = { type: 'Unassigned' }
const isUnassigned = (v: any): boolean => {
    return (
        v !== null && typeof v === 'object' && v.hasOwnProperty('type') && v.type === 'Unassigned'
    )
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
        throw new Error(`not supported yet: ${node.type}`)
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

    ArgsList: function* (node: any, context: Context) {
        throw new Error(`not supported yet: ${node.type}`)
    },

    ArgsEmpty: function* (node: any, context: Context) {
        throw new Error(`not supported yet: ${node.type}`)
    },

    IdLvalue: function* (node: any, context: Context) {
        throw new Error(`not supported yet: ${node.type}`)
    },

    BracketLvalue: function* (node: any, context: Context) {
        throw new Error(`not supported yet: ${node.type}`)
    },

    SingleArg: function* (node: any, context: Context) {
        throw new Error(`not supported yet: ${node.type}`)
    },

    MultiArgs: function* (node: any, context: Context) {
        throw new Error(`not supported yet: ${node.type}`)
    },

    Assignment: function* (node: any, context: Context) {
        push(A, {type:'Assignment_i', sym: node.lv}, node.val)
    },

    IfStatement: function* (node: any, context: Context) {
        push(A, {type: 'Branch_i', cons: node.cons, alt: node.alt}, node.pred)
    },

    WhileStatement: function* (node: any, context: Context) {
        push(A, {type: 'While_i', pred: node.pred, body: node.body}, node.pred)
    },

    PrintfStatement: function* (node: any, context: Context) {
        throw new Error(`not supported yet: ${node.type}`)
    },

    DclStatement: function* (node: any, context: Context) {
        throw new Error(`not supported yet: ${node.type}`)
    },

    DclAssignment: function* (node: any, context: Context) {
        push(A, {type: 'Assignment', lv: { type: 'IdLvalue', id: node.d.id}, val: node.val})
    },

    ReturnStatement: function* (node: any, context: Context) {
        // TODO: Implement properly with functions
        push(A, node.val)
    },

    FreeStatement: function* (node: any, context: Context) {
        throw new Error(`not supported yet: ${node.type}`)
    },

    ExprStatement: function* (node: any, context: Context) {
        push(A, { type: 'Pop_i' }, node.val)
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
        push(A, {type: "BinopExpr_i", sym: node.binop}, node.second, node.first)
    },

    BinlogExpr: function* (node: any, context: Context) {
        push(A, {type: "BinlogExpr_i", sym: node.binlog}, node.second, node.first)
    },

    IdExpr: function* (node: any, context: Context) {
        push(S, lookup(node.id.text, E))
    },

    FnExpr: function* (node: any, context: Context) {
        throw new Error(`not supported yet: ${node.type}`)
    },

    MallocExpr: function* (node: any, context: Context) {
        throw new Error(`not supported yet: ${node.type}`)
    },

    StarExpr: function* (node: any, context: Context) {
        throw new Error(`not supported yet: ${node.type}`)
    },

    AmpersandExpr: function* (node: any, context: Context) {
        throw new Error(`not supported yet: ${node.type}`)
    },

    Program: function* (node: any, context: Context) {
        throw new Error(`not supported yet: ${node.type}`)
    },

    Main: function* (node: any, context: Context) {
        throw new Error(`not supported yet: ${node.type}`)
    },

    Function: function* (node: any, context: Context) {
        throw new Error(`not supported yet: ${node.type}`)
    },

    Block: function* (node: any, context: Context) {
        const locals: Array<Pair<string,string>> = scan(node.stmnts)
        const unassignedList: Array<any> = locals.map(_ => unassigned)
        if (!(A.length === 0)) {
            push(A, {type: 'Environment_i', env: E})
        }
        push(A, node.stmnts)
        E = extendEnvironment(locals, unassignedList, E)
    },

    Dcl: function* (node: any, context: Context) {
        throw new Error(`not supported yet: ${node.type}`)
    },

    Predicate: function* (node: any, context: Context) {
        push(A, node.pred)
    },

    // Instructions
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
        assign(node.sym.id.text, S.pop(), E)
    },

    Environment_i: function* (node: any, context: Context) {
        E = node.env
    },

    Branch_i: function* (node: any, context: Context) {
        push(A, S.pop() ? node.cons: node.alt)
    },

    Pop_i: function* (node: any, context: Context) {
        S.pop()
    },

    While_i: function* (node: any, context: Context) {
        if(S.pop()){
            push(A, node, node.pred, node.body)
        }
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
