<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local'
})

const items = [
  { image: '/img/hero/hero1-lg.webp', copyright: '©Joan Vega / Fons Associació Fallaires d\'Andorra la Vella (FAFALV)'},
  { image: '/img/hero/hero2-lg.webp', copyright: '©Comú d\'Escaldes-Engordany / Arxiu Històric'},
  { image: '/img/hero/hero3-lg.webp', copyright: '©Comú Sant Julià de Lòria'},
  { image: '/img/hero/hero4-lg.webp', copyright: '©Arxiu Fallaires d\'Encamp'},
  { image: '/img/hero/hero5-lg.webp', copyright: '©Guillem Bringué'}
]

const carouselRef = ref()

onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value) return

    if (carouselRef.value.page === carouselRef.value.pages) {

      return carouselRef.value.select(0)
    }

    carouselRef.value.next()
  }, 6000)
})
</script>

<template>
  <UCarousel
    ref="carouselRef"
    v-slot="{ item, index }"
    fade
    :items="items"
    :ui="{ item: 'basis-full' }"
    class="rounded-lg overflow-hidden"
    indicators
  >
    <div class="w-full relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img :src="item.image" draggable="false" alt="" class="w-full absolute inset-0 -z-10 size-full object-cover object-bottom md:object-center" />
      <div class="mx-auto max-w-7xl px-6 lg:px-4 grid grid-cols-1 lg:grid-cols-1">
        <div class="mx-auto max-w-2xl lg:mx-0 bg-bg bg-opacity-50 p-6 shadow-xl">
          <p class="text-xl font-semibold tracking-tight text-yellow sm:text-4xl font-primary text-center">{{ t('title1') }}</p>
          <h1 class="text-5xl font-semibold tracking-tight text-white sm:text-9xl font-primary">{{ t('title2') }}<br> <span id="title3">{{ t('title3') }}</span></h1>
          <p class="mt-8 text-pretty text-base font-medium text-yellow sm:text-xl font-primary">{{ t('title4') }}</p>
          <p class="mt-8 text-pretty text-base font-medium text-gray-300 sm:text-lg font-secondary">{{ t('text1') }}</p>
          <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none place-self-end self-end">
            <p>{{ t('foto-right') }} : {{ item.copyright }}</p>
          </div>
        </div>
      </div>
    </div>
    
  </UCarousel>
</template>

<i18n lang="json">
  {
    "ca": {
      "foto-right": "Foto:",
      "title1" : "Roda el foc!",
      "title2" : "Les Falles",
      "title3" : "d'Andorra",
      "title4" : "1907, Salvador Armet i Ricart, Comte de Carlet",
      "text1" : "En les Valls d'Andorra, en les seves places y en els voltants dels seus poblets, davant de les portes de les masies, en el cim de les seves montanyes [...] S’encenen en aquesta diada grans fogueres [...] Els noys fan lo que anomenen falles que encenen agitant-les y voltant-les vertiginosament, prenent la forma de grans rodes de foc..."
    },
    "es": {
      "foto-right": "Foto:",
      "title1" : "¡Roda el foc!",
      "title2" : "Las Fallas",
      "title3" : "de Andorra",
      "title4" : "1907, Salvador Armet i Ricart, Conde de Carlet (original en catalán)",
      "text1" : "En los Valles de Andorra, en sus plazas y en los alrededores de sus pueblos, delante de las puertas de las masías, en la cima de sus montañas [...] Se encienden en esta fiesta grandes hogueras [...] Los chicos hacen lo que denominan fallas que encienden agitándolas y girándolas vertiginosamente, tomando la forma de grandes ruedas de fuego..."
    },
    "fr": {
      "foto-right": "Photo:",
      "title1" : "Roda el foc!",
      "title2" : "Les Falles",
      "title3" : "d'Andorre",
      "title4" : "1907, Salvador Armet i Ricart, Comte de Carlet (original en catalan)",
      "text1" : "Dans les vallées d’Andorre, sur ses places et dans les environs de ses villages, devant les portes des fermes, au sommet de ses montagnes [...] De grands feux de joie sont allumés ce jour-là [...] Les hommes font ce qu’ils appellent des falles qu’ils enflamment en les agitant et les faisant tourner vertigineusement, prenant la forme de grandes roues de feu..."
    }
  }
</i18n>

