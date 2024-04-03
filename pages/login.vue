<script lang="ts" setup>
import LoginPreview from '@/components/login/Preview.vue';

definePageMeta({
    layout: 'empty',
});
</script>

<template>
    <div class="login-page">
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
    min-height: 100vh;

    &__wrapper {
        width: 100%;
        max-width: 400px;
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
