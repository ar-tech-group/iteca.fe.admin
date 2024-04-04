<script lang="ts" setup>
import { ref } from '#imports';
import UiIcon from '@/components/ui/Icon.vue';
import UiLogoutBtn from '@/components/ui/LogoutBtn.vue';

const { t } = useI18n();

const isActive = ref<boolean>(false);

/**
 * Показать/Скрыть опции
 *
 * @param {boolean} value
 */
const toggleActive = (value: boolean) => {
    isActive.value = value;
};
</script>

<template>
    <div class="profile-select">
        <label
            for="profile-select"
            class="profile-select__label"
        >
            <UiIcon
                name="icon-profile"
                class="profile-select__icon"
                :class="{ 'profile-select__icon--profile': true }"
            />

            {{ t('ui.profile') }}

            <UiIcon
                name="icon-arrow-down"
                class="profile-select__icon"
                :class="{
                    'profile-select__icon--arrow': true,
                    'profile-select__icon--active': isActive
                }"
            />

            <input
                id="profile-select"
                type="checkbox"
                name="profile-select"
                class="profile-select__field"
                @focus="toggleActive(true)"
                @blur="toggleActive(false)"
            >
        </label>

        <transition name="fade">
            <div
                v-if="isActive"
                class="profile-select-options"
            >
                <UiLogoutBtn />
            </div>
        </transition>
    </div>
</template>

<style lang="scss">
.profile-select {
    position: relative;
    margin-right: 24px;
    padding: 0 8px;

    &__label {
        display: flex;
        align-items: center;
        cursor: pointer;
        color: var(--black-primary);
        transition: color 0.5s ease;

        &:hover,
        &:active {
            color: var(--orange);
        }
    }

    &__icon {
        transition: transform 0.5s ease;

        &--profile {
            margin-right: 8px;
        }

        &--arrow {
            margin-left: 8px;
        }

        &--active {
            transform: rotate(-180deg);
        }
    }

    &__field {
        @include visually-hidden();
    }
}

.profile-select-options {
    position: absolute;
    top: calc(100% + 8px);
    left: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 8px;
    border-radius: var(--radius);
    background-color: var(--white);
    box-shadow: 0 2px 5px 0 rgba(28, 25, 24, 0.08);
}
</style>
