import es from 'estree'

// Note that typecasting is done on some of the constructed AST nodes because
// the ESTree AST node types are not fully aligned with the actual AST that
// is generated by the Acorn parser. However, the extra/missing properties
// are unused in the Source interpreter/transpiler. As such, we can safely
// ignore their existence to make the typing cleaner. The alternative would
// be to define our own AST node types based off the ESTree AST node types
// and use our custom AST node types everywhere.

export const createLiteral = (
    value: string | number | boolean | null,
    raw?: string
): es.Literal => {
    return {
        type: 'Literal',
        value,
        raw: raw ?? typeof value === 'string' ? `"${value}"` : String(value)
    }
}

export const createIdentifier = (name: string): es.Identifier => {
    return {
        type: 'Identifier',
        name
    }
}

export const createCallExpression = (
    functionName: string,
    functionArguments: Array<es.Expression | es.SpreadElement>
): es.SimpleCallExpression => {
    return {
        type: 'CallExpression',
        callee: createIdentifier(functionName),
        arguments: functionArguments
        // The 'optional' property is typed in ESTree, but does not exist
        // on SimpleCallExpression nodes in the AST generated by acorn parser.
    } as es.SimpleCallExpression
}

export const createVariableDeclarator = (
    id: es.Identifier,
    initialValue: es.Expression | null | undefined = null
): es.VariableDeclarator => {
    return {
        type: 'VariableDeclarator',
        id,
        init: initialValue
    }
}

export const createVariableDeclaration = (
    declarations: es.VariableDeclarator[],
    kind: 'var' | 'let' | 'const'
): es.VariableDeclaration => {
    return {
        type: 'VariableDeclaration',
        declarations,
        kind
    }
}

export const createReturnStatement = (
    argument: es.Expression | null | undefined
): es.ReturnStatement => {
    return {
        type: 'ReturnStatement',
        argument
    }
}

export const createFunctionDeclaration = (
    name: string,
    params: es.Pattern[],
    body: es.Statement[]
): es.FunctionDeclaration => {
    return {
        type: 'FunctionDeclaration',
        expression: false,
        generator: false,
        id: {
            type: 'Identifier',
            name
        },
        params,
        body: {
            type: 'BlockStatement',
            body
        }
        // The 'expression' property is not typed in ESTree, but it exists
        // on FunctionDeclaration nodes in the AST generated by acorn parser.
    } as es.FunctionDeclaration
}

export const createImportDeclaration = (
    specifiers: Array<es.ImportSpecifier | es.ImportDefaultSpecifier | es.ImportNamespaceSpecifier>,
    source: es.Literal
): es.ImportDeclaration => {
    return {
        type: 'ImportDeclaration',
        specifiers,
        source
    }
}

export const createImportSpecifier = (
    local: es.Identifier,
    imported: es.Identifier
): es.ImportSpecifier => {
    return {
        type: 'ImportSpecifier',
        local,
        imported
    }
}

export const createImportDefaultSpecifier = (local: es.Identifier): es.ImportDefaultSpecifier => {
    return {
        type: 'ImportDefaultSpecifier',
        local
    }
}

export const createImportNamespaceSpecifier = (
    local: es.Identifier
): es.ImportNamespaceSpecifier => {
    return {
        type: 'ImportNamespaceSpecifier',
        local
    }
}
