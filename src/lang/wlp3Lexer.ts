// Generated from ./src/lang/wlp3.g4 by ANTLR 4.9.0-SNAPSHOT

import { ATN } from 'antlr4ts/atn/ATN'
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer'
import { LexerATNSimulator } from 'antlr4ts/atn/LexerATNSimulator'
import { CharStream } from 'antlr4ts/CharStream'
import { NotNull } from 'antlr4ts/Decorators'
import { Override } from 'antlr4ts/Decorators'
import { Lexer } from 'antlr4ts/Lexer'
import * as Utils from 'antlr4ts/misc/Utils'
import { RuleContext } from 'antlr4ts/RuleContext'
import { Vocabulary } from 'antlr4ts/Vocabulary'
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl'

export class wlp3Lexer extends Lexer {
    public static readonly T__0 = 1
    public static readonly T__1 = 2
    public static readonly T__2 = 3
    public static readonly T__3 = 4
    public static readonly T__4 = 5
    public static readonly T__5 = 6
    public static readonly T__6 = 7
    public static readonly T__7 = 8
    public static readonly T__8 = 9
    public static readonly T__9 = 10
    public static readonly T__10 = 11
    public static readonly T__11 = 12
    public static readonly T__12 = 13
    public static readonly T__13 = 14
    public static readonly T__14 = 15
    public static readonly T__15 = 16
    public static readonly T__16 = 17
    public static readonly T__17 = 18
    public static readonly T__18 = 19
    public static readonly T__19 = 20
    public static readonly T__20 = 21
    public static readonly T__21 = 22
    public static readonly T__22 = 23
    public static readonly T__23 = 24
    public static readonly T__24 = 25
    public static readonly T__25 = 26
    public static readonly T__26 = 27
    public static readonly T__27 = 28
    public static readonly T__28 = 29
    public static readonly T__29 = 30
    public static readonly T__30 = 31
    public static readonly T__31 = 32
    public static readonly T__32 = 33
    public static readonly T__33 = 34
    public static readonly T__34 = 35
    public static readonly T__35 = 36
    public static readonly T__36 = 37
    public static readonly T__37 = 38
    public static readonly WS = 39
    public static readonly INT = 40
    public static readonly BOOL = 41
    public static readonly CHAR = 42
    public static readonly ID = 43

    // tslint:disable:no-trailing-whitespace
    public static readonly channelNames: string[] = ['DEFAULT_TOKEN_CHANNEL', 'HIDDEN']

    // tslint:disable:no-trailing-whitespace
    public static readonly modeNames: string[] = ['DEFAULT_MODE']

    public static readonly ruleNames: string[] = [
        'T__0',
        'T__1',
        'T__2',
        'T__3',
        'T__4',
        'T__5',
        'T__6',
        'T__7',
        'T__8',
        'T__9',
        'T__10',
        'T__11',
        'T__12',
        'T__13',
        'T__14',
        'T__15',
        'T__16',
        'T__17',
        'T__18',
        'T__19',
        'T__20',
        'T__21',
        'T__22',
        'T__23',
        'T__24',
        'T__25',
        'T__26',
        'T__27',
        'T__28',
        'T__29',
        'T__30',
        'T__31',
        'T__32',
        'T__33',
        'T__34',
        'T__35',
        'T__36',
        'T__37',
        'WS',
        'INT',
        'BOOL',
        'CHAR',
        'ID'
    ]

    private static readonly _LITERAL_NAMES: Array<string | undefined> = [
        undefined,
        "'int'",
        "'main'",
        "'('",
        "')'",
        "'{'",
        "'}'",
        "','",
        "'bool'",
        "'char'",
        "'int*'",
        "'bool*'",
        "'char*'",
        "'*'",
        "'&'",
        "'malloc'",
        "'='",
        "'if'",
        "'else'",
        "'while'",
        "'printf'",
        "';'",
        "'return'",
        "'free'",
        "'break'",
        "'continue'",
        "'+'",
        "'-'",
        "'/'",
        "'%'",
        "'=='",
        "'>'",
        "'<'",
        "'<='",
        "'>='",
        "'!='",
        "'&&'",
        "'||'",
        "'!'"
    ]
    private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        'WS',
        'INT',
        'BOOL',
        'CHAR',
        'ID'
    ]
    public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(
        wlp3Lexer._LITERAL_NAMES,
        wlp3Lexer._SYMBOLIC_NAMES,
        []
    )

    // @Override
    // @NotNull
    public get vocabulary(): Vocabulary {
        return wlp3Lexer.VOCABULARY
    }
    // tslint:enable:no-trailing-whitespace

    constructor(input: CharStream) {
        super(input)
        this._interp = new LexerATNSimulator(wlp3Lexer._ATN, this)
    }

    // @Override
    public get grammarFileName(): string {
        return 'wlp3.g4'
    }

    // @Override
    public get ruleNames(): string[] {
        return wlp3Lexer.ruleNames
    }

    // @Override
    public get serializedATN(): string {
        return wlp3Lexer._serializedATN
    }

    // @Override
    public get channelNames(): string[] {
        return wlp3Lexer.channelNames
    }

    // @Override
    public get modeNames(): string[] {
        return wlp3Lexer.modeNames
    }

    public static readonly _serializedATN: string =
        '\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02-\u0108\b\x01' +
        '\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06' +
        '\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r' +
        '\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t' +
        '\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t' +
        '\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t' +
        '\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04"\t' +
        "\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04'\t'\x04(\t(\x04)\t)\x04*\t*\x04" +
        '+\t+\x04,\t,\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03' +
        '\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03' +
        '\x07\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n' +
        '\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03' +
        '\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F' +
        '\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11' +
        '\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x14' +
        '\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15' +
        '\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17' +
        '\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x19' +
        '\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A' +
        '\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1C\x03\x1C' +
        '\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x03' +
        '!\x03!\x03"\x03"\x03"\x03#\x03#\x03#\x03$\x03$\x03$\x03%\x03%\x03%' +
        "\x03&\x03&\x03&\x03'\x03'\x03(\x06(\xE8\n(\r(\x0E(\xE9\x03(\x03(\x03" +
        ')\x06)\xEF\n)\r)\x0E)\xF0\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x03' +
        '*\x05*\xFC\n*\x03+\x03+\x03+\x03+\x03,\x03,\x07,\u0104\n,\f,\x0E,\u0107' +
        '\v,\x02\x02\x02-\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07' +
        '\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19\x02\x0E' +
        "\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11!\x02\x12#\x02\x13%\x02\x14'\x02" +
        '\x15)\x02\x16+\x02\x17-\x02\x18/\x02\x191\x02\x1A3\x02\x1B5\x02\x1C7\x02' +
        '\x1D9\x02\x1E;\x02\x1F=\x02 ?\x02!A\x02"C\x02#E\x02$G\x02%I\x02&K\x02' +
        "'M\x02(O\x02)Q\x02*S\x02+U\x02,W\x02-\x03\x02\x06\x05\x02\v\f\x0F\x0F" +
        '""\x03\x022;\x05\x02C\\aac|\x06\x022;C\\aac|\x02\u010B\x02\x03\x03\x02' +
        '\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02' +
        '\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02' +
        '\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02' +
        '\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02' +
        '\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02' +
        "\x02\x02#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x02'\x03\x02\x02\x02\x02" +
        ')\x03\x02\x02\x02\x02+\x03\x02\x02\x02\x02-\x03\x02\x02\x02\x02/\x03\x02' +
        '\x02\x02\x021\x03\x02\x02\x02\x023\x03\x02\x02\x02\x025\x03\x02\x02\x02' +
        '\x027\x03\x02\x02\x02\x029\x03\x02\x02\x02\x02;\x03\x02\x02\x02\x02=\x03' +
        '\x02\x02\x02\x02?\x03\x02\x02\x02\x02A\x03\x02\x02\x02\x02C\x03\x02\x02' +
        '\x02\x02E\x03\x02\x02\x02\x02G\x03\x02\x02\x02\x02I\x03\x02\x02\x02\x02' +
        'K\x03\x02\x02\x02\x02M\x03\x02\x02\x02\x02O\x03\x02\x02\x02\x02Q\x03\x02' +
        '\x02\x02\x02S\x03\x02\x02\x02\x02U\x03\x02\x02\x02\x02W\x03\x02\x02\x02' +
        '\x03Y\x03\x02\x02\x02\x05]\x03\x02\x02\x02\x07b\x03\x02\x02\x02\td\x03' +
        '\x02\x02\x02\vf\x03\x02\x02\x02\rh\x03\x02\x02\x02\x0Fj\x03\x02\x02\x02' +
        '\x11l\x03\x02\x02\x02\x13q\x03\x02\x02\x02\x15v\x03\x02\x02\x02\x17{\x03' +
        '\x02\x02\x02\x19\x81\x03\x02\x02\x02\x1B\x87\x03\x02\x02\x02\x1D\x89\x03' +
        '\x02\x02\x02\x1F\x8B\x03\x02\x02\x02!\x92\x03\x02\x02\x02#\x94\x03\x02' +
        "\x02\x02%\x97\x03\x02\x02\x02'\x9C\x03\x02\x02\x02)\xA2\x03\x02\x02\x02" +
        '+\xA9\x03\x02\x02\x02-\xAB\x03\x02\x02\x02/\xB2\x03\x02\x02\x021\xB7\x03' +
        '\x02\x02\x023\xBD\x03\x02\x02\x025\xC6\x03\x02\x02\x027\xC8\x03\x02\x02' +
        '\x029\xCA\x03\x02\x02\x02;\xCC\x03\x02\x02\x02=\xCE\x03\x02\x02\x02?\xD1' +
        '\x03\x02\x02\x02A\xD3\x03\x02\x02\x02C\xD5\x03\x02\x02\x02E\xD8\x03\x02' +
        '\x02\x02G\xDB\x03\x02\x02\x02I\xDE\x03\x02\x02\x02K\xE1\x03\x02\x02\x02' +
        'M\xE4\x03\x02\x02\x02O\xE7\x03\x02\x02\x02Q\xEE\x03\x02\x02\x02S\xFB\x03' +
        '\x02\x02\x02U\xFD\x03\x02\x02\x02W\u0101\x03\x02\x02\x02YZ\x07k\x02\x02' +
        'Z[\x07p\x02\x02[\\\x07v\x02\x02\\\x04\x03\x02\x02\x02]^\x07o\x02\x02^' +
        '_\x07c\x02\x02_`\x07k\x02\x02`a\x07p\x02\x02a\x06\x03\x02\x02\x02bc\x07' +
        '*\x02\x02c\b\x03\x02\x02\x02de\x07+\x02\x02e\n\x03\x02\x02\x02fg\x07}' +
        '\x02\x02g\f\x03\x02\x02\x02hi\x07\x7F\x02\x02i\x0E\x03\x02\x02\x02jk\x07' +
        '.\x02\x02k\x10\x03\x02\x02\x02lm\x07d\x02\x02mn\x07q\x02\x02no\x07q\x02' +
        '\x02op\x07n\x02\x02p\x12\x03\x02\x02\x02qr\x07e\x02\x02rs\x07j\x02\x02' +
        'st\x07c\x02\x02tu\x07t\x02\x02u\x14\x03\x02\x02\x02vw\x07k\x02\x02wx\x07' +
        'p\x02\x02xy\x07v\x02\x02yz\x07,\x02\x02z\x16\x03\x02\x02\x02{|\x07d\x02' +
        '\x02|}\x07q\x02\x02}~\x07q\x02\x02~\x7F\x07n\x02\x02\x7F\x80\x07,\x02' +
        '\x02\x80\x18\x03\x02\x02\x02\x81\x82\x07e\x02\x02\x82\x83\x07j\x02\x02' +
        '\x83\x84\x07c\x02\x02\x84\x85\x07t\x02\x02\x85\x86\x07,\x02\x02\x86\x1A' +
        '\x03\x02\x02\x02\x87\x88\x07,\x02\x02\x88\x1C\x03\x02\x02\x02\x89\x8A' +
        '\x07(\x02\x02\x8A\x1E\x03\x02\x02\x02\x8B\x8C\x07o\x02\x02\x8C\x8D\x07' +
        'c\x02\x02\x8D\x8E\x07n\x02\x02\x8E\x8F\x07n\x02\x02\x8F\x90\x07q\x02\x02' +
        '\x90\x91\x07e\x02\x02\x91 \x03\x02\x02\x02\x92\x93\x07?\x02\x02\x93"' +
        '\x03\x02\x02\x02\x94\x95\x07k\x02\x02\x95\x96\x07h\x02\x02\x96$\x03\x02' +
        '\x02\x02\x97\x98\x07g\x02\x02\x98\x99\x07n\x02\x02\x99\x9A\x07u\x02\x02' +
        '\x9A\x9B\x07g\x02\x02\x9B&\x03\x02\x02\x02\x9C\x9D\x07y\x02\x02\x9D\x9E' +
        '\x07j\x02\x02\x9E\x9F\x07k\x02\x02\x9F\xA0\x07n\x02\x02\xA0\xA1\x07g\x02' +
        '\x02\xA1(\x03\x02\x02\x02\xA2\xA3\x07r\x02\x02\xA3\xA4\x07t\x02\x02\xA4' +
        '\xA5\x07k\x02\x02\xA5\xA6\x07p\x02\x02\xA6\xA7\x07v\x02\x02\xA7\xA8\x07' +
        'h\x02\x02\xA8*\x03\x02\x02\x02\xA9\xAA\x07=\x02\x02\xAA,\x03\x02\x02\x02' +
        '\xAB\xAC\x07t\x02\x02\xAC\xAD\x07g\x02\x02\xAD\xAE\x07v\x02\x02\xAE\xAF' +
        '\x07w\x02\x02\xAF\xB0\x07t\x02\x02\xB0\xB1\x07p\x02\x02\xB1.\x03\x02\x02' +
        '\x02\xB2\xB3\x07h\x02\x02\xB3\xB4\x07t\x02\x02\xB4\xB5\x07g\x02\x02\xB5' +
        '\xB6\x07g\x02\x02\xB60\x03\x02\x02\x02\xB7\xB8\x07d\x02\x02\xB8\xB9\x07' +
        't\x02\x02\xB9\xBA\x07g\x02\x02\xBA\xBB\x07c\x02\x02\xBB\xBC\x07m\x02\x02' +
        '\xBC2\x03\x02\x02\x02\xBD\xBE\x07e\x02\x02\xBE\xBF\x07q\x02\x02\xBF\xC0' +
        '\x07p\x02\x02\xC0\xC1\x07v\x02\x02\xC1\xC2\x07k\x02\x02\xC2\xC3\x07p\x02' +
        '\x02\xC3\xC4\x07w\x02\x02\xC4\xC5\x07g\x02\x02\xC54\x03\x02\x02\x02\xC6' +
        '\xC7\x07-\x02\x02\xC76\x03\x02\x02\x02\xC8\xC9\x07/\x02\x02\xC98\x03\x02' +
        "\x02\x02\xCA\xCB\x071\x02\x02\xCB:\x03\x02\x02\x02\xCC\xCD\x07'\x02\x02" +
        '\xCD<\x03\x02\x02\x02\xCE\xCF\x07?\x02\x02\xCF\xD0\x07?\x02\x02\xD0>\x03' +
        '\x02\x02\x02\xD1\xD2\x07@\x02\x02\xD2@\x03\x02\x02\x02\xD3\xD4\x07>\x02' +
        '\x02\xD4B\x03\x02\x02\x02\xD5\xD6\x07>\x02\x02\xD6\xD7\x07?\x02\x02\xD7' +
        'D\x03\x02\x02\x02\xD8\xD9\x07@\x02\x02\xD9\xDA\x07?\x02\x02\xDAF\x03\x02' +
        '\x02\x02\xDB\xDC\x07#\x02\x02\xDC\xDD\x07?\x02\x02\xDDH\x03\x02\x02\x02' +
        '\xDE\xDF\x07(\x02\x02\xDF\xE0\x07(\x02\x02\xE0J\x03\x02\x02\x02\xE1\xE2' +
        '\x07~\x02\x02\xE2\xE3\x07~\x02\x02\xE3L\x03\x02\x02\x02\xE4\xE5\x07#\x02' +
        '\x02\xE5N\x03\x02\x02\x02\xE6\xE8\t\x02\x02\x02\xE7\xE6\x03\x02\x02\x02' +
        '\xE8\xE9\x03\x02\x02\x02\xE9\xE7\x03\x02\x02\x02\xE9\xEA\x03\x02\x02\x02' +
        '\xEA\xEB\x03\x02\x02\x02\xEB\xEC\b(\x02\x02\xECP\x03\x02\x02\x02\xED\xEF' +
        '\t\x03\x02\x02\xEE\xED\x03\x02\x02\x02\xEF\xF0\x03\x02\x02\x02\xF0\xEE' +
        '\x03\x02\x02\x02\xF0\xF1\x03\x02\x02\x02\xF1R\x03\x02\x02\x02\xF2\xF3' +
        '\x07v\x02\x02\xF3\xF4\x07t\x02\x02\xF4\xF5\x07w\x02\x02\xF5\xFC\x07g\x02' +
        '\x02\xF6\xF7\x07h\x02\x02\xF7\xF8\x07c\x02\x02\xF8\xF9\x07n\x02\x02\xF9' +
        '\xFA\x07u\x02\x02\xFA\xFC\x07g\x02\x02\xFB\xF2\x03\x02\x02\x02\xFB\xF6' +
        '\x03\x02\x02\x02\xFCT\x03\x02\x02\x02\xFD\xFE\x07)\x02\x02\xFE\xFF\v\x02' +
        '\x02\x02\xFF\u0100\x07)\x02\x02\u0100V\x03\x02\x02\x02\u0101\u0105\t\x04' +
        '\x02\x02\u0102\u0104\t\x05\x02\x02\u0103\u0102\x03\x02\x02\x02\u0104\u0107' +
        '\x03\x02\x02\x02\u0105\u0103\x03\x02\x02\x02\u0105\u0106\x03\x02\x02\x02' +
        '\u0106X\x03\x02\x02\x02\u0107\u0105\x03\x02\x02\x02\x07\x02\xE9\xF0\xFB' +
        '\u0105\x03\b\x02\x02'
    public static __ATN: ATN
    public static get _ATN(): ATN {
        if (!wlp3Lexer.__ATN) {
            wlp3Lexer.__ATN = new ATNDeserializer().deserialize(
                Utils.toCharArray(wlp3Lexer._serializedATN)
            )
        }

        return wlp3Lexer.__ATN
    }
}
