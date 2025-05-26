<template>
    <div class="relative min-h-screen bg-bg flex justify-start">
    <img src="/img/festa/back01.jpg" alt="Fer falla" class="absolute opacity-60 w-full h-full object-cover object-center"/>
    <div class="md:px-24 relative mt-12">
        <div class="text-primary bg-bg bg-opacity-40 p-12">
            <h1 class="text-6xl font-primary">{{ t('festa1.title1') }}</h1>
            <p class="font-secondary text-base mt-4 max-w-sm lg:max-w-md tracking-wide">{{ t('festa1.text1') }}</p>
            <p class="font-secondary text-base mt-4 max-w-sm lg:max-w-md tracking-wide">{{ t('festa1.text2') }}</p>
            <p class="font-secondary text-base mt-4 max-w-sm lg:max-w-md tracking-wide">{{ t('festa1.text3') }}</p>
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
            "festa1" : {
                "title1" : "Viu la festa",
                "text1" : "La cremada de falles d’Andorra és una festa tradicional i popular que se celebra a l’entrada del solstici d’estiu.",
                "text2" : "Consisteix en què els fallaires fan una falla, l’encenen i la fan rodar, és a dir, la giren amb molta rapidesa per crear grans cercles de foc.",
                "text3" : "Aquesta tradició es conserva la nit del 23 de juny, revetlla de Sant Joan, a les parròquies d'Andorra la Vella, Sant Julià de Lòria, Escaldes-Engordany, Encamp, Canillo i La Massana; i la nit del 28 de juny, revetlla de Sant Pere, a Ordino."
            }
        },
        "es": {
            "festa1" : {
                "title1" : "Vive la fiesta",
                "text1" : "La cremada de falles de Andorra es una fiesta tradicional y popular que se celebra durante la entrada del solsticio de verano.",
                "text2" : "Consiste en que los fallaires hacen una falla, la encienden y la hacen rodar, es decir, la giran con mucha rapidez para crear grandes círculos de fuego.",
                "text3" : "Esta tradición se conserva la noche del 23 de junio, verbena de San Juan, en las parroquias de Andorra la Vella, Sant Julià de Lòria, Escaldes-Engordany, Encamp, Canillo y La Massana; y la noche del 28 de junio, verbena de San Pedro, en Ordino."
            }
        },
        "fr": {
            "festa1" : {
                "title1" : "Vivez la fête",
                "text1" : "Le brûlage des falles d’Andorre est une fête traditionnelle et populaire qui est célébrée à l’entrée du solstice d’été.",
                "text2" : "Les fallaires font une falle, l’allument et la font tourner très rapidement pour créer de grands cercles de feu.",
                "text3" : "Cette tradition se maintien dans la nuit du 23 juin, la Saint-Jean, dans les paroisses d’Andorra la Vella, Sant Julià de Lòria, Escaldes-Engordany, Encamp, Canillo et La Massana; et la nuit du 28 juin, saint Pierre, à Ordino."
            }
        }
    }
</i18n>