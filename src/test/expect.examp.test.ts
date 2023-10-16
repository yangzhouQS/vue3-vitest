import {test, expect, describe} from "vitest"

describe("常用断言函数使用", function () {
    test("toBe === ", function () {
        expect(1).toBe(1)
        expect(1).not.toBe(3)
    })
    test("toEqual 复杂数据类型比较 ", function () {
        expect({}).toEqual({})
        expect({a: 1}).toEqual({a: 1})
        expect({a: undefined}).toEqual({})
        expect({a: null}).not.toEqual({})
    })
    test("toStrictEqual 复杂数据类型比较 ", function () {
        expect({a: undefined}).not.toStrictEqual({})
    })
    test("基本数据类型", function () {
        expect(false).toBeFalsy()
        expect('').toBeFalsy()
        expect(null).toBeNull()
        expect(NaN).toBeNaN()
        expect(Number("aa33")).toBeNaN()
    })
})
