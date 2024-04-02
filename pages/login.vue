<script lang="ts" setup>
import { ref, computed } from '#imports';
import { loginViewState } from '@/config/login';
import LangSelect from '@/components/common/LangSelect.vue';
import LoginPreview from '@/components/login/Preview.vue';
import LoginForm from '@/components/login/form/LoginForm.vue';

definePageMeta({
    layout: 'empty',
});

const views = ref<number>(loginViewState.PREVIEW);

const isPreview = computed(() => views.value === loginViewState.PREVIEW);

/**
 * Переключить экран
 *
 * @param {number} value
 */
const toggleView = (value: number) => {
    if (value === loginViewState.PREVIEW) return;

    views.value = loginViewState.FORM;
};
</script>

<template>
    <div class="login-page">
        <div class="login-page__wrapper">
            <LangSelect
                class="login-page__lang"
            />

            <div class="login-page__img">
                <img
                    src="@/assets/images/logo.png"
                    alt=""
                >
            </div>

            <LoginPreview
                v-if="isPreview"
                @toggle-view="toggleView"
            />

            <LoginForm
                v-else
            />

            <a
                href="https://ar-tech.group"
                class="login-page__link-info"
                target="_blank"
            >
                Powered By AR Tech Group
            </a>
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
    padding: 0 24px;

    @media (min-width: 1200px) {
        min-height: 100vh;
        padding: 0;
    }

    &__wrapper {
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 400px;
    }

    &__lang {
        position: fixed;
        top: 24px;
        right: 24px;

        @media (min-width: 1200px) {
            top: 36px;
            right: 36px;
        }
    }

    &__img {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 16px;

        img {
            width: 100%;
            max-width: 200px;
        }
    }

    &__link-info {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 24px;
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
    }
}
</style>
