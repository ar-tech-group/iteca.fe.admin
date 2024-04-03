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
}
</style>
