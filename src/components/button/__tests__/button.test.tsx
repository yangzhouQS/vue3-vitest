import {describe, expect, test, it} from 'vitest'
import {mount} from '@vue/test-utils'
import {QBtn} from "../index.tsx";
import {defineComponent,ref} from 'vue'

export const Comp = defineComponent({
    name: 'Comp',
    setup() {
        const count = ref(0)

        return () => {
            return <QBtn onClick={() => count.value += 1}>
                hello {count.value}
            </QBtn>
        };
    }
});
describe("按钮单元测试", () => {
    test("props type 测试", function () {
        const btn = mount(QBtn, {
            props: {
                type: "primary"
            }
        })
        expect(btn).toBeTruthy()

        expect(btn.classes()).toContain('q-btn--primary')
        expect(btn.classes()).not.toContain('q-btn--primara')
        console.log(btn.html());
        expect(btn.html()).toContain('q-btn--primary')
    })

    test("props size 测试", function () {
        const btn = mount(QBtn, {
            props: {
                type: "primary",
                size: 'small'
            }
        })
        expect(btn).toBeTruthy()
        expect(btn.classes()).toContain('q-btn--small')
    })

    test("props slot 测试", function () {
        const btn = mount(QBtn, {
            props: {
                type: "primary",
                size: 'small'
            },
            slots: {
                default: "hello"
            }
        })
        expect(btn).toBeTruthy()
        console.log(btn.text());
        expect(btn.text()).toBe('hello')
    })

    it("按钮点击事件 click", async function () {
        const btn = mount(Comp)
        expect(btn).toBeTruthy()

        await btn.trigger('click')
        expect(btn.text()).toBe('hello 1')
        await btn.trigger('click')
        expect(btn.text()).toBe('hello 2')
        console.log(btn.text());
    })

    it("class", async function () {
        const btn = mount(QBtn,{
            attrs:{
                className: ['btn-item'],
                style:{
                    background: '#333'
                }
            }
        })
        expect(btn.classes()).not.toContain('btn-item')
        // console.log(btn.attributes('style'));
    })
})