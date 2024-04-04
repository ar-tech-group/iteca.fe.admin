<script lang="ts" setup>
import { useRouter } from '#imports';
import { logout } from '@/helpers/auth';
import UiIcon from '@/components/ui/Icon.vue';

const { t } = useI18n();
const localePath = useLocalePath();
const router = useRouter();

/**
 * Обработчик клика по кнопке выйти.
 */
const handleClick = () => {
    logout();

    router.replace({ path: localePath('/login') });
};
</script>

<template>
    <button
        type="button"
        class="ui-logout-btn"
        @click="handleClick"
    >
        <UiIcon
            name="icon-logout"
            class="ui-logout-btn__icon"
        />

        {{ t('ui.log_out') }}
    </button>
</template>

<style lang="scss">
.ui-logout-btn {
    @include button-reset();

    position: relative;
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: var(--f-weight-regular);
    line-height: 24px;
    color: var(--black-primary);
    transition: color 0.5s ease;

    &__icon {
        margin-right: 8px;
    }

    &:hover,
    &:active {
        color: var(--orange);
    }
}
</style>
