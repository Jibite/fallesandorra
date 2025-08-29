<template>
    <div class="relative min-h-screen bg-bg grid grid-cols-1 lg:grid-cols-2">
        <div class="text-primary flex flex-col items-start justify-center p-12 lg:p-24">
            <div class="">
                <h1 class="text-6xl font-primary">{{ t('tnacional.title1') }}</h1>
            </div>
            <div class="font-secondary leading-6 tracking-wider">
                <p class="mt-2 text-lg max-w-lg">{{ t('tnacional.text1') }}</p>
                <p class="mt-2 text-lg max-w-lg">{{ t('tnacional.text2') }}</p>
                <p class="mt-2 text-lg max-w-lg">{{ t('tnacional.text3') }}</p>
                <p class="mt-4 copyright-foto" style="text-align: right;">Foto: ©Comú d'Andorra la Vella / Tony Lara</p>
            </div>
        </div>
        <img src="/img/comunitat/tn_image.jpg" alt="Fer falla" class="opacity-60 w-full h-screen object-cover object-top"/>
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
            "tnacional" : {
                "title1" : "La taula nacional",
                "text1" : "La taula nacional de falles de les Valls d'Andorra es va crear l’any 2017 per reunir els diferents col·lectius i establir estratègies conjuntes per salvaguardar i mantenir viu aquest patrimoni immaterial.",
                "text2" : "És un espai de treball conjunt i enfortiment de la comunitat fallaire.  Està integrada per representats de cada col·lectiu i pels dos darrers fallaires majors.",
                "text3" : "A més, fa d’interlocutor amb el Departament de Patrimoni Cultural per dissenyar i desenvolupar els projectes de divulgació i salvaguarda de la cremada de falles a Andorra."
            }
        },
        "es": {
            "tnacional" : {
                "title1" : "La taula nacional",
                "text1" : "La taula nacional de falles de les valls de Andorra se creó el año 2017 para reunir a los diferentes colectivos y establecer estrategias conjuntas para salvaguardar y mantener vivo este patrimonio inmaterial.",
                "text2" : "Es un espacio de trabajo conjunto y fortalecimiento de la comunidad fallaire. Está integrada por representantes de cada colectivo y por los dos últimos fallaires majors.",
                "text3" : "Además, hace de interlocutor con el Ministeri de Cultura i Esports para diseñar y desarrollar los proyectos de divulgación y salvaguarda de la cremada de falles en Andorra."
            }
        },
        "fr": {
            "tnacional" : {
                "title1" : "La taula nacional",
                "text1" : "La taula nacional des falles des vallées d’Andorre a été créé en 2017 pour réunir les différents groupes et établir des stratégies communes pour sauvegarder et maintenir en vie ce patrimoine immatériel.",
                "text2" : "Il s’agit d’un espace de travail conjoint et de renforcement de la communauté fallaire.  Il est composé de représentants de chaque groupe et des deux derniers fallaires majors.",
                "text3" : "En outre, il agit comme interlocuteur auprès du ministère de la Culture et des Sports pour concevoir et développer des projets de diffusion et de sauvegarde des brûlages de falles en Andorre."
            }
        }
    }
</i18n>