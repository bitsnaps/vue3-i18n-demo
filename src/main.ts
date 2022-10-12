import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createI18n, IntlDateTimeFormats } from 'vue-i18n'
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

// Format uses ISO codes
const datetimeFormats: IntlDateTimeFormats = {
  // 'en-US': {
  'en': { // short format only
    short: {
      // year: 'numeric', month: 'short', day: 'numeric'
      year: '2-digit', month: 'short', day: 'numeric'
    },
    // Optional
    long: {
      year: 'numeric', month: 'short', day: 'numeric',
      weekday: 'short', hour: 'numeric', minute: 'numeric'
    }
  },
  // 'fr-FR': {
  'fr': {
    short: {
      // year: 'numeric', month: 'short', day: 'numeric'
      year: 'numeric', month: '2-digit', day: 'numeric'
    },
    long: {
      year: 'numeric', month: 'short', day: 'numeric',
      weekday: 'short', hour: 'numeric', minute: 'numeric', hour12: true
    }
  }
}

const numberFormats: any /* Intl.NumberFormat */ = {
  'en': {
    currency: {
      style: 'currency', currency: 'USD', notation: 'standard'
    },
    decimal: {
      style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2
    },
    percent: {
      style: 'percent', useGrouping: false
    }
  },
  'en-GB': {
    currency: {
      style: 'currency', currency: 'GBP', notation: 'standard'
    },
    decimal: {
      style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2
    },
    percent: {
      style: 'percent', useGrouping: false
    }
  },
  'es-ES': {
    currency: {
      style: 'currency', currency: 'EUR', useGrouping: true, currencyDisplay: 'symbol' // or 'code' or 'name'
    },
    decimal: {
      style: 'decimal', minimumSignificantDigits: 3, maximumSignificantDigits: 5
    },
    percent: {
      style: 'percent', useGrouping: false
    }
  },
  'fr': {
    currency: {
      style: 'currency', currency: 'EUR', useGrouping: true, currencyDisplay: 'symbol'
    },
    decimal: {
      style: 'decimal', minimumSignificantDigits: 3, maximumSignificantDigits: 5
    },
    percent: {
      style: 'percent', useGrouping: false
    }
  }
}

// 2. Create i18n instance with options
const i18n = createI18n({
    // locale: 'es', // set locale
    // locale: 'en-US',
    locale: 'en',
    fallbackLocale: 'en', // set fallback locale
    messages: { en, es, ar, fr }, // set locale messages
    // If you need to specify other options, you can set other options
    // ...
    datetimeFormats,
    numberFormats
  })

createApp(App)
  .use(i18n)
  .mount('#app')
