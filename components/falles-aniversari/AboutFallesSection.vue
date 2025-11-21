<template>
  <section id="sobre-les-falles" class="about-section relative py-20 md:py-32 overflow-hidden">
    <!-- Background decorativo -->
    <div class="absolute inset-0 bg-gradient-to-b from-dark-bg via-dark-secondary to-dark-bg"></div>

    <!-- Gradiente animado de fondo -->
    <div class="absolute inset-0 opacity-20">
      <div class="fire-bg-glow fire-bg-glow-1"></div>
      <div class="fire-bg-glow fire-bg-glow-2"></div>
    </div>

    <!-- Decorative gradient top -->
    <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-fire-orange to-transparent"></div>

    <div class="container mx-auto px-4 relative z-10">
      <!-- Título de la sección con subtítulo -->
      <div class="text-center mb-20">
        <div class="inline-block mb-4">
          <span class="badge-unesco">
            UNESCO · PATRIMONI CULTURAL IMMATERIAL
          </span>
        </div>
        <h2 class="section-title text-4xl md:text-6xl lg:text-7xl font-primary font-bold mb-6 leading-tight">
          Les Falles del Pirineu
        </h2>
      </div>

      <!-- Layout moderno tipo bento-box -->
      <div class="max-w-7xl mx-auto">
        <!-- Card Timeline unificada -->
        <div class="grid grid-cols-1 mb-6">
          <div class="reveal-card">
            <div class="feature-card timeline-card group">
              <!-- Título unificado -->
              <h3 class="text-center text-xl md:text-2xl lg:text-3xl font-primary text-fire-yellow mb-12">
                El Camí cap al Patrimoni Cultural Immaterial de la Humanitat
              </h3>

              <!-- Timeline horizontal -->
              <div class="timeline-wrapper">
                <!-- Step 1: Andorra -->
                <div class="timeline-step">
                  <div class="timeline-icon">
                    <svg class="w-8 h-8 text-fire-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div class="timeline-number">01</div>
                  <h4 class="timeline-title">D'Andorra</h4>
                  <p class="timeline-text">
                    Les Falles d'Andorra són <span class="highlight">Festes d'interès cultural</span> incloses com a bé immaterial a l'Inventari general del Patrimoni cultural d'Andorra.
                  </p>
                </div>

                <!-- Connector arrow -->
                <div class="timeline-connector">
                  <svg class="w-10 h-10 md:w-12 md:h-12 text-fire-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                  </svg>
                </div>

                <!-- Step 2: Pirineus -->
                <div class="timeline-step">
                  <div class="timeline-icon">
                    <svg class="w-8 h-8 text-fire-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div class="timeline-number">02</div>
                  <h4 class="timeline-title">Als Pirineus</h4>
                  <p class="timeline-text">
                    Andorra va promoure la incorporació de les falles a la llista representativa del <span class="highlight">Patrimoni cultural immaterial de la Humanitat</span> per la UNESCO.
                  </p>
                </div>

                <!-- Connector arrow -->
                <div class="timeline-connector">
                  <svg class="w-10 h-10 md:w-12 md:h-12 text-fire-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                  </svg>
                </div>

                <!-- Step 3: UNESCO -->
                <div class="timeline-step">
                  <div class="timeline-icon timeline-icon-highlight">
                    <svg class="w-8 h-8 text-fire-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                  </div>
                  <div class="timeline-number timeline-number-highlight">UNESCO</div>
                  <h4 class="timeline-title">Reconeixement 2015</h4>
                  <p class="timeline-text">
                    S'hi va incloure el 2015, conjuntament amb altres <span class="highlight">Festes del foc del solstici d'estiu</span> que se celebren a Andorra, Aragó, Catalunya i Occitània.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Card 4: Importancia comunitaria (destacada) -->
        <div class="reveal-card delay-600">
          <div class="feature-card feature-card-highlight group">
            <div class="text-center max-w-4xl mx-auto">
              <!-- Icon central grande -->
              <div class="central-icon-wrapper">
                <svg class="w-20 h-20 text-fire-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>

              <h3 class="card-title text-3xl md:text-5xl font-primary mb-6">
                Importància comunitària
              </h3>

              <p class="card-text-large text-xl md:text-2xl leading-relaxed">
                Les falles són <span class="highlight-large">molt més que una festa</span>: són un element cohesionador que uneix generacions i manté viu l'esperit comunitari dels pobles pirinencs. La transmissió dels coneixements, les tècniques i els valors associats a aquesta tradició garanteixen la seva continuïtat i enriqueixen el patrimoni cultural dels Pirineus.
              </p>

              <!-- Decorative elements -->
              <div class="flex justify-center gap-4 mt-8">
                <div class="community-icon">
                  <svg class="w-8 h-8 text-fire-orange" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"/>
                    <path d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"/>
                  </svg>
                </div>
                <div class="community-icon">
                  <svg class="w-8 h-8 text-fire-red" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"/>
                    <path d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"/>
                  </svg>
                </div>
                <div class="community-icon">
                  <svg class="w-8 h-8 text-fire-yellow" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"/>
                    <path d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Decorative gradient bottom -->
    <div class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-fire-orange to-transparent"></div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  // Intersection Observer para animaciones on scroll
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
  )

  const cards = document.querySelectorAll('.reveal-card')
  cards.forEach((card) => observer.observe(card))
})
</script>

<style scoped>
.about-section {
  position: relative;
  min-height: 100vh;
}

/* Background animated glows */
.fire-bg-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  animation: float-glow 20s ease-in-out infinite;
}

.fire-bg-glow-1 {
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, #FF6B35, transparent);
  top: 10%;
  right: -10%;
  animation-delay: 0s;
}

.fire-bg-glow-2 {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, #D32F2F, transparent);
  bottom: 10%;
  left: -5%;
  animation-delay: 10s;
}

@keyframes float-glow {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(50px, -50px) scale(1.1);
  }
}

/* Badge UNESCO */
.badge-unesco {
  @apply inline-block px-6 py-2 rounded-full;
  @apply bg-dark-secondary/80 backdrop-blur-sm;
  @apply border border-fire-gold/40;
  @apply text-fire-gold font-secondary text-xs md:text-sm tracking-widest;
  @apply shadow-lg shadow-fire-gold/20;
}

/* Section title */
.section-title {
  background: linear-gradient(135deg, #FFB300 0%, #FF6B35 50%, #D32F2F 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: title-pulse 4s ease-in-out infinite;
}

@keyframes title-pulse {
  0%, 100% {
    filter: brightness(1);
  }
  50% {
    filter: brightness(1.15);
  }
}

/* Feature Cards - Base */
.feature-card {
  @apply relative rounded-2xl p-8 md:p-10;
  @apply bg-gradient-to-br from-dark-secondary/80 to-dark-bg/80;
  @apply backdrop-blur-md;
  @apply border-2 border-fire-orange/20;
  @apply transition-all duration-500;
  @apply shadow-xl shadow-black/20;
  position: relative;
  overflow: hidden;
}

.feature-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 2px;
  background: linear-gradient(135deg,
    rgba(255, 107, 53, 0.3),
    rgba(211, 47, 47, 0.2),
    rgba(255, 179, 0, 0.3));
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.5s;
}

.feature-card:hover::before {
  opacity: 1;
}

.feature-card:hover {
  @apply border-fire-orange/50 shadow-2xl shadow-fire-orange/20;
  transform: translateY(-5px);
}

/* Card variants */
.feature-card-large {
  min-height: 320px;
}

.feature-card-medium {
  min-height: 320px;
  @apply bg-gradient-to-br from-dark-bg/80 to-dark-secondary/80;
}

.feature-card-wide {
  @apply bg-gradient-to-r from-dark-secondary/90 to-dark-bg/90;
}

.feature-card-highlight {
  @apply border-fire-gold/30;
  @apply bg-gradient-to-br from-dark-secondary via-dark-bg to-dark-secondary;
  box-shadow: 0 0 60px rgba(255, 179, 0, 0.15);
}

.feature-card-highlight:hover {
  @apply border-fire-gold/60;
  box-shadow: 0 0 80px rgba(255, 179, 0, 0.25);
}

/* Card elements */
.card-icon-wrapper {
  @apply absolute top-6 right-6;
  @apply w-14 h-14 rounded-full;
  @apply bg-gradient-to-br from-fire-orange/10 to-fire-red/10;
  @apply backdrop-blur-sm;
  @apply flex items-center justify-center;
  @apply border border-fire-orange/20;
  @apply transition-all duration-500;
}

.feature-card:hover .card-icon-wrapper {
  @apply scale-110 rotate-12;
  @apply border-fire-orange/40;
}

.card-number {
  @apply absolute top-6 left-6;
  @apply text-6xl md:text-7xl font-primary font-bold;
  @apply text-fire-orange/10;
  @apply transition-all duration-500;
}

.feature-card:hover .card-number {
  @apply text-fire-orange/20;
  transform: scale(1.1);
}

.card-number-large {
  @apply text-8xl md:text-9xl font-primary font-bold;
  @apply text-fire-gold/5;
  @apply absolute -top-4 -right-4;
}

.card-title {
  @apply text-fire-yellow font-bold;
  @apply transition-colors duration-300;
  @apply relative z-10;
}

.feature-card:hover .card-title {
  @apply text-fire-orange;
}

.card-text {
  @apply text-primary/90 font-secondary;
  @apply relative z-10;
}

.card-text-large {
  @apply text-primary font-secondary;
  @apply relative z-10;
}

.highlight {
  @apply text-fire-yellow font-semibold;
  @apply transition-colors duration-300;
}

.feature-card:hover .highlight {
  @apply text-fire-orange;
}

.highlight-large {
  @apply text-fire-gold font-bold text-2xl md:text-3xl;
}

.card-flame {
  @apply absolute bottom-6 right-6;
  @apply transition-all duration-500;
  animation: flame-flicker 3s ease-in-out infinite;
}

@keyframes flame-flicker {
  0%, 100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(1.1) translateY(-5px);
  }
}

/* Timeline Card */
.timeline-card {
  min-height: auto;
  padding: 3rem 2rem;
}

.timeline-wrapper {
  @apply flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-6;
}

.timeline-step {
  @apply flex-1 text-center relative;
  animation: timeline-appear 0.8s ease-out forwards;
  opacity: 0;
}

.timeline-step:nth-child(1) {
  animation-delay: 0.2s;
}

.timeline-step:nth-child(3) {
  animation-delay: 0.4s;
}

.timeline-step:nth-child(5) {
  animation-delay: 0.6s;
}

@keyframes timeline-appear {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.timeline-icon {
  @apply w-16 h-16 mx-auto mb-4 rounded-full;
  @apply bg-gradient-to-br from-fire-orange/20 to-fire-red/20;
  @apply backdrop-blur-sm;
  @apply flex items-center justify-center;
  @apply border-2 border-fire-orange/30;
  @apply shadow-xl shadow-fire-orange/20;
  @apply transition-all duration-500;
  animation: icon-pulse 3s ease-in-out infinite;
}

.timeline-icon-highlight {
  @apply bg-gradient-to-br from-fire-gold/20 to-fire-orange/20;
  @apply border-fire-gold/50;
  @apply shadow-2xl shadow-fire-gold/30;
}

.timeline-card:hover .timeline-icon {
  @apply scale-110 border-fire-orange/60;
}

.timeline-card:hover .timeline-icon-highlight {
  @apply border-fire-gold/70;
}

@keyframes icon-pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

.timeline-number {
  @apply text-4xl font-primary font-bold text-fire-orange/30 mb-2;
  @apply transition-all duration-300;
}

.timeline-number-highlight {
  @apply text-2xl text-fire-gold/60;
}

.timeline-card:hover .timeline-number {
  @apply text-fire-orange/50;
}

.timeline-card:hover .timeline-number-highlight {
  @apply text-fire-gold/80;
}

.timeline-title {
  @apply text-2xl md:text-3xl font-primary text-fire-yellow mb-4;
  @apply transition-colors duration-300;
}

.timeline-card:hover .timeline-title {
  @apply text-fire-orange;
}

.timeline-text {
  @apply text-base md:text-lg text-primary/90 font-secondary leading-relaxed;
}

.timeline-connector {
  @apply flex lg:flex items-center justify-center;
  @apply my-6 lg:my-0;
  animation: arrow-pulse 2s ease-in-out infinite;
}

@keyframes arrow-pulse {
  0%, 100% {
    opacity: 0.5;
    transform: translateX(0) rotate(90deg);
  }
  50% {
    opacity: 1;
    transform: translateX(0) rotate(90deg);
  }
}

@media (min-width: 1024px) {
  .timeline-connector {
    animation: arrow-pulse-horizontal 2s ease-in-out infinite;
  }

  @keyframes arrow-pulse-horizontal {
    0%, 100% {
      opacity: 0.5;
      transform: translateX(0);
    }
    50% {
      opacity: 1;
      transform: translateX(10px);
    }
  }
}

/* UNESCO mini badge */
.unesco-mini-badge {
  @apply inline-flex items-center gap-2 mt-6;
  @apply px-4 py-2 rounded-full;
  @apply bg-fire-gold/10 backdrop-blur-sm;
  @apply border border-fire-gold/30;
  @apply text-fire-gold font-secondary text-sm;
  @apply transition-all duration-300;
}

.feature-card:hover .unesco-mini-badge {
  @apply bg-fire-gold/20 border-fire-gold/50;
  @apply shadow-lg shadow-fire-gold/20;
}

/* Large icon wrapper */
.large-icon-wrapper {
  @apply w-20 h-20 rounded-2xl;
  @apply bg-gradient-to-br from-fire-yellow/20 to-fire-orange/20;
  @apply backdrop-blur-sm;
  @apply flex items-center justify-center;
  @apply border-2 border-fire-yellow/30;
  @apply shadow-xl shadow-fire-yellow/20;
  animation: icon-float 3s ease-in-out infinite;
}

@keyframes icon-float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

/* Central icon wrapper */
.central-icon-wrapper {
  @apply w-24 h-24 mx-auto mb-8 rounded-full;
  @apply bg-gradient-to-br from-fire-gold/20 to-fire-orange/20;
  @apply backdrop-blur-sm;
  @apply flex items-center justify-center;
  @apply border-2 border-fire-gold/40;
  @apply shadow-2xl shadow-fire-gold/30;
  animation: pulse-icon 3s ease-in-out infinite;
}

@keyframes pulse-icon {
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 0 40px rgba(255, 179, 0, 0.3);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 0 60px rgba(255, 179, 0, 0.5);
  }
}

/* Stats grid */
.stats-grid {
  @apply grid grid-cols-2 gap-6;
}

.stat-item {
  @apply text-center;
}

.stat-number {
  @apply text-4xl md:text-5xl font-primary font-bold;
  background: linear-gradient(135deg, #FFB300, #FF6B35);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-label {
  @apply text-fire-gold/80 font-secondary text-sm mt-2;
}

/* Region badges */
.region-badge {
  @apply inline-block px-4 py-2 rounded-lg;
  @apply bg-fire-orange/10 backdrop-blur-sm;
  @apply border border-fire-orange/30;
  @apply text-fire-orange font-secondary text-sm;
  @apply transition-all duration-300;
  @apply hover:bg-fire-orange/20 hover:border-fire-orange/50;
  @apply hover:scale-105;
}

/* Community icons */
.community-icon {
  @apply w-16 h-16 rounded-full;
  @apply bg-dark-secondary/50 backdrop-blur-sm;
  @apply border-2 border-fire-orange/20;
  @apply flex items-center justify-center;
  @apply transition-all duration-500;
  animation: community-float 3s ease-in-out infinite;
}

.community-icon:nth-child(1) {
  animation-delay: 0s;
}

.community-icon:nth-child(2) {
  animation-delay: 1s;
}

.community-icon:nth-child(3) {
  animation-delay: 2s;
}

@keyframes community-float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
}

.feature-card:hover .community-icon {
  @apply border-fire-orange/50;
  @apply scale-110;
}

/* Reveal animations */
.reveal-card {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.reveal-card.revealed {
  opacity: 1;
  transform: translateY(0);
}

.reveal-card.delay-200 {
  transition-delay: 0.2s;
}

.reveal-card.delay-400 {
  transition-delay: 0.4s;
}

.reveal-card.delay-600 {
  transition-delay: 0.6s;
}
</style>
