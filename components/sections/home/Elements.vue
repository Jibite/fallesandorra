<template>
  <div class="mt-64 md:mt-32 lg:mt-12 mx-auto flex flex-col md:flex-row gap-10 justify-center items-center">
    <NuxtLink to="/la-falla" class="relative isolate overflow-hidden bg-yellow pt-8 pb-36 w-80 rounded-lg">
      <img src="/img/features/element1.jpg" alt="Fer falla" class="absolute opacity-80 inset-0 -z-10 size-full object-cover object-right md:object-center" />
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <h2 class="text-lg font-semibold tracking-tight text-white sm:text-3xl font-primary">{{ t('features.elements[0].title') }}</h2>
        </div>
      </div>
    </NuxtLink>
    <NuxtLink to="/el-fallaire" class="relative isolate overflow-hidden bg-yellow pt-8 pb-36 w-80 rounded-lg">
      <img src="/img/features/element2.jpg" alt="Ser fallaire" class="absolute opacity-80 inset-0 -z-10 size-full object-cover object-right md:object-center" />
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <h2 class="text-lg font-semibold tracking-tight text-white sm:text-3xl font-primary">{{ t('features.elements[1].title') }}</h2>
        </div>
      </div>
    </NuxtLink>
    <NuxtLink to="/la-festa" class="relative isolate overflow-hidden bg-yellow pt-8 pb-36 w-80 rounded-lg">
      <img src="/img/features/element3.jpg" alt="Viu la festa" class="absolute opacity-80 inset-0 -z-10 size-full object-cover object-right md:object-center" />
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <h2 class="text-lg font-semibold tracking-tight text-white sm:text-3xl font-primary">{{ t('features.elements[2].title') }}</h2>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
const { locale } = useI18n()
const { t } = useI18n({
  useScope: 'local'
})
</script>

<i18n lang="json">
  {
    "ca": {
      "features" : {
        "elements": [
          { "id": "1", "title": "Fer falla", "url": "la-falla/" },
          { "id": "2", "title": "Ser fallaire", "url": "el-fallaire/" },
          { "id": "3", "title": "Viu la festa", "url": "la-festa/"  }
        ]
      }
    },
    "es": {
      "features" : {
        "elements": [
          { "id": "1", "title": "Hacer la falla", "url": "la-falla/"},
          { "id": "2", "title": "Ser fallaire", "url": "el-fallaire/"},
          { "id": "3", "title": "Vive la fiesta", "url": "la-festa/"}
        ]
      }
    },
    "fr": {
      "features" : {
        "elements": [
          { "id": "1", "title": "Faire la falla", "url": "la-falla/" },
          { "id": "2", "title": "Être fallaire", "url": "el-fallaire/" },
          { "id": "3", "title": "Vivez la fête", "url": "la-festa/"  }
        ]
      }
    }
  }
</i18n>