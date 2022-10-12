import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import es from './locales/es.json'
import ar from './locales/ar.json'
import fr from './locales/fr.json'

// 1. Ready translated locale messages
/*/ The structure of the locale message is the hierarchical object structure with each locale as the top property
const messages = {
    en: {
        'hello': 'hello world',
        'goodbye': 'Goodbye'
    },
    es: {
        'hello': 'Hola',
        'goodbye': 'Adios'
    },
    ar: {
        'hello': 'مرحبا',
        'goodbye': 'وداعا'
    },
    fr: {
        'hello': 'Bonjour',
        'goodbye': 'Au revoir'
    },
  }
*/

// 2. Create i18n instance with options
const i18n = createI18n({
    locale: 'es', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages: { en, es, ar, fr }, // set locale messages
    // If you need to specify other options, you can set other options
    // ...
  })

createApp(App)
  .use(i18n)
  .mount('#app')
