<template>
    <div class="relative min-h-screen bg-bg flex justify-center">
    <img src="/img/comunitat/activitats3.JPG" alt="Fer falla" class="absolute opacity-90 w-full h-full object-cover object-center"/>
    <div class="mx-auto relative flex flex-col items-between justify-between py-24">
        <div class="p-6 lg:p-12 w-screen text-right place-self-end text-white flex flex-col items-end">
            <h2 class="font-primary text-4xl">{{ t('activities.title1') }}</h2>
            <p class="font-secondary leading-6 tracking-wider text-base max-w-md">{{ t('activities.text1') }}</p>
        </div>
        <div class="p-6 lg:p-12 text-white flex flex-col gap-12">
            <div class="p-12 lg:w-4/12 flex flex-col items-start bg-greenOverlay">
                <h2 class="font-primary text-5xl">{{ t('argolla.title1') }}</h2>
                <p class="mt-4 font-secondary leading-6 tracking-wider text-base max-w-xl">{{ t('argolla.text1') }}</p>
                <p class="mt-2 text-white">©Fons Associació Fallaires d'Andorra la Vella</p>
            </div>
            <div class="p-12 lg:w-6/12 flex flex-col items-start bg-bgOverlay">
                <h4 class="font-primary text-2xl">{{ t('argolla.title2') }}</h4>
                <p class="font-secondary leading-6 tracking-wider text-base">{{ t('argolla.text2') }}</p>
                <p class="font-secondary leading-6 tracking-wider text-base">{{ t('argolla.text3') }}</p>
            </div>
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
            "activities" : {
                "title1" : "Activitats conjuntes",
                "text1" : "Els cinc col·lectius fallaires organitzen de forma conjunta diverses activitats"
            },
            "argolla" : {
                "title1" : "La recerca de l'argolla de Fontargent",
                "text1" : "Consisteix en un joc de pistes a la Vall d’Incles al final del qual hi ha una argolla de plata d’on en penja un clau d’or. Qui la trobi serà anomenat fallaire major. L’activitat es desenvolupa a principis de juny, en un cap de setmana de germanor amb fallaires de tots els col·lectius.",
                "title2" : "Llegendes",
                "text2" : "Hi ha llegendes andorranes que diuen que aquestes argolles van ser col·locades per Carlemany o el seu fill Lluís el Pietós per commemorar les victòries davant els àrabs.",
                "text3" : "La de Fontargent seria l’argolla on Carlemany va estacar el seu cavall  i que cada nit de Sant Joan es converteix en or."
            }
        },
        "es": {
            "activities" : {
                "title1" : "Actividades conjuntas",
                "text1" : "Los cinco colectivos fallaires organizan de forma conjunta diversas actividades."
            },
            "argolla" : {
                "title1" : "La búsqueda de la argolla de Fontargent",
                "text1" : "Consiste en un juego de pistas en el Valle de Incles al final del cual hay una argolla de plata de donde cuelga un clavo de oro. Quien la encuentre será nombrado fallaire mayor. La actividad se desarrolla a principios de junio, en un fin de semana de confraternidad con fallaires de todos los colectivos.",
                "title2" : "Leyendas",
                "text2" : "Hay leyendas andorranas que dicen que estas argollas fueron colocadas por Carlomagno o su hijo Luis el Piadoso para conmemorar las victorias ante los árabes.",
                "text3" : "La de Fontargent sería la argolla en la que Carlomagno estacó a su caballo y que cada noche de San Juan se convierte en oro."
            }
        },
        "fr": {
            "activities" : {
                "title1" : "Activités conjointes",
                "text1" : "Les cinq groupes fallaires organisent conjointement diverses activités."
            },
            "argolla" : {
                "title1" : "La recherche de l’anneau de Fontargent",
                "text1" : "Il se compose d’un jeu de pistes dans la vallée d’Incles où se trouve le lac et le pic de Fontargent, au sommet duquel la légende situe un anneau magique auquel serait accroché un clou en or. Le fallaire qui réussit á trouver le clou en or devient fallaire major. ",
                "title2" : "Légendes",
                "text2" : "Il y a des légendes andorranes qui disent que ces anneaux ont été placés par Charlemagne ou son fils Louis le Pieux pour commémorer les victoires contre les Arabes.",
                "text3" : "Celui de Fontargent serait l’anneau où Charlemagne attacha son cheval. Ainsi, chaque nuit de la Saint-Jean cet anneau se transforme en or. L’activité se déroule début juin, dans un week-end de fraternité avec les fallaires de tous les groupes."
            }
        }
    }
</i18n>