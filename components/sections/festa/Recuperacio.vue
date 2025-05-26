<template>
    <div class="relative min-h-screen bg-bg flex justify-start lg:items-end">
        <img src="/img/festa/back05.jpg" alt="Fer falla" class="absolute opacity-60 w-full h-full object-cover object-center"/>
        <div class="md:px-24 relative mb-12">
            <div class="text-primary bg-bg bg-opacity-40 p-12">
                <h1 class="text-6xl font-primary">{{ t('festa5.title1') }}</h1>
                <p class="font-secondary text-base mt-4 max-w-sm lg:max-w-md tracking-wide">{{ t('festa5.text1') }}</p>
                <p class="font-secondary text-base mt-4 max-w-sm lg:max-w-md tracking-wide">{{ t('festa5.text2') }}</p>
                <p class="font-secondary text-base mt-4 max-w-sm lg:max-w-md tracking-wide">{{ t('festa5.text3') }}</p>
                <div class="mt-4 text-sm"><span>Foto: &copy; Comú d'Escaldes-Engordany / Arxiu Històric</span></div>
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
    "festa5" : {
        "title1" : "La recuperació",
        "text1" : "El jovent d’Andorra la Vella va recuperar la tradició de cremar falles el 1987.",
        "text2" : "El perfil del fallaire ha canviat. Ara nens i nenes són fallaires de llum i els adults, fallaires de foc que roden les falles al llarg d'un recorregut per carrers i places que finalitza amb l'encesa de la foguera.",
        "text3" : "Les falles es van estendre per la majoria de parròquies, però d’una forma discontínua. A finals dels anys 90 la festa finalment es va consolidar a Sant Julià de Lòria (1997), Encamp (1998) i Escaldes-Engordany (2000). A Ordino la recuperació de la tradició va arribar l’any 2017, a Canillo el 2020 i a La Massana el 2021."
    }
},
"es": {
    "festa5" : {
        "title1" : "La recuperación",
        "text1" : "Los jóvenes de Andorra la Vella recuperaron la tradición de quemar fallas en 1987.",
        "text2" : "El perfil del fallaire ha cambiado. Ahora niños y niñas son fallaires de luz y los adultos fallaires de fuego que ruedan las fallas recorriendo calles y plazas hasta finalizar con el encendido de la hoguera.",
        "text3" : "Las fallas se extendieron por la mayoría de las parroquias, pero de una forma discontinua. A finales de los años 90 la fiesta finalmente se consolidó en Sant Julià de Lòria (1997), Encamp (1998) y Escaldes-Engordany (2000). En Ordino la recuperación de la tradición llegó en 2017, en Canillo el 2020 y en La Massana el 2021."
    }
},
"fr": {
    "festa5" : {
        "title1" : "Récupération",
        "text1" : "Les jeunes d’Andorra la Vella ont retrouvé la tradition du brûlage de falles en 1987.",
        "text2" : "Le profil du fallaire a changé. Maintenant, les garçons et les filles sont des fallaires de lumière et les adultes, des fallaires de feu qui font tourner les falles tout au long d’un parcours dans les rues et les places et qui se termine par l’allumage d’un grand feu.",
        "text3" : "Les falles se sont répandues dans la plupart des paroisses, mais de façon discontinue. À la fin des années 1990, la fête s’est finalement consolidée à Sant Julià de Lòria (1997), Encamp (1998) et Escaldes-Engordany (2000). A Ordino, le rétablissement de la tradition est venu en 2017, a Canillo en 2020 et La Massana en 2021."
    }
}
}
</i18n>