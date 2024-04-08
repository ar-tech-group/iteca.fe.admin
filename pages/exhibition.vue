<script lang="ts" setup>
import ChooseExhibition from '@/components/exhibition/choose/Exhibition.vue';

definePageMeta({
    layout: 'empty',
});
</script>

<template>
    <div class="exhibition-page">
        <div class="container">
            <ChooseExhibition />
        </div>
    </div>
</template>

<style lang="scss">
.exhibition-page {
    width: 100%;
    min-height: 100svh;
    padding: 24px 0;

    @media (min-width: 1200px) {
        min-height: 100vh;
        padding: 36px 0;
    }
}
</style>
