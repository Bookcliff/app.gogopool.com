module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  ignorePatterns: ['node_modules/**/*'],
  settings: {
    'react': {
      pragma: 'React',
      version: 'detect',
    },
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
  },
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint',
    'import',
    'sort-imports-es6-autofix',
    'sort-destructure-keys',
    'prettier',
    'unused-imports',
  ],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:tailwindcss/recommended',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'import/no-extraneous-dependencies': [
      'error',
      { optionalDependencies: false, peerDependencies: false },
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-types': 'off',
    'react/prop-types': 'off',
    'no-console': 'off',
    'sort-imports': [
      'error',
      {
        ignoreDeclarationSort: true,
      },
    ],
    'semi': ['error', 'never'],
    'no-warning-comments': 0,
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'import/order': [
      'error',
      {
        'alphabetize': { order: 'asc' },
        'groups': [
          ['builtin', 'external'],
          ['internal', 'parent', 'sibling', 'index'],
        ],
        'newlines-between': 'always',
        'pathGroups': [
          { group: 'builtin', pattern: 'react', position: 'before' },
          {
            group: 'external',
            pattern:
              '{uniswap-xdai-sdk,rebass/styled-components,polished,react-feather,react-router,@walletconnect/web3-provider,@testing-library/dom,@testing-library/user-event,@testing-library/react,styled-components,ethers/utils,react-dom,react-router-dom,ethers,ethers/providers,web3-utils}',
            position: 'before',
          },
        ],
        'pathGroupsExcludedImportTypes': ['builtin'],
      },
    ],
    'import/prefer-default-export': 0,
    'sort-destructure-keys/sort-destructure-keys': 2,
    'react/jsx-label-has-associated-control': 0,
    'react/jsx-sort-props': 2,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
}
