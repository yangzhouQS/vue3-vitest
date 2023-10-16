import {describe, expect, test} from 'vitest'


function fn(t) {
    return new Promise((resolve, reject) => {
        t ? resolve(1) : reject(2)
    })
}

describe("expect 常用API测试", () => {
    test("toBe ==", () => {
        expect(1).toBe(1)
    })
    test("toBe not !==", () => {
        expect(1).not.toBe(2)
    })
    test("toBeDefined != undefined", () => {
        expect(1).toBeDefined()
        expect(undefined).toBeUndefined()
    })

    test("toBeTruthy", function () {
        expect(true).toBeTruthy()
        expect(false).not.toBeTruthy()
    })

    test("false", function () {
        expect(false).toBeFalsy()
        expect(true).not.toBeFalsy()
        expect('').toBeFalsy()
    })

    test("null", function () {
        expect(null).toBeNull()
    })

    test("NaN", function () {
        expect(NaN).toBeNaN()
    })

    test("toBeTypeOf", function () {
        expect('').toBeTypeOf('string')
        expect(Symbol('')).toBeTypeOf('symbol')
    })

    test('toEqual', () => {
        expect({}).not.toBe({})
        expect({}).toEqual({})
        expect({a: undefined}).toEqual({})
        expect({a: undefined}).not.toStrictEqual({})
    })

    test('toContain', () => {
        expect(['a', 'b', {}]).toContain('a')
        expect(['a', 'b', {}]).toContainEqual({})
    })

    test('promise',async () => {
        await expect(fn(true)).resolves.toBe(1)
        await expect(fn(false)).rejects.toBe(2)
    })
})