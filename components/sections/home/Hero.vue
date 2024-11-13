<template>
  <div class="h-[300px] flex items-center">
    <h1 class="text-secondary font-primary text-5xl">Hero</h1>
  </div>
</template>

<script setup>
const { t } = useI18n({
  useScope: 'local'
})
</script>

<i18n lang="json">
  {
    "ca": {
      "hello": "Hola"
    },
    "es": {
      "hello": "Hola"
    },
    "fr": {
      "hello": "Bonjour"
    },
    "en": {
      "hello": "Hello"
    }
  }
</i18n>