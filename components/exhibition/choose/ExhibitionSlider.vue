<script lang="ts" setup>
import { computed } from '#imports';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import type { ExhibitionItemType } from '@/types/Exhibition';
import UiIcon from '@/components/ui/Icon.vue';

defineProps<{
    list: ExhibitionItemType[];
}>();

const emit = defineEmits(['click-to-slide']);

const options = computed(() => ({
    type:       'loop',
    perPage:    4,
    perView:    1,
    rewind:     true,
    pagination: false,
    gap:        20,
}));
</script>

<template>
    <Splide
        v-if="list.length > 0"
        :options="options"
        class="choose-exhibition-slider"
    >
        <SplideSlide
            v-for="item in list"
            :key="item.title"
            class="choose-exhibition-slider__slide"
            @click="emit('click-to-slide')"
        >
            <div class="choose-exhibition-slider__slide-img">
                <img
                    v-if="item.image_profile.length"
                    :src="item.image_profile"
                    :alt="item.title"
                >

                <UiIcon
                    v-else
                    name="icon-image"
                />
            </div>

            <p class="choose-exhibition-slider__slide-title">
                {{ item.title }}
            </p>
        </SplideSlide>
    </Splide>
</template>

<style lang="scss">
.choose-exhibition-slider {
    position: relative;

    &__slide {
        width: 100%;
        cursor: pointer;
    }

    &__slide-img {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        min-height: 200px;
        margin-bottom: 16px;
        background-color: var(--white);

        img {
            max-width: 200px;
        }

        .icon svg {
            width: 60px;
            height: 60px;
        }
    }

    &__slide-title {
        font-size: 14px;
        font-weight: var(--f-weight-semi);
        line-height: 20px;
        text-align: center;
        color: var(--black-primary);
    }
}
</style>
