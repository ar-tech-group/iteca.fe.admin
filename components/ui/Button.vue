<script lang="ts" setup>
import { computed, useAttrs } from '#imports';
import type { ButtonThemeType } from '@/types/ui/Button';
import UiLoader from '@/components/ui/Loader.vue';

withDefaults(defineProps<{
    type: string;
    label?: string;
    theme?: ButtonThemeType;
    disabled?: boolean;
    isLoading?: boolean;
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
            [`ui-button--${theme}`]: theme,
            'is-loading': isLoading,
        }"
    >
        <slot name="default">
            {{ label }}
        </slot>

        <div
            v-if="isLoading"
            class="ui-button__loader"
        >
            <UiLoader
                :scale="0.7"
                color="orange"
            />
        </div>
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

    &--transparent {
        background-color: transparent;
        color: var(--orange);

        &:hover {
            background-color: transparent;
            color: var(--orange-light);
        }
    }

    &__loader {
        position: absolute;
        left: 0;
        right: 0;
        top: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 36px;
        margin: auto;
        transform-origin: center;
        transform: translateY(-50%);
    }

    &.is-loading {
        color: transparent;
        user-select: none;
        pointer-events: none;
        border-color: rgba(28, 25, 24, 0.1);
        background-color: var(--white-darkest);
        box-shadow: none;
    }
}
</style>
