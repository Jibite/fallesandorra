<template>
  <div class="relative">
    <ElementsHeroSwiper />
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