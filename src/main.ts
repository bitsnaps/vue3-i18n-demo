import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createI18n } from 'vue-i18n'


// 1. Ready translated locale messages
// The structure of the locale message is the hierarchical object structure with each locale as the top property
const messages = {
    en: {
        'hello': 'hello world',
        'goodbye': 'Goodbye'
    },
    es: {
        'hello': 'Hola',
        'goodbye': 'Adios'
    }
  }

// 2. Create i18n instance with options
const i18n = createI18n({
    locale: 'es', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages
    // If you need to specify other options, you can set other options
    // ...
  })

createApp(App)
  .use(i18n)
  .mount('#app')
