import { defineStore, acceptHMRUpdate } from 'pinia';
import Cookies from 'js-cookie';

/**
 * Store c глобальными значениями для проекта.
 */
export const useGlobalStore = defineStore('global', () => {
    const lang = ref(useCookie('i18n_redirected').value || 'ru');
    const company_code = ref<string | null>(useCookie('company_code').value || null);

    /**
     * Устанавливаем код компании.
     *
     * @param {string} value - Код компании
     */
    const setCompanyCode = (value: string): void => {
        company_code.value = value;

        Cookies.set('company_code', value);
    };

    return {
        lang,
        company_code,
        setCompanyCode,
    };
});

// для работы HMR
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useGlobalStore, import.meta.hot));
}
