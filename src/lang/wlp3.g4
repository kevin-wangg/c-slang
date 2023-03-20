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
    | 'int*' # IntStarType
    | 'bool*' # BoolStarType
    ;
expr: INT # Int
    | BOOL # Bool
    | '(' inner=expr ')' # Parentheses
    | '*' first=expr # StarExpr
	| '&' first=lvalue # AmpersandExpr
	| unop=unaryoperator first=expr # UnopExpr
	| id=ID # IdExpr
	| id=ID '(' arglst=args ')' # FnExpr
	| 'malloc' '(' first=expr ')' # MallocExpr
	| first=expr binop=binaryoperator second=expr #BinopExpr
	| first=expr binlog=binarylogical second=expr #BinlogExpr
    ;
statement: lv=lvalue '=' val=expr ';' # Assignment
       | 'if' '(' pred=predicate ')' cons=block # IfStatement
         | 'if' '(' pred=predicate ')' cons=block 'else' alt=block # IfElseStatement
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
  | '*' addr=expr # DerefAddress
  ;

WS      : [ \t\r\n]+ -> skip ;
INT     : [0-9]+ ;
BOOL    : 'true' | 'false';
ID: [a-zA-Z_][a-zA-Z_0-9]* ;

