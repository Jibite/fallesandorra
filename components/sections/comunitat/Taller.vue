<template>
    <div class="h-screen bg-bg">
    <img src="/img/comunitat/taller2.jpg" alt="Fer falla" class="absolute opacity-50 w-full h-full object-cover object-center"/>
    <div class="relative h-full flex flex-col justify-end py-24 px-6 gap-6">
        <div class="text-white">
            <h2 class="text-5xl font-primary">{{ t('taller.title1') }}</h2>
            <p class="mt-4 w-6/12 font-secondary leading-6 tracking-wider text-lg">{{ t('taller.text1') }}</p>
            <p class="mt-2 text-white text-sm">Foto: © Oriol Llauradó</p>
        </div>
        <div class="w-8/12 grid grid-cols-3 gap-4">
            <img src="/img/comunitat/taller1.jpg" alt="">
            <img src="/img/comunitat/taller3.jpg" alt="">
            <img src="/img/comunitat/taller4.jpg" alt="">
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
            "taller" : {
                "title1" : "Taller de la falla tradicional",
                "text1" : "A principis de juny, els fallaires pelen els beços per elaborar la falla tradicional. Cada col·lectiu crema les seves falles tradicionals en un moment determinat de la festa."
            }
        },
        "es": {
            "taller" : {
                "title1" : "Taller de la falla tradicional",
                "text1" : "A principios de junio, los fallaires pelan los abedules para elaborar la falla tradicional. Cada colectivo quemará sus fallas tradicionales en un momento determinado de la fiesta."
            }
        },
        "fr": {
            "taller" : {
                "title1" : "Atelier de la falla traditionnelle",
                "text1" : "Début juin, les fallaires pèlent les bouleaux pour faire les falles traditionnelles. Chaque groupe brûlera ses falles traditionnelles à un certain moment de la fête."
            }
        }
    }
</i18n>