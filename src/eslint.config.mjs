import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  resolvePluginsRelativeTo: __dirname,
});

export default [
  // これがコアとなる単一の設定オブジェクトです。
  {
    // 無視するファイルはここにまとめて定義
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'build/**',
      'next-env.d.ts',
    ],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    // ここで推奨設定を統合し、その後にカスタムルールを上書きします
    ...tseslint.configs.recommended,
    ...pluginJs.configs.recommended,
    ...compat.extends('next/core-web-vitals'),
    rules: {
      // カスタムルールをすべてここに定義します
      'no-const-assign': 'error',
      'no-console': 'error',

      // コアの no-unused-vars を明示的にオフにする
      'no-unused-vars': 'off',

      // TypeScript固有のルールを希望通りに設定する
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
    },
  },
];
