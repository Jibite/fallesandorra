<template>
  <section class="coming-soon-section relative flex items-center justify-center overflow-hidden py-20">
    <!-- Background animated gradients -->
    <div class="absolute inset-0 bg-dark-bg">
      <div class="fire-gradient-animated-1"></div>
      <div class="fire-gradient-animated-2"></div>
      <div class="fire-gradient-animated-3"></div>
    </div>

    <!-- Content -->
    <div class="relative z-20 container mx-auto px-4 max-w-5xl">
      <div class="text-center">
        <!-- Animated flame icon -->
        <div class="mb-8 flex justify-center animate-float">
          <div class="flame-icon-wrapper">
            <svg class="w-24 h-24 md:w-32 md:h-32 text-fire-orange" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"/>
              <path d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"/>
            </svg>
          </div>
        </div>

        <!-- Main message -->
        <h2 class="headline text-3xl md:text-5xl lg:text-6xl font-primary font-bold mb-6 leading-tight">
          No et perdis el que estem preparant...
        </h2>

        <h3 class="headline text-xl md:text-2xl lg:text-3xl font-primary font-bold mb-6 leading-tight italic">
          En breu tota la info, estigeu atents...
        </h3>

        <!-- Teaser message -->
        <div class="mt-16">
          <div class="teaser-box">
            <h3 class="headline text-2xl md:text-4xl lg:text-4xl font-primary font-bold mb-6 leading-tight">
              Roda el foc!
            </h3>
          </div>
        </div>
      </div>
    </div>

    <!-- Animated particles (optional decorative element) -->
    <div class="particles">
      <div class="particle" v-for="n in 20" :key="n" :style="getParticleStyle(n)"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')
const isSubscribed = ref(false)

const handleSubscribe = () => {
  if (email.value) {
    // Aquí s'implementaria la lògica real de subscripció
    console.log('Subscribed:', email.value)
    isSubscribed.value = true

    setTimeout(() => {
      email.value = ''
      isSubscribed.value = false
    }, 3000)
  }
}

const getParticleStyle = (n: number) => {
  return {
    left: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 5}s`,
    animationDuration: `${5 + Math.random() * 10}s`
  }
}
</script>

<style scoped>
.coming-soon-section {
  position: relative;
  background: linear-gradient(to bottom, #0A0A0A, #1A1A1A);
}

/* Animated fire gradients */
.fire-gradient-animated-1,
.fire-gradient-animated-2,
.fire-gradient-animated-3 {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.2;
  animation: float-gradient 15s ease-in-out infinite;
}

.fire-gradient-animated-1 {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, #FF6B35, transparent);
  top: -100px;
  left: -100px;
  animation-delay: 0s;
}

.fire-gradient-animated-2 {
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, #D32F2F, transparent);
  bottom: -150px;
  right: -150px;
  animation-delay: 5s;
}

.fire-gradient-animated-3 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, #FFB300, transparent);
  top: 50%;
  left: 50%;
  animation-delay: 10s;
}

@keyframes float-gradient {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -30px) scale(1.1);
  }
  66% {
    transform: translate(-30px, 30px) scale(0.9);
  }
}

/* Flame icon animation */
.flame-icon-wrapper {
  @apply relative;
  animation: flame-flicker 2s ease-in-out infinite;
}

@keyframes flame-flicker {
  0%, 100% {
    transform: scale(1) translateY(0);
    filter: brightness(1);
  }
  25% {
    transform: scale(1.05) translateY(-5px);
    filter: brightness(1.2);
  }
  50% {
    transform: scale(0.95) translateY(0);
    filter: brightness(0.9);
  }
  75% {
    transform: scale(1.02) translateY(-3px);
    filter: brightness(1.1);
  }
}

@keyframes animate-float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-float {
  animation: animate-float 3s ease-in-out infinite;
}

/* Headline with gradient */
.headline {
  background: linear-gradient(135deg, #FFB300 0%, #FF6B35 50%, #D32F2F 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: pulse-text 3s ease-in-out infinite;
}

@keyframes pulse-text {
  0%, 100% {
    filter: brightness(1);
  }
  50% {
    filter: brightness(1.2);
  }
}

/* Content box */
.content-box {
  @apply bg-dark-secondary/60 backdrop-blur-md rounded-2xl p-8 md:p-10;
  @apply border-2 border-fire-orange/30;
  @apply shadow-2xl shadow-fire-orange/20;
  animation: glow-pulse 4s ease-in-out infinite;
}

@keyframes glow-pulse {
  0%, 100% {
    border-color: rgba(255, 107, 53, 0.3);
    box-shadow: 0 0 30px rgba(255, 107, 53, 0.2);
  }
  50% {
    border-color: rgba(255, 107, 53, 0.5);
    box-shadow: 0 0 50px rgba(255, 107, 53, 0.3);
  }
}

/* Subscribe form */
.subscribe-input {
  @apply px-6 py-4 rounded-lg;
  @apply bg-dark-bg border-2 border-fire-orange/40;
  @apply text-primary font-secondary text-lg;
  @apply transition-all duration-300;
  @apply focus:outline-none focus:border-fire-orange focus:shadow-lg focus:shadow-fire-orange/30;
  @apply placeholder-primary/50;
}

.subscribe-button {
  @apply px-8 py-4 rounded-lg;
  @apply bg-gradient-to-r from-fire-orange via-fire-red to-fire-orange;
  @apply text-dark-bg font-primary font-bold text-lg;
  @apply transition-all duration-300;
  @apply hover:shadow-xl hover:shadow-fire-orange/60;
  @apply hover:scale-105;
  @apply focus:outline-none focus:ring-2 focus:ring-fire-orange;
  @apply whitespace-nowrap;
  background-size: 200% auto;
  animation: shimmer 3s linear infinite;
}

@keyframes shimmer {
  to {
    background-position: 200% center;
  }
}

/* Social icons */
.social-icon {
  @apply w-14 h-14 rounded-full;
  @apply bg-dark-secondary border-2 border-fire-orange/40;
  @apply flex items-center justify-center;
  @apply text-fire-orange;
  @apply transition-all duration-300;
  @apply hover:bg-gradient-to-br hover:from-fire-orange hover:to-fire-red;
  @apply hover:text-dark-bg hover:border-fire-yellow;
  @apply hover:scale-110 hover:shadow-xl hover:shadow-fire-orange/50;
}

/* Teaser box */
.teaser-box {
  @apply bg-gradient-to-r from-transparent via-dark-secondary/50 to-transparent;
  @apply py-6 px-8;
  @apply border-t border-b border-fire-gold/30;
}

/* Animated particles */
.particles {
  @apply absolute inset-0 overflow-hidden pointer-events-none;
}

.particle {
  @apply absolute w-1 h-1 bg-fire-gold rounded-full;
  animation: float-particle linear infinite;
  opacity: 0;
}

@keyframes float-particle {
  0% {
    transform: translateY(100vh) scale(0);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100px) scale(1);
    opacity: 0;
  }
}

/* CTA Section */
.cta-section {
  @apply bg-gradient-to-br from-dark-bg via-dark-secondary to-dark-bg;
  @apply rounded-2xl p-8 md:p-10;
  @apply border border-fire-yellow/30;
  @apply shadow-2xl shadow-fire-yellow/10;
}
</style>
