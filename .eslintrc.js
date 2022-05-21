const OFF = 'off';
const ERROR = 'error';

module.exports = {
  root: true,
  env: {
    browser: false,
    es6: true,
    node: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    '@react-native-community',
    // begin extends outside of default from template
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    // begin plugins outside of default from template
    'typescript-sort-keys',
    'eslint-comments',
    'react',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': [ERROR],
        'no-shadow': OFF,
        'no-undef': OFF,
        // use some typescript rules instead of the default eslint
        // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-use-before-define.md#how-to-use
        'no-use-before-define': OFF,
        '@typescript-eslint/no-use-before-define': [ERROR],
        // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unused-vars.md#how-to-use
        'no-unused-vars': OFF,
        '@typescript-eslint/no-unused-vars': [ERROR, {args: 'none'}],
        // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-duplicate-imports.md
        'no-duplicate-imports': 'off',
        '@typescript-eslint/no-duplicate-imports': [ERROR],
        // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/consistent-type-imports.md
        '@typescript-eslint/consistent-type-imports': [ERROR],
        // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/strict-boolean-expressions.md
        // TODO: why does this cause ESLint to stop working?
        // '@typescript-eslint/strict-boolean-expressions': [
        //   ERROR, {
        //     'allowString': false,
        //     'allowNumber': false,
        //     'allowNullableObject': false,
        //   },
        // ],
        // https://github.com/infctr/eslint-plugin-typescript-sort-keys
        "typescript-sort-keys/interface": ERROR,
        "typescript-sort-keys/string-enum": ERROR,
        // react specific rules
        'react/jsx-boolean-value': [ERROR, 'always'],
        'react/jsx-fragments': ERROR,
        'react/jsx-no-literals': ERROR,
        'react/jsx-no-useless-fragment': ERROR,
        'react/jsx-sort-props': ERROR,
        'react/jsx-pascal-case': [ERROR],
        'react/jsx-no-bind': ERROR,
        // various other rules outside of the template
        'curly': ERROR,
        'default-case': ERROR,
        'default-case-last': ERROR,
        'default-param-last': ERROR,
        'dot-notation': ERROR,
        'eqeqeq': [
          ERROR,
          'always',
          {
            null: 'never',
          },
        ],
        'no-await-in-loop': ERROR,
        'no-confusing-arrow': ERROR,
        'no-console': ERROR,
        'no-constant-condition': [
          ERROR,
          {
            checkLoops: false,
          },
        ],
        'no-div-regex': ERROR,
        'no-else-return': ERROR,
        'no-empty-function': ERROR,
        'no-eval': ERROR,
        'no-extend-native': ERROR,
        'no-extra-bind': ERROR,
        'no-func-assign': ERROR,
        'no-implicit-coercion': ERROR,
        'no-implicit-globals': ERROR,
        'no-implied-eval': ERROR,
        'no-iterator': ERROR,
        'no-loop-func': ERROR,
        'no-multi-str': ERROR,
        'no-negated-condition': ERROR,
        'no-nested-ternary': ERROR,
        'no-new': ERROR,
        'no-new-func': ERROR,
        'no-new-wrappers': ERROR,
        'no-octal-escape': ERROR,
        'no-param-reassign': ERROR,
        'no-proto': ERROR,
        'no-prototype-builtins': ERROR,
        'no-redeclare': ERROR,
        'no-return-assign': ERROR,
        'no-return-await': ERROR,
        'no-script-url': ERROR,
        'no-self-compare': ERROR,
        'no-sequences': ERROR,
        'no-tabs': ERROR,
        'no-template-curly-in-string': ERROR,
        'no-throw-literal': ERROR,
        'no-undef-init': ERROR,
        'no-undefined': ERROR,
        'no-useless-backreference': ERROR,
        'no-useless-concat': ERROR,
        'no-useless-return': ERROR,
        'prefer-const': ERROR,
        'prefer-regex-literals': ERROR,
        'radix': ERROR,
        'require-atomic-updates': ERROR,
        'require-await': ERROR,
        'require-unicode-regexp': ERROR,
        'sort-imports': [ERROR, {ignoreDeclarationSort: true}],
        'sort-keys': ERROR,
        'spaced-comment': [
          ERROR,
          'always',
          {
            line: {
              markers: ['/'],
              exceptions: ['-', '+'],
            },
            block: {
              markers: ['!'],
              exceptions: ['*'],
              balanced: true,
            },
          },
        ],
        'wrap-iife': [ERROR, 'inside'],
        'yoda': [
          ERROR,
          'never',
          {
            exceptRange: true,
          },
        ],
      },
    },

    {
      files: ['src/lib/theme/*.ts'],
      rules: {
        'sort-keys': OFF,
      },
    }
  ],
};
