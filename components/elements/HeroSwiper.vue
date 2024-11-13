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
    <swiper-slide
      ><img
        src="/img/hero/hero1-lg.webp"  class="h-[800px] w-auto object-cover"/></swiper-slide
    ><swiper-slide
      ><img
        src="/img/hero/hero2-lg.webp"  class="h-[800px] w-auto object-cover"/></swiper-slide
    ><swiper-slide
      ><img
        src="/img/hero/hero3-lg.webp"  class="h-[800px] w-auto object-cover"/></swiper-slide
    ><swiper-slide
      ><img src="/img/hero/hero4-lg.webp" class="h-[800px] w-auto object-cover"
    /></swiper-slide><swiper-slide
      ><img src="/img/hero/hero5-lg.webp" class="h-[800px] w-auto object-cover"
    /></swiper-slide>
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
</script>