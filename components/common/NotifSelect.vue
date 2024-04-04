<script lang="ts" setup>
import UiIcon from '@/components/ui/Icon.vue';
</script>

<template>
    <div class="notif-select">
        <label
            for="notif-select"
            class="notif-select__label"
        >
            <UiIcon
                name="icon-notif"
                class="notif-select__label-icon"
                :class="{ 'notif-select__label-icon--notif': true }"
            />

            <UiIcon
                name="icon-arrow-down"
                class="notif-select__label-icon"
                :class="{ 'notif-select__label-icon--arrow': true }"
            />
        </label>
    </div>
</template>

<style lang="scss">
.notif-select {
    position: relative;
    margin-left: auto;
    margin-right: 24px;

    &__label {
        display: flex;
        align-items: center;
        cursor: pointer;
        transition: color 0.5s ease;

        &:active,
        &:hover {
            color: var(--orange);
        }
    }
}
</style>
