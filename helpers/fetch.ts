const fetch = $fetch.create({
    baseURL: '/api',
    onRequest({ options }) {
        const { $i18n } = useNuxtApp();

        options.headers = {
            ...options.headers,
            'X-Language': $i18n.locale.value,
        };
    },
});

export default fetch;
