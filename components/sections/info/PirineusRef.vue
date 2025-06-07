<template>
    <div class="px-6" id="articles">
        <div class="font-primary text-white text-xl">
            <h2>{{ t('etno.elinks') }}</h2>
        </div>
        <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="h-full bg-grey  hover:bg-secondary" v-for="item in elinks" :key="item.id">
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
const elinks = [
  {
    id: 1,
    title: "Museu virtual de les falles al Pirineu.",
    author: "",
    info: "Projecte Prometheus, Programa Interreg POCTEFA 2014-2020 ",
    link: "https://www.cultura.ad/el-nostre-patrimoni-mundial-les-falles-de-sant-joan-les-festes-del-foc-del-solstici-d-estiu-als-pirineus"
  },
  {
    id: 2,
    title: "Les fêtes du feu du solstice d'été dans les Pyrénées",
    author: "",
    info: "UNESCO, desembre 2015",
    link: "https://ich.unesco.org/fr/RL/les-fetes-du-feu-du-solstice-d-ete-dans-les-pyrenees-01073?RL=01073"
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