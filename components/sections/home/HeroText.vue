<template>
  <div class="h-full z-10 grid place-content-center overflow-x-hidden">
    <div class="primary-content">
      <div class="font-primary text-5xl text-white mt-60 pl-32 text-shadow-lg shadow-black">
        <h4 class="roda-foc" id="title1">{{ t('title1') }}</h4>
      </div>
      <div class="content-2" id="title2">
        <h1>{{ t('title2') }}<br> <span id="title3">{{ t('title3') }}</span></h1>
      </div>
    </div>
    <div class="secondary-content">
      <div class="secondary-content-title">
        <h5>{{ t('title4')}}</h5>
      </div>
      <div class="secondary-content-text">
        <p>"{{ t('text1')}}"</p>
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
      "title1" : "Roda el foc!",
      "title2" : "Les Falles",
      "title3" : "d'Andorra",
      "title4" : "1907, Salvador Armet i Ricart, Comte de Carlet",
      "text1" : "En les Valls d'Andorra, en les seves places y en els voltants dels seus poblets, davant de les portes de les masies, en el cim de les seves montanyes [...] S’encenen en aquesta diada grans fogueres [...] Els noys fan lo que anomenen falles que encenen agitant-les y voltant-les vertiginosament, prenent la forma de grans rodes de foc..."
    },
    "es": {
      "title1" : "¡Roda el foc!",
      "title2" : "Las Fallas",
      "title3" : "de Andorra",
      "title4" : "1907, Salvador Armet i Ricart, Conde de Carlet (original en catalán)",
      "text1" : "En los Valles de Andorra, en sus plazas y en los alrededores de sus pueblos, delante de las puertas de las masías, en la cima de sus montañas [...] Se encienden en esta fiesta grandes hogueras [...] Los chicos hacen lo que denominan fallas que encienden agitándolas y girándolas vertiginosamente, tomando la forma de grandes ruedas de fuego..."
    },
    "fr": {
      "title1" : "Roda el foc!",
      "title2" : "Les Falles",
      "title3" : "d'Andorre",
      "title4" : "1907, Salvador Armet i Ricart, Comte de Carlet (original en catalan)",
      "text1" : "Dans les vallées d’Andorre, sur ses places et dans les environs de ses villages, devant les portes des fermes, au sommet de ses montagnes [...] De grands feux de joie sont allumés ce jour-là [...] Les hommes font ce qu’ils appellent des falles qu’ils enflamment en les agitant et les faisant tourner vertigineusement, prenant la forme de grandes roues de feu..."
    }
  }
</i18n>