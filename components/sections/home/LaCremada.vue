<template>
  <div class="max-w-[1320px] min-h-[600px] mx-auto relative py-12">
    <img src="/img/features/back-01_2.webp" alt="La Cremada de falles" class="absolute w-full opacity-30 object-cover">
    <div class="grid grid-cols-1 lg:grid-cols-2 items-center content-start place-content-between absolute">
      <div class="max-w-prose px-12">
        <h2 class="text-white text-5xl font-primary">{{ t('features.title1') }}</h2>
        <p class="mt-4 text-base font-secondary text-white tracking-wide">{{ t('features.text1') }}</p>
        <p class="mt-4 text-base font-secondary text-white tracking-wide">{{ t('features.text2') }}</p>
        <blockquote class="mt-4">
          <div class="relative">
            <IconsQuote class="text-yellow absolute" />
            <p class="pt-2 ml-2 indent-6 text-sm font-secondary text-white">{{ t('features.text3_1') }} 
              <a href="https://ich.unesco.org/es/RL/fiestas-del-fuego-del-solsticio-de-verano-en-los-pirineos-01073?RL=01073" target="_blank" class="font-bold underline">{{ t('features.link1') }}</a>{{ t('features.text3_2') }}</p>
          </div>
          <div class="reltaive">
            <IconsQuote class="text-yellow absolute"/>
            <p class="pt-2 ml-2 indent-6 text-sm font-secondary text-white">{{ t('features.text4_1') }} 
              <a href="https://www.bopa.ad/bopa/032121/Pagines/GV20201008_10_43_23.aspx" target="_blank" class="font-bold underline">{{ t('features.link2') }}</a>{{t('features.text4_2')}}</p>
          </div>
        </blockquote>
      </div>
      <img :src="`../img/features/words_${t('features.words')}.png`" alt="El significat de les falles" class="place-self-end hidden lg:block">
    </div>
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
        "title1" : "La cremada de falles",
        "text1" : "La cremada de falles a Andorra se celebra pel solstici d’estiu en dues dates diferents: el 23 de juny, per la revetlla de Sant Joan, es pot gaudir de la festa a Andorra la Vella, Sant Julià de Lòria, Escaldes-Engordany, Encamp, Canillo i La Massana; mentre que el 28 de juny, per la revetlla de Sant Pere, arriba el torn d’Ordino.",
        "text2" : "És una tradició que reforça el sentit de pertinença, la identitat i la cohesió social, alhora que promou la solidaritat, la integració i el diàleg entre generacions a través de la celebració d’una festa molt arrelada en la comunitat.",
        "text3_1" : "Andorra va promoure la incorporació de les falles a la llista de Patrimoni cultural immaterial de la humanitat per la UNESCO. S’hi va incloure el 2015, juntament amb altres ",
        "link1"  : "Festes del foc del solstici d’estiu als Pirineus ",
        "text3_2": "que se celebren a Andorra, Aragó, Catalunya i Occitània.",
        "text4_1" : "Les ",
        "link2" : "Falles del solstici d’estiu",
        "text4_2" : " són Festes d’interès cultural incloses com a bé immaterial a l’Inventari general del Patrimoni cultural d’Andorra.",
        "words" : "ca"
      }
    },
    "es": {
      "features" : {
        "title1" : "La cremada de fallas",
        "text1" : "La cremada de falles en Andorra se celebra por el solsticio de verano en dos fechas diferentes: el 23 de junio, verbena de San Juan, se puede disfrutar de la fiesta en Andorra la Vella, Sant Julià de Lòria, Escaldes-Engordany, Encamp, Canillo y La Massana; mientras que el 28 de junio, verbena de San Pedro, llega el turno de Ordino.",
        "text2" : "Es una tradición que refuerza el sentido de pertenencia, la identidad y la cohesión social, al mismo tiempo que promueve la solidaridad, la integración y el diálogo entre generaciones a través de la celebración de una fiesta muy arraigada en la comunidad.",
        "text3_1" : "Andorra promovió la incorporación de las fallas en la lista de Patrimonio cultural inmaterial de la humanidad de la UNESCO. En 2015 se introdujeron las ",
        "link1"  : "Fiestas del fuego del solsticio de verano en los Pirineos",
        "text3_2": " que se celebran en Andorra, Aragón, Cataluña y Occitania.",
        "text4_1" : "Las ",
        "link2" : "Fallas del solsticio de verano",
        "text4_2" : " son Fiestas de interés cultural incluidas como bien inmaterial en el Inventario general del patrimonio cultural de Andorra.",
        "words" : "es"
      }
    },
    "fr": {
      "features" : {
        "title1" : "La cremada de falles",
        "text1" : "En Andorre, les falles sont brûlées (Cremada) lors du solstice d’été à deux dates différentes : le 23 juin, pour la fête de la Saint Jean (Sant Joan), vous pourrez profiter de la fête à Andorra la Vella, Sant Julià de Lòria, Escaldes-Engordany, Encamp, Canillo et La Massana; tandis que le 28 Juin, pour la fête de la Saint-Pierre (Sant Pere), arrive le tour d’Ordino.",
        "text2" : "C’est une tradition qui renforce le sentiment d’appartenance, d’identité et de cohésion sociale, tout en favorisant la solidarité, l’intégration et le dialogue entre les générations à travers la célébration d’une fête profondément enracinée dans la communauté.",
        "text3_1" : "Andorre a encouragé l’incorporation des falles dans la liste du patrimoine culturel immatériel de l’humanité. Cet élément a été inclus par l’UNESCO en 2015, avec ",
        "link1"  : "fêtes du feu du solstice d’été dans les Pyrénées ",
        "text3_2": " qui sont célébrées en Andorre, en Aragon, en Catalogne et en Occitanie.",
        "text4_1" : "Les ",
        "link2" : "Falles du solstice d’été",
        "text4_2" : " sont des fêtes d’intérêt culturel inclues comme un actif immatériel dans l’Inventaire général du patrimoine culturel d’Andorre.",
        "words" : "fr"
      }
    }
  }
</i18n>