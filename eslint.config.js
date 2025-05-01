import { defineConfig, globalIgnores } from 'eslint/config';
import { globals } from 'eslint-config-zakodium';
import react from 'eslint-config-zakodium/react';
import ts from 'eslint-config-zakodium/ts';

export default defineConfig(globalIgnores(['dist']), ts, react, {
  files: ['dump/**'],
  languageOptions: {
    globals: {
      ...globals.node,
    },
  },
  rules: {
    'no-console': 'off',
  },
});
