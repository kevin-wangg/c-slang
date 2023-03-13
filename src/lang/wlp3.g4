grammar wlp3;
program: fun=function prog=program # FunProg
       | mn=main # MainProg
       ;
main:   'int' 'main' '(' ')' blk=block ;
function : t=type id=ID '(' prms=params ')' blk=block ;
block: '{' stmnts=statementlist '}' ;
statementlist: first=statement rest=statementlist # StatementList
    | <empty> # StatementEmpty
    ;
params: list=paramlist # ParamsList
      | <empty> # ParamsEmpty
      ;
paramlist: first=dcl # SingleParam
    | first=dcl ',' rest=paramlist # MultiParam
        ;
dcl: t=type id=ID;
type: 'int' # IntType
    | 'bool' # BoolType
    | 'string' # StringType
    | 'int*' # IntStarType
    ;
expr: INT # Int
    | STRING # String
    | BOOL # Bool
    | '(' inner=expr ')' # Parentheses
	| unop=unaryoperator first=expr # UnopExpr
	| first=expr binop=binaryoperator second=expr #BinopExpr
	| first=expr binlog=binarylogical second=expr #BinlogExpr
	| id=ID # IdExpr
	| id=ID '(' arglst=args ')' # FnExpr
	| 'malloc' '(' first=expr ')' # MallocExpr
	| '*' first=expr # StarExpr
	| '&' first=expr # AmpersandExpr
    ;
statement: lv=lvalue '=' val=expr ';' # Assignment
       | 'if' '(' pred=predicate ')' cons=block 'else' alt=block # IfStatement
	     | 'while' '(' pred=predicate ')' body=block # WhileStatement
	     | 'printf' '(' body=expr ')' ';' # PrintfStatement
	     | d=dcl ';' # DclStatement
	     | d=dcl '=' val=expr ';' # DclAssignment
	     | 'return' val=expr ';' # ReturnStatement
	     | 'free' '(' val=expr ')' ';' # FreeStatement
       | val=expr ';'# ExprStatement
       ;
args: list=arglist # ArgsList
    | <empty> # ArgsEmpty
    ;
arglist: first=expr # SingleArg
    | first=expr ',' rest=arglist # MultiArgs
    ;
binaryoperator: '+'
               | '-'
               | '*'
               | '/'
               | '%'
               | '=='
               | '>'
               | '<'
               | '<='
               | '>='
               | '!='
               ;
binarylogical: '&&'
              | '||'
              ;
unaryoperator: '!';
predicate: pred=expr;
lvalue: id=ID # IdLvalue
  | '(' lv=lvalue ')' # BracketLvalue
  ;

WS      : [ \t\r\n]+ -> skip ;
INT     : [0-9]+ ;
STRING  : '"'[a-zA-Z0-9]+'"' ;
ID: [a-zA-Z_][a-zA-Z_0-9]* ;
BOOL    : 'true' | 'false';

