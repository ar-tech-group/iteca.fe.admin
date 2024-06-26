<script lang="ts" setup>
import { ref, useI18n, useSwitchLocalePath } from '#imports';
import type { LocaleObject } from '@nuxtjs/i18n';
import { localesName } from '@/config/locales';
import UiIcon from '@/components/ui/Icon.vue';

const { locales, locale } = useI18n();
const switchLocalePath = useSwitchLocalePath();

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
            :class="{ 'lang-select__label--desktop': true }"
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

        <label
            for="lang-select"
            class="lang-select__label"
            :class="{ 'lang-select__label--mobile': true }"
            @click="isActive = !isActive"
        >
            {{ localesName[locale] }}

            <UiIcon
                name="icon-arrow-down"
                class="lang-select__label-icon"
                :class="{ 'lang-select__label-icon--active': isActive }"
            />
        </label>

        <transition name="fade">
            <ul
                v-if="isActive"
                class="lang-select-suggests"
            >
                <nuxt-link
                    v-for="item in (locales as LocaleObject[])"
                    v-slot="{ href, navigate }"
                    :key="item.code"
                    :to="switchLocalePath(item.code) || '/'"
                    custom
                >
                    <li class="lang-select-suggests__item">
                        <a
                            :href="href"
                            class="lang-select-suggests__item-link"
                            :class="{ 'lang-select-suggests__item-link--active': item.code === locale }"
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
    &__label {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        min-width: 120px;
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

        &--desktop {
            display: none;

            @media (min-width: 1200px) {
                display: flex;
            }
        }

        &--mobile {
            display: none;

            @media (max-width: 1200px) {
                display: flex;
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

.lang-select-suggests {
    @include list-reset();

    position: absolute;
    top: calc(100% + 8px);
    left: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    z-index: 99;

    &__item-link {
        display: block;
        padding: 8px 0;
        text-decoration: none;
        color: var(--black-primary);
        transition: color 0.5s ease;

        &:hover,
        &--active {
            color: var(--orange);
        }
    }
}
</style>
