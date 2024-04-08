/**
 * Создаем инстанс фетча
 */
export const fetch = $fetch.create({
    baseURL: '/api',
    onRequest({ options }) {
        options.headers = {
            ...options.headers,
        };
    },
});
