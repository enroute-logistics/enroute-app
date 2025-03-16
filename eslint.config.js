import eslint from '@eslint/js'
import tseslint from '@typescript-eslint/eslint-plugin'
import tseslintParser from '@typescript-eslint/parser'
import eslintConfigPrettier from 'eslint-config-prettier'
import sonarjs from 'eslint-plugin-sonarjs'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'

export default [
  eslint.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      '@typescript-eslint': tseslint,
      sonarjs: sonarjs,
      react: react,
      'react-hooks': reactHooks,
    },
    languageOptions: {
      parser: tseslintParser,
      parserOptions: {
        project: ['./tsconfig.json'],
      },
      globals: {
        console: 'readonly',
        window: 'readonly',
        document: 'readonly',
        localStorage: 'readonly',
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/explicit-function-return-type': 'error',
      'sonarjs/cognitive-complexity': ['error', 30],
      'sonarjs/no-duplicate-string': 'warn',
      'sonarjs/prefer-single-boolean-return': 'off',
      'sonarjs/no-nested-template-literals': 'off',
      'react/react-in-jsx-scope': 'off',
      'no-console': 'error',
      curly: 'error',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
    },
  },
  {
    files: ['**/*.{test,spec}.{ts,tsx}', '**/test/**/*'],
    rules: {
      'sonarjs/cognitive-complexity': 'off',
      'sonarjs/no-duplicate-string': 'off',
      'no-console': 'off',
    },
  },
  eslintConfigPrettier,
]
