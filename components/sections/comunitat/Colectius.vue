<template>
  <div class="relative min-h-screen lg:h-screen lg:min-h-0 bg-white">
    <img src="/img/comunitat/actes6.jpg" alt="Fer falla" class="absolute opacity-20 w-full h-full object-cover object-center"/>
    <div class="relative grid grid-cols-1 lg:grid-cols-2 py-12 px-40">
      <div>
        <div>
          <img class="h-96 w-auto" src="/img/comunitat/colectius-image1.jpg" alt="Colectius fallaires">
          <p class="text-secondary text-sm font-secondary">Foto: ©Oriol Llauradó</p>
        </div>
        <div class="mt-4"><h2 class="text-2xl font-secondary text-secondary font-bold">{{ t('colectius.title1') }}</h2></div>
        <div>
          <p class="text-secondary font-secondary text-lg leading-6">{{ t('colectius.text1') }}</p>
          <p class="mt-2 text-secondary font-secondary text-lg">{{ t('colectius.text2') }}</p>
          <ul class="mt-2 ml-6 font-primary text-xl text-secondary font-bold leading-7 list-disc">
            <li>{{ t('colectius.llista1') }}</li>
            <li>{{ t('colectius.llista2') }}</li>
            <li>{{ t('colectius.llista3') }}</li>
            <li>{{ t('colectius.llista4') }}</li>
            <li>{{ t('colectius.llista5') }}</li>
            <li>{{ t('colectius.llista6') }}</li>
            <li>{{ t('colectius.llista7') }}</li>
          </ul>
        </div>
      </div>
      <div>
        <div class="p-12">
          <h2 class="text-right text-2xl font-secondary text-secondary font-bold">{{ t('colectius.title2') }}</h2>
          <p class="text-right text-secondary font-secondary text-lg leading-6">{{ t('colectius.title3') }}</p>
          <SectionsComunitatMap />
        </div>
      </div>
    </div>
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
        "colectius" : {
          "title1" : "Els col-lectius",
          "text1" : "A Andorra hi ha set col·lectius fallaires autònoms, cadascú té una organització i una personalitat diferent.",
          "text2" : "Són aquests, en ordre de creació:",
          "llista1" : "Associació Fallaires d'Andorra la Vella",
          "llista2" : "Fallaires Lauredians",
          "llista3" : "Fallaires d'Escaldes",
          "llista4" : "Fallaires d'Encamp",
          "llista5" : "Fallaires d'Ordino",
          "llista6" : "Fallaires de Canillo",
          "llista7" : "Fallaires de la Massana",
          "title2" : "Les parròquies fallaires",
          "title3" : "Fes clic en el mapa per conèixer cada col·lectiu:"
        }
    },
    "es": {
        "colectius" : {
          "title1" : "Los colectivos",
          "text1" : "En Andorra hay siete colectivos fallaires autónomos, cada uno tiene una organización y una personalidad diferente.",
          "text2" : "Son estos, en orden de creación:",
          "llista1" : "Associació Fallaires d'Andorra la Vella",
          "llista2" : "Fallaires Lauredians",
          "llista3" : "Fallaires d'Escaldes",
          "llista4" : "Fallaires d'Encamp",
          "llista5" : "Fallaires d'Ordino",
          "llista6" : "Fallaires de Canillo",
          "llista7" : "Fallaires de la Massana",
          "title2" : "Las parroquias fallaires",
          "title3" : "Haz clic en el mapa para conocer cada colectivo:"
        }
    },
    "fr": {
        "colectius" : {
          "title1" : "Les collectifs",
          "text1" : "En Andorre, il y a sept collectifs fallaires, chacun ayant une organisation et une personnalité différentes.",
          "text2" : "Dans leur ordre de création:",
          "llista1" : "Association Fallaires d'Andorra la Vella",
          "llista2" : "Fallaires Lauredians",
          "llista3" : "Fallaires d'Escaldes",
          "llista4" : "Fallaires d'Encamp",
          "llista5" : "Fallaires d'Ordino",
          "llista6" : "Fallaires de Canillo",
          "llista7" : "Fallaires de la Massana",
          "title2" : "Les paroisses fallaires",
          "title3" : "Cliquez sur la carte pour connaître chaque groupe:"
        }
}
}
</i18n>