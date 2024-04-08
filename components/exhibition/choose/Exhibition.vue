<script lang="ts" setup>
import { ref, useRouter } from '#imports';
import { useGlobalStore } from '@/store/global';
import { getListPastExhibitions } from '@/api/exhibition';
import type { ExhibitionItemType } from '@/types/Exhibition';
import ExhibitionSlider from '@/components/exhibition/choose/ExhibitionSlider.vue';
import ExhibitionListSkeleton from '@/components/exhibition/choose/ExhibitionListSkeleton.vue';

const { t } = useI18n();
const localePath = useLocalePath();

const router = useRouter();

const globalStore = useGlobalStore();

const isLoading = ref<boolean>(false);
const list = ref<ExhibitionItemType[]>([]);

/**
 * Получить список выставок.
 */
const getPastExhibition = async () => {
    try {
        isLoading.value = true;

        const res = await getListPastExhibitions(String(globalStore.company_code));

        const { ExhibList } = JSON.parse(String(res));

        list.value = ExhibList;
    } catch (error) {
        console.warn(error);
    } finally {
        isLoading.value = false;
    }
};

getPastExhibition();

/**
 * Обработчик клика по слайду.
 */
const handleClickSlide = () => {
    router.replace({ path: localePath('/')});
};
</script>

<template>
    <div class="choose-exhibition">
        <h2 class="choose-exhibition__title">
            {{ t('exhibition_page.choose_exhibition.title') }}
        </h2>

        <ExhibitionListSkeleton
            v-if="isLoading && list.length <= 0"
        />

        <ExhibitionSlider
            v-else
            :list="list"
            @click-to-slide="handleClickSlide"
        />
    </div>
</template>

<style lang="scss">
.choose-exhibition {
    position: relative;

    &__title {
        margin-bottom: 24px;
        font-size: 24px;
        font-weight: var(--f-weight-semi);
        line-height: 36px;
        text-align: center;
        color: var(--black-primary);
    }
}
</style>
