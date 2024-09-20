module.exports = {
  root: true,
  env: { browser: true, es2022: true },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended'],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'src/ton/getMiddlewareData.ts'],
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'react-hooks', 'prettier', 'react-refresh'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/ban-ts-comment': 'off',
    'rules-of-hooks': 'off',
    'react-hooks/exhaustive-deps': 'off'
  }
};
