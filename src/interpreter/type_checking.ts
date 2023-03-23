import { isBoolean, isInteger, isString } from 'lodash'

import { HEAP_TYPE, TYPES } from './memory'

export const unassigned = { type: 'Unassigned' }

export const isUnassigned = (v: any): boolean => {
    return (
        v !== null && typeof v === 'object' && v.hasOwnProperty('type') && v.type === 'Unassigned'
    )
}

export const undeclared = { type: 'Undeclared' }

export const isUndeclared = (v: any): boolean => {
    return (
        v !== null && typeof v === 'object' && v.hasOwnProperty('type') && v.type === 'Undeclared'
    )
}

export const isIntFunc = (val: any): boolean => {
    return (
        val !== null &&
        typeof val === 'object' &&
        val.hasOwnProperty('type') &&
        val.type === 'Closure' &&
        val.funcType === 'IntType'
    )
}

export const isBoolFunc = (val: any): boolean => {
    return (
        val !== null &&
        typeof val === 'object' &&
        val.hasOwnProperty('type') &&
        val.type === 'Closure' &&
        val.funcType === 'BoolType'
    )
}

export const isStringFunc = (val: any): boolean => {
    return (
        val !== null &&
        typeof val === 'object' &&
        val.hasOwnProperty('type') &&
        val.type === 'Closure' &&
        val.funcType === 'StringType'
    )
}

export const isTypeMatch = (val: any, type: string): boolean => {
    return (
        val == unassigned ||
        type === 'AnyType' ||
        (type === 'CharType' && isString(val) && val.length === 1) ||
        (type == 'BoolType' && isBoolean(val)) ||
        (type == 'IntType' && isInteger(val)) ||
        (type == 'StringTypeFunction' && isStringFunc(val)) ||
        (type == 'BoolTypeFunction' && isBoolFunc(val)) ||
        (type == 'IntTypeFunction' && isIntFunc(val)) ||
        (type === 'IntStarType' && isInteger(val) &&
            (HEAP_TYPE[val] === TYPES['IntType'] || HEAP_TYPE[val] === TYPES['AnyType'])) ||
        (type === 'BoolStarType' && isInteger(val) &&
            (HEAP_TYPE[val] === TYPES['BoolType'] || HEAP_TYPE[val] === TYPES['AnyType'])) ||
        (type === 'CharStarType' && isInteger(val) && 
            (HEAP_TYPE[val] === TYPES['CharType'] || HEAP_TYPE[val] === TYPES['AnyType']))
    )
}
