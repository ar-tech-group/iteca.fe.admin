<script lang="ts" setup>
import { ref, computed, watch } from '#imports';
import UiInput from '@/components/ui/Input.vue';
import UiButton from '@/components/ui/Button.vue';

const emit = defineEmits(['update-password']);

const { t } = useI18n();

const value = ref<string>('');

const isDisabled = computed(() => value.value.length <= 0);

watch(value, (val) => {
    if (val.length === 0) {
        emit('update-password', '');

        return;
    }

    emit('update-password', val);
});
</script>

<template>
    <div class="login-form-password">
        <p class="login-form-password__text">
            {{ t('loginpage.form.password.text') }}
        </p>

        <UiInput
            v-model:modelValue="value"
            type="password"
            name="login-form-password"
            :placeholder="t('loginpage.form.password.placeholder')"
        />

        <UiButton
            type="button"
            class="login-form-password__btn"
            :disabled="isDisabled"
        >
            {{ t('ui.login') }}
        </UiButton>

        <UiButton
            type="button"
            theme="transparent"
            class="login-form-password__btn"
        >
            {{ t('ui.reset') }}
        </UiButton>
    </div>
</template>

<style lang="scss">
.login-form-password {
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
