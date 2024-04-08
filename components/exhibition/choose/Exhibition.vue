<script lang="ts" setup>
import { ref, useRouter, onMounted } from '#imports';
import { useGlobalStore } from '@/store/global';
import { encode } from '@/helpers/base64';
import { TOKEN_KEY, API_KEY } from '@/config/constants';
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
 * Отправить данные на сервер для получения списка выставок.
 */
const sendData = () => {
    return useFetch('/api/pre-exhibition/', {
        method: 'POST',
        body:   {
            apiKey:      API_KEY,
            token:       useCookie(TOKEN_KEY).value,
            companycode: encode(String(globalStore.company_code)),
            lang:        globalStore.lang,
        },
    });
};

/**
 * Получить список выставок в которых участвовал пользователь.
 */
const getPastExhibitions = async () => {
    try {
        isLoading.value = true;

        const { data } = await sendData();

        const { ExhibList } = JSON.parse(String(data.value));

        list.value = ExhibList;
    } catch (error) {
        console.warn(error);
    } finally {
        isLoading.value = false;
    }
};

/**
 * Обработчик клика по слайду.
 */
const handleClickSlide = () => {
    router.replace({ path: localePath('/')});
};

onMounted(() => {
    getPastExhibitions();
});
</script>

<template>
    <div class="choose-exhibition">
        <h2 class="choose-exhibition__title">
            {{ t('exhibition_page.choose_exhibition.title') }}
        </h2>

        <ExhibitionListSkeleton
            v-if="isLoading || !list.length"
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
