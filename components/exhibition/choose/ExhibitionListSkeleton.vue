<script lang="ts" setup>
import UiSkeleton from '@/components/ui/Skeleton.vue';
</script>

<template>
    <ul class="choose-exhibition-list-skeleton">
        <li
            v-for="item in 4"
            :key="item"
            class="choose-exhibition-list-skeleton__item"
        >
            <UiSkeleton
                width="265px"
                height="200px"
            />

            <UiSkeleton
                width="265px"
                height="44px"
            />
        </li>
    </ul>
</template>

<style lang="scss">
.choose-exhibition-list-skeleton {
    @include list-reset();

    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;

    &__item {
        display: flex;
        flex-direction: column;
        gap: 16px;
        width: 100%;
        max-width: 265px;

        .ui-skeleton {
            &:first-child {
                height: 200px;
            }
        }
    }
}
</style>
