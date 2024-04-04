<script lang="ts" setup>
import { computed } from '#imports';
import type { MenuItem } from '@/types/Menu';
import UiIcon from '@/components/ui/Icon.vue';

const { t } = useI18n();
const localePath = useLocalePath();

const menu = computed<Array<MenuItem>>(() => [
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
    <ul class="sections-list">
        <li
            v-for="item in menu"
            :key="item.title"
            class="sections-list__item"
        >
            <nuxt-link
                :to="item.link"
                class="sections-list__item-link"
            >
                <UiIcon
                    :name="item.icon"
                    class="sections-list__item-link-icon"
                />

                {{ item.title }}
            </nuxt-link>
        </li>
    </ul>
</template>

<style lang="scss">
.sections-list {
    @include list-reset();

    position: relative;
    display: flex;
    align-items: center;
    gap: 24px;

    &__item-link {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 160px;
        height: 160px;
        font-size: 16px;
        font-weight: var(--f-weight-regular);
        line-height: 24px;
        text-decoration: none;
        text-align: center;
        border-radius: var(--radius);
        border: 1px solid var(--white-darker);
        box-shadow: 0 2px 5px 0 rgba(28, 25, 24, 0.08);
        color: var(--black-primary);
        transition: box-shadow 0.5s ease, color 0.5s ease;

        &:hover,
        &:active {
            box-shadow: none;
            color: var(--orange);
        }
    }
}
</style>
