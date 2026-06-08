import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

// https://vite.dev/config/
export default defineConfig({
   plugins: [
    vue({
      template: { transformAssetUrls } // <-- Помогает правильно обрабатывать пути к картинкам в компонентах Vuetify
    }),
    vuetify({ autoImport: true }), // <-- Включаем автоимпорт компонентов
  ],
})
