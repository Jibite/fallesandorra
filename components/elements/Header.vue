<template>
  <div>
    <h1>Header</h1>
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
    }
  }
</i18n>