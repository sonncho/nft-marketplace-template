import { fileURLToPath, URL } from 'node:url';
// import path from 'path';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from '@nabla/vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), eslintPlugin()],
  resolve: {
    alias: {
      '/@': fileURLToPath(new URL('./src', import.meta.url)),
      '/@assets': fileURLToPath(new URL('./srr/assets', import.meta.url)),
      '/@compo': fileURLToPath(new URL('./src/components', import.meta.url)),
    },
  },
  server: { port: 8888 },
});
