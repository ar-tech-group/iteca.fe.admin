<script lang="ts" setup>
import { ref } from '#imports';
import debounce from 'lodash.debounce';

const { t } = useI18n();

const search = ref<string>('');

/**
 * Добавляем debounce при вводе значений в инпут
 *
 * @param {string} e
 */
const enterValue = debounce((e) => {
    search.value = e.target.value;
}, 200);
</script>

<template>
    <div class="search">
        <label
            for="search"
            class="search__wrap"
        >
            <input
                :value="search"
                type="text"
                class="search__input"
                :placeholder="t('search.input_placeholder')"
                @input="enterValue"
            >
        </label>
    </div>
</template>

<style lang="scss">
.search {
    position: relative;
    display: inline-block;
    vertical-align: top;
    width: 100%;
    max-width: 320px;
    margin: 0;

    &__wrap {
        position: relative;
        display: flex;
        width: 100%;
        height: 100%;
        border-radius: var(--radius);
        border: 1px solid rgba(28, 25, 24, 0.2);
        background-color: var(--white);
        background-clip: padding-box;
        color: var(--black-primary);
        transition: border-color 0.5s ease;

        &:focus-within {
            border-color: var(--orange);
            outline: none;
        }
    }

    &__input {
        display: block;
        width: 100%;
        height: 36px;
        padding: 10px 16px;
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
