<template>
  <section id="colaboradors" class="collaborators-section relative py-20 md:py-32 bg-gradient-to-b from-dark-secondary to-dark-bg">
    <div class="container mx-auto px-4">
      <!-- Título de la sección -->
      <div class="text-center mb-16">
        <h2 class="section-title text-4xl md:text-6xl font-primary font-bold mb-6">
          Col·laboradors
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-fire-orange to-fire-red mx-auto mb-8"></div>
        <p class="text-fire-gold text-xl md:text-2xl font-secondary max-w-3xl mx-auto">
          Gràcies a tots els col·lectius, associacions, institucions i entitats que fan possible aquesta celebració
        </p>
      </div>

      <!-- Organizadores principales -->
      <div class="mb-16">
        <h3 class="text-center text-fire-yellow font-primary text-2xl md:text-3xl mb-8">
          Organitzadors
        </h3>
        <div class="flex flex-wrap justify-center items-center gap-8 max-w-5xl mx-auto">
          <div v-for="org in organitzadors" :key="org.name" class="logo-card-large">
            <div class="logo-placeholder-large">
              <p class="font-secondary font-semibold text-center">{{ org.name }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Colaboradores institucionales -->
      <div class="mb-16">
        <h3 class="text-center text-fire-yellow font-primary text-2xl md:text-3xl mb-8">
          Col·laboradors Institucionals
        </h3>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div v-for="col in colaboradors" :key="col.name" class="logo-card">
            <div class="logo-placeholder">
              <p class="font-secondary text-sm text-center">{{ col.name }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Ayuntamientos -->
      <div class="mb-16">
        <h3 class="text-center text-fire-yellow font-primary text-2xl md:text-3xl mb-8">
          Ajuntaments i Comuns
        </h3>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div v-for="ajuntament in ajuntaments" :key="ajuntament" class="logo-card">
            <div class="logo-placeholder">
              <p class="font-secondary text-sm text-center">{{ ajuntament }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Entidades culturales -->
      <div class="mb-16">
        <h3 class="text-center text-fire-yellow font-primary text-2xl md:text-3xl mb-8">
          Entitats Culturals
        </h3>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          <div v-for="entitat in entitats" :key="entitat" class="logo-card">
            <div class="logo-placeholder">
              <p class="font-secondary text-xs text-center">{{ entitat }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- UNESCO Badge especial -->
      <div class="max-w-3xl mx-auto mt-16">
        <div class="unesco-badge">
          <div class="flex flex-col md:flex-row items-center justify-center gap-6">
            <div class="unesco-logo-placeholder">
              <svg class="w-16 h-16 text-fire-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <div class="text-center md:text-left">
              <h4 class="text-fire-gold font-primary text-2xl md:text-3xl mb-2">
                UNESCO
              </h4>
              <p class="text-primary font-secondary">
                Patrimoni Cultural Immaterial de la Humanitat · 2015
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const organitzadors = [
  { name: 'UNESCO' },
  { name: 'Govern d\'Andorra' },
  { name: 'Associació de Comunitats Fallaires' }
]

const colaboradors = [
  { name: 'Ministeri de Cultura' },
  { name: 'Departament de Patrimoni' },
  { name: 'Institut d\'Estudis Andorrans' },
  { name: 'Consell General' },
  { name: 'Andorra Turisme' },
  { name: 'Museu Etnogràfic' },
  { name: 'Fundació Julià Reig' },
  { name: 'Centre Cultural' }
]

const ajuntaments = [
  'Comú de Sant Julià',
  'Comú d\'Andorra la Vella',
  'Comú d\'Escaldes-Engordany',
  'Comú d\'Encamp',
  'Comú de La Massana',
  'Comú d\'Ordino',
  'Comú de Canillo'
]

const entitats = [
  'Grup de Fallaires de Sant Julià',
  'Agrupació Fallaire d\'Encamp',
  'Fallaires de La Massana',
  'Col·lectiu Faller d\'Ordino',
  'Associació de Falles de Canillo',
  'Fallaires d\'Escaldes',
  'Grup de Cultura Popular',
  'Esbart Laurèdia',
  'Centre Folklòric Andorrà',
  'Fundació del Patrimoni'
]
</script>

<style scoped>
.section-title {
  background: linear-gradient(135deg, #FFB300 0%, #FF6B35 50%, #D32F2F 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.logo-card-large {
  @apply transition-all duration-300;
  @apply hover:scale-105;
}

.logo-placeholder-large {
  @apply bg-primary/90 backdrop-blur-sm rounded-lg;
  @apply w-64 h-32;
  @apply flex items-center justify-center;
  @apply border-2 border-fire-orange/30;
  @apply transition-all duration-300;
  @apply hover:border-fire-orange hover:shadow-lg hover:shadow-fire-orange/30;
  @apply text-secondary;
}

.logo-card {
  @apply transition-all duration-300;
  @apply hover:scale-105;
}

.logo-placeholder {
  @apply bg-primary/80 backdrop-blur-sm rounded-lg;
  @apply w-full h-24;
  @apply flex items-center justify-center;
  @apply border border-fire-orange/20;
  @apply transition-all duration-300;
  @apply hover:border-fire-orange/50 hover:shadow-md hover:shadow-fire-orange/20;
  @apply p-4;
  @apply text-secondary;
}

.unesco-badge {
  @apply bg-gradient-to-br from-dark-secondary via-dark-bg to-dark-secondary;
  @apply rounded-xl p-8 md:p-10;
  @apply border-2 border-fire-gold/50;
  @apply shadow-2xl shadow-fire-gold/20;
  position: relative;
  overflow: hidden;
}

.unesco-badge::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255, 179, 0, 0.1) 0%, transparent 70%);
  animation: rotate 20s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.unesco-logo-placeholder {
  @apply relative z-10;
  @apply w-24 h-24 rounded-full;
  @apply bg-gradient-to-br from-fire-orange to-fire-red;
  @apply flex items-center justify-center;
  @apply shadow-xl shadow-fire-orange/50;
}
</style>
