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

      <!-- Sección: Organitza -->
      <div class="mb-24">
        <h3 class="text-center text-fire-yellow font-primary text-2xl md:text-3xl mb-8">
          Organitza
        </h3>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 xl:max-w-[1024px] mx-auto">
          <div v-for="logo in organitza" :key="logo.id" class="logo-card-large">
            <a v-if="logo.url" :href="logo.url" target="_blank" rel="noopener noreferrer" class="logo-link">
              <img
                :src="logo.path"
                :alt="logo.alt"
                :style="{ width: logo.width, height: logo.height }"
                class="logo-image-large"
              />
            </a>
            <img
              v-else
              :src="logo.path"
              :alt="logo.alt"
              :style="{ width: logo.width, height: logo.height }"
              class="logo-image-large"
            />
          </div>
        </div>
      </div>

            <!-- Sección: Col·laboren -->
      <div class="mb-16">
        <h3 class="text-center text-fire-yellow font-primary text-2xl md:text-3xl mb-8">
          Col·laboren
        </h3>
        <div class="bg-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
          <div class="flex flex-wrap justify-center gap-6">
            <div v-for="logo in colaboren" :key="logo.id" class="logo-card logo-card-fixed">
              <a v-if="logo.url" :href="logo.url" target="_blank" rel="noopener noreferrer" class="logo-link">
                <img
                  :src="logo.path"
                  :alt="logo.alt"
                  :style="{ width: logo.width, height: logo.height }"
                  class="logo-image"
                />
              </a>
              <img
                v-else
                :src="logo.path"
                :alt="logo.alt"
                :style="{ width: logo.width, height: logo.height }"
                class="logo-image"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Sección: Suport -->
      <div>
        <h3 class="text-center text-fire-yellow font-primary text-2xl md:text-3xl mb-2">
          Donen suport
        </h3>
        <div class="rounded-2xl p-8 md:p-12 max-w-6xl mx-auto">
          <div class="flex flex-wrap justify-center gap-6">
            <div v-for="logo in suport" :key="logo.id" class="logo-card logo-card-fixed">
              <a v-if="logo.url" :href="logo.url" target="_blank" rel="noopener noreferrer" class="logo-link">
                <img
                  :src="logo.path"
                  :alt="logo.alt"
                  :style="{ width: logo.width, height: logo.height }"
                  class="logo-image"
                />
              </a>
              <img
                v-else
                :src="logo.path"
                :alt="logo.alt"
                :style="{ width: logo.width, height: logo.height }"
                class="logo-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Sección 1: Organitza
const organitza = [
  {
    id: 1,
    path: '/img/aniversari/01_organitza/01_logo_FallairesVA_negatiu.png',
    alt: 'Fallaires Valls d\'Andorra',
    width: '192px',
    height: '112px',
    url: 'https://www.fallesandorra.com/10-anys-unesco'
  },
  {
    id: 2,
    path: '/img/aniversari/01_organitza/02_comu_alv.png',
    alt: 'Comú d\'Andorra la Vella',
    width: '192px',
    height: '112px',
    url: 'https://andorralavella.ad/'
  },
  {
    id: 3,
    path: '/img/aniversari/01_organitza/03_logo_assfallairesalv_sf.png',
    alt: 'Associació Fallaires Andorra la Vella',
    width: '145px',
    height: '85px',
    url: 'https://www.fallairesandorralavella.com/'
  },
  {
    id: 4,
    path: '/img/aniversari/01_organitza/04_logo_assordino_n.png',
    alt: 'Associació Ordino',
    width: '192px',
    height: '112px',
    url: 'https://culturapopularordino.ad/'
  },
  {
    id: 5,
    path: '/img/aniversari/01_organitza/05_uptee.png',
    alt: 'UPTEE',
    width: '192px',
    height: '112px',
    url: 'https://www.unioproturisme.com/'
  }
]

// Sección 2: Col·laboren (Esbarts i entitats)
const colaboren = [
  {
    id: 1,
    path: '/img/aniversari/03_colaboren/01_esbart_vdn.png',
    alt: 'Esbart Valls del Nord',
    width: '160px',
    height: '80px',
    url: 'https://www.esbartvallsdelnord.com/'
  },
  {
    id: 2,
    path: '/img/aniversari/03_colaboren/02_esbart_alv.jpg',
    alt: 'Esbart Valls del Nord',
    width: '160px',
    height: '80px',
    url: 'https://www.instagram.com/esbartandorra/'
  },
  {
    id: 3,
    path: '/img/aniversari/03_colaboren/03_esbart_sjl.jpg',
    alt: 'Esbart Laurèdia',
    width: '120px',
    height: '70px',
    url: 'https://www.esbartlauredia.com/'
  },
  {
    id: 4,
    path: '/img/aniversari/03_colaboren/06_efolk.jpg',
    alt: 'Escola Folk del Pirineu',
    width: '160px',
    height: '80px',
    url: 'https://escolafolkdelpirineu.tradicionarius.cat/'
  },
  {
    id: 5,
    path: '/img/aniversari/03_colaboren/07_ggegantera.jpg',
    alt: 'Gresca Gegantera d\'Andorra la Vella',
    width: '160px',
    height: '80px',
    url: 'https://www.instagram.com/gegantsandorralavella/'
  },
  {
    id: 6,
    path: '/img/aniversari/03_colaboren/09_orfeo.jpeg',
    alt: 'Orfeo Andorrà',
    width: '160px',
    height: '80px',
    url: 'https://associacions.andorralavella.ad/orfeoandorra'
  },
  {
    id: 7,
    path: '/img/aniversari/03_colaboren/08_rebost.png',
    alt: 'El Rebost del Padrí',
    width: '160px',
    height: '80px',
    url: 'https://www.rebostdelpadri.com/'
  }
]


// Sección 3: Suport (Comuns)
const suport = [
  {
    id: 1,
    path: '/img/aniversari/02_suport/01_govern.webp',
    alt: 'Govern d\'Andorra',
    width: '300px',
    height: '150px',
    url: 'https://www.govern.ad/'
  },
  {
    id: 2,
    path: '/img/aniversari/02_suport/01_patrimoni.webp',
    alt: 'Patrimoni Cultural del Govern d\'Andorra',
    width: '210px',
    height: '125px',
    url: 'https://www.govern.ad/ca/tematiques/cultura-i-esports/patrimoni-cultural'
  },
  {
    id: 3,
    path: '/img/aniversari/02_suport/02_comu_canillo.webp',
    alt: 'Comú de Canillo',
    width: '160px',
    height: '80px',
    url: 'https://www.canillo.ad/'
  },
  {
    id: 4,
    path: '/img/aniversari/02_suport/03_comu_encamp.png',
    alt: 'Comú d\'Encamp',
    width: '210px',
    height: '125px',
    url: 'https://www.comuencamp.ad/'
  },
  {
    id: 5,
    path: '/img/aniversari/02_suport/04_comu_ordino.png',
    alt: 'Comú d\'Ordino',
    width: '210px',
    height: '125px',
    url: 'https://ordino.ad/'
  },
  {
    id: 6,
    path: '/img/aniversari/02_suport/05_comu_mass.png',
    alt: 'Comú de La Massana',
    width: '160px',
    height: '80px',
    url: 'https://www.lamassana.ad/'
  },
  {
    id: 7,
    path: '/img/aniversari/02_suport/06_comu_alv.png',
    alt: 'Comú d\'Andorra la Vella',
    width: '250px',
    height: '149px',
    url: 'https://andorralavella.ad/'
  },
  {
    id: 8,
    path: '/img/aniversari/02_suport/06_comu_sjl.png',
    alt: 'Comú de Sant Julià de Lòria',
    width: '210px',
    height: '125px',
    url: 'https://comusantjulia.ad/'
  },
  {
    id: 9,
    path: '/img/aniversari/02_suport/07_comu_ee.png',
    alt: 'Comú d\'Escaldes-Engordany',
    width: '160px',
    height: '80px',
    url: 'https://www.e-e.ad/'
  }
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
  @apply hover:scale-110;
  @apply flex items-center justify-center;
}

.logo-image-large {
  @apply object-contain;
  @apply transition-all duration-300;
  @apply hover:opacity-80;
}

.logo-card {
  @apply transition-all duration-300;
  @apply hover:scale-110;
  @apply flex items-center justify-center;
}

.logo-card-fixed {
  @apply w-40;
}

.logo-link {
  @apply block;
  @apply transition-all duration-300;
  @apply cursor-pointer;
}

.logo-image {
  @apply object-contain;
  @apply transition-all duration-300;
  @apply hover:opacity-80;
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

.unesco-logo-container {
  @apply relative z-10;
  @apply w-24 h-24 rounded-full;
  @apply bg-white;
  @apply flex items-center justify-center;
  @apply shadow-xl shadow-fire-orange/50;
  @apply p-2;
}

.unesco-logo-image {
  @apply w-full h-full object-contain;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
