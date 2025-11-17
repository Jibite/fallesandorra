<template>
  <div class="anniversary-page">
    <!-- Hero Section -->
    <FallesAniversariHeroSection />

    <!-- Coming Soon Section - Pàgina temporal per generar expectació -->
    <FallesAniversariComingSoon />

    <!-- SECCIONS TEMPORALMENT OCULTES - Descomentar quan es vulgui publicar tota la informació -->

    <!-- About Section -->
    <!-- <FallesAniversariAboutFallesSection /> -->

    <!-- Program Schedule Section -->
    <!-- <FallesAniversariProgramSchedule /> -->

    <!-- Location Section -->
    <!-- <FallesAniversariLocationSection /> -->

    <!-- Collaborators Section -->
    <!-- <FallesAniversariCollaboratorsGrid /> -->

    <!-- Contact Section -->
    <!-- <FallesAniversariContactSection /> -->

    <!-- Scroll to top button -->
    <button
      v-show="showScrollTop"
      @click="scrollToTop"
      class="scroll-to-top-btn"
      aria-label="Tornar a dalt"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// Meta tags para SEO - Optimizados para generar expectación
useHead({
  title: '10 anys Patrimoni UNESCO - La flama s\'està encenent',
  meta: [
    {
      name: 'description',
      content: 'Estem preparant una celebració històrica! 29-30 novembre 2025: commemorem una dècada de les Falles del Pirineu com a Patrimoni de la Humanitat. Properament revelartem el programa complet.'
    },
    {
      name: 'keywords',
      content: 'falles, pirineu, unesco, patrimoni, solstici, andorra, 10 anys, aniversari, festes del foc, celebració 2025'
    },
    // Open Graph
    {
      property: 'og:title',
      content: '10 anys Falles Patrimoni UNESCO - La celebració més esperada dels Pirineus'
    },
    {
      property: 'og:description',
      content: '🔥 Una dècada mantenint viva la flama del nostre patrimoni. 29-30 novembre 2025. Properament: programa complet, tallers, conferències i l\'encesa simbòlica més esperada!'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    // Twitter Card
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:title',
      content: '10 anys Falles Patrimoni UNESCO 🔥'
    },
    {
      name: 'twitter:description',
      content: 'La flama s\'està encenent... 29-30 novembre 2025. No et perdis la celebració!'
    }
  ],
  htmlAttrs: {
    lang: 'ca'
  }
})

// Scroll to top functionality
const showScrollTop = ref(false)

const handleScroll = () => {
  showScrollTop.value = window.scrollY > 500
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.anniversary-page {
  @apply bg-dark-bg;
  min-height: 100vh;
}

.scroll-to-top-btn {
  @apply fixed bottom-8 right-8 z-50;
  @apply w-14 h-14 rounded-full;
  @apply bg-gradient-to-br from-fire-orange to-fire-red;
  @apply text-dark-bg;
  @apply flex items-center justify-center;
  @apply shadow-xl shadow-fire-orange/50;
  @apply transition-all duration-300;
  @apply hover:scale-110 hover:shadow-2xl hover:shadow-fire-orange/70;
  @apply focus:outline-none focus:ring-2 focus:ring-fire-orange focus:ring-offset-2 focus:ring-offset-dark-bg;
  animation: pulse-glow 2s ease-in-out infinite;
}

@keyframes pulse-glow {
  0%, 100% {
    box-shadow: 0 0 20px rgba(255, 107, 53, 0.5);
  }
  50% {
    box-shadow: 0 0 30px rgba(255, 107, 53, 0.8);
  }
}

/* Smooth scroll behavior */
:global(html) {
  scroll-behavior: smooth;
}

/* Custom scrollbar for the page */
:global(::-webkit-scrollbar) {
  width: 12px;
}

:global(::-webkit-scrollbar-track) {
  background: #0A0A0A;
}

:global(::-webkit-scrollbar-thumb) {
  background: linear-gradient(to bottom, #FF6B35, #D32F2F);
  border-radius: 6px;
}

:global(::-webkit-scrollbar-thumb:hover) {
  background: linear-gradient(to bottom, #FFB300, #FF6B35);
}
</style>
