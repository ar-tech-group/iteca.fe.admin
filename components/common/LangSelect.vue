<script lang="ts" setup>
import { ref, useI18n, useSwitchLocalePath } from '#imports';
import type { LocaleObject } from '@nuxtjs/i18n';
import { localeName } from '@/config/constants';
import UiIcon from '@/components/ui/Icon.vue';

const { locales, locale } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const isShowOptions = ref<boolean>(false);

/**
 * Показать/Скрыть опции
 *
 * @param {boolean} value
 */
const toggleOptions = (value: boolean) => {
    isShowOptions.value = value;
};
</script>

<template>
    <div class="lang-select">
        <label
            class="lang-select__label"
            :class="{ 'lang-select__label--active': isShowOptions }"
        >
            {{ localeName[locale] }}

            <UiIcon
                name="icon-arrow-down"
            />

            <input
                name="lang-select"
                type="checkbox"
                class="lang-select__inp"
                @focus="toggleOptions(true)"
                @blur="toggleOptions(false)"
            >
        </label>

        <transition name="fade">
            <ul
                v-if="isShowOptions"
                class="lang-select-options"
            >
                <nuxt-link
                    v-for="item in (locales as LocaleObject[])"
                    v-slot="{ href, navigate }"
                    :key="item.code"
                    :to="switchLocalePath(item.code) || '/'"
                    custom
                >
                    <li class="lang-select-options__item">
                        <a
                            :href="href"
                            class="lang-select-options__item-link"
                            :class="{ 'lang-select-options__item-link--active': item.code === locale }"
                            @click="navigate"
                        >
                            {{ item.name }}
                        </a>
                    </li>
                </nuxt-link>
            </ul>
        </transition>
    </div>
</template>

<style lang="scss">
.lang-select {
    position: relative;
    width: 100%;
    max-width: 120px;

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

        &:hover,
        &--active {
            color: var(--orange);
        }
    }

    &__inp {
        @include visually-hidden();
    }
}

.lang-select-options {
    @include list-reset();

    position: absolute;
    top: calc(100% + 8px);
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    border-radius: var(--radius);
    border: 1px solid rgba(0, 0, 0, 0.08);
    background-color: var(--white);
    z-index: 99;

    &__item {
        padding: 12px 8px;
        cursor: pointer;

        &:hover {
            .lang-select-options__item-link {
                color: var(--orange);
            }
        }
    }

    &__item-link {
        font-size: 16px;
        font-weight: var(--f-weight-regular);
        line-height: 24px;
        text-decoration: none;
        color: var(--black-primary);
        transition: color 0.5s ease;

        &--active {
            color: var(--orange);
        }
    }
}
</style>
