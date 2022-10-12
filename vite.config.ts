import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  // get rid of i18n warnings
    define: {
      __VUE_I18N_FULL_INSTALL__: true,
      __VUE_I18N_LEGACY_API__: false,
      __INTLIFY_PROD_DEVTOOLS__: false,
  },
  // or
  // resolve: {
  //   alias: [
  //     {
  //       find: 'vue-i18n',
  //       replacement: 'vue-i18n/dist/vue-i18n.cjs.js',
  //     }
  //   ]
  // }
})
