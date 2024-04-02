<script lang="ts" setup>
import { ref, computed } from '#imports';
import { loginFormViewState } from '@/config/login';
import LoginFormEmail from '@/components/login/form/components/Email.vue';
import LoginFormPassword from '@/components/login/form/components/Password.vue';

const viewForm = ref<number>(loginFormViewState.EMAIL);
const email = ref<string>('');
const password = ref<string>('');

const isEmail = computed(() => viewForm.value === loginFormViewState.EMAIL);

/**
 * Обновить значение Email
 */
const updateEmail = (value: string) => {
    email.value = value;
};

/**
 * Обновить значение Пароль
 */
const updatePassword = (value: string) => {
    password.value = value;
};

/**
 * Переключить экран формы
 *
 * @param {number} value
 */
const toggleFormView = (value: number) => {
    if (viewForm.value === value) return;

    viewForm.value = value;
};
</script>

<template>
    <form
        class="login-form"
        @submit.prevent
    >
        <LoginFormEmail
            v-if="isEmail"
            @update-email="updateEmail"
            @toggle-view="toggleFormView"
        />

        <LoginFormPassword
            v-else
            @update-password="updatePassword"
        />
    </form>
</template>
