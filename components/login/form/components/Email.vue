<script lang="ts" setup>
import { ref, computed, watch } from '#imports';
import { loginFormViewState } from '@/config/login';
import UiInput from '@/components/ui/Input.vue';
import UiButton from '@/components/ui/Button.vue';

const emit = defineEmits(['update-email', 'toggle-view']);

const { t } = useI18n();

const value = ref<string>('');

const isDisabled = computed(() => value.value.length <= 0);

watch(value, (val) => {
    if (val.length === 0) {
        emit('update-email', '');

        return;
    }

    emit('update-email', val);
});
</script>

<template>
    <div class="login-form-email">
        <p class="login-form-email__text">
            {{ t('loginpage.form.email.text') }}
        </p>

        <UiInput
            v-model:modelValue="value"
            type="text"
            name="login-form-email"
            :placeholder="t('loginpage.form.email.placeholder')"
        />

        <UiButton
            type="button"
            class="login-form-email__btn"
            :disabled="isDisabled"
            @click="emit('toggle-view', loginFormViewState.PASSWORD)"
        >
            {{ t('ui.continue') }}
        </UiButton>
    </div>
</template>

<style lang="scss">
.login-form-email {
    position: relative;

    &__text {
        margin-bottom: 16px;
        font-size: 16px;
        font-weight: var(--f-weight-regular);
        line-height: 24px;
        color: var(--black-primary);
    }

    &__btn {
        margin-top: 16px;
    }
}
</style>
