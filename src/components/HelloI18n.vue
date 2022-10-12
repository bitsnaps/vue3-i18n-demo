<template>
    <div>
      <p>{{ $t("hello") }}</p>
      <p>{{ $t("goodbye") }}</p>
      <button @click="setLocale('en')" class="button">English</button>
      <button @click="setLocale('es')" class="button">Spanish</button>
    </div>
  </template>
  
  <script lang="ts">
  export default {
    name: "HelloI18n",
    methods: {
      setLocale(locale: string) {
        this.$i18n.locale = locale;
      },
    },
  };
  </script>