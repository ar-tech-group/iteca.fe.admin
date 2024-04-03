<script lang="ts" setup>
import { ref } from '#imports';
import UiInput from '@/components/ui/Input.vue';
import UiButton from '@/components/ui/Button.vue';

const { t } = useI18n();

const email = ref<string>('');
</script>

<template>
    <form
        class="login-form-reset"
        @submit.prevent
    >
        <p class="login-form-reset__desk">
            {{ t('login_form.reset.desk') }}
        </p>

        <UiInput
            v-model:modelValue="email"
            type="text"
            name="login-form-reset-email"
            classes="login-form-reset__inp"
            :placeholder="t('login_form.email.placeholder')"
        />

        <UiButton
            type="submit"
            :disabled="email.length <= 0"
            class="login-form-reset__btn"
        >
            {{ t('ui.send') }}
        </UiButton>
    </form>
</template>

<style lang="scss">
.login-form-reset {
    position: relative;

    &__desk {
        margin-bottom: 16px;
        font-size: 16px;
        font-weight: var(--f-weight-regular);
        line-height: 24px;
        color: var(--black-primary);
    }

    &__inp {
        margin-bottom: 16px;
    }
}
</style>
