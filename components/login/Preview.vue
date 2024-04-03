<script lang="ts" setup>
import { loginViewState } from '@/config/login';
import UiButton from '@/components/ui/Button.vue';

const emit = defineEmits(['change-view']);

const { t } = useI18n();
</script>

<template>
    <div class="login-preview">
        <p class="login-preview__desc">
            {{ t('login_page.preview_description') }}
        </p>

        <UiButton
            type="button"
            class="login-preview__btn"
            @click="emit('change-view', loginViewState.FORM)"
        >
            {{ t('ui.continue') }}
        </UiButton>
    </div>
</template>

<style lang="scss">
.login-preview {
    position: relative;

    &__desc {
        margin-bottom: 16px;
        font-size: 16px;
        font-weight: var(--f-weight-regular);
        line-height: 24px;
        color: var(--text-color);
    }
}
</style>
