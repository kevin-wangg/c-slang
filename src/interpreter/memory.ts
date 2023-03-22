import { isBoolean, isNumber } from 'lodash'

import { isTypeMatch } from './type_checking'

// Memory stuff
//
export const type_sizes = {
    BoolType: 1,
    CharType: 1,
    IntType: 4,
    IntStarType: 4,
    BoolStarType: 4
}

export const TYPES = {
    IntType: 0,
    BoolType: 1,
    CharType: 2,
    IntStarType: 3,
    BoolStarType: 4,
    AnyType: 5
}

export const REVERSE_TYPES = ['IntType', 'BoolType', 'CharType', 'IntStarType', 'BoolStarType', 'AnyType']

export let HEAP: Uint8Array
export let HEAP_TYPE: Uint8Array
export let heap_size: number

export const heap_make = (bytes: number) => {
    const data = new ArrayBuffer(bytes) // By default every value is initialized to 0
    const view = new Uint8Array(data)
    return view
}

export const initialize_machine = (heapsize_bytes: number) => {
    HEAP = heap_make(heapsize_bytes)
    HEAP_TYPE = heap_make(heapsize_bytes)
    heap_size = heapsize_bytes
}

export const heap_allocate = (type: string, bytes: number) => {
    for (let i = 0; i < heap_size; ++i) {
        if (HEAP[i] == 0) {
            let ok = true
            for (let j = i; j <= i + bytes; ++j) {
                if (HEAP[j] != 0) {
                    ok = false
                    break
                }
            }
            if (ok) {
                HEAP[i] = bytes
                for (let j = i + 1; j <= i + bytes; ++j) {
                    HEAP_TYPE[j] = TYPES[type]
                }
                return i + 1
            }
        } else {
            i += HEAP[i]
        }
    }
    throw new Error('Out of heap memory')
}

export const heap_deallocate = (addr: number) => {
    const number_of_bytes = HEAP[addr - 1]
    HEAP[addr - 1] = 0
    for (let i = addr; i < addr + number_of_bytes; ++i) {
        HEAP[i] = 0
    }
}

export const heap_get = (addr: number) => {
    return HEAP[addr]
}

export const heap_set = (addr: number, val: number) => {
    HEAP[addr] = val
}

export const heap_get_char = (addr: number) => {

}

export const heap_set_char = (addr: number, val: string) => {
    // typescript doesn't have type for char, so we annotate with string type 
}

export const heap_get_bool = (addr: number) => {
    const byte = heap_get(addr)
    if (byte === 1) {
        return true
    }
    return false
}

export const heap_set_bool = (addr: number, b: boolean) => {
    const val = b ? 1 : 0
    heap_set(addr, val)
    HEAP_TYPE[addr] = TYPES['BoolType']
}

export const heap_get_int = (addr: number) => {
    const first_byte = heap_get(addr)
    const second_byte = heap_get(addr + 1)
    const third_byte = heap_get(addr + 2)
    const fourth_byte = heap_get(addr + 3)
    return (first_byte << 24) | (second_byte << 16) | (third_byte << 8) | fourth_byte
}

export const heap_set_int = (addr: number, num: number) => {
    heap_set(addr, get_int_first_byte(num))
    heap_set(addr + 1, get_int_second_byte(num))
    heap_set(addr + 2, get_int_third_byte(num))
    heap_set(addr + 3, get_int_fourth_byte(num))
    HEAP_TYPE[addr] = TYPES['IntType']
    HEAP_TYPE[addr + 1] = TYPES['IntType']
    HEAP_TYPE[addr + 2] = TYPES['IntType']
    HEAP_TYPE[addr + 3] = TYPES['IntType']
}

export const get_int_first_byte = (num: number) => {
    return (num & 0xff000000) >> 24
}

export const get_int_second_byte = (num: number) => {
    return (num & 0x00ff0000) >> 16
}

export const get_int_third_byte = (num: number) => {
    return (num & 0x0000ff00) >> 8
}

export const get_int_fourth_byte = (num: number) => {
    return num & 0x000000ff
}

export const heap_set_int_star = (addr: number, pointer: number) => {
    heap_set(addr, get_int_first_byte(pointer))
    heap_set(addr + 1, get_int_second_byte(pointer))
    heap_set(addr + 2, get_int_third_byte(pointer))
    heap_set(addr + 3, get_int_fourth_byte(pointer))
    HEAP_TYPE[addr] = TYPES['IntStarType']
    HEAP_TYPE[addr + 1] = TYPES['IntStarType']
    HEAP_TYPE[addr + 2] = TYPES['IntStarType']
    HEAP_TYPE[addr + 3] = TYPES['IntStarType']
}

export const heap_set_bool_star = (addr: number, pointer: number) => {
    heap_set(addr, get_int_first_byte(pointer))
    heap_set(addr + 1, get_int_second_byte(pointer))
    heap_set(addr + 2, get_int_third_byte(pointer))
    heap_set(addr + 3, get_int_fourth_byte(pointer))
    HEAP_TYPE[addr] = TYPES['BoolStarType']
    HEAP_TYPE[addr + 1] = TYPES['BoolStarType']
    HEAP_TYPE[addr + 2] = TYPES['BoolStarType']
    HEAP_TYPE[addr + 3] = TYPES['BoolStarType']
}

export const heap_assign = (type: string, val: any, env_addr: number) => {
    if (isTypeMatch(val, type)) {
        if (type === 'IntStarType') {
            heap_set_int_star(env_addr, val)
        } else if (type === 'BoolStarType') {
            heap_set_bool_star(env_addr, val)
        } else if (isNumber(val)) {
            heap_set_int(env_addr, val)
        } else if (isBoolean(val)) {
            heap_set_bool(env_addr, val)
        } else {
            throw new Error('Variable type in heap not yet supported')
        }
    } else {
        throw new Error(`Type mismatch: ${type} ${val}`)
    }
}

export const heap_lookup = (env_addr: number) => {
    const type = HEAP_TYPE[env_addr]
    if (type == TYPES['IntType'] || type == TYPES['IntStarType'] || type == TYPES['BoolStarType']) {
        return heap_get_int(env_addr)
    } else if (type == TYPES['BoolType']) {
        return heap_get_bool(env_addr)
    } else {
        throw new Error(`${type} lookup in heap not yet supported`)
    }
}
