<template>
    <div class="px-6" id="articles">
        <div class="font-primary text-white text-xl">
            <h2>{{ t('etno.rlinks') }}</h2>
        </div>
        <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="h-full bg-grey hover:bg-secondary" v-for="item in links" :key="item.id">
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
const links = [
  {
    id: 1,
    title: "El nostre patrimoni mundial: les Falles de Sant Joan. Les Festes del foc del solstici d’estiu als Pirineus.",
    author: "ARXIU D’ETNOGRAFIA D’ANDORRA",
    info: "Govern d'Andorra. Ministeri de Cultura i Esports. Andorra, febrer 2019.",
    link: "https://www.cultura.ad/el-nostre-patrimoni-mundial-les-falles-de-sant-joan-les-festes-del-foc-del-solstici-d-estiu-als-pirineus"
  },
  {
    id: 2,
    title: "El nostre patrimoni festiu: les festes d’interès cultural",
    author: "ARXIU D’ETNOGRAFIA D’ANDORRA",
    info: "Govern d'Andorra. Ministeri de Cultura i Esports. Andorra, febrer 2019",
    link: "https://www.cultura.ad/el-nostre-patrimoni-festiu-les-festes-d-interes-cultural"
  },
  {
    id: 3,
    title: "Les falles d'Andorra, Patrimoni immaterial de la humanitat. Una festa que creix i uneix dia rere dia",
    author: "ROIG, Albert",
    info: "Govern d'Andorra. Ministeri de Cultura i Esports. Andorra, febrer 2019.",
    link: "https://www.cultura.ad/images/stories/PatrimoniImmaterial/FestesInteresCultural/FestesIC_07_01.pdf"
  },
  {
    id: 4,
    title: "Las fallas de Andorra, Patrimoni de la humanidad de la UNESCO.",
    author: "National Geographic | Creative Works",
    info: "Andorra Turisme, 2025",
    link: "https://www.natgeotv.com/es/especial/fallas-de-andorra"
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