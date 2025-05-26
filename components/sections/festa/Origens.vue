<template>
    <div class="relative min-h-screen bg-bg flex justify-start lg:items-end">
        <img src="/img/festa/back02.jpg" alt="Fer falla" class="absolute opacity-60 w-full h-full object-cover object-center"/>
        <div class="md:px-24 relative mt-12 ">
            <div class="text-primary bg-bg bg-opacity-40 p-12">
                <h1 class="text-6xl font-primary">{{ t('festa2.title1') }}</h1>
                <p class="font-secondary text-base mt-4 max-w-sm lg:max-w-md tracking-wide">{{ t('festa2.text1') }}</p>
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
    "festa2" : {
        "title1" : "Els orígens",
        "text1" : "Els orígens de la festa es perden en el temps. La celebració coincideix amb el solstici d’estiu, època que simbolitza la plenitud de la vida ja que hi ha més hores de llum i es pot disposar dels fruits que dona la terra. La festa gira a l’entorn del foc, que es considera purificador."
    }
},
"es": {
    "festa2" : {
        "title1" : "Los orígenes",
        "text1" : "Los orígenes de la fiesta se pierden en el tiempo. La celebración coincide con el solsticio de verano, época que simboliza la plenitud de la vida ya que hay más horas de luz y se puede disponer de los frutos que da la tierra. La fiesta gira en torno al fuego, elemento que se considera purificador."
    }
},
"fr": {
    "festa3" : {
        "title1" : "La llegada del solsticio de verano",
        "text1" : "Las fallas convivían con otros ritos asociados al fuego y a esta época del año. Además de la tradicional hoguera, se podía ver la quema de un árbol en medio de la plaza (un álamo temblón en el caso de la plaza del Puial o un pino en Sornàs), la exposición de hierbas aromáticas que soltaban su olor por las calles durante días (Santa Coloma) o la quema de plantas como las bochas, típicas de San Juan (les Bons)."
    }
}
}
</i18n>