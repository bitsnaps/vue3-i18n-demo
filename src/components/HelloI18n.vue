<template>
    <div>

      <p>{{ $t("hello", { name}) }}</p>
      <p>{{ $t("goodbye") }}</p>

      <!-- $tc is merged into $t now (v9)-->
      <!-- <p>{{ $tc('car', 2)}}</p> --> 
      <p>{{ $t('car', 0)}}</p>
      <p>{{ $t('car', 1)}}</p>
      <p>{{ $t('car', 2)}}</p>

    <h2>Pluralization</h2>
      <!-- use "count" or "n" to show the number of item -->
      <p>{{ $t('person', 0)}}</p>
      <p>{{ $t('person', 1)}}</p>
      <p>{{ $t('person', 2)}}</p>
      <!-- or by passing an argument -->
      <p>{{ $t('person', { n: 4})}}</p>

      <p>{{ $t('apple')}}</p>
      <p>{{ $t('apple', 2)}}</p>
      <p>{{ $t('apple', 3)}}</p>

      <h2>Date Formatting</h2>
      <p>Short: {{ $d(new Date(), 'short')}}</p>
      <p>Long: {{ $d(new Date(), 'long')}}</p>
      <p>Fr: {{ $d(new Date(), 'short', 'fr')}}</p>
      <!-- <p>Fr: {{ $d(new Date(), 'short', 'fr-FR')}}</p> -->

      <h2>Number Formatting</h2>
      <p>{{ $n(10000, 'currency') }}</p>

      <button @click="setLocale('en')" class="button">English</button>
      <button @click="setLocale('es')" class="button">Spanish</button>
      <button @click="setLocale('ar')" class="button">عربي</button>
      <button @click="setLocale('fr')" class="button">French</button>      
      <br>
      <h2>Localization by Countries:</h2>
      <p>{{ $n(0.99123, 'percent', { minimumFractionDigits: 2 }) }}</p>

      <p>{{ product.name }}: {{ product.price}}, with {{ product.stock }} left in stock.</p>
      <button @click="setLocaleCountry('en-US')" class="button">USA</button>
      <button @click="setLocaleCountry('en-GB')" class="button">UK</button>
      <button @click="setLocaleCountry('es')" class="button">Spain</button>

      <h2>I18n Component</h2>
      <i18n-n :value="200"></i18n-n>
      <br>
      <i18n-n :value="200" format="currency"></i18n-n>
      <br>
      <!-- separate currency from number using slots-->
      <i18n-n :value="200" format="currency">
        <template v-slot:currency="slotProps">
            <span style="color: red">{{ slotProps.currency}}</span>
        </template>
        <template v-slot:integer="slotProps">
            <span style="font-weight: bold;">{{ slotProps.integer}}</span>
        </template>
        <template v-slot:decimal="slotProps">
            <span>{{ slotProps.decimal}}</span>
        </template>
        <template v-slot:fraction="slotProps">
            <span>{{ slotProps.fraction}}</span>
        </template>
    </i18n-n>

    <h2>Link in text</h2>
    <i18n-t keypath="terms" tag="p">
        <template v-slot:termsURL>
            <!-- You use a button to open a Modal -->
            <a href="/terms">{{ $t("termsLink")}}</a>
        </template>
    </i18n-t>



    <div class="locale-changer">
        <p>Your browser uses <code>{{ language }}</code> you can switch to your prefered language:</p>
        <select v-model="$i18n.locale">
            <option 
                v-for="locale in $i18n.availableLocales" 
                :key="`locale-${locale}`" :value="locale">{{ locale }}</option>
        </select>
    </div>

    </div>
  </template>
  
  <script>

  const products = {
    'en-US': {
        name: 'Red jeans',
        stock: 2,
        price: 109
    },
    'en-GB': {
        name: 'Red jeans',
        stock: 4,
        price: 89
    },
    'es': {
        name: 'Vaqueros Rojos',
        stock: 9,
        price: 99
    }
  }

  export default {
    name: "HelloI18n",
    data() {
        return {
            name: 'Ali'
        }
    },
    methods: {
      setLocale(locale /*: string*/) {
        console.log('changed to: ', locale);
        this.$i18n.locale = locale
        // localStorage has no expiration time
        localStorage.setItem('locale', locale)
      },
      setLocaleCountry(locale /*: string*/) {
        this.$i18n.locale = locale
      }
    }, // methods
    computed: {
        language() {
            return window.navigator.language
        },
        languages() {
            return window.navigator.languages
        },
        product(){
            return products[this.$i18n.locale.indexOf('-') > -1? this.$i18n.locale: 'en-US']
        }
    },
    created() {
        const locale = localStorage.getItem('locale')
        if(locale){
            this.$i18n.locale = locale
        } else if(navigator.language){
            this.$i18n.locale = navigator.language.slice(0,2)
            // unless you want to use the secondary language specific region (e.g. en-GB...)
            // this.$i18n.locale = navigator.language
        }
    }
  };
  </script>