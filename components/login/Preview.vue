<script lang="ts" setup>
import { loginViewState } from '@/config/login';
import UiButton from '@/components/ui/Button.vue';

const { t } = useI18n();
</script>

<template>
    <div class="login-preview">
        <p class="login-preview__text">
            {{ t('loginpage.preview.text') }}
        </p>

        <UiButton
            type="button"
            class="login-preview__btn"
            @click="$emit('toggle-view', loginViewState.FORM)"
        >
            {{ t('ui.continue') }}
        </UiButton>
    </div>
</template>

<style lang="scss">
.login-preview {
    position: relative;

    &__text {
        margin-bottom: 16px;
        font-size: 16px;
        font-weight: var(--f-weight-regular);
        line-height: 24px;
        color: var(--black-primary);
    }
}
</style>
