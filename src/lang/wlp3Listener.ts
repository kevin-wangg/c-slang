// Generated from ./src/lang/wlp3.g4 by ANTLR 4.9.0-SNAPSHOT

import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener'

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
import { StringTypeContext } from './wlp3Parser'
import { IntStarTypeContext } from './wlp3Parser'
import { BoolStarTypeContext } from './wlp3Parser'
import { StringStarTypeContext } from './wlp3Parser'
import { ArgsListContext } from './wlp3Parser'
import { ArgsEmptyContext } from './wlp3Parser'
import { IdLvalueContext } from './wlp3Parser'
import { BracketLvalueContext } from './wlp3Parser'
import { DerefAddressContext } from './wlp3Parser'
import { SingleArgContext } from './wlp3Parser'
import { MultiArgsContext } from './wlp3Parser'
import { AssignmentContext } from './wlp3Parser'
import { IfStatementContext } from './wlp3Parser'
import { WhileStatementContext } from './wlp3Parser'
import { PrintfStatementContext } from './wlp3Parser'
import { DclStatementContext } from './wlp3Parser'
import { DclAssignmentContext } from './wlp3Parser'
import { ReturnStatementContext } from './wlp3Parser'
import { FreeStatementContext } from './wlp3Parser'
import { ExprStatementContext } from './wlp3Parser'
import { IntContext } from './wlp3Parser'
import { StringContext } from './wlp3Parser'
import { BoolContext } from './wlp3Parser'
import { ParenthesesContext } from './wlp3Parser'
import { UnopExprContext } from './wlp3Parser'
import { BinopExprContext } from './wlp3Parser'
import { BinlogExprContext } from './wlp3Parser'
import { IdExprContext } from './wlp3Parser'
import { FnExprContext } from './wlp3Parser'
import { MallocExprContext } from './wlp3Parser'
import { StarExprContext } from './wlp3Parser'
import { AmpersandExprContext } from './wlp3Parser'
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
 * This interface defines a complete listener for a parse tree produced by
 * `wlp3Parser`.
 */
export interface wlp3Listener extends ParseTreeListener {
    /**
     * Enter a parse tree produced by the `StatementList`
     * labeled alternative in `wlp3Parser.statementlist`.
     * @param ctx the parse tree
     */
    enterStatementList?: (ctx: StatementListContext) => void
    /**
     * Exit a parse tree produced by the `StatementList`
     * labeled alternative in `wlp3Parser.statementlist`.
     * @param ctx the parse tree
     */
    exitStatementList?: (ctx: StatementListContext) => void

    /**
     * Enter a parse tree produced by the `StatementEmpty`
     * labeled alternative in `wlp3Parser.statementlist`.
     * @param ctx the parse tree
     */
    enterStatementEmpty?: (ctx: StatementEmptyContext) => void
    /**
     * Exit a parse tree produced by the `StatementEmpty`
     * labeled alternative in `wlp3Parser.statementlist`.
     * @param ctx the parse tree
     */
    exitStatementEmpty?: (ctx: StatementEmptyContext) => void

    /**
     * Enter a parse tree produced by the `SingleParam`
     * labeled alternative in `wlp3Parser.paramlist`.
     * @param ctx the parse tree
     */
    enterSingleParam?: (ctx: SingleParamContext) => void
    /**
     * Exit a parse tree produced by the `SingleParam`
     * labeled alternative in `wlp3Parser.paramlist`.
     * @param ctx the parse tree
     */
    exitSingleParam?: (ctx: SingleParamContext) => void

    /**
     * Enter a parse tree produced by the `MultiParam`
     * labeled alternative in `wlp3Parser.paramlist`.
     * @param ctx the parse tree
     */
    enterMultiParam?: (ctx: MultiParamContext) => void
    /**
     * Exit a parse tree produced by the `MultiParam`
     * labeled alternative in `wlp3Parser.paramlist`.
     * @param ctx the parse tree
     */
    exitMultiParam?: (ctx: MultiParamContext) => void

    /**
     * Enter a parse tree produced by the `FunProg`
     * labeled alternative in `wlp3Parser.program`.
     * @param ctx the parse tree
     */
    enterFunProg?: (ctx: FunProgContext) => void
    /**
     * Exit a parse tree produced by the `FunProg`
     * labeled alternative in `wlp3Parser.program`.
     * @param ctx the parse tree
     */
    exitFunProg?: (ctx: FunProgContext) => void

    /**
     * Enter a parse tree produced by the `MainProg`
     * labeled alternative in `wlp3Parser.program`.
     * @param ctx the parse tree
     */
    enterMainProg?: (ctx: MainProgContext) => void
    /**
     * Exit a parse tree produced by the `MainProg`
     * labeled alternative in `wlp3Parser.program`.
     * @param ctx the parse tree
     */
    exitMainProg?: (ctx: MainProgContext) => void

    /**
     * Enter a parse tree produced by the `ParamsList`
     * labeled alternative in `wlp3Parser.params`.
     * @param ctx the parse tree
     */
    enterParamsList?: (ctx: ParamsListContext) => void
    /**
     * Exit a parse tree produced by the `ParamsList`
     * labeled alternative in `wlp3Parser.params`.
     * @param ctx the parse tree
     */
    exitParamsList?: (ctx: ParamsListContext) => void

    /**
     * Enter a parse tree produced by the `ParamsEmpty`
     * labeled alternative in `wlp3Parser.params`.
     * @param ctx the parse tree
     */
    enterParamsEmpty?: (ctx: ParamsEmptyContext) => void
    /**
     * Exit a parse tree produced by the `ParamsEmpty`
     * labeled alternative in `wlp3Parser.params`.
     * @param ctx the parse tree
     */
    exitParamsEmpty?: (ctx: ParamsEmptyContext) => void

    /**
     * Enter a parse tree produced by the `IntType`
     * labeled alternative in `wlp3Parser.type`.
     * @param ctx the parse tree
     */
    enterIntType?: (ctx: IntTypeContext) => void
    /**
     * Exit a parse tree produced by the `IntType`
     * labeled alternative in `wlp3Parser.type`.
     * @param ctx the parse tree
     */
    exitIntType?: (ctx: IntTypeContext) => void

    /**
     * Enter a parse tree produced by the `BoolType`
     * labeled alternative in `wlp3Parser.type`.
     * @param ctx the parse tree
     */
    enterBoolType?: (ctx: BoolTypeContext) => void
    /**
     * Exit a parse tree produced by the `BoolType`
     * labeled alternative in `wlp3Parser.type`.
     * @param ctx the parse tree
     */
    exitBoolType?: (ctx: BoolTypeContext) => void

    /**
     * Enter a parse tree produced by the `StringType`
     * labeled alternative in `wlp3Parser.type`.
     * @param ctx the parse tree
     */
    enterStringType?: (ctx: StringTypeContext) => void
    /**
     * Exit a parse tree produced by the `StringType`
     * labeled alternative in `wlp3Parser.type`.
     * @param ctx the parse tree
     */
    exitStringType?: (ctx: StringTypeContext) => void

    /**
     * Enter a parse tree produced by the `IntStarType`
     * labeled alternative in `wlp3Parser.type`.
     * @param ctx the parse tree
     */
    enterIntStarType?: (ctx: IntStarTypeContext) => void
    /**
     * Exit a parse tree produced by the `IntStarType`
     * labeled alternative in `wlp3Parser.type`.
     * @param ctx the parse tree
     */
    exitIntStarType?: (ctx: IntStarTypeContext) => void

    /**
     * Enter a parse tree produced by the `BoolStarType`
     * labeled alternative in `wlp3Parser.type`.
     * @param ctx the parse tree
     */
    enterBoolStarType?: (ctx: BoolStarTypeContext) => void
    /**
     * Exit a parse tree produced by the `BoolStarType`
     * labeled alternative in `wlp3Parser.type`.
     * @param ctx the parse tree
     */
    exitBoolStarType?: (ctx: BoolStarTypeContext) => void

    /**
     * Enter a parse tree produced by the `StringStarType`
     * labeled alternative in `wlp3Parser.type`.
     * @param ctx the parse tree
     */
    enterStringStarType?: (ctx: StringStarTypeContext) => void
    /**
     * Exit a parse tree produced by the `StringStarType`
     * labeled alternative in `wlp3Parser.type`.
     * @param ctx the parse tree
     */
    exitStringStarType?: (ctx: StringStarTypeContext) => void

    /**
     * Enter a parse tree produced by the `ArgsList`
     * labeled alternative in `wlp3Parser.args`.
     * @param ctx the parse tree
     */
    enterArgsList?: (ctx: ArgsListContext) => void
    /**
     * Exit a parse tree produced by the `ArgsList`
     * labeled alternative in `wlp3Parser.args`.
     * @param ctx the parse tree
     */
    exitArgsList?: (ctx: ArgsListContext) => void

    /**
     * Enter a parse tree produced by the `ArgsEmpty`
     * labeled alternative in `wlp3Parser.args`.
     * @param ctx the parse tree
     */
    enterArgsEmpty?: (ctx: ArgsEmptyContext) => void
    /**
     * Exit a parse tree produced by the `ArgsEmpty`
     * labeled alternative in `wlp3Parser.args`.
     * @param ctx the parse tree
     */
    exitArgsEmpty?: (ctx: ArgsEmptyContext) => void

    /**
     * Enter a parse tree produced by the `IdLvalue`
     * labeled alternative in `wlp3Parser.lvalue`.
     * @param ctx the parse tree
     */
    enterIdLvalue?: (ctx: IdLvalueContext) => void
    /**
     * Exit a parse tree produced by the `IdLvalue`
     * labeled alternative in `wlp3Parser.lvalue`.
     * @param ctx the parse tree
     */
    exitIdLvalue?: (ctx: IdLvalueContext) => void

    /**
     * Enter a parse tree produced by the `BracketLvalue`
     * labeled alternative in `wlp3Parser.lvalue`.
     * @param ctx the parse tree
     */
    enterBracketLvalue?: (ctx: BracketLvalueContext) => void
    /**
     * Exit a parse tree produced by the `BracketLvalue`
     * labeled alternative in `wlp3Parser.lvalue`.
     * @param ctx the parse tree
     */
    exitBracketLvalue?: (ctx: BracketLvalueContext) => void

    /**
     * Enter a parse tree produced by the `DerefAddress`
     * labeled alternative in `wlp3Parser.lvalue`.
     * @param ctx the parse tree
     */
    enterDerefAddress?: (ctx: DerefAddressContext) => void
    /**
     * Exit a parse tree produced by the `DerefAddress`
     * labeled alternative in `wlp3Parser.lvalue`.
     * @param ctx the parse tree
     */
    exitDerefAddress?: (ctx: DerefAddressContext) => void

    /**
     * Enter a parse tree produced by the `SingleArg`
     * labeled alternative in `wlp3Parser.arglist`.
     * @param ctx the parse tree
     */
    enterSingleArg?: (ctx: SingleArgContext) => void
    /**
     * Exit a parse tree produced by the `SingleArg`
     * labeled alternative in `wlp3Parser.arglist`.
     * @param ctx the parse tree
     */
    exitSingleArg?: (ctx: SingleArgContext) => void

    /**
     * Enter a parse tree produced by the `MultiArgs`
     * labeled alternative in `wlp3Parser.arglist`.
     * @param ctx the parse tree
     */
    enterMultiArgs?: (ctx: MultiArgsContext) => void
    /**
     * Exit a parse tree produced by the `MultiArgs`
     * labeled alternative in `wlp3Parser.arglist`.
     * @param ctx the parse tree
     */
    exitMultiArgs?: (ctx: MultiArgsContext) => void

    /**
     * Enter a parse tree produced by the `Assignment`
     * labeled alternative in `wlp3Parser.statement`.
     * @param ctx the parse tree
     */
    enterAssignment?: (ctx: AssignmentContext) => void
    /**
     * Exit a parse tree produced by the `Assignment`
     * labeled alternative in `wlp3Parser.statement`.
     * @param ctx the parse tree
     */
    exitAssignment?: (ctx: AssignmentContext) => void

    /**
     * Enter a parse tree produced by the `IfStatement`
     * labeled alternative in `wlp3Parser.statement`.
     * @param ctx the parse tree
     */
    enterIfStatement?: (ctx: IfStatementContext) => void
    /**
     * Exit a parse tree produced by the `IfStatement`
     * labeled alternative in `wlp3Parser.statement`.
     * @param ctx the parse tree
     */
    exitIfStatement?: (ctx: IfStatementContext) => void

    /**
     * Enter a parse tree produced by the `WhileStatement`
     * labeled alternative in `wlp3Parser.statement`.
     * @param ctx the parse tree
     */
    enterWhileStatement?: (ctx: WhileStatementContext) => void
    /**
     * Exit a parse tree produced by the `WhileStatement`
     * labeled alternative in `wlp3Parser.statement`.
     * @param ctx the parse tree
     */
    exitWhileStatement?: (ctx: WhileStatementContext) => void

    /**
     * Enter a parse tree produced by the `PrintfStatement`
     * labeled alternative in `wlp3Parser.statement`.
     * @param ctx the parse tree
     */
    enterPrintfStatement?: (ctx: PrintfStatementContext) => void
    /**
     * Exit a parse tree produced by the `PrintfStatement`
     * labeled alternative in `wlp3Parser.statement`.
     * @param ctx the parse tree
     */
    exitPrintfStatement?: (ctx: PrintfStatementContext) => void

    /**
     * Enter a parse tree produced by the `DclStatement`
     * labeled alternative in `wlp3Parser.statement`.
     * @param ctx the parse tree
     */
    enterDclStatement?: (ctx: DclStatementContext) => void
    /**
     * Exit a parse tree produced by the `DclStatement`
     * labeled alternative in `wlp3Parser.statement`.
     * @param ctx the parse tree
     */
    exitDclStatement?: (ctx: DclStatementContext) => void

    /**
     * Enter a parse tree produced by the `DclAssignment`
     * labeled alternative in `wlp3Parser.statement`.
     * @param ctx the parse tree
     */
    enterDclAssignment?: (ctx: DclAssignmentContext) => void
    /**
     * Exit a parse tree produced by the `DclAssignment`
     * labeled alternative in `wlp3Parser.statement`.
     * @param ctx the parse tree
     */
    exitDclAssignment?: (ctx: DclAssignmentContext) => void

    /**
     * Enter a parse tree produced by the `ReturnStatement`
     * labeled alternative in `wlp3Parser.statement`.
     * @param ctx the parse tree
     */
    enterReturnStatement?: (ctx: ReturnStatementContext) => void
    /**
     * Exit a parse tree produced by the `ReturnStatement`
     * labeled alternative in `wlp3Parser.statement`.
     * @param ctx the parse tree
     */
    exitReturnStatement?: (ctx: ReturnStatementContext) => void

    /**
     * Enter a parse tree produced by the `FreeStatement`
     * labeled alternative in `wlp3Parser.statement`.
     * @param ctx the parse tree
     */
    enterFreeStatement?: (ctx: FreeStatementContext) => void
    /**
     * Exit a parse tree produced by the `FreeStatement`
     * labeled alternative in `wlp3Parser.statement`.
     * @param ctx the parse tree
     */
    exitFreeStatement?: (ctx: FreeStatementContext) => void

    /**
     * Enter a parse tree produced by the `ExprStatement`
     * labeled alternative in `wlp3Parser.statement`.
     * @param ctx the parse tree
     */
    enterExprStatement?: (ctx: ExprStatementContext) => void
    /**
     * Exit a parse tree produced by the `ExprStatement`
     * labeled alternative in `wlp3Parser.statement`.
     * @param ctx the parse tree
     */
    exitExprStatement?: (ctx: ExprStatementContext) => void

    /**
     * Enter a parse tree produced by the `Int`
     * labeled alternative in `wlp3Parser.expr`.
     * @param ctx the parse tree
     */
    enterInt?: (ctx: IntContext) => void
    /**
     * Exit a parse tree produced by the `Int`
     * labeled alternative in `wlp3Parser.expr`.
     * @param ctx the parse tree
     */
    exitInt?: (ctx: IntContext) => void

    /**
     * Enter a parse tree produced by the `String`
     * labeled alternative in `wlp3Parser.expr`.
     * @param ctx the parse tree
     */
    enterString?: (ctx: StringContext) => void
    /**
     * Exit a parse tree produced by the `String`
     * labeled alternative in `wlp3Parser.expr`.
     * @param ctx the parse tree
     */
    exitString?: (ctx: StringContext) => void

    /**
     * Enter a parse tree produced by the `Bool`
     * labeled alternative in `wlp3Parser.expr`.
     * @param ctx the parse tree
     */
    enterBool?: (ctx: BoolContext) => void
    /**
     * Exit a parse tree produced by the `Bool`
     * labeled alternative in `wlp3Parser.expr`.
     * @param ctx the parse tree
     */
    exitBool?: (ctx: BoolContext) => void

    /**
     * Enter a parse tree produced by the `Parentheses`
     * labeled alternative in `wlp3Parser.expr`.
     * @param ctx the parse tree
     */
    enterParentheses?: (ctx: ParenthesesContext) => void
    /**
     * Exit a parse tree produced by the `Parentheses`
     * labeled alternative in `wlp3Parser.expr`.
     * @param ctx the parse tree
     */
    exitParentheses?: (ctx: ParenthesesContext) => void

    /**
     * Enter a parse tree produced by the `UnopExpr`
     * labeled alternative in `wlp3Parser.expr`.
     * @param ctx the parse tree
     */
    enterUnopExpr?: (ctx: UnopExprContext) => void
    /**
     * Exit a parse tree produced by the `UnopExpr`
     * labeled alternative in `wlp3Parser.expr`.
     * @param ctx the parse tree
     */
    exitUnopExpr?: (ctx: UnopExprContext) => void

    /**
     * Enter a parse tree produced by the `BinopExpr`
     * labeled alternative in `wlp3Parser.expr`.
     * @param ctx the parse tree
     */
    enterBinopExpr?: (ctx: BinopExprContext) => void
    /**
     * Exit a parse tree produced by the `BinopExpr`
     * labeled alternative in `wlp3Parser.expr`.
     * @param ctx the parse tree
     */
    exitBinopExpr?: (ctx: BinopExprContext) => void

    /**
     * Enter a parse tree produced by the `BinlogExpr`
     * labeled alternative in `wlp3Parser.expr`.
     * @param ctx the parse tree
     */
    enterBinlogExpr?: (ctx: BinlogExprContext) => void
    /**
     * Exit a parse tree produced by the `BinlogExpr`
     * labeled alternative in `wlp3Parser.expr`.
     * @param ctx the parse tree
     */
    exitBinlogExpr?: (ctx: BinlogExprContext) => void

    /**
     * Enter a parse tree produced by the `IdExpr`
     * labeled alternative in `wlp3Parser.expr`.
     * @param ctx the parse tree
     */
    enterIdExpr?: (ctx: IdExprContext) => void
    /**
     * Exit a parse tree produced by the `IdExpr`
     * labeled alternative in `wlp3Parser.expr`.
     * @param ctx the parse tree
     */
    exitIdExpr?: (ctx: IdExprContext) => void

    /**
     * Enter a parse tree produced by the `FnExpr`
     * labeled alternative in `wlp3Parser.expr`.
     * @param ctx the parse tree
     */
    enterFnExpr?: (ctx: FnExprContext) => void
    /**
     * Exit a parse tree produced by the `FnExpr`
     * labeled alternative in `wlp3Parser.expr`.
     * @param ctx the parse tree
     */
    exitFnExpr?: (ctx: FnExprContext) => void

    /**
     * Enter a parse tree produced by the `MallocExpr`
     * labeled alternative in `wlp3Parser.expr`.
     * @param ctx the parse tree
     */
    enterMallocExpr?: (ctx: MallocExprContext) => void
    /**
     * Exit a parse tree produced by the `MallocExpr`
     * labeled alternative in `wlp3Parser.expr`.
     * @param ctx the parse tree
     */
    exitMallocExpr?: (ctx: MallocExprContext) => void

    /**
     * Enter a parse tree produced by the `StarExpr`
     * labeled alternative in `wlp3Parser.expr`.
     * @param ctx the parse tree
     */
    enterStarExpr?: (ctx: StarExprContext) => void
    /**
     * Exit a parse tree produced by the `StarExpr`
     * labeled alternative in `wlp3Parser.expr`.
     * @param ctx the parse tree
     */
    exitStarExpr?: (ctx: StarExprContext) => void

    /**
     * Enter a parse tree produced by the `AmpersandExpr`
     * labeled alternative in `wlp3Parser.expr`.
     * @param ctx the parse tree
     */
    enterAmpersandExpr?: (ctx: AmpersandExprContext) => void
    /**
     * Exit a parse tree produced by the `AmpersandExpr`
     * labeled alternative in `wlp3Parser.expr`.
     * @param ctx the parse tree
     */
    exitAmpersandExpr?: (ctx: AmpersandExprContext) => void

    /**
     * Enter a parse tree produced by `wlp3Parser.program`.
     * @param ctx the parse tree
     */
    enterProgram?: (ctx: ProgramContext) => void
    /**
     * Exit a parse tree produced by `wlp3Parser.program`.
     * @param ctx the parse tree
     */
    exitProgram?: (ctx: ProgramContext) => void

    /**
     * Enter a parse tree produced by `wlp3Parser.main`.
     * @param ctx the parse tree
     */
    enterMain?: (ctx: MainContext) => void
    /**
     * Exit a parse tree produced by `wlp3Parser.main`.
     * @param ctx the parse tree
     */
    exitMain?: (ctx: MainContext) => void

    /**
     * Enter a parse tree produced by `wlp3Parser.function`.
     * @param ctx the parse tree
     */
    enterFunction?: (ctx: FunctionContext) => void
    /**
     * Exit a parse tree produced by `wlp3Parser.function`.
     * @param ctx the parse tree
     */
    exitFunction?: (ctx: FunctionContext) => void

    /**
     * Enter a parse tree produced by `wlp3Parser.block`.
     * @param ctx the parse tree
     */
    enterBlock?: (ctx: BlockContext) => void
    /**
     * Exit a parse tree produced by `wlp3Parser.block`.
     * @param ctx the parse tree
     */
    exitBlock?: (ctx: BlockContext) => void

    /**
     * Enter a parse tree produced by `wlp3Parser.statementlist`.
     * @param ctx the parse tree
     */
    enterStatementlist?: (ctx: StatementlistContext) => void
    /**
     * Exit a parse tree produced by `wlp3Parser.statementlist`.
     * @param ctx the parse tree
     */
    exitStatementlist?: (ctx: StatementlistContext) => void

    /**
     * Enter a parse tree produced by `wlp3Parser.params`.
     * @param ctx the parse tree
     */
    enterParams?: (ctx: ParamsContext) => void
    /**
     * Exit a parse tree produced by `wlp3Parser.params`.
     * @param ctx the parse tree
     */
    exitParams?: (ctx: ParamsContext) => void

    /**
     * Enter a parse tree produced by `wlp3Parser.paramlist`.
     * @param ctx the parse tree
     */
    enterParamlist?: (ctx: ParamlistContext) => void
    /**
     * Exit a parse tree produced by `wlp3Parser.paramlist`.
     * @param ctx the parse tree
     */
    exitParamlist?: (ctx: ParamlistContext) => void

    /**
     * Enter a parse tree produced by `wlp3Parser.dcl`.
     * @param ctx the parse tree
     */
    enterDcl?: (ctx: DclContext) => void
    /**
     * Exit a parse tree produced by `wlp3Parser.dcl`.
     * @param ctx the parse tree
     */
    exitDcl?: (ctx: DclContext) => void

    /**
     * Enter a parse tree produced by `wlp3Parser.type`.
     * @param ctx the parse tree
     */
    enterType?: (ctx: TypeContext) => void
    /**
     * Exit a parse tree produced by `wlp3Parser.type`.
     * @param ctx the parse tree
     */
    exitType?: (ctx: TypeContext) => void

    /**
     * Enter a parse tree produced by `wlp3Parser.expr`.
     * @param ctx the parse tree
     */
    enterExpr?: (ctx: ExprContext) => void
    /**
     * Exit a parse tree produced by `wlp3Parser.expr`.
     * @param ctx the parse tree
     */
    exitExpr?: (ctx: ExprContext) => void

    /**
     * Enter a parse tree produced by `wlp3Parser.statement`.
     * @param ctx the parse tree
     */
    enterStatement?: (ctx: StatementContext) => void
    /**
     * Exit a parse tree produced by `wlp3Parser.statement`.
     * @param ctx the parse tree
     */
    exitStatement?: (ctx: StatementContext) => void

    /**
     * Enter a parse tree produced by `wlp3Parser.args`.
     * @param ctx the parse tree
     */
    enterArgs?: (ctx: ArgsContext) => void
    /**
     * Exit a parse tree produced by `wlp3Parser.args`.
     * @param ctx the parse tree
     */
    exitArgs?: (ctx: ArgsContext) => void

    /**
     * Enter a parse tree produced by `wlp3Parser.arglist`.
     * @param ctx the parse tree
     */
    enterArglist?: (ctx: ArglistContext) => void
    /**
     * Exit a parse tree produced by `wlp3Parser.arglist`.
     * @param ctx the parse tree
     */
    exitArglist?: (ctx: ArglistContext) => void

    /**
     * Enter a parse tree produced by `wlp3Parser.binaryoperator`.
     * @param ctx the parse tree
     */
    enterBinaryoperator?: (ctx: BinaryoperatorContext) => void
    /**
     * Exit a parse tree produced by `wlp3Parser.binaryoperator`.
     * @param ctx the parse tree
     */
    exitBinaryoperator?: (ctx: BinaryoperatorContext) => void

    /**
     * Enter a parse tree produced by `wlp3Parser.binarylogical`.
     * @param ctx the parse tree
     */
    enterBinarylogical?: (ctx: BinarylogicalContext) => void
    /**
     * Exit a parse tree produced by `wlp3Parser.binarylogical`.
     * @param ctx the parse tree
     */
    exitBinarylogical?: (ctx: BinarylogicalContext) => void

    /**
     * Enter a parse tree produced by `wlp3Parser.unaryoperator`.
     * @param ctx the parse tree
     */
    enterUnaryoperator?: (ctx: UnaryoperatorContext) => void
    /**
     * Exit a parse tree produced by `wlp3Parser.unaryoperator`.
     * @param ctx the parse tree
     */
    exitUnaryoperator?: (ctx: UnaryoperatorContext) => void

    /**
     * Enter a parse tree produced by `wlp3Parser.predicate`.
     * @param ctx the parse tree
     */
    enterPredicate?: (ctx: PredicateContext) => void
    /**
     * Exit a parse tree produced by `wlp3Parser.predicate`.
     * @param ctx the parse tree
     */
    exitPredicate?: (ctx: PredicateContext) => void

    /**
     * Enter a parse tree produced by `wlp3Parser.lvalue`.
     * @param ctx the parse tree
     */
    enterLvalue?: (ctx: LvalueContext) => void
    /**
     * Exit a parse tree produced by `wlp3Parser.lvalue`.
     * @param ctx the parse tree
     */
    exitLvalue?: (ctx: LvalueContext) => void
}
