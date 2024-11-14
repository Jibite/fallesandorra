<template>
  <swiper
    :spaceBetween="30"
    :effect="'fade'"
    :navigation="true"
    :autoplay="{
      delay: 3000,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"
    :loop="true"
    :modules="modules"
    class="mySwiper h-[800px]"
  >
    <swiper-slide>
      <div class="relative">
        <img src="/img/hero/hero1-lg.webp"  class="absolute inset-0 -z-10 size-full object-cover object-right md:object-center max-h-screen w-auto" alt=""/>
        <SectionsHomeHeroText />
        <div class="h-[800px] flex items-end justify-end"><p class="text-white text-right mb-10 mr-10 bg-black p-1 opacity-80 font-secondary italic">{{t('foto-right')}} ©Joan Vega / Fons Associació Fallaires d'Andorra la Vella (FAFALV)</p></div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="relative">
        <img src="/img/hero/hero2-lg.webp"  class="absolute inset-0 -z-10 size-full object-cover object-right md:object-center h-[800px] w-auto" alt="" />
        <SectionsHomeHeroText />
        <div class="h-[800px] flex items-end justify-end"><p class="text-white text-right mb-10 mr-10 bg-black p-1 opacity-80 font-secondary italic">{{t('foto-right')}} ©Comú d'Escaldes-Engordany / Arxiu Històric</p></div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="relative">
        <img src="/img/hero/hero3-lg.webp"  class="absolute inset-0 -z-10 size-full object-cover object-right md:object-center h-[800px] w-auto" alt=""/>
        <SectionsHomeHeroText />
        <div class="h-[800px] flex items-end justify-end"><p class="text-white text-right mb-10 mr-10 bg-black p-1 opacity-80 font-secondary italic">{{t('foto-right')}} ©Comú Sant Julià de Lòria</p></div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="relative">
        <img src="/img/hero/hero4-lg.webp" class="absolute inset-0 -z-10 size-full object-cover object-right md:object-center h-[800px] w-auto" alt="" />
        <SectionsHomeHeroText />
        <div class="h-[800px] flex items-end justify-end"><p class="text-white text-right mb-10 mr-10 bg-black p-1 opacity-80 font-secondary italic">{{t('foto-right')}} ©Arxiu Fallaires d'Encamp</p></div>
      </div>
    </swiper-slide>
        
    <swiper-slide>
      <div class="relative">
        <img src="/img/hero/hero5-lg.webp" class="absolute inset-0 -z-10 size-full object-cover object-right md:object-center h-[800px] w-auto" alt=""/>
        <SectionsHomeHeroText />
        <div class="h-[800px] flex items-end justify-end"><p class="text-white text-right mb-10 mr-10 bg-black p-1 opacity-80 font-secondary italic">{{t('foto-right')}} ©Guillem Bringué</p></div>
      </div>
    </swiper-slide>

  </swiper>
</template>

<script setup>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/effect-fade';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';

  import '@/assets/css/style.css';

  import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules';

const modules = [Pagination, Navigation, EffectFade, Autoplay]

  const { t } = useI18n({
    useScope: 'local'
  })
</script>

<i18n lang="json">
  {
    "ca": {
      "foto-right": "Foto:"
    },
    "es": {
      "foto-right": "Foto"
    },
    "fr": {
      "foto-right": "Foto"
    }
  }
</i18n>