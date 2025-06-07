<template>
    <div class="px-6" id="articles">
        <div class="font-primary text-white text-xl">
            <h2>{{ t('etno.alinks') }}</h2>
        </div>
        <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="h-full bg-grey  hover:bg-secondary" v-for="item in alinks" :key="item.id">
                <a :href="item.link" target="_blank">
                    <div class="text-white p-4 mb-4 rounded-lg transition duration-300">
                        <h5 class="font-primary text-lg">{{item.title}}</h5>
                        <p class="mt-2 font-secondary text-sm">{{ item.author }}</p>
                        <p class="mt-2 font-secondary text-sm">{{ item.info }}</p>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
const { t } = useI18n()
const alinks = [
  {
    id: 1,
    title: "Folk-lore Andorrà",
    author: "ARMET I RICART, Salvador. Comte de Carlet",
    info: "Butlletí del Centre Excursionista de Catalunya. Núm. 148. Pàgs 143-156. Barcelona, maig 1907",
    link: "https://ddd.uab.cat/pub/butcenexccat/butcenexccat_a1907m5v17n148.pdf"
  },
  {
    id: 2,
    title: "Les falles de Sant Joan d’Andorra. Quan les rodes del foc encenen les valls",
    author: "BURGOS, Rosa i ROIG, Albert.",
    info: "Govern d'Andorra. Ministeri de Cultura i Esports. Andorra, febrer 2019.",
    link: "https://www.cultura.ad/images/stories/PatrimoniImmaterial/FestesInteresCultural/Separata_FALLES_SANT_JOAN_2019.pdf"
  },
  {
    id: 3,
    title: "El patrimoni festiu andorrà. Expressions immaterials d'identitat i de creativitat",
    author: "DE LA PARTE, Isabel",
    info: "Govern d'Andorra. Ministeri de Cultura i Esports. Andorra, febrer 2019",
    link: "https://www.cultura.ad/images/stories/PatrimoniImmaterial/Patrimoni_festiu_Andorra.pdf"
  },
  {
    id: 4,
    title: "La cremada de falles de Sant Joan d’Andorra la Vella",
    author: "Fallaires d'Andorra la Vella",
    info: "Ex libris Casa Bauró – Número 17. Pàgs 37-47. Govern d’Andorra. Ministeri de Cultura. Biblioteca Nacional d’Andorra. Andorra, 2014",
    link: "https://www.cultura.ad/images/stories/Accio_Cultural/Publicacions/ex-libris/2014/Ex-libris2014.pdf"
  }
]
</script>

<i18n lang="json">
{
  "ca": {
    "etno" : {
        "videos" : "Etnografia de les falles",
        "docs" : "Publicacions",
        "rlinks" : "Enllaços de referència",
        "alinks" : "Altres enllaços d'interès",
        "elinks" : "Enllaços Pirineus",
        "location" : "Lloc",
        "start" : "Inici",
        "way" : "Recorregut",
        "timetable" : "Horari i activitats",
        "colabora" : "Col·laboradors i agraïments"
    }
  },
  "es": {
        "etno" : {
        "videos" : "Etnografia de las fallas",
        "docs" : "Publicaciones",
        "rlinks" : "Enlaces de referencia",
        "alinks" : "Otros enlaces de interés",
        "elinks" : "Enlaces Pirineos",
        "location" : "Lugar",
        "start" : "Inicio",
        "way" : "Recorrido",
        "timetable" : "Horario y actividades",
        "colabora" : "Colaboradores y agradecimientos"
        }
  },
  "fr": {
    "etno" : {
        "videos" : "Ethnographie des falles",
        "docs" : "Publications",
        "rlinks" : "Liens de référence",
        "alinks" : "Autres liens d'intérêt",
        "elinks" : "Liens Pyrénées",
        "location" : "Site",
        "start" : "Début",
        "way" : "Route",
        "timetable" : "Horaire et activités",
        "colabora" : "Collaborateurs et remerciements"
    }
  }
}
</i18n>