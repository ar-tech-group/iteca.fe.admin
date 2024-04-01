module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        "next/core-web-vitals",
    ],
    plugins: [
        'import-newlines',
    ],
    parserOptions: {
        tsconfigRootDir: __dirname,
        ecmaVersion: 2021,
    },
    rules: {
        'no-console':              process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger':             process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'semi':                    ['error', 'always'],
        'quotes':                  ['error', 'single'],
        'key-spacing':             [
            'error',
            {
                "align": "value"
            }
        ],
        'import-newlines/enforce': [
            'error',
            {
                items:     3,
                'max-len': 120,
            },
        ],
        'import/prefer-default-export': ['off'],
    }
};
