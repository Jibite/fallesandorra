<template>
  <div class="countdown-timer">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto">
      <!-- Dies -->
      <div class="countdown-item">
        <div class="countdown-number">{{ days }}</div>
        <div class="countdown-label">Dies</div>
      </div>

      <!-- Hores -->
      <div class="countdown-item">
        <div class="countdown-number">{{ hours }}</div>
        <div class="countdown-label">Hores</div>
      </div>

      <!-- Minuts -->
      <div class="countdown-item">
        <div class="countdown-number">{{ minutes }}</div>
        <div class="countdown-label">Minuts</div>
      </div>

      <!-- Segons -->
      <div class="countdown-item">
        <div class="countdown-number">{{ seconds }}</div>
        <div class="countdown-label">Segons</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const targetDate = new Date('2025-11-29T10:00:00').getTime()

const days = ref(0)
const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)

let intervalId: ReturnType<typeof setInterval> | null = null

const updateCountdown = () => {
  const now = new Date().getTime()
  const distance = targetDate - now

  if (distance < 0) {
    days.value = 0
    hours.value = 0
    minutes.value = 0
    seconds.value = 0
    if (intervalId) clearInterval(intervalId)
    return
  }

  days.value = Math.floor(distance / (1000 * 60 * 60 * 24))
  hours.value = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  minutes.value = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  seconds.value = Math.floor((distance % (1000 * 60)) / 1000)
}

onMounted(() => {
  updateCountdown()
  intervalId = setInterval(updateCountdown, 1000)
})

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId)
})
</script>

<style scoped>
.countdown-item {
  @apply relative;
}

.countdown-number {
  @apply text-5xl md:text-7xl font-primary font-bold text-center;
  background: linear-gradient(135deg, #FFB300 0%, #FF6B35 50%, #D32F2F 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 30px rgba(255, 107, 53, 0.5);
  animation: pulse 2s ease-in-out infinite;
}

.countdown-label {
  @apply text-fire-gold text-sm md:text-lg font-secondary uppercase tracking-wider text-center mt-2;
}

@keyframes pulse {
  0%, 100% {
    filter: brightness(1);
  }
  50% {
    filter: brightness(1.2);
  }
}
</style>
