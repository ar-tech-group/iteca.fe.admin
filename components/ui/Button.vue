<script lang="ts" setup>
import { computed, useAttrs } from '#imports';
import type { ButtonThemeType } from '@/types/ui/Button';

withDefaults(defineProps<{
    type: string;
    label?: string;
    theme?: ButtonThemeType;
    disabled?: string;
}>(), {
    type: 'button',
});

const attrs = useAttrs();

/**
 * Тип компоненты
 */
const component = computed(() => {
    let component = 'button';

    if (attrs?.to) {
        component = 'nuxt-link';
    }

    if (attrs?.href) {
        component = 'a';
    }

    return component;
});
</script>

<template>
    <component
        v-bind="attrs"
        ref="button"
        :is="component"
        :type="component === 'button' ? type : null"
        :disabled="disabled || undefined"
        class="ui-button"
        :class="{
            'ui-button--disabled': disabled,
            [`ui-button--${theme}`]: theme
        }"
    >
        <slot name="default">
            {{ label }}
        </slot>
    </component>
</template>

<style lang="scss">
.ui-button {
    @include button-reset();

    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 44px;
    padding: 0 16px;
    font-size: inherit;
    line-height: inherit;
    text-decoration: none;
    border-radius: var(--radius);
    border: 1px solid transparent;
    background-color: var(--orange);
    color: var(--white);
    transition: background-color 0.5s ease, color 0.5s ease;

    &:hover,
    &:active {
        background-color: var(--orange-light);
    }

    &:disabled,
    &--disabled {
        pointer-events: none;
        box-shadow: none;
        background-color: var(--disabled-color);
        border-color: rgba(28, 25, 24, 0.1);
        color: var(--gray);

        &:hover,
        &:focus {
            color: var(--gray);
        }
    }
}
</style>
