/**
 * Конфигурация приложения
 *
 * @link https://nuxt.com/docs/api/configuration/nuxt-config
 */
export default defineNuxtConfig({
    app: {
        head: {
            charset:  'utf-8',
            viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0',
            title:    'Iteca.Events',
        }
    },
    css: [
        '@/assets/scss/_global.scss',
    ],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `
                        @use "@/assets/scss/_variables.scss" as *;
                        @use "@/assets/scss/_mixins.scss" as *;
                        @use "@/assets/scss/_fonts.scss" as *;
                    `,
                },
            },
        },
    },
    runtimeConfig: {
        apiBaseUrl: process.env.API_URL,
        public:     {
            mode: process.env.MODE,
        },
    },
    modules: [
        [
            '@nuxtjs/i18n',
            {
                locales: [
                    {
                        code: 'ru',
                        name: 'Русский',
                    },
                    {
                        code: 'en',
                        name: 'English',
                    },
                ],
                defaultLocale: 'ru',
                strategy:      'prefix_except_default',
            },
        ],
    ],
    postcss: {
        plugins: {
            'postcss-preset-env': {},
        },
    },
    devtools: {
        enabled: true
    },
});
