// Generated from ./src/lang/wlp3.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { wlp3Listener } from "./wlp3Listener";
import { wlp3Visitor } from "./wlp3Visitor";


export class wlp3Parser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly T__30 = 31;
	public static readonly T__31 = 32;
	public static readonly T__32 = 33;
	public static readonly T__33 = 34;
	public static readonly T__34 = 35;
	public static readonly T__35 = 36;
	public static readonly T__36 = 37;
	public static readonly T__37 = 38;
	public static readonly T__38 = 39;
	public static readonly T__39 = 40;
	public static readonly T__40 = 41;
	public static readonly WS = 42;
	public static readonly INT = 43;
	public static readonly BOOL = 44;
	public static readonly CHAR = 45;
	public static readonly ID = 46;
	public static readonly LineComment = 47;
	public static readonly RULE_program = 0;
	public static readonly RULE_main = 1;
	public static readonly RULE_function = 2;
	public static readonly RULE_block = 3;
	public static readonly RULE_statementlist = 4;
	public static readonly RULE_params = 5;
	public static readonly RULE_paramlist = 6;
	public static readonly RULE_dcl = 7;
	public static readonly RULE_type = 8;
	public static readonly RULE_expr = 9;
	public static readonly RULE_statement = 10;
	public static readonly RULE_args = 11;
	public static readonly RULE_arglist = 12;
	public static readonly RULE_arrinit = 13;
	public static readonly RULE_arrinitelems = 14;
	public static readonly RULE_binaryoperator = 15;
	public static readonly RULE_binarylogical = 16;
	public static readonly RULE_unaryoperator = 17;
	public static readonly RULE_predicate = 18;
	public static readonly RULE_lvalue = 19;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "main", "function", "block", "statementlist", "params", "paramlist", 
		"dcl", "type", "expr", "statement", "args", "arglist", "arrinit", "arrinitelems", 
		"binaryoperator", "binarylogical", "unaryoperator", "predicate", "lvalue",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "';'", "'='", "'int'", "'main'", "'('", "')'", "'{'", "'}'", 
		"','", "'bool'", "'char'", "'int*'", "'bool*'", "'char*'", "'malloc'", 
		"'['", "']'", "'*'", "'&'", "'if'", "'else'", "'while'", "'for'", "'printf'", 
		"'return'", "'free'", "'break'", "'continue'", "'+'", "'-'", "'/'", "'%'", 
		"'=='", "'>'", "'<'", "'<='", "'>='", "'!='", "'&&'", "'||'", "'!'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		"WS", "INT", "BOOL", "CHAR", "ID", "LineComment",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(wlp3Parser._LITERAL_NAMES, wlp3Parser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return wlp3Parser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "wlp3.g4"; }

	// @Override
	public get ruleNames(): string[] { return wlp3Parser.ruleNames; }

	// @Override
	public get serializedATN(): string { return wlp3Parser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(wlp3Parser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, wlp3Parser.RULE_program);
		try {
			this.state = 54;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
			case 1:
				_localctx = new GlobVarDclContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 40;
				(_localctx as GlobVarDclContext)._glob = this.dcl();
				this.state = 41;
				this.match(wlp3Parser.T__0);
				this.state = 42;
				(_localctx as GlobVarDclContext)._prog = this.program();
				}
				break;

			case 2:
				_localctx = new GlobVarDclAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 44;
				(_localctx as GlobVarDclAssignmentContext)._glob = this.dcl();
				this.state = 45;
				this.match(wlp3Parser.T__1);
				this.state = 46;
				(_localctx as GlobVarDclAssignmentContext)._val = this.expr(0);
				this.state = 47;
				this.match(wlp3Parser.T__0);
				this.state = 48;
				(_localctx as GlobVarDclAssignmentContext)._prog = this.program();
				}
				break;

			case 3:
				_localctx = new FunProgContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 50;
				(_localctx as FunProgContext)._fun = this.function();
				this.state = 51;
				(_localctx as FunProgContext)._prog = this.program();
				}
				break;

			case 4:
				_localctx = new MainProgContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 53;
				(_localctx as MainProgContext)._mn = this.main();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public main(): MainContext {
		let _localctx: MainContext = new MainContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, wlp3Parser.RULE_main);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 56;
			this.match(wlp3Parser.T__2);
			this.state = 57;
			this.match(wlp3Parser.T__3);
			this.state = 58;
			this.match(wlp3Parser.T__4);
			this.state = 59;
			this.match(wlp3Parser.T__5);
			this.state = 60;
			_localctx._blk = this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public function(): FunctionContext {
		let _localctx: FunctionContext = new FunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, wlp3Parser.RULE_function);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 62;
			_localctx._t = this.type();
			this.state = 63;
			_localctx._id = this.match(wlp3Parser.ID);
			this.state = 64;
			this.match(wlp3Parser.T__4);
			this.state = 65;
			_localctx._prms = this.params();
			this.state = 66;
			this.match(wlp3Parser.T__5);
			this.state = 67;
			_localctx._blk = this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, wlp3Parser.RULE_block);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 69;
			this.match(wlp3Parser.T__6);
			this.state = 70;
			_localctx._stmnts = this.statementlist();
			this.state = 71;
			this.match(wlp3Parser.T__7);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statementlist(): StatementlistContext {
		let _localctx: StatementlistContext = new StatementlistContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, wlp3Parser.RULE_statementlist);
		try {
			this.state = 77;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case wlp3Parser.T__2:
			case wlp3Parser.T__4:
			case wlp3Parser.T__9:
			case wlp3Parser.T__10:
			case wlp3Parser.T__11:
			case wlp3Parser.T__12:
			case wlp3Parser.T__13:
			case wlp3Parser.T__14:
			case wlp3Parser.T__17:
			case wlp3Parser.T__18:
			case wlp3Parser.T__19:
			case wlp3Parser.T__21:
			case wlp3Parser.T__22:
			case wlp3Parser.T__23:
			case wlp3Parser.T__24:
			case wlp3Parser.T__25:
			case wlp3Parser.T__26:
			case wlp3Parser.T__27:
			case wlp3Parser.T__40:
			case wlp3Parser.INT:
			case wlp3Parser.BOOL:
			case wlp3Parser.CHAR:
			case wlp3Parser.ID:
				_localctx = new StatementListContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 73;
				(_localctx as StatementListContext)._first = this.statement();
				this.state = 74;
				(_localctx as StatementListContext)._rest = this.statementlist();
				}
				break;
			case wlp3Parser.T__7:
				_localctx = new StatementEmptyContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public params(): ParamsContext {
		let _localctx: ParamsContext = new ParamsContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, wlp3Parser.RULE_params);
		try {
			this.state = 81;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case wlp3Parser.T__2:
			case wlp3Parser.T__9:
			case wlp3Parser.T__10:
			case wlp3Parser.T__11:
			case wlp3Parser.T__12:
			case wlp3Parser.T__13:
				_localctx = new ParamsListContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 79;
				(_localctx as ParamsListContext)._list = this.paramlist();
				}
				break;
			case wlp3Parser.T__5:
				_localctx = new ParamsEmptyContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public paramlist(): ParamlistContext {
		let _localctx: ParamlistContext = new ParamlistContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, wlp3Parser.RULE_paramlist);
		try {
			this.state = 88;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				_localctx = new SingleParamContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 83;
				(_localctx as SingleParamContext)._first = this.dcl();
				}
				break;

			case 2:
				_localctx = new MultiParamContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 84;
				(_localctx as MultiParamContext)._first = this.dcl();
				this.state = 85;
				this.match(wlp3Parser.T__8);
				this.state = 86;
				(_localctx as MultiParamContext)._rest = this.paramlist();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dcl(): DclContext {
		let _localctx: DclContext = new DclContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, wlp3Parser.RULE_dcl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 90;
			_localctx._t = this.type();
			this.state = 91;
			_localctx._id = this.match(wlp3Parser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public type(): TypeContext {
		let _localctx: TypeContext = new TypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, wlp3Parser.RULE_type);
		try {
			this.state = 99;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case wlp3Parser.T__2:
				_localctx = new IntTypeContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 93;
				this.match(wlp3Parser.T__2);
				}
				break;
			case wlp3Parser.T__9:
				_localctx = new BoolTypeContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 94;
				this.match(wlp3Parser.T__9);
				}
				break;
			case wlp3Parser.T__10:
				_localctx = new CharTypeContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 95;
				this.match(wlp3Parser.T__10);
				}
				break;
			case wlp3Parser.T__11:
				_localctx = new IntStarTypeContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 96;
				this.match(wlp3Parser.T__11);
				}
				break;
			case wlp3Parser.T__12:
				_localctx = new BoolStarTypeContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 97;
				this.match(wlp3Parser.T__12);
				}
				break;
			case wlp3Parser.T__13:
				_localctx = new CharStarTypeContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 98;
				this.match(wlp3Parser.T__13);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expr(): ExprContext;
	public expr(_p: number): ExprContext;
	// @RuleVersion(0)
	public expr(_p?: number): ExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExprContext = new ExprContext(this._ctx, _parentState);
		let _prevctx: ExprContext = _localctx;
		let _startState: number = 18;
		this.enterRecursionRule(_localctx, 18, wlp3Parser.RULE_expr, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 149;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				{
				_localctx = new UnopExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 102;
				(_localctx as UnopExprContext)._unop = this.unaryoperator();
				this.state = 103;
				(_localctx as UnopExprContext)._first = this.expr(16);
				}
				break;

			case 2:
				{
				_localctx = new IdExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 105;
				(_localctx as IdExprContext)._id = this.match(wlp3Parser.ID);
				}
				break;

			case 3:
				{
				_localctx = new FnExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 106;
				(_localctx as FnExprContext)._id = this.match(wlp3Parser.ID);
				this.state = 107;
				this.match(wlp3Parser.T__4);
				this.state = 108;
				(_localctx as FnExprContext)._arglst = this.args();
				this.state = 109;
				this.match(wlp3Parser.T__5);
				}
				break;

			case 4:
				{
				_localctx = new MallocExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 111;
				this.match(wlp3Parser.T__14);
				this.state = 112;
				this.match(wlp3Parser.T__4);
				this.state = 113;
				(_localctx as MallocExprContext)._first = this.expr(0);
				this.state = 114;
				this.match(wlp3Parser.T__5);
				}
				break;

			case 5:
				{
				_localctx = new AssignmentContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 116;
				(_localctx as AssignmentContext)._lv = this.lvalue();
				this.state = 117;
				this.match(wlp3Parser.T__1);
				this.state = 118;
				(_localctx as AssignmentContext)._val = this.expr(10);
				}
				break;

			case 6:
				{
				_localctx = new DclAssignmentContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 120;
				(_localctx as DclAssignmentContext)._d = this.dcl();
				this.state = 121;
				this.match(wlp3Parser.T__1);
				this.state = 122;
				(_localctx as DclAssignmentContext)._val = this.expr(9);
				}
				break;

			case 7:
				{
				_localctx = new DclArrAssignmentContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 124;
				(_localctx as DclArrAssignmentContext)._t = this.type();
				this.state = 125;
				(_localctx as DclArrAssignmentContext)._id = this.match(wlp3Parser.ID);
				this.state = 126;
				this.match(wlp3Parser.T__15);
				this.state = 127;
				this.match(wlp3Parser.T__16);
				this.state = 128;
				this.match(wlp3Parser.T__1);
				this.state = 129;
				this.match(wlp3Parser.T__6);
				this.state = 130;
				(_localctx as DclArrAssignmentContext)._val = this.arrinit();
				this.state = 131;
				this.match(wlp3Parser.T__7);
				}
				break;

			case 8:
				{
				_localctx = new ArrIndexContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 133;
				(_localctx as ArrIndexContext)._id = this.match(wlp3Parser.ID);
				this.state = 134;
				this.match(wlp3Parser.T__15);
				this.state = 135;
				(_localctx as ArrIndexContext)._index = this.expr(0);
				this.state = 136;
				this.match(wlp3Parser.T__16);
				}
				break;

			case 9:
				{
				_localctx = new IntContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 138;
				this.match(wlp3Parser.INT);
				}
				break;

			case 10:
				{
				_localctx = new BoolContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 139;
				this.match(wlp3Parser.BOOL);
				}
				break;

			case 11:
				{
				_localctx = new CharContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 140;
				this.match(wlp3Parser.CHAR);
				}
				break;

			case 12:
				{
				_localctx = new ParenthesesContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 141;
				this.match(wlp3Parser.T__4);
				this.state = 142;
				(_localctx as ParenthesesContext)._inner = this.expr(0);
				this.state = 143;
				this.match(wlp3Parser.T__5);
				}
				break;

			case 13:
				{
				_localctx = new StarExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 145;
				this.match(wlp3Parser.T__17);
				this.state = 146;
				(_localctx as StarExprContext)._first = this.expr(2);
				}
				break;

			case 14:
				{
				_localctx = new AmpersandExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 147;
				this.match(wlp3Parser.T__18);
				this.state = 148;
				(_localctx as AmpersandExprContext)._first = this.lvalue();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 161;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 159;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
					case 1:
						{
						_localctx = new BinopExprContext(new ExprContext(_parentctx, _parentState));
						(_localctx as BinopExprContext)._first = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, wlp3Parser.RULE_expr);
						this.state = 151;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 152;
						(_localctx as BinopExprContext)._binop = this.binaryoperator();
						this.state = 153;
						(_localctx as BinopExprContext)._second = this.expr(13);
						}
						break;

					case 2:
						{
						_localctx = new BinlogExprContext(new ExprContext(_parentctx, _parentState));
						(_localctx as BinlogExprContext)._first = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, wlp3Parser.RULE_expr);
						this.state = 155;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 156;
						(_localctx as BinlogExprContext)._binlog = this.binarylogical();
						this.state = 157;
						(_localctx as BinlogExprContext)._second = this.expr(12);
						}
						break;
					}
					}
				}
				this.state = 163;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, wlp3Parser.RULE_statement);
		try {
			this.state = 220;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				_localctx = new IfStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 164;
				this.match(wlp3Parser.T__19);
				this.state = 165;
				this.match(wlp3Parser.T__4);
				this.state = 166;
				(_localctx as IfStatementContext)._pred = this.predicate();
				this.state = 167;
				this.match(wlp3Parser.T__5);
				this.state = 168;
				(_localctx as IfStatementContext)._cons = this.block();
				}
				break;

			case 2:
				_localctx = new IfElseStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 170;
				this.match(wlp3Parser.T__19);
				this.state = 171;
				this.match(wlp3Parser.T__4);
				this.state = 172;
				(_localctx as IfElseStatementContext)._pred = this.predicate();
				this.state = 173;
				this.match(wlp3Parser.T__5);
				this.state = 174;
				(_localctx as IfElseStatementContext)._cons = this.block();
				this.state = 175;
				this.match(wlp3Parser.T__20);
				this.state = 176;
				(_localctx as IfElseStatementContext)._alt = this.block();
				}
				break;

			case 3:
				_localctx = new WhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 178;
				this.match(wlp3Parser.T__21);
				this.state = 179;
				this.match(wlp3Parser.T__4);
				this.state = 180;
				(_localctx as WhileStatementContext)._pred = this.predicate();
				this.state = 181;
				this.match(wlp3Parser.T__5);
				this.state = 182;
				(_localctx as WhileStatementContext)._body = this.block();
				}
				break;

			case 4:
				_localctx = new ForStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 184;
				this.match(wlp3Parser.T__22);
				this.state = 185;
				this.match(wlp3Parser.T__4);
				this.state = 186;
				(_localctx as ForStatementContext)._first = this.expr(0);
				this.state = 187;
				this.match(wlp3Parser.T__0);
				this.state = 188;
				(_localctx as ForStatementContext)._pred = this.expr(0);
				this.state = 189;
				this.match(wlp3Parser.T__0);
				this.state = 190;
				(_localctx as ForStatementContext)._repeat = this.expr(0);
				this.state = 191;
				this.match(wlp3Parser.T__5);
				this.state = 192;
				(_localctx as ForStatementContext)._body = this.block();
				}
				break;

			case 5:
				_localctx = new PrintfStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 194;
				this.match(wlp3Parser.T__23);
				this.state = 195;
				this.match(wlp3Parser.T__4);
				this.state = 196;
				(_localctx as PrintfStatementContext)._body = this.expr(0);
				this.state = 197;
				this.match(wlp3Parser.T__5);
				this.state = 198;
				this.match(wlp3Parser.T__0);
				}
				break;

			case 6:
				_localctx = new DclStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 200;
				(_localctx as DclStatementContext)._d = this.dcl();
				this.state = 201;
				this.match(wlp3Parser.T__0);
				}
				break;

			case 7:
				_localctx = new ReturnStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 203;
				this.match(wlp3Parser.T__24);
				this.state = 204;
				(_localctx as ReturnStatementContext)._val = this.expr(0);
				this.state = 205;
				this.match(wlp3Parser.T__0);
				}
				break;

			case 8:
				_localctx = new FreeStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 207;
				this.match(wlp3Parser.T__25);
				this.state = 208;
				this.match(wlp3Parser.T__4);
				this.state = 209;
				(_localctx as FreeStatementContext)._val = this.expr(0);
				this.state = 210;
				this.match(wlp3Parser.T__5);
				this.state = 211;
				this.match(wlp3Parser.T__0);
				}
				break;

			case 9:
				_localctx = new ExprStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 213;
				(_localctx as ExprStatementContext)._val = this.expr(0);
				this.state = 214;
				this.match(wlp3Parser.T__0);
				}
				break;

			case 10:
				_localctx = new BreakStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 216;
				this.match(wlp3Parser.T__26);
				this.state = 217;
				this.match(wlp3Parser.T__0);
				}
				break;

			case 11:
				_localctx = new ContinueStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 218;
				this.match(wlp3Parser.T__27);
				this.state = 219;
				this.match(wlp3Parser.T__0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public args(): ArgsContext {
		let _localctx: ArgsContext = new ArgsContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, wlp3Parser.RULE_args);
		try {
			this.state = 224;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case wlp3Parser.T__2:
			case wlp3Parser.T__4:
			case wlp3Parser.T__9:
			case wlp3Parser.T__10:
			case wlp3Parser.T__11:
			case wlp3Parser.T__12:
			case wlp3Parser.T__13:
			case wlp3Parser.T__14:
			case wlp3Parser.T__17:
			case wlp3Parser.T__18:
			case wlp3Parser.T__40:
			case wlp3Parser.INT:
			case wlp3Parser.BOOL:
			case wlp3Parser.CHAR:
			case wlp3Parser.ID:
				_localctx = new ArgsListContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 222;
				(_localctx as ArgsListContext)._list = this.arglist();
				}
				break;
			case wlp3Parser.T__5:
				_localctx = new ArgsEmptyContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arglist(): ArglistContext {
		let _localctx: ArglistContext = new ArglistContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, wlp3Parser.RULE_arglist);
		try {
			this.state = 231;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				_localctx = new SingleArgContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 226;
				(_localctx as SingleArgContext)._first = this.expr(0);
				}
				break;

			case 2:
				_localctx = new MultiArgsContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 227;
				(_localctx as MultiArgsContext)._first = this.expr(0);
				this.state = 228;
				this.match(wlp3Parser.T__8);
				this.state = 229;
				(_localctx as MultiArgsContext)._rest = this.arglist();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrinit(): ArrinitContext {
		let _localctx: ArrinitContext = new ArrinitContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, wlp3Parser.RULE_arrinit);
		try {
			this.state = 235;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case wlp3Parser.T__2:
			case wlp3Parser.T__4:
			case wlp3Parser.T__9:
			case wlp3Parser.T__10:
			case wlp3Parser.T__11:
			case wlp3Parser.T__12:
			case wlp3Parser.T__13:
			case wlp3Parser.T__14:
			case wlp3Parser.T__17:
			case wlp3Parser.T__18:
			case wlp3Parser.T__40:
			case wlp3Parser.INT:
			case wlp3Parser.BOOL:
			case wlp3Parser.CHAR:
			case wlp3Parser.ID:
				_localctx = new ArrInitElemsContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 233;
				(_localctx as ArrInitElemsContext)._list = this.arrinitelems();
				}
				break;
			case wlp3Parser.T__7:
				_localctx = new ArrInitEmptyContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrinitelems(): ArrinitelemsContext {
		let _localctx: ArrinitelemsContext = new ArrinitelemsContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, wlp3Parser.RULE_arrinitelems);
		try {
			this.state = 242;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				_localctx = new SingleArrElemContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 237;
				(_localctx as SingleArrElemContext)._first = this.expr(0);
				}
				break;

			case 2:
				_localctx = new MultiArrElemsContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 238;
				(_localctx as MultiArrElemsContext)._first = this.expr(0);
				this.state = 239;
				this.match(wlp3Parser.T__8);
				this.state = 240;
				(_localctx as MultiArrElemsContext)._rest = this.arrinitelems();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public binaryoperator(): BinaryoperatorContext {
		let _localctx: BinaryoperatorContext = new BinaryoperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, wlp3Parser.RULE_binaryoperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 244;
			_la = this._input.LA(1);
			if (!(((((_la - 18)) & ~0x1F) === 0 && ((1 << (_la - 18)) & ((1 << (wlp3Parser.T__17 - 18)) | (1 << (wlp3Parser.T__28 - 18)) | (1 << (wlp3Parser.T__29 - 18)) | (1 << (wlp3Parser.T__30 - 18)) | (1 << (wlp3Parser.T__31 - 18)) | (1 << (wlp3Parser.T__32 - 18)) | (1 << (wlp3Parser.T__33 - 18)) | (1 << (wlp3Parser.T__34 - 18)) | (1 << (wlp3Parser.T__35 - 18)) | (1 << (wlp3Parser.T__36 - 18)) | (1 << (wlp3Parser.T__37 - 18)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public binarylogical(): BinarylogicalContext {
		let _localctx: BinarylogicalContext = new BinarylogicalContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, wlp3Parser.RULE_binarylogical);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 246;
			_la = this._input.LA(1);
			if (!(_la === wlp3Parser.T__38 || _la === wlp3Parser.T__39)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unaryoperator(): UnaryoperatorContext {
		let _localctx: UnaryoperatorContext = new UnaryoperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, wlp3Parser.RULE_unaryoperator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 248;
			this.match(wlp3Parser.T__40);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public predicate(): PredicateContext {
		let _localctx: PredicateContext = new PredicateContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, wlp3Parser.RULE_predicate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 250;
			_localctx._pred = this.expr(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lvalue(): LvalueContext {
		let _localctx: LvalueContext = new LvalueContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, wlp3Parser.RULE_lvalue);
		try {
			this.state = 259;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case wlp3Parser.ID:
				_localctx = new IdLvalueContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 252;
				(_localctx as IdLvalueContext)._id = this.match(wlp3Parser.ID);
				}
				break;
			case wlp3Parser.T__4:
				_localctx = new BracketLvalueContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 253;
				this.match(wlp3Parser.T__4);
				this.state = 254;
				(_localctx as BracketLvalueContext)._lv = this.lvalue();
				this.state = 255;
				this.match(wlp3Parser.T__5);
				}
				break;
			case wlp3Parser.T__17:
				_localctx = new DerefAddressContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 257;
				this.match(wlp3Parser.T__17);
				this.state = 258;
				(_localctx as DerefAddressContext)._addr = this.expr(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 9:
			return this.expr_sempred(_localctx as ExprContext, predIndex);
		}
		return true;
	}
	private expr_sempred(_localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 12);

		case 1:
			return this.precpred(this._ctx, 11);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x031\u0108\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x03\x02\x03\x02\x03\x02\x03\x02" +
		"\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02" +
		"\x03\x02\x05\x029\n\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06P\n\x06\x03\x07" +
		"\x03\x07\x05\x07T\n\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b[\n\b\x03\t" +
		"\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\nf\n\n\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x05\v\x98" +
		"\n\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x07\v\xA2\n\v\f\v" +
		"\x0E\v\xA5\v\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x05\f\xDF" +
		"\n\f\x03\r\x03\r\x05\r\xE3\n\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x05\x0E\xEA\n\x0E\x03\x0F\x03\x0F\x05\x0F\xEE\n\x0F\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x05\x10\xF5\n\x10\x03\x11\x03\x11\x03\x12\x03\x12" +
		"\x03\x13\x03\x13\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15" +
		"\x03\x15\x03\x15\x05\x15\u0106\n\x15\x03\x15\x02\x02\x03\x14\x16\x02\x02" +
		"\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16" +
		"\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02\x02\x04" +
		"\x04\x02\x14\x14\x1F(\x03\x02)*\x02\u011D\x028\x03\x02\x02\x02\x04:\x03" +
		"\x02\x02\x02\x06@\x03\x02\x02\x02\bG\x03\x02\x02\x02\nO\x03\x02\x02\x02" +
		"\fS\x03\x02\x02\x02\x0EZ\x03\x02\x02\x02\x10\\\x03\x02\x02\x02\x12e\x03" +
		"\x02\x02\x02\x14\x97\x03\x02\x02\x02\x16\xDE\x03\x02\x02\x02\x18\xE2\x03" +
		"\x02\x02\x02\x1A\xE9\x03\x02\x02\x02\x1C\xED\x03\x02\x02\x02\x1E\xF4\x03" +
		"\x02\x02\x02 \xF6\x03\x02\x02\x02\"\xF8\x03\x02\x02\x02$\xFA\x03\x02\x02" +
		"\x02&\xFC\x03\x02\x02\x02(\u0105\x03\x02\x02\x02*+\x05\x10\t\x02+,\x07" +
		"\x03\x02\x02,-\x05\x02\x02\x02-9\x03\x02\x02\x02./\x05\x10\t\x02/0\x07" +
		"\x04\x02\x0201\x05\x14\v\x0212\x07\x03\x02\x0223\x05\x02\x02\x0239\x03" +
		"\x02\x02\x0245\x05\x06\x04\x0256\x05\x02\x02\x0269\x03\x02\x02\x0279\x05" +
		"\x04\x03\x028*\x03\x02\x02\x028.\x03\x02\x02\x0284\x03\x02\x02\x0287\x03" +
		"\x02\x02\x029\x03\x03\x02\x02\x02:;\x07\x05\x02\x02;<\x07\x06\x02\x02" +
		"<=\x07\x07\x02\x02=>\x07\b\x02\x02>?\x05\b\x05\x02?\x05\x03\x02\x02\x02" +
		"@A\x05\x12\n\x02AB\x070\x02\x02BC\x07\x07\x02\x02CD\x05\f\x07\x02DE\x07" +
		"\b\x02\x02EF\x05\b\x05\x02F\x07\x03\x02\x02\x02GH\x07\t\x02\x02HI\x05" +
		"\n\x06\x02IJ\x07\n\x02\x02J\t\x03\x02\x02\x02KL\x05\x16\f\x02LM\x05\n" +
		"\x06\x02MP\x03\x02\x02\x02NP\x03\x02\x02\x02OK\x03\x02\x02\x02ON\x03\x02" +
		"\x02\x02P\v\x03\x02\x02\x02QT\x05\x0E\b\x02RT\x03\x02\x02\x02SQ\x03\x02" +
		"\x02\x02SR\x03\x02\x02\x02T\r\x03\x02\x02\x02U[\x05\x10\t\x02VW\x05\x10" +
		"\t\x02WX\x07\v\x02\x02XY\x05\x0E\b\x02Y[\x03\x02\x02\x02ZU\x03\x02\x02" +
		"\x02ZV\x03\x02\x02\x02[\x0F\x03\x02\x02\x02\\]\x05\x12\n\x02]^\x070\x02" +
		"\x02^\x11\x03\x02\x02\x02_f\x07\x05\x02\x02`f\x07\f\x02\x02af\x07\r\x02" +
		"\x02bf\x07\x0E\x02\x02cf\x07\x0F\x02\x02df\x07\x10\x02\x02e_\x03\x02\x02" +
		"\x02e`\x03\x02\x02\x02ea\x03\x02\x02\x02eb\x03\x02\x02\x02ec\x03\x02\x02" +
		"\x02ed\x03\x02\x02\x02f\x13\x03\x02\x02\x02gh\b\v\x01\x02hi\x05$\x13\x02" +
		"ij\x05\x14\v\x12j\x98\x03\x02\x02\x02k\x98\x070\x02\x02lm\x070\x02\x02" +
		"mn\x07\x07\x02\x02no\x05\x18\r\x02op\x07\b\x02\x02p\x98\x03\x02\x02\x02" +
		"qr\x07\x11\x02\x02rs\x07\x07\x02\x02st\x05\x14\v\x02tu\x07\b\x02\x02u" +
		"\x98\x03\x02\x02\x02vw\x05(\x15\x02wx\x07\x04\x02\x02xy\x05\x14\v\fy\x98" +
		"\x03\x02\x02\x02z{\x05\x10\t\x02{|\x07\x04\x02\x02|}\x05\x14\v\v}\x98" +
		"\x03\x02\x02\x02~\x7F\x05\x12\n\x02\x7F\x80\x070\x02\x02\x80\x81\x07\x12" +
		"\x02\x02\x81\x82\x07\x13\x02\x02\x82\x83\x07\x04\x02\x02\x83\x84\x07\t" +
		"\x02\x02\x84\x85\x05\x1C\x0F\x02\x85\x86\x07\n\x02\x02\x86\x98\x03\x02" +
		"\x02\x02\x87\x88\x070\x02\x02\x88\x89\x07\x12\x02\x02\x89\x8A\x05\x14" +
		"\v\x02\x8A\x8B\x07\x13\x02\x02\x8B\x98\x03\x02\x02\x02\x8C\x98\x07-\x02" +
		"\x02\x8D\x98\x07.\x02\x02\x8E\x98\x07/\x02\x02\x8F\x90\x07\x07\x02\x02" +
		"\x90\x91\x05\x14\v\x02\x91\x92\x07\b\x02\x02\x92\x98\x03\x02\x02\x02\x93" +
		"\x94\x07\x14\x02\x02\x94\x98\x05\x14\v\x04\x95\x96\x07\x15\x02\x02\x96" +
		"\x98\x05(\x15\x02\x97g\x03\x02\x02\x02\x97k\x03\x02\x02\x02\x97l\x03\x02" +
		"\x02\x02\x97q\x03\x02\x02\x02\x97v\x03\x02\x02\x02\x97z\x03\x02\x02\x02" +
		"\x97~\x03\x02\x02\x02\x97\x87\x03\x02\x02\x02\x97\x8C\x03\x02\x02\x02" +
		"\x97\x8D\x03\x02\x02\x02\x97\x8E\x03\x02\x02\x02\x97\x8F\x03\x02\x02\x02" +
		"\x97\x93\x03\x02\x02\x02\x97\x95\x03\x02\x02\x02\x98\xA3\x03\x02\x02\x02" +
		"\x99\x9A\f\x0E\x02\x02\x9A\x9B\x05 \x11\x02\x9B\x9C\x05\x14\v\x0F\x9C" +
		"\xA2\x03\x02\x02\x02\x9D\x9E\f\r\x02\x02\x9E\x9F\x05\"\x12\x02\x9F\xA0" +
		"\x05\x14\v\x0E\xA0\xA2\x03\x02\x02\x02\xA1\x99\x03\x02\x02\x02\xA1\x9D" +
		"\x03\x02\x02\x02\xA2\xA5\x03\x02\x02\x02\xA3\xA1\x03\x02\x02\x02\xA3\xA4" +
		"\x03\x02\x02\x02\xA4\x15\x03\x02\x02\x02\xA5\xA3\x03\x02\x02\x02\xA6\xA7" +
		"\x07\x16\x02\x02\xA7\xA8\x07\x07\x02\x02\xA8\xA9\x05&\x14\x02\xA9\xAA" +
		"\x07\b\x02\x02\xAA\xAB\x05\b\x05\x02\xAB\xDF\x03\x02\x02\x02\xAC\xAD\x07" +
		"\x16\x02\x02\xAD\xAE\x07\x07\x02\x02\xAE\xAF\x05&\x14\x02\xAF\xB0\x07" +
		"\b\x02\x02\xB0\xB1\x05\b\x05\x02\xB1\xB2\x07\x17\x02\x02\xB2\xB3\x05\b" +
		"\x05\x02\xB3\xDF\x03\x02\x02\x02\xB4\xB5\x07\x18\x02\x02\xB5\xB6\x07\x07" +
		"\x02\x02\xB6\xB7\x05&\x14\x02\xB7\xB8\x07\b\x02\x02\xB8\xB9\x05\b\x05" +
		"\x02\xB9\xDF\x03\x02\x02\x02\xBA\xBB\x07\x19\x02\x02\xBB\xBC\x07\x07\x02" +
		"\x02\xBC\xBD\x05\x14\v\x02\xBD\xBE\x07\x03\x02\x02\xBE\xBF\x05\x14\v\x02" +
		"\xBF\xC0\x07\x03\x02\x02\xC0\xC1\x05\x14\v\x02\xC1\xC2\x07\b\x02\x02\xC2" +
		"\xC3\x05\b\x05\x02\xC3\xDF\x03\x02\x02\x02\xC4\xC5\x07\x1A\x02\x02\xC5" +
		"\xC6\x07\x07\x02\x02\xC6\xC7\x05\x14\v\x02\xC7\xC8\x07\b\x02\x02\xC8\xC9" +
		"\x07\x03\x02\x02\xC9\xDF\x03\x02\x02\x02\xCA\xCB\x05\x10\t\x02\xCB\xCC" +
		"\x07\x03\x02\x02\xCC\xDF\x03\x02\x02\x02\xCD\xCE\x07\x1B\x02\x02\xCE\xCF" +
		"\x05\x14\v\x02\xCF\xD0\x07\x03\x02\x02\xD0\xDF\x03\x02\x02\x02\xD1\xD2" +
		"\x07\x1C\x02\x02\xD2\xD3\x07\x07\x02\x02\xD3\xD4\x05\x14\v\x02\xD4\xD5" +
		"\x07\b\x02\x02\xD5\xD6\x07\x03\x02\x02\xD6\xDF\x03\x02\x02\x02\xD7\xD8" +
		"\x05\x14\v\x02\xD8\xD9\x07\x03\x02\x02\xD9\xDF\x03\x02\x02\x02\xDA\xDB" +
		"\x07\x1D\x02\x02\xDB\xDF\x07\x03\x02\x02\xDC\xDD\x07\x1E\x02\x02\xDD\xDF" +
		"\x07\x03\x02\x02\xDE\xA6\x03\x02\x02\x02\xDE\xAC\x03\x02\x02\x02\xDE\xB4" +
		"\x03\x02\x02\x02\xDE\xBA\x03\x02\x02\x02\xDE\xC4\x03\x02\x02\x02\xDE\xCA" +
		"\x03\x02\x02\x02\xDE\xCD\x03\x02\x02\x02\xDE\xD1\x03\x02\x02\x02\xDE\xD7" +
		"\x03\x02\x02\x02\xDE\xDA\x03\x02\x02\x02\xDE\xDC\x03\x02\x02\x02\xDF\x17" +
		"\x03\x02\x02\x02\xE0\xE3\x05\x1A\x0E\x02\xE1\xE3\x03\x02\x02\x02\xE2\xE0" +
		"\x03\x02\x02\x02\xE2\xE1\x03\x02\x02\x02\xE3\x19\x03\x02\x02\x02\xE4\xEA" +
		"\x05\x14\v\x02\xE5\xE6\x05\x14\v\x02\xE6\xE7\x07\v\x02\x02\xE7\xE8\x05" +
		"\x1A\x0E\x02\xE8\xEA\x03\x02\x02\x02\xE9\xE4\x03\x02\x02\x02\xE9\xE5\x03" +
		"\x02\x02\x02\xEA\x1B\x03\x02\x02\x02\xEB\xEE\x05\x1E\x10\x02\xEC\xEE\x03" +
		"\x02\x02\x02\xED\xEB\x03\x02\x02\x02\xED\xEC\x03\x02\x02\x02\xEE\x1D\x03" +
		"\x02\x02\x02\xEF\xF5\x05\x14\v\x02\xF0\xF1\x05\x14\v\x02\xF1\xF2\x07\v" +
		"\x02\x02\xF2\xF3\x05\x1E\x10\x02\xF3\xF5\x03\x02\x02\x02\xF4\xEF\x03\x02" +
		"\x02\x02\xF4\xF0\x03\x02\x02\x02\xF5\x1F\x03\x02\x02\x02\xF6\xF7\t\x02" +
		"\x02\x02\xF7!\x03\x02\x02\x02\xF8\xF9\t\x03\x02\x02\xF9#\x03\x02\x02\x02" +
		"\xFA\xFB\x07+\x02\x02\xFB%\x03\x02\x02\x02\xFC\xFD\x05\x14\v\x02\xFD\'" +
		"\x03\x02\x02\x02\xFE\u0106\x070\x02\x02\xFF\u0100\x07\x07\x02\x02\u0100" +
		"\u0101\x05(\x15\x02\u0101\u0102\x07\b\x02\x02\u0102\u0106\x03\x02\x02" +
		"\x02\u0103\u0104\x07\x14\x02\x02\u0104\u0106\x05\x14\v\x02\u0105\xFE\x03" +
		"\x02\x02\x02\u0105\xFF\x03\x02\x02\x02\u0105\u0103\x03\x02\x02\x02\u0106" +
		")\x03\x02\x02\x02\x108OSZe\x97\xA1\xA3\xDE\xE2\xE9\xED\xF4\u0105";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!wlp3Parser.__ATN) {
			wlp3Parser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(wlp3Parser._serializedATN));
		}

		return wlp3Parser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wlp3Parser.RULE_program; }
	public copyFrom(ctx: ProgramContext): void {
		super.copyFrom(ctx);
	}
}
export class GlobVarDclContext extends ProgramContext {
	public _glob!: DclContext;
	public _prog!: ProgramContext;
	public dcl(): DclContext {
		return this.getRuleContext(0, DclContext);
	}
	public program(): ProgramContext {
		return this.getRuleContext(0, ProgramContext);
	}
	constructor(ctx: ProgramContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterGlobVarDcl) {
			listener.enterGlobVarDcl(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitGlobVarDcl) {
			listener.exitGlobVarDcl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitGlobVarDcl) {
			return visitor.visitGlobVarDcl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class GlobVarDclAssignmentContext extends ProgramContext {
	public _glob!: DclContext;
	public _val!: ExprContext;
	public _prog!: ProgramContext;
	public dcl(): DclContext {
		return this.getRuleContext(0, DclContext);
	}
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public program(): ProgramContext {
		return this.getRuleContext(0, ProgramContext);
	}
	constructor(ctx: ProgramContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterGlobVarDclAssignment) {
			listener.enterGlobVarDclAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitGlobVarDclAssignment) {
			listener.exitGlobVarDclAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitGlobVarDclAssignment) {
			return visitor.visitGlobVarDclAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FunProgContext extends ProgramContext {
	public _fun!: FunctionContext;
	public _prog!: ProgramContext;
	public function(): FunctionContext {
		return this.getRuleContext(0, FunctionContext);
	}
	public program(): ProgramContext {
		return this.getRuleContext(0, ProgramContext);
	}
	constructor(ctx: ProgramContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterFunProg) {
			listener.enterFunProg(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitFunProg) {
			listener.exitFunProg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitFunProg) {
			return visitor.visitFunProg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MainProgContext extends ProgramContext {
	public _mn!: MainContext;
	public main(): MainContext {
		return this.getRuleContext(0, MainContext);
	}
	constructor(ctx: ProgramContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterMainProg) {
			listener.enterMainProg(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitMainProg) {
			listener.exitMainProg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitMainProg) {
			return visitor.visitMainProg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MainContext extends ParserRuleContext {
	public _blk!: BlockContext;
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wlp3Parser.RULE_main; }
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterMain) {
			listener.enterMain(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitMain) {
			listener.exitMain(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitMain) {
			return visitor.visitMain(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionContext extends ParserRuleContext {
	public _t!: TypeContext;
	public _id!: Token;
	public _prms!: ParamsContext;
	public _blk!: BlockContext;
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public ID(): TerminalNode { return this.getToken(wlp3Parser.ID, 0); }
	public params(): ParamsContext {
		return this.getRuleContext(0, ParamsContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wlp3Parser.RULE_function; }
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterFunction) {
			listener.enterFunction(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitFunction) {
			listener.exitFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitFunction) {
			return visitor.visitFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public _stmnts!: StatementlistContext;
	public statementlist(): StatementlistContext {
		return this.getRuleContext(0, StatementlistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wlp3Parser.RULE_block; }
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementlistContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wlp3Parser.RULE_statementlist; }
	public copyFrom(ctx: StatementlistContext): void {
		super.copyFrom(ctx);
	}
}
export class StatementListContext extends StatementlistContext {
	public _first!: StatementContext;
	public _rest!: StatementlistContext;
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public statementlist(): StatementlistContext {
		return this.getRuleContext(0, StatementlistContext);
	}
	constructor(ctx: StatementlistContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterStatementList) {
			listener.enterStatementList(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitStatementList) {
			listener.exitStatementList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitStatementList) {
			return visitor.visitStatementList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StatementEmptyContext extends StatementlistContext {
	constructor(ctx: StatementlistContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterStatementEmpty) {
			listener.enterStatementEmpty(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitStatementEmpty) {
			listener.exitStatementEmpty(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitStatementEmpty) {
			return visitor.visitStatementEmpty(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParamsContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wlp3Parser.RULE_params; }
	public copyFrom(ctx: ParamsContext): void {
		super.copyFrom(ctx);
	}
}
export class ParamsListContext extends ParamsContext {
	public _list!: ParamlistContext;
	public paramlist(): ParamlistContext {
		return this.getRuleContext(0, ParamlistContext);
	}
	constructor(ctx: ParamsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterParamsList) {
			listener.enterParamsList(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitParamsList) {
			listener.exitParamsList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitParamsList) {
			return visitor.visitParamsList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParamsEmptyContext extends ParamsContext {
	constructor(ctx: ParamsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterParamsEmpty) {
			listener.enterParamsEmpty(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitParamsEmpty) {
			listener.exitParamsEmpty(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitParamsEmpty) {
			return visitor.visitParamsEmpty(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParamlistContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wlp3Parser.RULE_paramlist; }
	public copyFrom(ctx: ParamlistContext): void {
		super.copyFrom(ctx);
	}
}
export class SingleParamContext extends ParamlistContext {
	public _first!: DclContext;
	public dcl(): DclContext {
		return this.getRuleContext(0, DclContext);
	}
	constructor(ctx: ParamlistContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterSingleParam) {
			listener.enterSingleParam(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitSingleParam) {
			listener.exitSingleParam(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitSingleParam) {
			return visitor.visitSingleParam(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MultiParamContext extends ParamlistContext {
	public _first!: DclContext;
	public _rest!: ParamlistContext;
	public dcl(): DclContext {
		return this.getRuleContext(0, DclContext);
	}
	public paramlist(): ParamlistContext {
		return this.getRuleContext(0, ParamlistContext);
	}
	constructor(ctx: ParamlistContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterMultiParam) {
			listener.enterMultiParam(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitMultiParam) {
			listener.exitMultiParam(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitMultiParam) {
			return visitor.visitMultiParam(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DclContext extends ParserRuleContext {
	public _t!: TypeContext;
	public _id!: Token;
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public ID(): TerminalNode { return this.getToken(wlp3Parser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wlp3Parser.RULE_dcl; }
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterDcl) {
			listener.enterDcl(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitDcl) {
			listener.exitDcl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitDcl) {
			return visitor.visitDcl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wlp3Parser.RULE_type; }
	public copyFrom(ctx: TypeContext): void {
		super.copyFrom(ctx);
	}
}
export class IntTypeContext extends TypeContext {
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterIntType) {
			listener.enterIntType(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitIntType) {
			listener.exitIntType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitIntType) {
			return visitor.visitIntType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BoolTypeContext extends TypeContext {
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterBoolType) {
			listener.enterBoolType(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitBoolType) {
			listener.exitBoolType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitBoolType) {
			return visitor.visitBoolType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CharTypeContext extends TypeContext {
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterCharType) {
			listener.enterCharType(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitCharType) {
			listener.exitCharType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitCharType) {
			return visitor.visitCharType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IntStarTypeContext extends TypeContext {
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterIntStarType) {
			listener.enterIntStarType(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitIntStarType) {
			listener.exitIntStarType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitIntStarType) {
			return visitor.visitIntStarType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BoolStarTypeContext extends TypeContext {
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterBoolStarType) {
			listener.enterBoolStarType(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitBoolStarType) {
			listener.exitBoolStarType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitBoolStarType) {
			return visitor.visitBoolStarType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CharStarTypeContext extends TypeContext {
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterCharStarType) {
			listener.enterCharStarType(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitCharStarType) {
			listener.exitCharStarType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitCharStarType) {
			return visitor.visitCharStarType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wlp3Parser.RULE_expr; }
	public copyFrom(ctx: ExprContext): void {
		super.copyFrom(ctx);
	}
}
export class UnopExprContext extends ExprContext {
	public _unop!: UnaryoperatorContext;
	public _first!: ExprContext;
	public unaryoperator(): UnaryoperatorContext {
		return this.getRuleContext(0, UnaryoperatorContext);
	}
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterUnopExpr) {
			listener.enterUnopExpr(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitUnopExpr) {
			listener.exitUnopExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitUnopExpr) {
			return visitor.visitUnopExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IdExprContext extends ExprContext {
	public _id!: Token;
	public ID(): TerminalNode { return this.getToken(wlp3Parser.ID, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterIdExpr) {
			listener.enterIdExpr(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitIdExpr) {
			listener.exitIdExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitIdExpr) {
			return visitor.visitIdExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FnExprContext extends ExprContext {
	public _id!: Token;
	public _arglst!: ArgsContext;
	public ID(): TerminalNode { return this.getToken(wlp3Parser.ID, 0); }
	public args(): ArgsContext {
		return this.getRuleContext(0, ArgsContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterFnExpr) {
			listener.enterFnExpr(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitFnExpr) {
			listener.exitFnExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitFnExpr) {
			return visitor.visitFnExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MallocExprContext extends ExprContext {
	public _first!: ExprContext;
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterMallocExpr) {
			listener.enterMallocExpr(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitMallocExpr) {
			listener.exitMallocExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitMallocExpr) {
			return visitor.visitMallocExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BinopExprContext extends ExprContext {
	public _first!: ExprContext;
	public _binop!: BinaryoperatorContext;
	public _second!: ExprContext;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public binaryoperator(): BinaryoperatorContext {
		return this.getRuleContext(0, BinaryoperatorContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterBinopExpr) {
			listener.enterBinopExpr(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitBinopExpr) {
			listener.exitBinopExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitBinopExpr) {
			return visitor.visitBinopExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BinlogExprContext extends ExprContext {
	public _first!: ExprContext;
	public _binlog!: BinarylogicalContext;
	public _second!: ExprContext;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public binarylogical(): BinarylogicalContext {
		return this.getRuleContext(0, BinarylogicalContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterBinlogExpr) {
			listener.enterBinlogExpr(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitBinlogExpr) {
			listener.exitBinlogExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitBinlogExpr) {
			return visitor.visitBinlogExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AssignmentContext extends ExprContext {
	public _lv!: LvalueContext;
	public _val!: ExprContext;
	public lvalue(): LvalueContext {
		return this.getRuleContext(0, LvalueContext);
	}
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterAssignment) {
			listener.enterAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitAssignment) {
			listener.exitAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitAssignment) {
			return visitor.visitAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DclAssignmentContext extends ExprContext {
	public _d!: DclContext;
	public _val!: ExprContext;
	public dcl(): DclContext {
		return this.getRuleContext(0, DclContext);
	}
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterDclAssignment) {
			listener.enterDclAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitDclAssignment) {
			listener.exitDclAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitDclAssignment) {
			return visitor.visitDclAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DclArrAssignmentContext extends ExprContext {
	public _t!: TypeContext;
	public _id!: Token;
	public _val!: ArrinitContext;
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public ID(): TerminalNode { return this.getToken(wlp3Parser.ID, 0); }
	public arrinit(): ArrinitContext {
		return this.getRuleContext(0, ArrinitContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterDclArrAssignment) {
			listener.enterDclArrAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitDclArrAssignment) {
			listener.exitDclArrAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitDclArrAssignment) {
			return visitor.visitDclArrAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArrIndexContext extends ExprContext {
	public _id!: Token;
	public _index!: ExprContext;
	public ID(): TerminalNode { return this.getToken(wlp3Parser.ID, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterArrIndex) {
			listener.enterArrIndex(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitArrIndex) {
			listener.exitArrIndex(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitArrIndex) {
			return visitor.visitArrIndex(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IntContext extends ExprContext {
	public INT(): TerminalNode { return this.getToken(wlp3Parser.INT, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterInt) {
			listener.enterInt(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitInt) {
			listener.exitInt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitInt) {
			return visitor.visitInt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BoolContext extends ExprContext {
	public BOOL(): TerminalNode { return this.getToken(wlp3Parser.BOOL, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterBool) {
			listener.enterBool(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitBool) {
			listener.exitBool(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitBool) {
			return visitor.visitBool(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CharContext extends ExprContext {
	public CHAR(): TerminalNode { return this.getToken(wlp3Parser.CHAR, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterChar) {
			listener.enterChar(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitChar) {
			listener.exitChar(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitChar) {
			return visitor.visitChar(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParenthesesContext extends ExprContext {
	public _inner!: ExprContext;
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterParentheses) {
			listener.enterParentheses(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitParentheses) {
			listener.exitParentheses(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitParentheses) {
			return visitor.visitParentheses(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StarExprContext extends ExprContext {
	public _first!: ExprContext;
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterStarExpr) {
			listener.enterStarExpr(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitStarExpr) {
			listener.exitStarExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitStarExpr) {
			return visitor.visitStarExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AmpersandExprContext extends ExprContext {
	public _first!: LvalueContext;
	public lvalue(): LvalueContext {
		return this.getRuleContext(0, LvalueContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterAmpersandExpr) {
			listener.enterAmpersandExpr(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitAmpersandExpr) {
			listener.exitAmpersandExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitAmpersandExpr) {
			return visitor.visitAmpersandExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wlp3Parser.RULE_statement; }
	public copyFrom(ctx: StatementContext): void {
		super.copyFrom(ctx);
	}
}
export class IfStatementContext extends StatementContext {
	public _pred!: PredicateContext;
	public _cons!: BlockContext;
	public predicate(): PredicateContext {
		return this.getRuleContext(0, PredicateContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterIfStatement) {
			listener.enterIfStatement(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitIfStatement) {
			listener.exitIfStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitIfStatement) {
			return visitor.visitIfStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IfElseStatementContext extends StatementContext {
	public _pred!: PredicateContext;
	public _cons!: BlockContext;
	public _alt!: BlockContext;
	public predicate(): PredicateContext {
		return this.getRuleContext(0, PredicateContext);
	}
	public block(): BlockContext[];
	public block(i: number): BlockContext;
	public block(i?: number): BlockContext | BlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockContext);
		} else {
			return this.getRuleContext(i, BlockContext);
		}
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterIfElseStatement) {
			listener.enterIfElseStatement(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitIfElseStatement) {
			listener.exitIfElseStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitIfElseStatement) {
			return visitor.visitIfElseStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class WhileStatementContext extends StatementContext {
	public _pred!: PredicateContext;
	public _body!: BlockContext;
	public predicate(): PredicateContext {
		return this.getRuleContext(0, PredicateContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterWhileStatement) {
			listener.enterWhileStatement(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitWhileStatement) {
			listener.exitWhileStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitWhileStatement) {
			return visitor.visitWhileStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ForStatementContext extends StatementContext {
	public _first!: ExprContext;
	public _pred!: ExprContext;
	public _repeat!: ExprContext;
	public _body!: BlockContext;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterForStatement) {
			listener.enterForStatement(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitForStatement) {
			listener.exitForStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitForStatement) {
			return visitor.visitForStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PrintfStatementContext extends StatementContext {
	public _body!: ExprContext;
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterPrintfStatement) {
			listener.enterPrintfStatement(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitPrintfStatement) {
			listener.exitPrintfStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitPrintfStatement) {
			return visitor.visitPrintfStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DclStatementContext extends StatementContext {
	public _d!: DclContext;
	public dcl(): DclContext {
		return this.getRuleContext(0, DclContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterDclStatement) {
			listener.enterDclStatement(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitDclStatement) {
			listener.exitDclStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitDclStatement) {
			return visitor.visitDclStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ReturnStatementContext extends StatementContext {
	public _val!: ExprContext;
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterReturnStatement) {
			listener.enterReturnStatement(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitReturnStatement) {
			listener.exitReturnStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitReturnStatement) {
			return visitor.visitReturnStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FreeStatementContext extends StatementContext {
	public _val!: ExprContext;
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterFreeStatement) {
			listener.enterFreeStatement(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitFreeStatement) {
			listener.exitFreeStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitFreeStatement) {
			return visitor.visitFreeStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExprStatementContext extends StatementContext {
	public _val!: ExprContext;
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterExprStatement) {
			listener.enterExprStatement(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitExprStatement) {
			listener.exitExprStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitExprStatement) {
			return visitor.visitExprStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BreakStatementContext extends StatementContext {
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterBreakStatement) {
			listener.enterBreakStatement(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitBreakStatement) {
			listener.exitBreakStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitBreakStatement) {
			return visitor.visitBreakStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ContinueStatementContext extends StatementContext {
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterContinueStatement) {
			listener.enterContinueStatement(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitContinueStatement) {
			listener.exitContinueStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitContinueStatement) {
			return visitor.visitContinueStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgsContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wlp3Parser.RULE_args; }
	public copyFrom(ctx: ArgsContext): void {
		super.copyFrom(ctx);
	}
}
export class ArgsListContext extends ArgsContext {
	public _list!: ArglistContext;
	public arglist(): ArglistContext {
		return this.getRuleContext(0, ArglistContext);
	}
	constructor(ctx: ArgsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterArgsList) {
			listener.enterArgsList(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitArgsList) {
			listener.exitArgsList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitArgsList) {
			return visitor.visitArgsList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArgsEmptyContext extends ArgsContext {
	constructor(ctx: ArgsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterArgsEmpty) {
			listener.enterArgsEmpty(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitArgsEmpty) {
			listener.exitArgsEmpty(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitArgsEmpty) {
			return visitor.visitArgsEmpty(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArglistContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wlp3Parser.RULE_arglist; }
	public copyFrom(ctx: ArglistContext): void {
		super.copyFrom(ctx);
	}
}
export class SingleArgContext extends ArglistContext {
	public _first!: ExprContext;
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ArglistContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterSingleArg) {
			listener.enterSingleArg(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitSingleArg) {
			listener.exitSingleArg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitSingleArg) {
			return visitor.visitSingleArg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MultiArgsContext extends ArglistContext {
	public _first!: ExprContext;
	public _rest!: ArglistContext;
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public arglist(): ArglistContext {
		return this.getRuleContext(0, ArglistContext);
	}
	constructor(ctx: ArglistContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterMultiArgs) {
			listener.enterMultiArgs(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitMultiArgs) {
			listener.exitMultiArgs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitMultiArgs) {
			return visitor.visitMultiArgs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrinitContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wlp3Parser.RULE_arrinit; }
	public copyFrom(ctx: ArrinitContext): void {
		super.copyFrom(ctx);
	}
}
export class ArrInitElemsContext extends ArrinitContext {
	public _list!: ArrinitelemsContext;
	public arrinitelems(): ArrinitelemsContext {
		return this.getRuleContext(0, ArrinitelemsContext);
	}
	constructor(ctx: ArrinitContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterArrInitElems) {
			listener.enterArrInitElems(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitArrInitElems) {
			listener.exitArrInitElems(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitArrInitElems) {
			return visitor.visitArrInitElems(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArrInitEmptyContext extends ArrinitContext {
	constructor(ctx: ArrinitContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterArrInitEmpty) {
			listener.enterArrInitEmpty(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitArrInitEmpty) {
			listener.exitArrInitEmpty(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitArrInitEmpty) {
			return visitor.visitArrInitEmpty(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrinitelemsContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wlp3Parser.RULE_arrinitelems; }
	public copyFrom(ctx: ArrinitelemsContext): void {
		super.copyFrom(ctx);
	}
}
export class SingleArrElemContext extends ArrinitelemsContext {
	public _first!: ExprContext;
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ArrinitelemsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterSingleArrElem) {
			listener.enterSingleArrElem(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitSingleArrElem) {
			listener.exitSingleArrElem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitSingleArrElem) {
			return visitor.visitSingleArrElem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MultiArrElemsContext extends ArrinitelemsContext {
	public _first!: ExprContext;
	public _rest!: ArrinitelemsContext;
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public arrinitelems(): ArrinitelemsContext {
		return this.getRuleContext(0, ArrinitelemsContext);
	}
	constructor(ctx: ArrinitelemsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterMultiArrElems) {
			listener.enterMultiArrElems(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitMultiArrElems) {
			listener.exitMultiArrElems(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitMultiArrElems) {
			return visitor.visitMultiArrElems(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BinaryoperatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wlp3Parser.RULE_binaryoperator; }
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterBinaryoperator) {
			listener.enterBinaryoperator(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitBinaryoperator) {
			listener.exitBinaryoperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitBinaryoperator) {
			return visitor.visitBinaryoperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BinarylogicalContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wlp3Parser.RULE_binarylogical; }
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterBinarylogical) {
			listener.enterBinarylogical(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitBinarylogical) {
			listener.exitBinarylogical(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitBinarylogical) {
			return visitor.visitBinarylogical(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnaryoperatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wlp3Parser.RULE_unaryoperator; }
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterUnaryoperator) {
			listener.enterUnaryoperator(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitUnaryoperator) {
			listener.exitUnaryoperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitUnaryoperator) {
			return visitor.visitUnaryoperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PredicateContext extends ParserRuleContext {
	public _pred!: ExprContext;
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wlp3Parser.RULE_predicate; }
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterPredicate) {
			listener.enterPredicate(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitPredicate) {
			listener.exitPredicate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitPredicate) {
			return visitor.visitPredicate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LvalueContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wlp3Parser.RULE_lvalue; }
	public copyFrom(ctx: LvalueContext): void {
		super.copyFrom(ctx);
	}
}
export class IdLvalueContext extends LvalueContext {
	public _id!: Token;
	public ID(): TerminalNode { return this.getToken(wlp3Parser.ID, 0); }
	constructor(ctx: LvalueContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterIdLvalue) {
			listener.enterIdLvalue(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitIdLvalue) {
			listener.exitIdLvalue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitIdLvalue) {
			return visitor.visitIdLvalue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BracketLvalueContext extends LvalueContext {
	public _lv!: LvalueContext;
	public lvalue(): LvalueContext {
		return this.getRuleContext(0, LvalueContext);
	}
	constructor(ctx: LvalueContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterBracketLvalue) {
			listener.enterBracketLvalue(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitBracketLvalue) {
			listener.exitBracketLvalue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitBracketLvalue) {
			return visitor.visitBracketLvalue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DerefAddressContext extends LvalueContext {
	public _addr!: ExprContext;
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: LvalueContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: wlp3Listener): void {
		if (listener.enterDerefAddress) {
			listener.enterDerefAddress(this);
		}
	}
	// @Override
	public exitRule(listener: wlp3Listener): void {
		if (listener.exitDerefAddress) {
			listener.exitDerefAddress(this);
		}
	}
	// @Override
	public accept<Result>(visitor: wlp3Visitor<Result>): Result {
		if (visitor.visitDerefAddress) {
			return visitor.visitDerefAddress(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


