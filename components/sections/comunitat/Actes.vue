<template>
    <div class="min-h-screen bg-bg flex items-end justify-between">
        <img src="/img/comunitat/actes5.webp" alt="Fer falla" class="absolute opacity-90 w-full h-full object-cover object-center"/>
        <div class="relative lg:w-4/12 bg-bg -mb-96 lg:mb-0">
            <img src="/img/comunitat/actes4.jpeg" alt="Fer falla" class="absolute opacity-40 w-full h-full object-cover object-bottom"/>
            <div class="relative py-24 pl-12 pr-24 text-white">
                <h2 class="font-primary text-4xl">{{ t('actes.title1') }}</h2>
                <p class="text-lg font-secondary mt-4">{{ t('actes.text1') }}</p>
                <p class="text-lg font-secondary mt-2">{{ t('actes.text2') }}</p>
                <p class="text-lg font-secondary mt-2">{{ t('actes.text3') }}</p>
                <p class="text-sm mt-2">Foto: © Comú d'Andorra la Vella / Tony Lara</p>
            </div>
        </div>
        <div class="relative p-12 hidden lg:block">
            <img src="/img/comunitat/actes6.jpg" alt="" class="h-96 w-auto">
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
            "actes" : {
                "title1" : "Relleu de fallaire major i cremada de la primera falla",
                "text1" : "L’activitat es fa a la plaça del Consell el 23 de juny a la tarda. El fallaire major sortint traspassa la capa vermella al fallaire major entrant i li penja al coll el clau d’or que el distingeix com a màxim representant dels fallaires al llarg de tot un any. El nou fallaire major és l’encarregat d’encendre la primera falla i fer-la rodar enmig de la plaça.",
                "text2" : "En aquest mateix acte, també es fa un homenatge a una persona que s'ha significat al llarg de la seva vida amb les falles, ja sigui per a la seva promoció, difusió i/o preservació de la festa.",
                "text3" : "L’acte es desenvolupa conjuntament amb l’arribada de la Flama del Canigó a Casa de la Vall organitzada pel Centre de la Cultura Catalana."
            }
        },
        "es": {
            "actes" : {
                "title1" : "Relevo de fallaire mayor y quema de la primera falla",
                "text1" : "La actividad se realiza en la plaza del Consell el 23 de junio por la tarde. El fallaire major saliente traspasa la capa roja al fallaire major entrante y le cuelga del cuello el clavo de oro que lo distingue como máximo representante de los fallaires durante todo un año. El nuevo fallaire major es el encargado de encender la primera falla y de hacerla rodar en el centro de la plaza.",
                "text2" : "En este mismo acto también se hace un homenaje a una persona que se ha identificado a lo largo de su vida con las fallas, ya sea para su promoción y difusión o para la preservación de la fiesta.",
                "text3" : "El acto coincide con la llegada de la Flama del Canigó a la Casa de la Vall, organizada por el Centre de la Cultura Catalana."
            }
        },
        "fr": {
            "actes" : {
                "title1" : "Changement de fallaire major et brûlage de la première falla",
                "text1" : "Cette activité a lieu sur la place du Consell general (Parlement andorran) le 23 juin après-midi. Le fallaire major sortant passe sa cape rouge au fallaire major entrant et lui passe autour du cou le clou d'or qui le distingue comme le représentant ultime des fallaires tout au long de la prochaine année. Le nouveau fallaire major est chargé de brûler la première falle et de la faire tourner au milieu de la place.",
                "text2" : "Dans ce même évènement un hommage est également porté à une personne qui a eu un rôle significatif dans le monde des falles tout au long de sa vie; que ce soit au niveau de leur promotion, diffusion et/ou préservation de la fête.",
                "text3" : "Cet évènement a lieu de façon simultanée à l'arrivée de la flamme du Canigou à la Casa de la Vall, organisée par le Centre de la Cultura Catalana."
            }
        }
    }
</i18n>