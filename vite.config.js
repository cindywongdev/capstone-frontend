import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    define: {
      __APP_ENV__: process.env.VITE_API_BASE_URL,
    },
  };
});