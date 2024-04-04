<script lang="ts" setup>
import { ref, computed } from '#imports';
import { loginViewState } from '@/config/login';
import LangSelect from '@/components/common/LangSelect.vue';
import LoginPreview from '@/components/login/Preview.vue';
import LoginForm from '@/components/login/form/Form.vue';
import LoginFormReset from '@/components/login/form/Reset.vue';

definePageMeta({
    layout: 'empty',
});

const url = process.env.API_URL;

const currView = ref<string>(loginViewState.PREVIEW);

const isPreview = computed(() => currView.value === loginViewState.PREVIEW);
const isForm = computed(() => currView.value === loginViewState.FORM);

/**
 * Сменить текущий вид
 *
 * @param {string} value
 */
const changeCurrentView = (value: string) => {
    if (currView.value === value) return;

    if (value === loginViewState.FORM) {
        currView.value = loginViewState.FORM;

        return;
    }

    currView.value = value;
};
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

            {{ url }}

            <LoginPreview
                v-if="isPreview"
                @change-view="changeCurrentView"
            />

            <LoginForm
                v-else-if="isForm"
                @change-view="changeCurrentView"
            />

            <LoginFormReset
                v-else
            />
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
