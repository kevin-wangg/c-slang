// Generated from ./src/lang/wlp3.g4 by ANTLR 4.9.0-SNAPSHOT

import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor'

import { StatementListContext } from './wlp3Parser'
import { StatementEmptyContext } from './wlp3Parser'
import { SingleParamContext } from './wlp3Parser'
import { MultiParamContext } from './wlp3Parser'
import { FunProgContext } from './wlp3Parser'
import { MainProgContext } from './wlp3Parser'
import { ParamsListContext } from './wlp3Parser'
import { ParamsEmptyContext } from './wlp3Parser'
import { IntTypeContext } from './wlp3Parser'
import { BoolTypeContext } from './wlp3Parser'
import { IntStarTypeContext } from './wlp3Parser'
import { BoolStarTypeContext } from './wlp3Parser'
import { ArgsListContext } from './wlp3Parser'
import { ArgsEmptyContext } from './wlp3Parser'
import { IdLvalueContext } from './wlp3Parser'
import { BracketLvalueContext } from './wlp3Parser'
import { DerefAddressContext } from './wlp3Parser'
import { SingleArgContext } from './wlp3Parser'
import { MultiArgsContext } from './wlp3Parser'
import { AssignmentContext } from './wlp3Parser'
import { IfStatementContext } from './wlp3Parser'
import { IfElseStatementContext } from './wlp3Parser'
import { WhileStatementContext } from './wlp3Parser'
import { PrintfStatementContext } from './wlp3Parser'
import { DclStatementContext } from './wlp3Parser'
import { DclAssignmentContext } from './wlp3Parser'
import { ReturnStatementContext } from './wlp3Parser'
import { FreeStatementContext } from './wlp3Parser'
import { ExprStatementContext } from './wlp3Parser'
import { BreakStatementContext } from './wlp3Parser'
import { ContinueStatementContext } from './wlp3Parser'
import { IntContext } from './wlp3Parser'
import { BoolContext } from './wlp3Parser'
import { ParenthesesContext } from './wlp3Parser'
import { StarExprContext } from './wlp3Parser'
import { AmpersandExprContext } from './wlp3Parser'
import { UnopExprContext } from './wlp3Parser'
import { IdExprContext } from './wlp3Parser'
import { FnExprContext } from './wlp3Parser'
import { MallocExprContext } from './wlp3Parser'
import { BinopExprContext } from './wlp3Parser'
import { BinlogExprContext } from './wlp3Parser'
import { ProgramContext } from './wlp3Parser'
import { MainContext } from './wlp3Parser'
import { FunctionContext } from './wlp3Parser'
import { BlockContext } from './wlp3Parser'
import { StatementlistContext } from './wlp3Parser'
import { ParamsContext } from './wlp3Parser'
import { ParamlistContext } from './wlp3Parser'
import { DclContext } from './wlp3Parser'
import { TypeContext } from './wlp3Parser'
import { ExprContext } from './wlp3Parser'
import { StatementContext } from './wlp3Parser'
import { ArgsContext } from './wlp3Parser'
import { ArglistContext } from './wlp3Parser'
import { BinaryoperatorContext } from './wlp3Parser'
import { BinarylogicalContext } from './wlp3Parser'
import { UnaryoperatorContext } from './wlp3Parser'
import { PredicateContext } from './wlp3Parser'
import { LvalueContext } from './wlp3Parser'

/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `wlp3Parser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface wlp3Visitor<Result> extends ParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by the `StatementList`
     * labeled alternative in `wlp3Parser.statementlist`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStatementList?: (ctx: StatementListContext) => Result

    /**
     * Visit a parse tree produced by the `StatementEmpty`
     * labeled alternative in `wlp3Parser.statementlist`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStatementEmpty?: (ctx: StatementEmptyContext) => Result

    /**
     * Visit a parse tree produced by the `SingleParam`
     * labeled alternative in `wlp3Parser.paramlist`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSingleParam?: (ctx: SingleParamContext) => Result

    /**
     * Visit a parse tree produced by the `MultiParam`
     * labeled alternative in `wlp3Parser.paramlist`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMultiParam?: (ctx: MultiParamContext) => Result

    /**
     * Visit a parse tree produced by the `FunProg`
     * labeled alternative in `wlp3Parser.program`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunProg?: (ctx: FunProgContext) => Result

    /**
     * Visit a parse tree produced by the `MainProg`
     * labeled alternative in `wlp3Parser.program`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMainProg?: (ctx: MainProgContext) => Result

    /**
     * Visit a parse tree produced by the `ParamsList`
     * labeled alternative in `wlp3Parser.params`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParamsList?: (ctx: ParamsListContext) => Result

    /**
     * Visit a parse tree produced by the `ParamsEmpty`
     * labeled alternative in `wlp3Parser.params`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParamsEmpty?: (ctx: ParamsEmptyContext) => Result

    /**
     * Visit a parse tree produced by the `IntType`
     * labeled alternative in `wlp3Parser.type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIntType?: (ctx: IntTypeContext) => Result

    /**
     * Visit a parse tree produced by the `BoolType`
     * labeled alternative in `wlp3Parser.type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBoolType?: (ctx: BoolTypeContext) => Result

    /**
     * Visit a parse tree produced by the `IntStarType`
     * labeled alternative in `wlp3Parser.type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIntStarType?: (ctx: IntStarTypeContext) => Result

    /**
     * Visit a parse tree produced by the `BoolStarType`
     * labeled alternative in `wlp3Parser.type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBoolStarType?: (ctx: BoolStarTypeContext) => Result

    /**
     * Visit a parse tree produced by the `ArgsList`
     * labeled alternative in `wlp3Parser.args`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArgsList?: (ctx: ArgsListContext) => Result

    /**
     * Visit a parse tree produced by the `ArgsEmpty`
     * labeled alternative in `wlp3Parser.args`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArgsEmpty?: (ctx: ArgsEmptyContext) => Result

    /**
     * Visit a parse tree produced by the `IdLvalue`
     * labeled alternative in `wlp3Parser.lvalue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdLvalue?: (ctx: IdLvalueContext) => Result

    /**
     * Visit a parse tree produced by the `BracketLvalue`
     * labeled alternative in `wlp3Parser.lvalue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBracketLvalue?: (ctx: BracketLvalueContext) => Result

    /**
     * Visit a parse tree produced by the `DerefAddress`
     * labeled alternative in `wlp3Parser.lvalue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDerefAddress?: (ctx: DerefAddressContext) => Result

    /**
     * Visit a parse tree produced by the `SingleArg`
     * labeled alternative in `wlp3Parser.arglist`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSingleArg?: (ctx: SingleArgContext) => Result

    /**
     * Visit a parse tree produced by the `MultiArgs`
     * labeled alternative in `wlp3Parser.arglist`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMultiArgs?: (ctx: MultiArgsContext) => Result

    /**
     * Visit a parse tree produced by the `Assignment`
     * labeled alternative in `wlp3Parser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAssignment?: (ctx: AssignmentContext) => Result

    /**
     * Visit a parse tree produced by the `IfStatement`
     * labeled alternative in `wlp3Parser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIfStatement?: (ctx: IfStatementContext) => Result

    /**
     * Visit a parse tree produced by the `IfElseStatement`
     * labeled alternative in `wlp3Parser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIfElseStatement?: (ctx: IfElseStatementContext) => Result

    /**
     * Visit a parse tree produced by the `WhileStatement`
     * labeled alternative in `wlp3Parser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWhileStatement?: (ctx: WhileStatementContext) => Result

    /**
     * Visit a parse tree produced by the `PrintfStatement`
     * labeled alternative in `wlp3Parser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrintfStatement?: (ctx: PrintfStatementContext) => Result

    /**
     * Visit a parse tree produced by the `DclStatement`
     * labeled alternative in `wlp3Parser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDclStatement?: (ctx: DclStatementContext) => Result

    /**
     * Visit a parse tree produced by the `DclAssignment`
     * labeled alternative in `wlp3Parser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDclAssignment?: (ctx: DclAssignmentContext) => Result

    /**
     * Visit a parse tree produced by the `ReturnStatement`
     * labeled alternative in `wlp3Parser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReturnStatement?: (ctx: ReturnStatementContext) => Result

    /**
     * Visit a parse tree produced by the `FreeStatement`
     * labeled alternative in `wlp3Parser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFreeStatement?: (ctx: FreeStatementContext) => Result

    /**
     * Visit a parse tree produced by the `ExprStatement`
     * labeled alternative in `wlp3Parser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExprStatement?: (ctx: ExprStatementContext) => Result

    /**
     * Visit a parse tree produced by the `BreakStatement`
     * labeled alternative in `wlp3Parser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBreakStatement?: (ctx: BreakStatementContext) => Result

    /**
     * Visit a parse tree produced by the `ContinueStatement`
     * labeled alternative in `wlp3Parser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitContinueStatement?: (ctx: ContinueStatementContext) => Result

    /**
     * Visit a parse tree produced by the `Int`
     * labeled alternative in `wlp3Parser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInt?: (ctx: IntContext) => Result

    /**
     * Visit a parse tree produced by the `Bool`
     * labeled alternative in `wlp3Parser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBool?: (ctx: BoolContext) => Result

    /**
     * Visit a parse tree produced by the `Parentheses`
     * labeled alternative in `wlp3Parser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParentheses?: (ctx: ParenthesesContext) => Result

    /**
     * Visit a parse tree produced by the `StarExpr`
     * labeled alternative in `wlp3Parser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStarExpr?: (ctx: StarExprContext) => Result

    /**
     * Visit a parse tree produced by the `AmpersandExpr`
     * labeled alternative in `wlp3Parser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAmpersandExpr?: (ctx: AmpersandExprContext) => Result

    /**
     * Visit a parse tree produced by the `UnopExpr`
     * labeled alternative in `wlp3Parser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnopExpr?: (ctx: UnopExprContext) => Result

    /**
     * Visit a parse tree produced by the `IdExpr`
     * labeled alternative in `wlp3Parser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdExpr?: (ctx: IdExprContext) => Result

    /**
     * Visit a parse tree produced by the `FnExpr`
     * labeled alternative in `wlp3Parser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFnExpr?: (ctx: FnExprContext) => Result

    /**
     * Visit a parse tree produced by the `MallocExpr`
     * labeled alternative in `wlp3Parser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMallocExpr?: (ctx: MallocExprContext) => Result

    /**
     * Visit a parse tree produced by the `BinopExpr`
     * labeled alternative in `wlp3Parser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBinopExpr?: (ctx: BinopExprContext) => Result

    /**
     * Visit a parse tree produced by the `BinlogExpr`
     * labeled alternative in `wlp3Parser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBinlogExpr?: (ctx: BinlogExprContext) => Result

    /**
     * Visit a parse tree produced by `wlp3Parser.program`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProgram?: (ctx: ProgramContext) => Result

    /**
     * Visit a parse tree produced by `wlp3Parser.main`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMain?: (ctx: MainContext) => Result

    /**
     * Visit a parse tree produced by `wlp3Parser.function`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunction?: (ctx: FunctionContext) => Result

    /**
     * Visit a parse tree produced by `wlp3Parser.block`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBlock?: (ctx: BlockContext) => Result

    /**
     * Visit a parse tree produced by `wlp3Parser.statementlist`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStatementlist?: (ctx: StatementlistContext) => Result

    /**
     * Visit a parse tree produced by `wlp3Parser.params`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParams?: (ctx: ParamsContext) => Result

    /**
     * Visit a parse tree produced by `wlp3Parser.paramlist`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParamlist?: (ctx: ParamlistContext) => Result

    /**
     * Visit a parse tree produced by `wlp3Parser.dcl`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDcl?: (ctx: DclContext) => Result

    /**
     * Visit a parse tree produced by `wlp3Parser.type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitType?: (ctx: TypeContext) => Result

    /**
     * Visit a parse tree produced by `wlp3Parser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpr?: (ctx: ExprContext) => Result

    /**
     * Visit a parse tree produced by `wlp3Parser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStatement?: (ctx: StatementContext) => Result

    /**
     * Visit a parse tree produced by `wlp3Parser.args`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArgs?: (ctx: ArgsContext) => Result

    /**
     * Visit a parse tree produced by `wlp3Parser.arglist`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArglist?: (ctx: ArglistContext) => Result

    /**
     * Visit a parse tree produced by `wlp3Parser.binaryoperator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBinaryoperator?: (ctx: BinaryoperatorContext) => Result

    /**
     * Visit a parse tree produced by `wlp3Parser.binarylogical`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBinarylogical?: (ctx: BinarylogicalContext) => Result

    /**
     * Visit a parse tree produced by `wlp3Parser.unaryoperator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnaryoperator?: (ctx: UnaryoperatorContext) => Result

    /**
     * Visit a parse tree produced by `wlp3Parser.predicate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPredicate?: (ctx: PredicateContext) => Result

    /**
     * Visit a parse tree produced by `wlp3Parser.lvalue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLvalue?: (ctx: LvalueContext) => Result
}
