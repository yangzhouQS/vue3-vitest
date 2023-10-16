import {defineComponent, ref} from 'vue';

export const QBtn = defineComponent({
    name: 'QBtn',
    emits: ['click'],
    inheritAttrs: false,
    props: {
        type: {
            type: String,
            default: 'default'
        },
        size: {
            type: String, // [small,'large']
            default: 'default'
        }
    },
    setup(props, {slots, emit, attrs}) {
        debugger;
        const onClick = (e: MouseEvent) => {
            emit('click', e)
        }
        return () => {
            return <button onClick={onClick} class={[
                'q-btn',
                attrs.class,
                `q-btn--${props.type}`,
                props.size !== 'default' ? `q-btn--${props.size}` : null,
            ]}>
                {slots.default ? slots.default() : '按钮'}
            </button>;
        };
    }
});
