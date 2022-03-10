const OFF = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
    },
    parser: '@typescript-eslint/parser',
    plugins: ['react', 'react-hooks', '@typescript-eslint', 'jsx-a11y'],
    extends: [
        'airbnb',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'eslint:recommended',
        'next',
        'next/core-web-vitals',
    ],
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2018,
        ecmaFeatures: {
            jsx: true,
        },
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        indent: [ERROR, 4],
        quotes: [ERROR, 'single'],
        semi: [ERROR, 'always'],
        'react/jsx-indent': [ERROR, 4],
        'react/jsx-indent-props': [ERROR, 4],
        'react/jsx-max-props-per-line': [ERROR, { maximum: 1 }],
        'react/jsx-filename-extension': [ERROR, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
        'react-hooks/rules-of-hooks': ERROR,
        'react/jsx-wrap-multilines': ERROR,
        '@typescript-eslint/no-shadow': ERROR,
        '@typescript-eslint/no-unused-expressions': ERROR,
        'react-hooks/exhaustive-deps': WARNING,
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error'],
        'max-len': OFF,
        'linebreak-style': OFF,
        camelcase: OFF,
        'no-unused-expressions': OFF,
        'no-use-before-define': OFF,
        'no-shadow': OFF,
        'import/no-unresolved': OFF,
        'import/extensions': OFF,
        'import/prefer-default-export': OFF,
        'react/require-default-props': OFF,
        'react/jsx-props-no-spreading': OFF,
        'react/react-in-jsx-scope': OFF,
        'react/no-array-index-key': OFF,
        '@typescript-eslint/no-inferrable-types': OFF,
        '@typescript-eslint/explicit-function-return-type': OFF,
        '@typescript-eslint/explicit-module-boundary-types': OFF,
        '@typescript-eslint/ban-ts-ignore': OFF,
        '@typescript-eslint/no-var-requires': OFF,
        '@typescript-eslint/no-explicit-any': OFF,

    },
};
