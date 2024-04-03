<script lang="ts" setup>
import LangSelect from '@/components/common/LangSelect.vue';
import LoginPreview from '@/components/login/Preview.vue';

definePageMeta({
    layout: 'empty',
});
</script>

<template>
    <div class="login-page">
        <LangSelect
            class="login-page__lang-select"
        />

        <div class="login-page__wrapper">
            <div class="login-page__img">
                <img
                    src="@/assets/images/logo.png"
                    alt=""
                >
            </div>

            <LoginPreview />
        </div>

        <a
            href="https://ar-tech.group/ru"
            class="login-page__dev-link"
            target="_blank"
        >
            Powered By AR Tech Group
        </a>
    </div>
</template>

<style lang="scss">
.login-page {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 100svh;

    @media (min-width: 1200px) {
        min-height: 100vh;
    }

    &__lang-select {
        position: absolute;
        top: 24px;
        right: 24px;

        @media (min-width: 1200px) {
            top: 36px;
            right: 36px;
        }
    }

    &__wrapper {
        width: 100%;
        max-width: 100%;
        padding: 0 24px;

        @media (min-width: 1200px) {
            max-width: 400px;
            padding: 0;
        }
    }

    &__img {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 16px;

        img {
            width: 100%;
            max-width: 180px;
        }
    }

    &__dev-link {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 24px;
        display: block;
        width: 100%;
        font-size: 16px;
        font-weight: var(--f-weight-regular);
        line-height: 24px;
        text-align: center;
        text-decoration: none;
        color: var(--orange);
        transition: color 0.5s ease;

        &:hover {
            color: var(--orange-light);
        }

        @media (min-width: 1200px) {
            bottom: 36px;
        }
    }
}
</style>
