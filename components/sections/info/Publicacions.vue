<template>
    <div class="px-6" id="articles">
        <div class="font-primary text-white text-2xl uppercase">
            <h2>{{ t('etno.docs') }}</h2>
        </div>
        <div class="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="h-full bg-grey hover:bg-secondary" v-for="item in publicacions" :key="item.id">
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
const publicacions = [
  { id: 1,
    title: "Roda el foc. 30 anys de falles a Andorra la Vella.",
    author: "ROIG, Albert",
    info: "Anem Editors i Pagès Editors. Lleida, desembre 2017.",
    link: "https://www.pageseditors.cat/ca/roda-el-foc.html"
  },
  { id: 2,
    title: "Les falles del Pirineu",
    author: "RIART, Oriol i JORDÀ, Sebastià",
    info: "Pagès Editors. Lleida, 2015",
    link: "https://www.pageseditors.cat/ca/les-falles-del-pirineu.html"
  },
  { id: 3,
    title: "Foc al faro! La festa de les falles al Pirineu",
    author: "FARRÉ SAHÚN, Xavier i RICART IBARS, Sergi",
    info: "Alpinart.  Taüll, 2012",
    link: ""
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