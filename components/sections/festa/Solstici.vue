<template>
    <div class="relative min-h-screen bg-bg flex justify-start">
        <img src="/img/festa/back03.jpg" alt="Fer falla" class="absolute opacity-60 w-full h-full object-cover object-center"/>
        <div class="mx-auto mt-12 relative grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 py-6 bg-bg bg-opacity-40 h-full">
            <div class="text-primary p-12 md:col-span-2 lg:col-span-1">
                <h1 class="text-6xl font-primary">{{ t('festa3.title1') }}</h1>
                <p class="font-secondary text-base mt-4 max-w-sm md:max-w-xl lg:max-w-md tracking-wide">{{ t('festa3.text1') }}</p>
                <div class="mt-4 text-sm"><span>Foto: &copy; Comú d'Escaldes-Engordany / Arxiu Històric</span></div>
            </div>
            <div class="h-64 lg:h-80 mt-6 flex px-12">
                <iframe width="100%" height="100%"
                        src="https://www.youtube.com/embed/bKRJVKjPxLE?rel=0&modestbranding=1&showinfo=0"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                </iframe>
            </div>
            <div class="h-64 lg:h-80 mt-6 px-12">
                <iframe width="100%" height="100%"
                        src="https://www.youtube.com/embed/b21MK7GOdtQ?rel=0&modestbranding=1&showinfo=0"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                </iframe>
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
        "festa3" : {
            "title1" : "L'arribada del solstici d'estiu",
            "text1" : "Les falles convivien amb d’altres ritus associats al foc i en aquesta època de l’any, a part de la tradicional foguera, com pot ser la crema d’un arbre al mig de la plaça (un trèmol en el cas de la placeta del Puial o un pi a Sornàs), l’exposició d’herbes aromàtiques que deixaven anar el seu flaire pels carrers durant dies (a Santa Coloma) o la crema de plantes com les botges típiques de Sant Joan (a les Bons)."
        }
    },
    "es": {
        "festa3" : {
            "title1" : "La llegada del solsticio de verano",
            "text1" : "Las fallas convivían con otros ritos asociados al fuego y a esta época del año. Además de la tradicional hoguera, se podía ver la quema de un árbol en medio de la plaza (un álamo temblón en el caso de la plaza del Puial o un pino en Sornàs), la exposición de hierbas aromáticas que soltaban su olor por las calles durante días (Santa Coloma) o la quema de plantas como las bochas, típicas de San Juan (les Bons)."
        }
    },
    "fr": {
        "festa3" : {
            "title1" : "L’arrivée du solstice d’été",
            "text1" : "Les falles coexistaient avec d’autres rites associés au feu et à cette époque de l’année, en dehors du feu de joie traditionnel, comme la combustion d’un arbre au milieu de la place (un tremble dans le cas de la Placeta del Puial ou un pin à Sornàs), l’exposition d’herbes aromatiques qui libéraient leur parfum dans les rues pendant des jours (à Santa Coloma) ou la combustion de plantes telles que les passerages épineuses typiques de Sant Joan (à Les Bons)."
        }
    }
  }
</i18n>