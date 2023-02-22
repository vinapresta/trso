<template>
    <component :is="tag" v-bind="$attrs" :class="classes">
        <slot />
    </component>
</template>

<script setup>

    const props = defineProps({
        tag: String,
        tagStyle: {
            type: String,
            required: false,
            default: 'h1',
            validator: (value) => ['h1', 'h2', 'h3', 'h4', 'item', 'pageTitle'].includes(value),
        },
    })

    const classes = computed(() => {

        const styleClasses = {
            h1: 'uppercase pb-4 md:pb-8 text-2xl font-medium text-brand-blue tracking-tighter leading-none',
            h2: 'pb-2 md:pb-4 text-2xl text-brand-blue font-medium tracking-tighter leading-none',
            h3: 'text-xl leading-none text-brand-blue font-normal',
            h4: 'pb-2 text-3xl font-bold tracking-tighter leading-none',
            item: 'w-full py-2 font-bold',
            pageTitle: 'pb-2 text-lg font-bold tracking-tighter leading-none',
        }

        return ` ${styleClasses[props.tagStyle]}`;

    });

</script>
