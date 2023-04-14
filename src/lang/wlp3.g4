grammar wlp3;		
program: glob=dcl ';' prog=program # GlobVarDcl
    | glob=dcl '=' val=expr ';' prog=program  # GlobVarDclAssignment
    | fun=function prog=program # FunProg
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
    | 'char' # CharType
    | 'int*' # IntStarType
    | 'bool*' # BoolStarType
    | 'char*' # CharStarType
    ;
expr: INT # Int
    | BOOL # Bool
    | CHAR # Char
    | '(' inner=expr ')' # Parentheses
    | '*' first=expr # StarExpr
	| '&' first=lvalue # AmpersandExpr
	| unop=unaryoperator first=expr # UnopExpr
	| id=ID # IdExpr
	| id=ID '(' arglst=args ')' # FnExpr
	| 'malloc' '(' first=expr ')' # MallocExpr
	| first=expr binop=binaryoperator second=expr #BinopExpr
	| first=expr binlog=binarylogical second=expr #BinlogExpr
    | lv=lvalue '=' val=expr # Assignment
    | d=dcl '=' val=expr # DclAssignment
    | t=type id=ID '['']' '=' '{' val=arrinit '}' #DclArrAssignment
    | id=ID '[' index=expr ']' #ArrIndex
    ;
statement: 'if' '(' pred=predicate ')' cons=block # IfStatement
         | 'if' '(' pred=predicate ')' cons=block 'else' alt=block # IfElseStatement
	     | 'while' '(' pred=predicate ')' body=block # WhileStatement
         | 'for' '(' first=expr ';' pred=expr ';' repeat=expr ')' body=block # ForStatement
	     | 'printf' '(' body=expr ')' ';' # PrintfStatement
	     | d=dcl ';' # DclStatement
	     | 'return' val=expr ';' # ReturnStatement
	     | 'free' '(' val=expr ')' ';' # FreeStatement
       | val=expr ';'# ExprStatement
       | 'break' ';' # BreakStatement
       | 'continue' ';' # ContinueStatement
       ;
args: list=arglist # ArgsList
    | <empty> # ArgsEmpty
    ;
arglist: first=expr # SingleArg
    | first=expr ',' rest=arglist # MultiArgs
    ;
arrinit: list=arrinitelems # ArrInitElems
    | <empty> # ArrInitEmpty
    ;
arrinitelems: first=expr # SingleArrElem
    | first=expr ',' rest=arrinitelems # MultiArrElems
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
CHAR    : '\''.'\'';
ID: [a-zA-Z_][a-zA-Z_0-9]* ;

