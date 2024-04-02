<script lang="ts" setup>
import { ref } from '#imports';
import { auth } from '@/api/auth';

const email = ref<string>('');
const password = ref<string>('');

const send = async () => {
    const res = await auth(email.value, password.value);

    console.log('res', res);
};
</script>

<template>
    <div class="index-page">
        <form
            @submit.prevent="send"
        >
            <input
                v-model="email"
                type="text"
            >

            <input
                v-model="password"
                type="text"
            >

            <button
                type="submit"
            >
                Отправить
            </button>
        </form>
    </div>
</template>
