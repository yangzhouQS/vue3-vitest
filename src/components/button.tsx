import {defineComponent} from 'vue';
import "./style.css"

export const ElButton = defineComponent({
    name: 'ElButton',
    emits: ['click'],
    // inheritAttrs: false,
    props: {
        size: {
            type: String, // default / large / small
            default: 'default'
        },

        type: {
            type: String, // 'primary'| 'success'| 'warning'| 'danger'| 'info'
            default: 'default'
        },

        disabled: {
            type: Boolean,
            default: false
        }

    },
    setup(props, {slots, emit}) {
        return () => {
            return <button
                onClick={(e) => emit('click', e)}
                class={[
                    'el-button',
                    `el-button--${props.size}`,
                    `el-button--${props.type}`,
                    {
                        'is-disabled': props.disabled
                    }
                ]}
            >
                {slots.default?.()}
            </button>;
        };
    }
});
