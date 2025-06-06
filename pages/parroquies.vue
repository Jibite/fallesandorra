<template>
  <div class="min-h-screen p-6">
    <div class="py-6">
      <h1 class="font-primary text-3xl text-white text-center">Programació 2025</h1>
    </div>
    <div class="relative grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      <div v-for="parroquia in parroquies" :key="parroquia.id" class="relative h-full">
        <img :src="`/img/parroquies/${parroquia.image}`" alt="" class="absolute h-full w-full object-cover opacity-50">
        <div class="relative text-white px-12 py-24 flex flex-col">
          <div :id="parroquia.id">
            <h3 class="font-primary text-4xl">{{ parroquia.name }}</h3>
            <p class="font-primary text-2xl">{{ parroquia.date }}</p>
            <p class="font-secondary text-base">LLoc: {{ parroquia.place }}</p>
            <p class="font-secondary text-base">Inici: {{ parroquia.start }}</p>
          </div>
          <div class="flex gap-4 h-32 items-center">
            <div v-for="logo in parroquia.logo" :key="logo" class="mt-2">
              <img :src="`/img/logos/${logo}`" alt="" class="w-32 h-auto object-cover rounded-lg">
            </div>
          </div>
          <p class="mt-12 -mb-12 font-secondary text-xs self-end">Foto: {{ parroquia.foto }}</p>
        </div>
        <div v-if="parroquia.col_enable" class="relative">
          <div class="bg-yellow text-center flex flex-col items-center justify-center pt-1">
            <p class="text-secondary font-primary text-lg">Col·laboradors i agraïments</p>
            <button v-if="!showingCols" @click="showCols(parroquia.id)"><IconsArrowDown /></button>
            <button v-if="showingCols" @click="showCols(0)"><IconsArrowUp /></button>
          </div>
          <div v-if="showingCols && index === parroquia.id" class="flex gap-4 py-4 px-2 items-center justify-center bg-white">
            <div v-for="entitat in parroquia.entitats" :key="logo" class="mt-2">
              <a :href="entitat.link">
                <img :src="`/img/parroquies/logos${entitat.logo}`" alt="" class="p-4 w-auto h-24 object-cover rounded-lg">
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { t } = useI18n({
  useScope: 'local'
})
const parroquies = [
  {
    id: 1,
    name: "Andorra la Vella",
    date: "23 de juny",
    place: "De la placeta del Puial a plaça Guillemó (Recorregut Centre Històric).",
    start: "22:30. Placeta del Puial.",
    start_link: "",
    social: {
      face: { enabled: true, link: "https://www.facebook.com/assfallairesalv/"},
      insta: { enabled: true, link: "https://www.instagram.com/assfallairesalv/"},
      twit: { enabled: true, link: "https://www.twitter.com/assfallairesalv/"},
      ytube: { enabled: true, link: "https://www.youtube.com/assfallairesalv/"},
      mail: { enabled: true, link: "mailto:info@fallairesandorralavella.com"},
      web: { enabled: true, link: "www.fallairesandorralavella.com"}
    },
    image: "img_p01.jpg",
    logo: [ "logo_calv.png","logo_falv.png" ],
    transition: "fade",
    col_enable: true,
    entitats: [
      { id: 1, title: "Esbart dansaire d'Andorra la Vella", link: "https://www.facebook.com/esbartandorra", logo: "/alv/esbart.jpg"},
      { id: 2, title: "Escola folk del Pirineu d'Arsèguel", link: "http://www.tradicionarius.cat/", logo: "/alv/efolk.jpg"},
      { id: 3, title: "El Rebost del padrí", link: "https://elrebostdelpadri.eu/", logo: "/alv/rebost.png"},
      { id: 4, title: "Associació de Comerciants Centre Històric", link: "https://www.centrehistoric.ad/", logo: "/alv/asscomer.png"},
    ],
    foto: "©Qucut Producció Audiovisual / Fons Associació Fallaires d'Andorra la Vella (FAFALV)",
    esCelebra: true
  },
  {
    id: 2,
    name: "Sant Julià de Lòria",
    date: "23 de juny",
    place: "Del Barri Rocacorba i de la plaça Francesc Cairat fins a la Plaça de la Germandat",
    start: "22:30. Barri Rocacorba",
    start_link: "",
    social: {
      face: { enabled: true, link: "https://www.facebook.com/fallaireslauredians/"},
      insta: { enabled: true, link: "https://www.instagram.com/fallaireslauredians/"},
      twit: { enabled: false, link: ""},
      ytube: { enabled: false, link: ""},
      mail: { enabled: false, link: ""},
      web: { enabled: false, link: ""}
    },
    image: "img_p02.jpg",
    logo: [ "logo_csjl.png" ],
    transition: "fade",
    col_enable: true,
    entitats: [
      { id: 1, title: "Esbart Laurèdia", link: "https://www.esbartlauredia.com/", logo: "/sjl/esbart.jpg"}
    ],
    foto: "©Comú Sant Julià de Lòria",
    esCelebra: true
  },
  {
    id: 3,
    name: "Escaldes-Engordany",
    date: "23 de juny",
    place: "Del Camí de la Peletera fins a la Creu Blanca | De la Plaça de l'Església fins l'Aparcament del Veedors (Av. Carlemany).",
    start: "22:00. Cas antic d'Escaldes-Engordany",
    start_link: "",
    social: {
      face: { enabled: false, link: ""},
      insta: { enabled: false, link: ""},
      twit: { enabled: false, link: ""},
      ytube: { enabled: false, link: ""},
      mail: { enabled: true, link: ""},
      web: { enabled: false, link: ""}
    },
    image: "img_p03.jpg",
    logo: [ "logo_cee.png", "logo_uptee.png" ],
    transition: "fade",
    col_enable: false,
    entitats: [],
    foto: "©Comú d´Escaldes-Engordany / Arxiu Històric",
    esCelebra: true
  },
  {
    id: 4,
    name: "Ordino",
    date: "28 de juny",
    place: "De la plaça Major fins l'aparcament Prat de Vilella (Recorregut Centre Històric).",
    start: "22:30. Plaça major",
    start_link: "",
    social: {
      face: { enabled: true, link: "https://www.facebook.com/fallairesordino"},
      insta: { enabled: true, link: "https://www.instagram.com/fallairesordino"},
      twit: { enabled: false, link: ""},
      ytube: { enabled: true, link: "https://www.youtube.com/channel/UCrClktNEulfNF1RFX3ew2Lg"},
      mail: { enabled: true, link: "mailto:ordino@fallesandorra.com"},
      web: { enabled: false, link: ""}
    },
    image: "img_p05.jpg",
    logo: [ "logo_cord.png","logo_assordino_n.png" ],
    transition: "fade",
    col_enable: true,
    entitats: [
      { id: 1, title: "Esbart de les Valls del nord", link: "https://www.instagram.com/esbartvallsdelnord", logo: "/ord/esbart.png"},
      { id: 2, title: "Castellers d'Andorra", link: "http://www.castellersandorra.com/", logo: "/ord/castellers.png"}
    ],
    foto: "©Eric Rossell",
    esCelebra: true
  },
  {
    id: 5,
    name: "Canillo",
    date: "23 de juny",
    place: "De la plaça de Sant Serni fins al Prat del Pi",
    start: "21h. a la plaça de Sant Serni",
    start_link: "",
    social: {
      face: { enabled: true, link: "https://www.facebook.com/PuntJoveCanillo/"},
      insta: { enabled: false, link: ""},
      twit: { enabled: false, link: ""},
      ytube: { enabled: false, link: ""},
      mail: { enabled: false, link: ""},
      web: { enabled: true, link: "http://www.canillo.ad/"}
    },
    image: "img_p06.jpg",
    logo: [ "logo_ccan.png" ],
    transition: "fade",
    col_enable: false,
    entitats: [
    ],
    foto: "©Fons Associació Fallaires d'Andorra la Vella (FAFALV)",
    esCelebra: true
  },
  {
    id: 6,
    name: "La Massana",
    date: "23 de juny",
    place: "De la plaça de l’església fins a l'aparcament de les escoles",
    start: "22:30. Plaça de l’església",
    start_link: "",
    social: {
      face: { enabled: false, link: "https://www.facebook.com/PuntJoveCanillo/"},
      insta: { enabled: false, link: ""},
      twit: { enabled: false, link: ""},
      ytube: { enabled: false, link: ""},
      mail: { enabled: false, link: ""},
      web: { enabled: false, link: "http://www.canillo.ad/"}
    },
    image: "img_p07.jpg",
    logo: [ "logo_cmas.png" ],
    transition: "fade",
    col_enable: false,
    entitats: [
    ],
    foto: "©Fidel Solsona",
    esCelebra: true
  },
  {
    id: 7,
    name: "Encamp",
    date: "23 de juny",
    place: "Lloc per determinar",
    start: "Horaris per determinar",
    start_link: "",
    social: {
      face: { enabled: false, link: "" },
      insta: { enabled: false, link: "" },
      twit: { enabled: false, link: "" },
      ytube: { enabled: false, link: "" },
      mail: { enabled: true, link: "mailto:encamp@fallesandorra.com" },
      web: { enabled: false, link: "" }
    },
    image: "img_p04.jpg",
    logo: ["logo_cenc.png"],
    transition: "fade",
    col_enable: false,
    entitats: [],
    foto: "©Arxiu Fallaires d´Encamp",
    esCelebra: false
  }
]

const showingCols = ref(false)
const index = ref(0)

const showCols = (value) => {
  index.value = value
  showingCols.value = !showingCols.value
}
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