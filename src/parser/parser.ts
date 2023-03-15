/* tslint:disable:max-classes-per-file */
import { CharStreams, CommonTokenStream } from 'antlr4ts'
import { ErrorNode } from 'antlr4ts/tree/ErrorNode'
import { ParseTree } from 'antlr4ts/tree/ParseTree'
import { RuleNode } from 'antlr4ts/tree/RuleNode'
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'
import * as es from 'estree'
import { inspect } from 'util' // Debugging

import { CalcLexer } from '../lang/CalcLexer'
import { CalcParser } from '../lang/CalcParser'
import { wlp3Lexer } from '../lang/wlp3Lexer'
import {
    AmpersandExprContext,
    ArglistContext,
    ArgsContext,
    ArgsEmptyContext,
    ArgsListContext,
    AssignmentContext,
    BinarylogicalContext,
    BinaryoperatorContext,
    BinlogExprContext,
    BinopExprContext,
    BlockContext,
    BoolContext,
    BoolTypeContext,
    BracketLvalueContext,
    DclAssignmentContext,
    DclContext,
    DclStatementContext,
    ExprContext,
    ExprStatementContext,
    FnExprContext,
    FreeStatementContext,
    FunctionContext,
    FunProgContext,
    IdExprContext,
    IdLvalueContext,
    IfStatementContext,
    IntContext,
    IntStarTypeContext,
    IntTypeContext,
    LvalueContext,
    MainContext,
    MainProgContext,
    MallocExprContext,
    MultiArgsContext,
    MultiParamContext,
    ParamlistContext,
    ParamsContext,
    ParamsEmptyContext,
    ParamsListContext,
    ParenthesesContext,
    PredicateContext,
    PrintfStatementContext,
    ProgramContext,
    ReturnStatementContext,
    SingleArgContext,
    SingleParamContext,
    StarExprContext,
    StatementContext,
    StatementEmptyContext,
    StatementListContext,
    StatementlistContext,
    StringContext,
    StringTypeContext,
    TypeContext,
    UnaryoperatorContext,
    UnopExprContext,
    WhileStatementContext,
    wlp3Parser
} from '../lang/wlp3Parser'
import { wlp3Visitor } from '../lang/wlp3Visitor'
import { Context, ErrorSeverity, ErrorType, SourceError } from '../types'
import { stripIndent } from '../utils/formatters'

export class DisallowedConstructError implements SourceError {
    public type = ErrorType.SYNTAX
    public severity = ErrorSeverity.ERROR
    public nodeType: string

    constructor(public node: es.Node) {
        this.nodeType = this.formatNodeType(this.node.type)
    }

    get location() {
        return this.node.loc!
    }

    public explain() {
        return `${this.nodeType} are not allowed`
    }

    public elaborate() {
        return stripIndent`
      You are trying to use ${this.nodeType}, which is not allowed (yet).
    `
    }

    /**
     * Converts estree node.type into english
     * e.g. ThisExpression -> 'this' expressions
     *      Property -> Properties
     *      EmptyStatement -> Empty Statements
     */
    private formatNodeType(nodeType: string) {
        switch (nodeType) {
            case 'ThisExpression':
                return "'this' expressions"
            case 'Property':
                return 'Properties'
            default: {
                const words = nodeType.split(/(?=[A-Z])/)
                return words.map((word, i) => (i === 0 ? word : word.toLowerCase())).join(' ') + 's'
            }
        }
    }
}

export class FatalSyntaxError implements SourceError {
    public type = ErrorType.SYNTAX
    public severity = ErrorSeverity.ERROR
    public constructor(public location: es.SourceLocation, public message: string) {}

    public explain() {
        return this.message
    }

    public elaborate() {
        return 'There is a syntax error in your program'
    }
}

export class MissingSemicolonError implements SourceError {
    public type = ErrorType.SYNTAX
    public severity = ErrorSeverity.ERROR
    public constructor(public location: es.SourceLocation) {}

    public explain() {
        return 'Missing semicolon at the end of statement'
    }

    public elaborate() {
        return 'Every statement must be terminated by a semicolon.'
    }
}

export class TrailingCommaError implements SourceError {
    public type: ErrorType.SYNTAX
    public severity: ErrorSeverity.WARNING
    public constructor(public location: es.SourceLocation) {}

    public explain() {
        return 'Trailing comma'
    }

    public elaborate() {
        return 'Please remove the trailing comma'
    }
}

function contextToLocation(ctx: ProgramContext): es.SourceLocation {
    return {
        start: {
            line: ctx.start.line,
            column: ctx.start.charPositionInLine
        },
        end: {
            line: ctx.stop ? ctx.stop.line : ctx.start.line,
            column: ctx.stop ? ctx.stop.charPositionInLine : ctx.start.charPositionInLine
        }
    }
}

class ProgramGenerator implements wlp3Visitor<any> {
    visitStatementList(ctx: StatementListContext): any {
        return {
            type: 'StatementList',
            first: this.visit(ctx._first),
            rest: this.visit(ctx._rest)
        }
    }
    visitStatementEmpty(ctx: StatementEmptyContext): any {
        return {
            type: 'StatementEmpty'
        }
    }
    visitSingleParam(ctx: SingleParamContext): any {
        return {
            type: 'SingleParam',
            first: this.visit(ctx._first)
        }
    }
    visitMultiParam(ctx: MultiParamContext): any {
        return {
            type: 'MultiParam',
            first: this.visit(ctx._first),
            rest: this.visit(ctx._rest)
        }
    }
    visitFunProg(ctx: FunProgContext): any {
        return {
            type: 'FunProg',
            fun: this.visit(ctx._fun),
            prog: this.visit(ctx._prog)
        }
    }
    visitMainProg(ctx: MainProgContext): any {
        return {
            type: 'MainProg',
            mn: this.visit(ctx._mn)
        }
    }
    visitParamsList(ctx: ParamsListContext): any {
        return {
            type: 'ParamsList',
            list: this.visit(ctx._list)
        }
    }
    visitParamsEmpty(ctx: ParamsEmptyContext): any {
        return {
            type: 'ParamsEmpty'
        }
    }
    visitIntType(ctx: IntTypeContext): any {
        return {
            type: 'IntType'
        }
    }
    visitBoolType(ctx: BoolTypeContext): any {
        return {
            type: 'BoolType'
        }
    }
    visitStringType(ctx: StringTypeContext): any {
        return {
            type: 'StringType'
        }
    }
    visitIntStarType(ctx: IntStarTypeContext): any {
        return {
            type: 'IntStarTypeContext'
        }
    }
    visitArgsList(ctx: ArgsListContext): any {
        return {
            type: 'ArgsList',
            list: this.visit(ctx._list)
        }
    }
    visitArgsEmpty(ctx: ArgsEmptyContext): any {
        return {
            type: 'ArgsEmpty'
        }
    }
    visitIdLvalue(ctx: IdLvalueContext): any {
        return {
            type: 'IdLvalue',
            id: ctx.ID()
        }
    }
    visitBracketLvalue(ctx: BracketLvalueContext): any {
        return {
            type: 'BracketLvalue',
            lv: this.visit(ctx._lv)
        }
    }
    visitSingleArg(ctx: SingleArgContext): any {
        return {
            type: 'SingleArg',
            first: this.visit(ctx._first)
        }
    }
    visitMultiArgs(ctx: MultiArgsContext): any {
        return {
            type: 'MultiArgs',
            first: this.visit(ctx._first),
            rest: this.visit(ctx._rest)
        }
    }
    visitAssignment(ctx: AssignmentContext): any {
        return {
            type: 'Assignment',
            lv: this.visit(ctx._lv),
            val: this.visit(ctx._val)
        }
    }
    visitIfStatement(ctx: IfStatementContext): any {
        return {
            type: 'IfStatement',
            pred: this.visit(ctx._pred),
            cons: this.visit(ctx._cons),
            alt: this.visit(ctx._alt)
        }
    }
    visitWhileStatement(ctx: WhileStatementContext): any {
        return {
            type: 'WhileStatement',
            pred: this.visit(ctx._pred),
            body: this.visit(ctx._body)
        }
    }
    visitPrintfStatement(ctx: PrintfStatementContext): any {
        return {
            type: 'PrintfStatement',
            body: this.visit(ctx._body)
        }
    }
    visitDclStatement(ctx: DclStatementContext): any {
        return {
            type: 'DclStatement',
            d: this.visit(ctx._d)
        }
    }
    visitDclAssignment(ctx: DclAssignmentContext): any {
        return {
            type: 'DclAssignment',
            d: this.visit(ctx._d),
            val: this.visit(ctx._val)
        }
    }
    visitReturnStatement(ctx: ReturnStatementContext): any {
        return {
            type: 'ReturnStatement',
            val: this.visit(ctx._val)
        }
    }
    visitFreeStatement(ctx: FreeStatementContext): any {
        return {
            type: 'FreeStatement',
            val: this.visit(ctx._val)
        }
    }
    visitExprStatement(ctx: ExprStatementContext): any {
        return {
            type: 'ExprStatement',
            val: this.visit(ctx._val)
        }
    }

    visitParentheses(ctx: ParenthesesContext): any {
        return {
            type: 'Parentheses',
            val: this.visit(ctx._inner)
        }
    }
    visitInt(ctx: IntContext): any {
        return {
            type: 'IntLiteral',
            val: parseInt(ctx.text)
        }
    }
    visitString(ctx: StringContext): any {
        return {
            type: 'StringLiteral',
            val: ctx.text
        }
    }
    visitBool(ctx: BoolContext): any {
        return {
            type: 'BoolLiteral',
            val: ctx.text === 'true'
        }
    }
    visitUnopExpr(ctx: UnopExprContext): any {
        return {
            type: 'UnopExpr',
            unop: ctx._unop,
            first: this.visit(ctx._first)
        }
    }
    visitBinopExpr(ctx: BinopExprContext): any {
        return {
            type: 'BinopExpr',
            binop: ctx._binop,
            first: this.visit(ctx._first),
            second: this.visit(ctx._second)
        }
    }
    visitBinlogExpr(ctx: BinlogExprContext): any {
        return {
            type: 'BinlogExpr',
            binlog: ctx._binlog,
            first: this.visit(ctx._first),
            second: this.visit(ctx._second)
        }
    }
    visitIdExpr(ctx: IdExprContext): any {
        return {
            type: 'IdExpr',
            id: ctx.ID()
        }
    }
    visitFnExpr(ctx: FnExprContext): any {
        return {
            type: 'FnExpr',
            id: ctx.ID(),
            arglst: this.visit(ctx._arglst)
        }
    }
    visitMallocExpr(ctx: MallocExprContext): any {
        return {
            type: 'MallocExpr',
            first: this.visit(ctx._first)
        }
    }
    visitStarExpr(ctx: StarExprContext): any {
        return {
            type: 'StarExpr',
            first: this.visit(ctx._first)
        }
    }
    visitAmpersandExpr(ctx: AmpersandExprContext): any {
        return {
            type: 'AmpersandExpr',
            first: this.visit(ctx._first)
        }
    }
    visitProgram(ctx: ProgramContext): any {
        return {
            type: ''
        }
    }
    visitMain(ctx: MainContext): any {
        return {
            type: 'Main',
            blk: this.visit(ctx._blk)
        }
    }
    visitFunction(ctx: FunctionContext): any {
        return {
            type: 'Function',
            t: this.visit(ctx._t),
            id: ctx.ID(),
            prms: this.visit(ctx._prms),
            blk: this.visit(ctx._blk)
        }
    }
    visitBlock(ctx: BlockContext): any {
        return {
            type: 'Block',
            stmnts: this.visit(ctx._stmnts)
        }
    }

    visitStatementlist?: (ctx: StatementlistContext) => any
    visitParams?: (ctx: ParamsContext) => any
    visitParamlist?: (ctx: ParamlistContext) => any
    visitDcl(ctx: DclContext): any {
        return {
            type: 'Dcl',
            t: this.visit(ctx._t),
            id: ctx.ID()
        }
    }
    visitType?: (ctx: TypeContext) => any
    visitExpr?: (ctx: ExprContext) => any
    visitStatement?: (ctx: StatementContext) => any
    visitArgs?: (ctx: ArgsContext) => any
    visitArglist?: (ctx: ArglistContext) => any
    visitBinaryoperator?: (ctx: BinaryoperatorContext) => any
    visitBinarylogical?: (ctx: BinarylogicalContext) => any
    visitUnaryoperator?: (ctx: UnaryoperatorContext) => any
    visitPredicate(ctx: PredicateContext): any {
        return {
            type: 'Predicate',
            pred: this.visit(ctx._pred)
        }
    }
    visitLvalue?: (ctx: LvalueContext) => any

    visit(tree: ParseTree): any {
        return tree.accept(this)
    }

    // idk what to do with this
    visitChildren(node: RuleNode): any {
        const expressions: es.Expression[] = []
        for (let i = 0; i < node.childCount; i++) {
            expressions.push(node.getChild(i).accept(this))
        }
        return {
            type: 'SequenceExpression',
            expressions
        }
    }
    visitTerminal(node: TerminalNode): any {
        return node.accept(this)
    }

    visitErrorNode(node: ErrorNode): any {
        throw new FatalSyntaxError(
            {
                start: {
                    line: node.symbol.line,
                    column: node.symbol.charPositionInLine
                },
                end: {
                    line: node.symbol.line,
                    column: node.symbol.charPositionInLine + 1
                }
            },
            `invalid syntax ${node.text}`
        )
    }
}

// function convertExpression(expression: ExpressionContext): es.Expression {
//   const generator = new ExpressionGenerator()
//   return expression.accept(generator)
// }

function convertSource(program: ProgramContext): any {
    const generator = new ProgramGenerator()
    return program.accept(generator)
    // return {
    //   type: 'Program',
    //   body: [
    //     {
    //       type: 'ExpressionStatement',
    //       expression: convertExpression(expression)
    //     }
    //   ]
    // }
}

export function parse(source: string, context: Context) {
    let program: any

    if (context.variant === 'calc') {
        const inputStream = CharStreams.fromString(source)
        const lexer = new wlp3Lexer(inputStream)
        const tokenStream = new CommonTokenStream(lexer)
        const parser = new wlp3Parser(tokenStream)
        parser.buildParseTree = true
        try {
            const tree = parser.program()
            program = convertSource(tree)
        } catch (error) {
            if (error instanceof FatalSyntaxError) {
                context.errors.push(error)
            } else {
                throw error
            }
        }
        const hasErrors = context.errors.find(m => m.severity === ErrorSeverity.ERROR)
        if (program && !hasErrors) {
            console.log('wowowoer')
            console.log(program)
            return program
        } else {
            return undefined
        }
    } else {
        return undefined
    }
}
