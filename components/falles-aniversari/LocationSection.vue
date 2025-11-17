<template>
  <section id="ubicacio" class="location-section relative py-20 md:py-32 bg-dark-secondary">
    <!-- Decorative gradient -->
    <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-fire-orange to-transparent"></div>

    <div class="container mx-auto px-4">
      <!-- Título de la sección -->
      <div class="text-center mb-16">
        <h2 class="section-title text-4xl md:text-6xl font-primary font-bold mb-6">
          On Celebrem l'Aniversari
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-fire-orange to-fire-red mx-auto mb-8"></div>
        <p class="text-fire-gold text-xl md:text-2xl font-secondary max-w-3xl mx-auto">
          Ens trobem al cor dels Pirineus
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <!-- Información de ubicación -->
        <div class="space-y-8">
          <!-- Lugar principal -->
          <div class="info-card">
            <div class="flex items-start mb-4">
              <div class="icon-wrapper-small">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <div class="ml-4 flex-1">
                <h3 class="text-fire-yellow font-primary text-2xl mb-2">Lloc principal</h3>
                <p class="text-primary font-secondary text-lg leading-relaxed">
                  Plaça Major de Sant Julià de Lòria<br>
                  AD600 Sant Julià de Lòria, Andorra
                </p>
              </div>
            </div>
          </div>

          <!-- Pueblos participantes -->
          <div class="info-card">
            <div class="flex items-start mb-4">
              <div class="icon-wrapper-small">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>
              </div>
              <div class="ml-4 flex-1">
                <h3 class="text-fire-yellow font-primary text-2xl mb-3">Pobles participants</h3>
                <div class="grid grid-cols-2 gap-2">
                  <div v-for="poble in pobles" :key="poble" class="text-primary font-secondary">
                    <span class="text-fire-orange mr-2">•</span>{{ poble }}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Transporte -->
          <div class="info-card">
            <div class="flex items-start mb-4">
              <div class="icon-wrapper-small">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
                </svg>
              </div>
              <div class="ml-4 flex-1">
                <h3 class="text-fire-yellow font-primary text-2xl mb-3">Com arribar</h3>
                <div class="space-y-3">
                  <div>
                    <h4 class="text-fire-gold font-secondary font-semibold mb-1">Transport públic</h4>
                    <p class="text-primary font-secondary">
                      Línies L3 i L6 des d'Andorra la Vella (aprox. 15 min)<br>
                      Parada: Plaça Major
                    </p>
                  </div>
                  <div>
                    <h4 class="text-fire-gold font-secondary font-semibold mb-1">Aparcament</h4>
                    <p class="text-primary font-secondary">
                      Aparcament gratuït al Pavelló Municipal<br>
                      Capacitat: 200 places
                    </p>
                  </div>
                  <div>
                    <h4 class="text-fire-gold font-secondary font-semibold mb-1">Accessibilitat</h4>
                    <p class="text-primary font-secondary">
                      Tots els espais són accessibles per a persones amb mobilitat reduïda
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Mapa -->
        <div class="space-y-6">
          <!-- Placeholder del mapa -->
          <div class="map-container">
            <div class="map-placeholder">
              <!-- Aquí iría el iframe de Google Maps -->
              <div class="text-center">
                <svg class="w-20 h-20 mx-auto mb-4 text-fire-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
                </svg>
                <h4 class="text-fire-yellow font-primary text-2xl mb-2">Mapa interactiu</h4>
                <p class="text-primary font-secondary mb-4">
                  Visualitza la ubicació exacta dels esdeveniments
                </p>
                <!-- Ejemplo de iframe de Google Maps (comentado para placeholder) -->
                <!--
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2977.8!2d1.4913!3d42.4640!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDI3JzUwLjQiTiAxwrAyOScyOC43IkU!5e0!3m2!1sca!2sad!4v1234567890"
                  class="w-full h-full rounded-lg border-0"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
                -->
              </div>
            </div>
          </div>

          <!-- Enlace a Google Maps -->
          <a
            href="https://maps.google.com/?q=Sant+Julia+de+Loria+Andorra"
            target="_blank"
            rel="noopener noreferrer"
            class="map-button"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
            </svg>
            Obrir a Google Maps
          </a>
        </div>
      </div>
    </div>

    <!-- Decorative gradient bottom -->
    <div class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-fire-orange to-transparent"></div>
  </section>
</template>

<script setup lang="ts">
const pobles = [
  'Sant Julià de Lòria',
  'Andorra la Vella',
  'Escaldes-Engordany',
  'Encamp',
  'La Massana',
  'Ordino',
  'Canillo'
]
</script>

<style scoped>
.section-title {
  background: linear-gradient(135deg, #FFB300 0%, #FF6B35 50%, #D32F2F 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.info-card {
  @apply bg-dark-bg/50 backdrop-blur-sm rounded-lg p-6;
  @apply border border-fire-orange/30;
  @apply transition-all duration-300;
  @apply hover:border-fire-orange/60 hover:shadow-lg hover:shadow-fire-orange/20;
}

.icon-wrapper-small {
  @apply w-12 h-12 rounded-full flex-shrink-0;
  @apply bg-gradient-to-br from-fire-orange to-fire-red;
  @apply flex items-center justify-center;
  @apply text-dark-bg;
  @apply shadow-lg shadow-fire-orange/30;
}

.map-container {
  @apply relative rounded-lg overflow-hidden;
  @apply border-2 border-fire-orange/30;
  @apply bg-dark-bg/50 backdrop-blur-sm;
  min-height: 400px;
}

.map-placeholder {
  @apply w-full h-full flex items-center justify-center p-8;
  min-height: 400px;
}

.map-button {
  @apply w-full flex items-center justify-center;
  @apply bg-gradient-to-r from-fire-orange to-fire-red;
  @apply text-dark-bg font-secondary font-semibold;
  @apply px-6 py-4 rounded-lg;
  @apply transition-all duration-300;
  @apply hover:shadow-lg hover:shadow-fire-orange/50;
  @apply hover:scale-105;
}
</style>
