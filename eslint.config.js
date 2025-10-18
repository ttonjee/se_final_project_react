import js from '@eslint/js'
import reactPlugin from 'eslint-plugin-react'

const babelParser = await import('@babel/eslint-parser')

// Flat ESLint config for this project. It enables JSX parsing and registers
// common browser globals to avoid no-undef false positives from built-in APIs.
export default [
  js.configs.recommended,
  {
    files: ['src/**/*.js', 'src/**/*.jsx'],
    languageOptions: {
      parser: babelParser.default,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: [
            ['@babel/preset-env', { targets: { esmodules: true } }],
            '@babel/preset-react',
          ],
        },
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
      globals: {
        window: 'readonly',
        document: 'readonly',
        fetch: 'readonly',
        URL: 'readonly',
        URLSearchParams: 'readonly',
        console: 'readonly',
        navigator: 'readonly',
        performance: 'readonly',
      },
    },
    plugins: { react: reactPlugin },
    rules: {
      // Allow usage of browser globals (fetch, URL, etc.) without raising no-undef
      'no-undef': 'off',
      // New JSX transform: React does not need to be in scope
      'react/react-in-jsx-scope': 'off',
      // Ensure components used in JSX are treated as used
      'react/jsx-uses-vars': 'error',
      'react/jsx-uses-react': 'off',
      // Avoid noisy errors about the `React` import in projects using the new JSX transform
      'no-unused-vars': ['error', { 'varsIgnorePattern': '^React$' }],
    },
    settings: { react: { version: 'detect' } },
  },
  { ignores: ['dist/**', 'node_modules/**', 'hello-vite/**'] },
]
