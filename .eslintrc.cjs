module.exports =  {
    root: true,
    env:  {
        browser: true,
        es2021:  true,
        node:    true
    },
    extends: [
        'plugin:vue/vue3-essential',
        '@vue/typescript/recommended',
    ],
    plugins: [
        'import-newlines',
    ],
    parserOptions: {
        tsconfigRootDir: __dirname,
        ecmaVersion:     2021,
    },
    rules: {
        'no-console':  process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'semi':        ['error', 'always'],
        'quotes':      ['error', 'single'],
        'key-spacing': [
            'error',
            {
                'align': 'value'
            }
        ],
        'vue/max-attributes-per-line': [
            'error',
            {
                singleline: 1,
            },
        ],
        'import-newlines/enforce': [
            'error',
            {
                items:     3,
                'max-len': 120,
            },
        ],
        'import/prefer-default-export': ['off'],
    },
    overrides: [
        {
            files: [
                '**/*.{ts,tsx,vue}',
            ],
            rules: {
                'no-undef':             'off',
                'import/no-unresolved': 'off',
            },
        },
        {
            files: [
                '**/*.vue',
            ],
            rules: {
                'vue/multi-word-component-names': 'off',
            },
        },
    ],
    globals: {
        defineProps: 'readonly',
        defineEmits: 'readonly',
    },
};
