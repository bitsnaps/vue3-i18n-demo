<template>
    <div>
      <p>{{ $t("hello", { name}) }}</p>
      <p>{{ $t("goodbye") }}</p>
      <button @click="setLocale('en')" class="button">English</button>
      <button @click="setLocale('es')" class="button">Spanish</button>
      <button @click="setLocale('ar')" class="button">عربي</button>
      <button @click="setLocale('fr')" class="button">French</button>      

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
  
  <script lang="ts">

  export default {
    name: "HelloI18n",
    data() {
        return {
            name: 'Ali'
        }
    },
    methods: {
      setLocale(locale: string) {
        console.log('changed to: ', locale);
        
        this.$i18n.locale = locale
        // localStorage has no expiration time
        localStorage.setItem('locale', locale)
      }
    }, // methods
    computed: {
        language() {
            return window.navigator.language
        },
        languages() {
            return window.navigator.languages
        }
    },
    created() {
        const locale = localStorage.getItem('locale')
        if(locale){
            this.$i18n.locale = locale
        } else if(navigator.language){
            this.$i18n.locale = navigator.language.slice(0,2)
        }
    }
  };
  </script>