<template>
  <div class="relative min-h-screen bg-bg flex justify-end">
    <img src="/img/fallaire/background.jpg" alt="Fer falla" class="hidden lg:block absolute opacity-60 w-full h-full object-cover object-center"/>
    <img src="/img/fallaire/background_sm.jpg" alt="Fer falla" class="absolute lg:hidden opacity-60 w-full h-auto object-cover object-top"/>
    <div class="mx-auto relative pl-32 lg:pl-96 py-24 mt-64 lg:mt-0">
      <div class="text-primary">
        <h1 class="text-6xl font-primary">{{ t('fallaires.title1') }}</h1>
        <p class="font-secondary text-base mt-4 max-w-sm lg:max-w-md tracking-wide">{{ t('fallaires.text1') }}</p>
        <span class="mt-4 text-sm">Foto: &copy; Comú Sant Julià de Lòria</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const { t } = useI18n(
  {
    useScope: 'local',
  }
)
</script>

<i18n lang="json">
  {
    "ca": {
      "fallaires" : {
        "title1" : "Ser fallaire",
        "text1" : "Els fallaires són els qui fan rodar la falla i totes aquelles persones que són portadors de la festa i la fan possible."
      }
    },
    "es": {
      "fallaires" : {
        "title1" : "Ser fallaire",
        "text1" : "Los fallaires son quienes hacen rodar la falla y todas aquellas personas que son portadoras de la fiesta y la hacen posible."
      }
    },
    "fr": {
      "fallaires" : {
        "title1" : "Être un fallaire",
        "text1" : "Les fallaires sont ceux qui font tourner la falle et tous ceux qui sont porteurs de la fête et la rendent possible."
      }
    }
  }
</i18n>