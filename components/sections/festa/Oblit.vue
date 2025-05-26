<template>
    <div class="relative min-h-screen bg-bg flex lg:justify-end">
    <img src="/img/festa/back04.jpg" alt="Fer falla" class="absolute opacity-60 w-full h-full object-cover object-center"/>
    <div class="md:px-24 relative mt-12">
        <div class="text-primary bg-bg bg-opacity-40 p-12">
            <h1 class="text-6xl font-primary">{{ t('festa4.title1') }}</h1>
            <p class="font-secondary text-base mt-4 max-w-sm lg:max-w-md tracking-wide">{{ t('festa4.text1') }}</p>
            <div class="mt-4 text-sm"><span>Foto: &copy; Arxiu Fallaires d'Encamp</span></div>
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
    "festa4" : {
        "title1" : "Un temps d'oblit",
        "text1" : "La tradició de cremar falles públicament es va començar a perdre a meitat del segle XX, però mai va desaparèixer. Hi ha registres que com a mínim en un parell de llocs es feia la cremada en un entorn íntim i familiar."
    }
},
"es": {
    "festa4" : {
        "title1" : "Un tiempo de olvido",
        "text1" : "La tradición de quemar fallas públicamente se empezó a perder a mitad del siglo XX, pero nunca desapareció. Hay registros de que al menos en un par de sitios se practicaba la cremada en un entorno íntimo y familiar."
    }
},
"fr": {
    "festa4" : {
        "title1" : "Un temps d’oubli",
        "text1" : "La tradition de brûler publiquement les falles a commencé à se perdre au milieu du XXe siècle, mais n’a jamais disparu complètement. Il existe des archives témoignant du fait que, dans quelques endroits, le brûlage avait lieu dans un environnement intime et familier."
    }
}
}
</i18n>