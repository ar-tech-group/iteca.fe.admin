<script lang="ts" setup>
import { ref, computed } from '#imports';
import { loginViewState, loginFormViewState } from '@/config/login';
import UiButton from '@/components/ui/Button.vue';
import UiInput from '@/components/ui/Input.vue';
import UiIcon from '@/components/ui/Icon.vue';

const emit = defineEmits(['change-view']);

const { t } = useI18n();

const email = ref<string>('');
const password = ref<string>('');
const currentView = ref<string>(loginFormViewState.EMAIL);
const isShowPassword = ref<boolean>(false);

const isEmail = computed(() => currentView.value === loginFormViewState.EMAIL);
const passwordInputType = computed(() => isShowPassword.value ? 'text' : 'password');

/**
 * Сменить текущий вид формы
 *
 * @param {string} value
 */
const changeCurrentView = (value: string) => {
    if (currentView.value === value) return;

    currentView.value = value;
};

/**
 * Переключить видимость пароля
 */
const toggleShowPassword = () => {
    isShowPassword.value = !isShowPassword.value;
};

/**
 * Отправить данные на сервер
 */
const send = () => {
    console.log('email', email.value);
    console.log('password', password.value);
};
</script>

<template>
    <form
        class="login-form"
        @submit.prevent="send"
    >
        <div
            v-if="isEmail"
            class="login-form__inp-wrap"
        >
            <p class="login-form__text">
                {{ t('login_form.email.desk') }}
            </p>

            <UiInput
                v-model:modelValue="email"
                type="text"
                name="login-form-email"
                classes="login-form__inp"
                :placeholder="t('login_form.email.placeholder')"
            />

            <UiButton
              type="button"
              class="login-form__btn"
              :disabled="email.length <= 0"
              @click="changeCurrentView(loginFormViewState.PASSWORD)"
            >
                {{ t('ui.continue') }}
            </UiButton>
        </div>

        <div
            v-else
            class="login-form__inp-wrap"
        >
            <p class="login-form__text">
                {{ t('login_form.password.desk') }}
            </p>

            <UiInput
                v-model:modelValue="password"
                :type="passwordInputType"
                name="login-form-password"
                classes="login-form__inp"
                :placeholder="t('login_form.password.placeholder')"
            >
                <template #iconAfter>
                    <UiIcon
                        v-if="!isShowPassword"
                        name="icon-eye"
                        class="login-form__inp-icon"
                        @click="toggleShowPassword"
                    />

                    <UiIcon
                        v-else
                        name="icon-eye-off"
                        class="login-form__inp-icon"
                        @click="toggleShowPassword"
                    />
                </template>
            </UiInput>

            <UiButton
                type="submit"
                class="login-form__btn login-form__btn--submit"
                :disabled="password.length <= 0"
            >
                {{ t('ui.sign_in') }}
            </UiButton>

            <UiButton
                type="button"
                theme="transparent"
                class="login-form__btn--reset"
                @click="emit('change-view', loginViewState.RESET)"
            >
                {{ t('ui.forgot_password') }}
            </UiButton>
        </div>
    </form>
</template>

<style lang="scss">
.login-form {
    position: relative;

    &__text {
        margin-bottom: 16px;
        font-size: 16px;
        font-weight: var(--f-weight-regular);
        line-height: 24px;
        color: var(--black-primary);
    }

    &__inp {
        margin-bottom: 16px;
    }

    &__inp-icon {
        cursor: pointer;

        svg {
            transition: fill 0.5s ease;

            &:hover {
                fill: var(--orange);
            }
        }
    }

    &__btn {
        &--submit {
            margin-bottom: 16px;
        }
    }
}
</style>
