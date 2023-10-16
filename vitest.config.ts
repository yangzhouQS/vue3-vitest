/// <reference types="vitest" />
// import {defineConfig} from 'vitest/config'
import Vue from '@vitejs/plugin-vue'
import {defineConfig} from 'vite'
import VueJsx from '@vitejs/plugin-vue-jsx'
export default defineConfig({
  plugins: [Vue(),VueJsx()],
  test: {
    globals: true,
    environment: 'jsdom',
    // 支持tsx组件，很关键
    transformMode: {
      web: [/\.[jt]sx$/],
    },
  },
})
