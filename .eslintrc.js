module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
    ],
    extends: ['airbnb-typescript'],
    parserOptions: {
        project: './tsconfig.json',
    },
    rules: {
        'import/prefer-default-export': 'off',
    },
    env: {
        node: true,
        browser: true,
        amd: true,
    }
};
