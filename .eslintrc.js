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
    env: {
        node: true,
        browser: true,
        amd: true,
    }
};
