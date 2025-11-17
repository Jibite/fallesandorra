<template>
  <section class="hero-section relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Background overlay oscuro -->
    <div class="absolute inset-0 bg-dark-bg/80 z-10"></div>

    <!-- Background gradient animado -->
    <div class="absolute inset-0 z-0">
      <div class="fire-gradient-1"></div>
      <div class="fire-gradient-2"></div>
      <div class="fire-gradient-3"></div>
    </div>

    <!-- Contenido principal -->
    <div class="relative z-20 container mx-auto px-4 py-20 text-center">
      <!-- Logo UNESCO o badge -->
      <div class="mb-8 animate-fade-in">
        <div class="inline-block px-6 py-2">
          <img src="/img/logo_.png" alt="Logo Fallaires Valls d'Andorra" class="h-12 md:h-16 lg:h-48 mx-auto" />
        </div>
      </div>

      <!-- Título principal -->
      <h1 class="hero-title mb-6 animate-fade-in-up delay-200">
        <span class="block text-4xl md:text-6xl lg:text-8xl font-primary font-bold mb-4">
          10è Aniversari
        </span>
        <span class="block text-2xl md:text-4xl lg:text-5xl font-primary text-fire-orange">
          Patrimoni Cultural Immaterial de la Humanitat
        </span>
      </h1>

      <!-- Subtítulo -->
      <h2 class="text-xl md:text-3xl lg:text-4xl font-secondary text-primary mb-8 animate-fade-in-up delay-400">
        Les Festes del foc del solstici d'estiu als Pirineus
      </h2>

      <!-- Fechas destacadas -->
      <div class="mb-12 animate-fade-in-up delay-600">
        <div class="inline-block bg-gradient-to-r from-fire-orange via-fire-red to-fire-orange p-1 rounded-lg">
          <div class="bg-dark-bg px-8 py-4 rounded-lg">
            <p class="text-3xl md:text-5xl font-primary text-fire-gold">
              29 i 30 de Novembre 2025
            </p>
          </div>
        </div>
      </div>

      <!-- Countdown Timer -->
      <div class="mb-12 animate-fade-in-up delay-800">
        <FallesAniversariCountdownTimer />
      </div>

      <!-- Share Buttons -->
      <!-- <div class="animate-fade-in-up delay-1000">
        <FallesAniversariShareButtons />
      </div> -->

      <!-- Scroll indicator -->
      <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg class="w-6 h-6 text-fire-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.hero-section {
  position: relative;
  background: linear-gradient(to bottom, #0A0A0A, #1A1A1A);
}

/* Gradientes de fuego animados en el fondo */
.fire-gradient-1,
.fire-gradient-2,
.fire-gradient-3 {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.15;
  animation: float 20s ease-in-out infinite;
}

.fire-gradient-1 {
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, #FF6B35, transparent);
  top: -200px;
  left: -100px;
  animation-delay: 0s;
}

.fire-gradient-2 {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, #D32F2F, transparent);
  bottom: -150px;
  right: -100px;
  animation-delay: 7s;
}

.fire-gradient-3 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, #FFB300, transparent);
  top: 50%;
  right: 10%;
  animation-delay: 14s;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) translateX(0) scale(1);
  }
  33% {
    transform: translateY(-30px) translateX(20px) scale(1.1);
  }
  66% {
    transform: translateY(20px) translateX(-20px) scale(0.9);
  }
}

/* Título con efecto de fuego */
.hero-title {
  background: linear-gradient(135deg, #FFB300 0%, #FF6B35 50%, #D32F2F 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 40px rgba(255, 107, 53, 0.3);
}

/* Animaciones de entrada */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 1s ease-out forwards;
}

.animate-fade-in-up {
  animation: fadeInUp 1s ease-out forwards;
}

.delay-200 {
  animation-delay: 0.2s;
  opacity: 0;
}

.delay-400 {
  animation-delay: 0.4s;
  opacity: 0;
}

.delay-600 {
  animation-delay: 0.6s;
  opacity: 0;
}

.delay-800 {
  animation-delay: 0.8s;
  opacity: 0;
}

.delay-1000 {
  animation-delay: 1s;
  opacity: 0;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0) translateX(-50%);
  }
  50% {
    transform: translateY(-10px) translateX(-50%);
  }
}

.animate-bounce {
  animation: bounce 2s ease-in-out infinite;
}
</style>
