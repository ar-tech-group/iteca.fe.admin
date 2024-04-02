<script lang="ts" setup>
import { ref, computed, useRouter } from '#imports';
import { authenticate } from '@/api/auth';
import { login } from '@/helpers/auth';
import { loginFormViewState } from '@/config/login';
import LoginFormEmail from '@/components/login/form/components/Email.vue';
import LoginFormPassword from '@/components/login/form/components/Password.vue';

const email = ref<string>('');
const password = ref<string>('');
const isLoading = ref<boolean>(false);
const viewForm = ref<number>(loginFormViewState.EMAIL);

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

/**
 * Отправить данные на сервер
 */
const send = async () => {
    isLoading.value = true;

    const res = await authenticate(email.value, password.value);

    if (res) {
        isLoading.value = false;

        login(res.access_token);
    }
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
            @send-data="send"
        />
    </form>
</template>
