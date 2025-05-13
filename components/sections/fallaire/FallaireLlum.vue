<template>
    <div class="relative min-h-screen bg-bg flex justify-end">
        <img src="/img/fallaire/back_llum.jpg" alt="Fer falla" class="hidden lg:block absolute opacity-60 w-full h-full object-cover object-center"/>
        <img src="/img/fallaire/back_llum.jpg" alt="Fer falla" class="absolute lg:hidden opacity-60 w-full h-auto object-cover object-top"/>
        <div class="mx-auto relative p-12 grid grid-cols-2">
            <div class="p-24">
                <img src="/img/fallaire/llum01.jpg" alt="">
                <p class="text-sm text-white font-secondary">{{t('foto-right')}} ©Comú d'Escaldes-Engordany / Arxiu Històric</p>
            </div>
            <div class="text-white relative flex flex-col justify-center items-start pl-12 lg:pl-32 py-24 mt-64 lg:mt-0 bg-black bg-opacity-50">
                <h1 class="text-6xl font-primary">{{ t('llum.title1') }}</h1>
                <p class="font-secondary text-base mt-4 max-w-sm lg:max-w-md tracking-wide">{{ t('llum.text1') }}</p>
                <p class="font-secondary text-base mt-4 max-w-sm lg:max-w-md tracking-wide">{{ t('llum.text2') }}</p>
            </div>
            <div class="pr-12 py-24 -mt-24">
                <img src="/img/fallaire/llum02.jpg" alt="">
                <p class="text-sm text-white font-secondary">{{t('foto-right')}} ©Comú Sant Julià de Lòria</p>
            </div>
            <div class="pl-6 lg:pl-12 py-24">
                <img src="/img/fallaire/llum03.jpg" alt="">
                <p class="text-sm text-white font-secondary">{{t('foto-right')}} ©Qucut Producció Audiovisual / Fons Associació Fallaires d'Andorra la Vella (FAFALV)</p>
            </div>
        </div>
    </div>
</template>

<script setup>
const { t } = useI18n(
    {
        useScope: 'local'
    }
)
</script>

<i18n lang="json">
{
    "ca": {
        "foto-right" : "Foto:",
        "fotos-right" : "Fotografies:",
        "llum" : {
            "title1" : "Transmissió generacional",
            "text1" : "Que els adults siguin els encarregats de rodar el foc no vol dir que nens i nenes hagin perdut protagonisme: els més menuts han esdevingut fallaires de llum.",
            "text2" : "A Andorra la Vella i Escaldes els nens giravolten boles de llum que canvien de color i van lligades a un cordill. A Sant Julià i Ordino la falla de la canalla consisteix en un parell de boles de llum que també canvien de color lligades a una cadena i embolicades dins d’una malla amb tires de color vermell que simulen la flama."
        }
    },
    "es": {
        "foto-right" : "Foto:",
        "fotos-right" : "Fotografies:",
        "llum" : {
            "title1" : "Transmisión generacional",
            "text1" : "Que los adultos sean los encargados de rodar el fuego no significa que niños y niñas hayan perdido protagonismo: los más pequeños se han convertido en fallaires de luz.",
            "text2" : "En Andorra la Vella y Escaldes, los niños hacen girar bolas de luz que cambian de color y van ligadas a un cordel. En Sant Julià y Ordino, la falla de los niños consiste en un par de bolas de luz que también cambian de color ligadas a una cadena y envueltas dentro de una malla con tiras de color rojo que simulan las llamas."
        }
    },
    "fr": {
        "foto-right" : "Photo:",
        "fotos-right" : "Photos:",
        "llum" : {
            "title1" : "Transmission générationnelle",
            "text1" : "Le fait que les adultes aient la responsabilité de faire brûler les falles ne signifie pas que les plus jeunes n’aient pas un rôle important: ils sont devenus des fallaires de luminions.",
            "text2" : "A Andorra la Vella et Escaldes, les enfants font tourner des boules de lumière qui changent de couleur et sont attachées à une ficelle. À Sant Julià et Ordino, la falle des gamins se compose d’une paire de boules légères, qui changent également de couleur, attachées à une chaîne et enveloppées à l’intérieur d’un maillage avec des bandes de rouge qui simulent la flamme."
        }
    }
}
</i18n>