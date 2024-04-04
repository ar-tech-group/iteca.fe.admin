<script lang="ts" setup>
import { computed } from '#imports';
import type { MenuItem } from '@/types/Menu';
import UiIcon from '@/components/ui/Icon.vue';

const { t } = useI18n();
const localePath = useLocalePath();

const menu = computed<Array<MenuItem>>(() => [
    {
        icon:  'icon-home',
        title: t('menu.home'),
        link:  localePath('/')
    },
    {
        icon:  'icon-doc',
        title: t('menu.document'),
        link:  localePath('/documents'),
    },
    {
        icon:  'icon-services',
        title: t('menu.services'),
        link:  localePath('/services')
    }
]);
</script>

<template>
    <ul class="menu-list">
        <li
            v-for="item in menu"
            :key="item.title"
            class="menu-list__item"
        >
            <nuxt-link
                :to="item.link"
                class="menu-list__item-link"
            >
                <UiIcon
                    :name="item.icon"
                    class="menu-list__item-link-icon"
                />

                {{ item.title }}
            </nuxt-link>
        </li>
    </ul>
</template>

<style lang="scss">
.menu-list {
    @include list-reset();

    display: flex;
    flex-direction: column;

    &__item {
        margin-bottom: 16px;
    }

    &__item-link {
        display: flex;
        align-items: center;
        padding: 8px;
        font-size: 14px;
        font-weight: var(--f-weight-regular);
        line-height: 20px;
        text-decoration: none;
        border-radius: var(--radius);
        color: var(--black-primary);
        transition: color 0.5s ease, background-color 0.5s ease;

        &:hover,
        &:active {
            background-color: var(--white-darker);
            color: var(--orange);
        }
    }

    &__item-link-icon {
        margin-right: 8px;

        svg {
            transition: fill 0.5s ease;
        }
    }
}
</style>
