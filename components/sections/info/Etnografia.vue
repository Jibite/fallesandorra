<template>
    <div class="px-12" id="videos">
        <div class="font-primary text-white text-xl">
            <h2>{{ t('etno.videos') }}</h2>
        </div>
        <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div v-for="item in videos" :key="item.id">
                <iframe width="100%" height="100%"
                        :src="item.url"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                </iframe>
            </div>
        </div>
    </div>
</template>

<script setup>
const { t } = useI18n()
const videos = [
  { id: 1, url: "https://www.youtube.com/embed/QP9aX98GZlA?rel=0&modestbranding=1&showinfo=0"},
  { id: 2, url: "https://www.youtube.com/embed/6LJIVWOJwUA?rel=0&modestbranding=1&showinfo=0"},
  { id: 3, url: "https://www.youtube.com/embed/bKRJVKjPxLE?rel=0&modestbranding=1&showinfo=0"},
  { id: 4, url: "https://www.youtube.com/embed/b21MK7GOdtQ?rel=0&modestbranding=1&showinfo=0"},
  { id: 5, url: "https://www.youtube.com/embed/kcqQjo9PrYg?rel=0&modestbranding=1&showinfo=0"},
  { id: 6, url: "https://www.youtube.com/embed/IX5cXlEU7KY?rel=0&modestbranding=1&showinfo=0"},
  { id: 7, url: "https://www.youtube.com/embed/F_40r3yZaJ4?rel=0&modestbranding=1&showinfo=0"},
  { id: 8, url: "https://www.youtube.com/embed/WOPS0P9Maxc?rel=0&modestbranding=1&showinfo=0"},
  { id: 9, url: "https://www.youtube.com/embed/1vVGMmLZFsA?rel=0&modestbranding=1&showinfo=0"},
  { id: 10, url: "https://www.youtube.com/embed/GhmiEWOXdLQ?rel=0&modestbranding=1&showinfo=0"},
  { id: 11, url: "https://www.youtube.com/embed/DbpS0B2wH8g?rel=0&modestbranding=1&showinfo=0" },
  { id: 12, url: "https://www.youtube.com/embed/2jq0xkhbLuE?rel=0&modestbranding=1&showinfo=0"},
  { id: 13, url: "https://www.youtube.com/embed/ta6iRq_Osrw?rel=0&modestbranding=1&showinfo=0"}
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
        },
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