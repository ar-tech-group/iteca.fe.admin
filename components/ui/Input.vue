<script lang="ts" setup>
import { ref, watch } from '#imports';

const props = defineProps<{
    type: string,
    name: string,
    modelValue: string | number,
}>();

const emit = defineEmits(['update:modelValue']);

const value = ref<string>(String(props.modelValue));

/**
 * Обновление значения.
 *
 * @param {string} val
 */
const updateValue = (val: string): void => {
    value.value = val;

    emit('update:modelValue', val);
};

/**
 * Обработка ввода.
 *
 * @param {Event} e
 */
const handleInput = (e: Event) => {
    const target = e.target as HTMLInputElement | null;

    if (target === null || target.value === value.value) {
        return;
    }

    updateValue(target.value);
};

/**
 * Хэдлинг вставки в инпут.
 *
 * @param {Event} e
 */
const handlePaste = (e: Event) => {
    setTimeout(() => {
        handleInput(e);
    }, 0);
};

watch(() => props.modelValue, (next) => { value.value = String(next); }, { immediate: true });
</script>

<template>
    <div class="ui-input">
        <label
            :for="name"
            :class="{
                'ui-input__wrap': true,
            }"
        >
            <input
                v-bind="$attrs"
                :id="name"
                ref="input"
                :value="value"
                :type="type"
                class="ui-input__field"
                @input="handleInput"
                @paste="handlePaste"
                @drop.prevent
            >
        </label>
    </div>
</template>

<style lang="scss">
.ui-input {
    position: relative;
    display: inline-block;
    vertical-align: top;
    width: 100%;
    margin: 0;
    font-weight: inherit;

    &__wrap {
        position: relative;
        display: flex;
        width: 100%;
        height: 100%;
        border-radius: var(--radius);
        border: 1px solid rgba(28, 25, 24, 0.2);
        background-clip: padding-box;
        background-color: var(--white);
        color: var(--black-primary);
    }

    &__field {
        display: block;
        width: 100%;
        height: 44px;
        padding: 10px 0 10px 16px;
        font-family: inherit;
        font-size: 16px;
        font-weight: inherit;
        line-height: 24px;
        border: none;
        background-color: transparent;
        appearance: none;

        &[type="search"] {
            &,
            &::-webkit-search-decoration {
                appearance: none;
            }

            &::-webkit-search-decoration,
            &::-webkit-search-cancel-button,
            &::-webkit-search-results-button,
            &::-webkit-search-results-decoration {
                display: none;
            }
        }

        &::-ms-reveal,
        &::-ms-clear {
            display: none;
        }

        &:focus {
            outline: none;
        }

        &::placeholder {
            color: var(--gray);
        }
    }
}
</style>
