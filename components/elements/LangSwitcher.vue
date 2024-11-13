<template>
  <div class="flex flex-inline justify-center gap-3">
    <NuxtLink v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)" class="border rounded-full border-white px-2 py-1">
      <span class="text-white font-primary text-xl uppercase">{{ locale.code }}</span>
    </NuxtLink>
  </div>
</template>

<script setup>
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value)
})
</script>