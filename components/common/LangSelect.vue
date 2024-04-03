<script lang="ts" setup>
import { ref } from '#imports';
import { localesName } from '@/config/locales';
import UiIcon from '@/components/ui/Icon.vue';

const { locale } = useI18n();

const isActive = ref<boolean>(false);

/**
 * Переключаем флаг активности
 *
 * @param {boolean} value
 */
const toggleActive = (value: boolean) => {
    isActive.value = value;
};
</script>

<template>
    <div
        tabindex="0"
        class="lang-select"
    >
        <label
            for="lang-select"
            class="lang-select__label"
        >
            {{ localesName[locale] }}

            <UiIcon
                name="icon-arrow-down"
                class="lang-select__label-icon"
                :class="{ 'lang-select__label-icon--active': isActive }"
            />

            <input
                id="lang-select"
                name="lang-select"
                type="checkbox"
                class="lang-select__inp"
                @focus="toggleActive(true)"
                @blur="toggleActive(false)"
            >
        </label>
    </div>
</template>

<style lang="scss">
.lang-select {
    &__label {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 16px;
        font-weight: var(--f-weight-regular);
        line-height: 24px;
        color: var(--black-primary);
        cursor: pointer;
        transition: color 0.5s ease;

        &:hover {
            color: var(--orange);

            .lang-select__label-icon svg {
                fill: var(--orange);
            }
        }
    }

    &__label-icon  {
        margin-left: 8px;
        transition: transform 0.5s ease;

        svg {
            fill: var(--black-primary);
            transition: fill 0.5s ease;
        }

        &--active {
            transform: rotate(-180deg);
        }
    }

    &__inp {
        @include visually-hidden();
    }
}
</style>
