import { fetch } from '@/helpers/fetch';
import { encode } from '@/helpers/base64';
import { TOKEN_KEY, API_KEY } from '@/config/constants';

/**
 * Получить список прошедших выставок.
 *
 * @param {string} code - company_code код компании
 */
export const getListPastExhibitions = (code: string) => fetch('/pre-exhibition/', {
    method: 'POST',
    body:   {
        apiKey:      API_KEY,
        token:       useCookie(TOKEN_KEY).value,
        companycode: encode(code),
        lang:        useCookie('i18n_redirected').value || 'ru',
    },
});

/**
 * Получить список ближайших выставок.
 *
 * @param {string} code - company_code код компании
 */
export const getListNextExhibitions = (code: string) => fetch('/next-exhibition/', {
    method: 'POST',
    body:   {
        apiKey:      API_KEY,
        token:       useCookie(TOKEN_KEY).value,
        companycode: encode(code),
        lang:        useCookie('i18n_redirected').value || 'ru',
    },
});
