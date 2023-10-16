import {describe, it, expect} from 'vitest'
import {mount} from '@vue/test-utils'
import {ElButton} from "../button";


import {defineComponent, ref} from 'vue';

export const Comp = defineComponent({
    name: 'Comp',
    setup() {

        const count = ref(0)

        return () => {
            return <ElButton onClick={() => count.value += 1}>
                hello {count.value}
            </ElButton>
        };
    }
});

describe("按钮test", () => {
    expect(ElButton).toBeTruthy()
    it("按钮测试渲染", () => {
        const renderButton = mount(ElButton)
        expect(renderButton).toBeTruthy()
    })
    it("按钮测试size", () => {
        const renderButton = mount(ElButton, {
            props: {
                size: 'small'
            },
            slots: {
                default: "hello"
            },
            attrs: {
                id: 'test-button',
                style:"background:red"
            }
        })
        expect(renderButton.html()).toContain('el-button--small')
        expect(renderButton.html()).toContain('id="test-button"')
    })
    it("按钮测试 slot", () => {
        const renderButton = mount(ElButton, {
            slots: {
                default: "hello"
            }
        })
        expect(renderButton.text()).toBe('hello')
    })
    it("按钮测试click", async () => {
        const renderButton = mount(Comp)
        expect(renderButton.text()).toBe('hello 0')
        await renderButton.get('button').trigger('click')
        expect(renderButton.text()).toBe('hello 1')
        await renderButton.get('button').trigger('click')
        expect(renderButton.text()).toContain('2')
        // expect(renderButton.emitted()).toBeInstanceOf(Event)
        console.log(renderButton.emitted('click'));
    })
})