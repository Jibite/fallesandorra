<template>
  <swiper
    :spaceBetween="30"
    :effect="'fade'"
    :navigation="false"
    :autoplay="{
      delay: 4000,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"
    :loop="true"
    :modules="modules"
    class="mySwiper bg-black"
  >
    <swiper-slide>
      <div class="relative">
        <img src="/img/hero/hero1-lg.webp"  class="absolute inset-0 -z-10 size-full object-cover object-bottom md:object-bottom  w-auto" alt=""/>
        <SectionsHomeHeroText :author="'©Joan Vega / Fons Associació Fallaires d\'Andorra la Vella (FAFALV)'" />
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="relative">
        <img src="/img/hero/hero2-lg.webp"  class="absolute inset-0 -z-10 size-full object-cover object-bottom  w-auto" alt="" />
        <SectionsHomeHeroText :author="'©Comú d\'Escaldes-Engordany / Arxiu Històric'"/>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="relative">
        <img src="/img/hero/hero3-lg.webp"  class="absolute inset-0 -z-10 size-full object-cover object-bottom  w-auto" alt=""/>
        <SectionsHomeHeroText :author="'©Comú Sant Julià de Lòria'"/>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="relative">
        <img src="/img/hero/hero4-lg.webp" class="absolute inset-0 -z-10 size-full object-cover object-bottom  w-auto" alt="" />
        <SectionsHomeHeroText :author="'©Arxiu Fallaires d\'Encamp'"/>
      </div>
    </swiper-slide>
        
    <swiper-slide>
      <div class="relative">
        <img src="/img/hero/hero5-lg.webp" class="absolute inset-0 -z-10 size-full object-cover object-bottom  w-auto" alt=""/>
        <SectionsHomeHeroText :author="'©Guillem Bringué'"/>
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