<script lang="ts" setup>
import { createSeoMeta } from '@/helpers/seo';
import SectionsList from '@/components/common/SectionsList.vue';

const { t } = useI18n();

useSeoMeta(
    createSeoMeta({
        title: t('head.main.title'),
    }),
);
</script>

<template>
    <div class="index-page">
        <div class="index-page__wrapper">
            <h2 class="index-page__title">
                {{ t('main_page.title') }}
            </h2>

            <p class="index-page__description">
                {{ t('main_page.description') }}
            </p>

            <p class="index-page__text">
                {{ t('main_page.text1') }}
            </p>

            <SectionsList />
        </div>
    </div>
</template>

<style lang="scss">
.index-page {
    position: relative;
    padding: 24px;

    &__wrapper {
        width: 100%;
        max-width: 820px;
        padding: 24px 24px 44px;
        border-radius: var(--radius);
        background-color: var(--white);
    }

    &__title {
        margin-bottom: 16px;
        font-size: 22px;
        font-weight: var(--f-weight-semi);
        line-height: 32px;
        text-align: center;
        color: var(--black-primary);
    }

    &__description {
        margin-bottom: 16px;
        font-size: 16px;
        font-weight: var(--f-weight-regular);
        line-height: 24px;
        color: var(--gray);
    }

    &__text {
        margin-bottom: 36px;
        font-size: 16px;
        font-weight: var(--f-weight-regular);
        line-height: 24px;
        color: var(--gray);
    }
}
</style>
