// vite.config.js

import { defineConfig } from 'vite';
// eslint-disable-next-line import/no-extraneous-dependencies
import vue from '@vitejs/plugin-vue';

import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/style/_mixins.scss";
          @import "./src/style/_variables.scss";
        `,
      },
    },
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
