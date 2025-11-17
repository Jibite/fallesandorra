<template>
  <section id="programa" class="program-section relative py-20 md:py-32 bg-gradient-to-b from-dark-bg to-dark-secondary">
    <div class="container mx-auto px-4">
      <!-- Título de la sección -->
      <div class="text-center mb-16">
        <h2 class="section-title text-4xl md:text-6xl font-primary font-bold mb-6">
          Programa d'Activitats
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-fire-orange to-fire-red mx-auto mb-8"></div>
      </div>

      <!-- Tabs para los días -->
      <div class="flex justify-center mb-12">
        <div class="inline-flex rounded-lg bg-dark-bg p-1 border border-fire-orange/30">
          <button
            @click="activeDay = 'day1'"
            :class="[
              'tab-button',
              activeDay === 'day1' ? 'tab-button-active' : 'tab-button-inactive'
            ]"
          >
            Dissabte 29 de Novembre
          </button>
          <button
            @click="activeDay = 'day2'"
            :class="[
              'tab-button',,
              activeDay === 'day2' ? 'tab-button-active' : 'tab-button-inactive'
            ]"
          >
            Diumenge 30 de Novembre
          </button>
        </div>
      </div>

      <!-- Timeline del día 1 -->
      <div v-show="activeDay === 'day1'" class="timeline-container">
        <div class="timeline">
          <!-- Actividad 1 -->
          <div class="timeline-item" v-for="(activity, index) in day1Activities" :key="index">
            <div class="timeline-marker">
              <div class="timeline-icon">
                <component :is="activity.icon" />
              </div>
            </div>
            <div class="timeline-content">
              <div class="activity-time">{{ activity.time }}</div>
              <h3 class="activity-title">{{ activity.title }}</h3>
              <p class="activity-description">{{ activity.description }}</p>
              <div class="activity-location">
                <svg class="w-4 h-4 inline-block mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                {{ activity.location }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Timeline del día 2 -->
      <div v-show="activeDay === 'day2'" class="timeline-container">
        <div class="timeline">
          <div class="timeline-item" v-for="(activity, index) in day2Activities" :key="index">
            <div class="timeline-marker">
              <div class="timeline-icon">
                <component :is="activity.icon" />
              </div>
            </div>
            <div class="timeline-content">
              <div class="activity-time">{{ activity.time }}</div>
              <h3 class="activity-title">{{ activity.title }}</h3>
              <p class="activity-description">{{ activity.description }}</p>
              <div class="activity-location">
                <svg class="w-4 h-4 inline-block mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                {{ activity.location }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'

const activeDay = ref('day1')

// Iconos SVG como componentes funcionales
const FireIcon = () => h('svg', { class: 'w-6 h-6', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z' }),
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z' })
])

const BookIcon = () => h('svg', { class: 'w-6 h-6', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' })
])

const FilmIcon = () => h('svg', { class: 'w-6 h-6', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z' })
])

const MusicIcon = () => h('svg', { class: 'w-6 h-6', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3' })
])

const UsersIcon = () => h('svg', { class: 'w-6 h-6', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' })
])

const LightbulbIcon = () => h('svg', { class: 'w-6 h-6', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' })
])

const day1Activities = [
  {
    time: '10:00',
    title: 'Esmorzar fallaires Valls d\'Andorra',
    description: 'Tots els col·lectius fallaires es retroben per compartir un matí de germanor com a inici de les celebracions.',
    location: 'Plaça XXX, Escaldes Engordany',
    icon: FireIcon
  },
  {
    time: '11:00',
    title: 'Taller de falles conjunt',
    description: 'Els col·lectius fallaires de les Valls d\'Andorra elaboraran les falles que simbolitzen la unió i la tradició compartida al país.',
    location: 'Centre Cultural',
    icon: BookIcon
  },
  {
    time: '17:00',
    title: 'Conferència',
    description: '"Títol conferència" a càrrec de la Mireia Guil.',
    location: 'Centre Cultural La Llacuna, Andorra la Vella.',
    icon: UsersIcon
  },
  {
    time: '18:00',
    title: 'Taula Rodona',
    description: 'Amb la participació de representants dels col·lectius fallaires andorrans i de la resta dels Pirineus, així com representants del Patrimoni Cultural.',
    location: 'Centre Cultural La Llacuna, Andorra la Vella.',
    icon: FilmIcon
  }
]

const day2Activities = [
  {
    time: '17:00',
    title: 'Celebrem-ho amb mùsica i dansa!',
    description: 'Amb la participació dels Esbarts dansaires i grups de música tradicional que acompanyen les falles durant la celebració de les diferents Cremades de Falles',
    location: 'Plaça Major',
    icon: UsersIcon
  },
  {
    time: '18:30',
    title: 'Caldo i xocolata calenta!',
    description: 'Amb la col·laboració dels Escudellaires d\'Andorra la Vella i la Gresca Gegantera d\'Andorra la Vella.',
    location: 'PLaça Guillemó, Andorra la Vella',
    icon: FilmIcon
  },
  {
    time: '19:00',
    title: 'Parlaments',
    description: 'Gran dinar commemoratiu amb plats tradicionals i productes de proximitat.',
    location: 'Restaurant Els Pirineus',
    icon: UsersIcon
  },
  {
    time: '19:30',
    title: 'Els Fallaires de llum!',
    description: 'Els fallaires de llum dels diferents col·lectius rodaran les seves falles de llum units per una tradició compartida.',
    location: 'PLaça Guillemó, Andorra la Vella',
    icon: LightbulbIcon
  },
  {
    time: '20:00',
    title: 'ELs fallaires de foc!',
    description: 'Tots els col·lectius fallaires de les Valls d\'Andorra s\'uneixen per celebrar el 10è aniversari amb la cremada conjunta que simbolitza la força de la tradició i la unió entre tots els col·lectius.',
    location: 'PLaça Guillemó, Andorra la Vella',
    icon: BookIcon
  },
  {
    time: '20:30',
    title: 'Fi de festa!',
    description: 'L\'Orfeo d\'Andorra i el Cor de Rock d\'Encamp oferiran un concert especial per celebrar el 10è aniversari de les Falles d\'Andorra.',
    location: 'PLaça Guillemó, Andorra la Vella',
    icon: FireIcon
  },
  {
    time: '21:30',
    title: 'Fi de festa amb la participació de tots es',
    description: 'Gran ball popular amb música tradicional i contemporània per tancar la celebració del 10è aniversari.',
    location: 'Plaça Major',
    icon: MusicIcon
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

.tab-button {
  @apply px-6 py-3 rounded-lg font-secondary font-semibold transition-all duration-300;
  @apply text-sm md:text-base;
}

.tab-button-active {
  @apply bg-gradient-to-r from-fire-orange to-fire-red text-dark-bg;
  @apply shadow-lg shadow-fire-orange/50;
}

.tab-button-inactive {
  @apply text-fire-gold hover:text-fire-orange;
}

.timeline-container {
  @apply max-w-4xl mx-auto;
}

.timeline {
  @apply relative;
}

.timeline::before {
  content: '';
  @apply absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5;
  background: linear-gradient(to bottom, #FF6B35, #D32F2F, #FFB300);
}

.timeline-item {
  @apply relative mb-12 md:mb-16;
  @apply pl-20 md:pl-0;
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0;
}

.timeline-item:nth-child(1) { animation-delay: 0.1s; }
.timeline-item:nth-child(2) { animation-delay: 0.2s; }
.timeline-item:nth-child(3) { animation-delay: 0.3s; }
.timeline-item:nth-child(4) { animation-delay: 0.4s; }
.timeline-item:nth-child(5) { animation-delay: 0.5s; }
.timeline-item:nth-child(6) { animation-delay: 0.6s; }
.timeline-item:nth-child(7) { animation-delay: 0.7s; }

.timeline-marker {
  @apply absolute left-0 md:left-1/2 md:-translate-x-1/2;
  @apply z-10;
}

.timeline-icon {
  @apply w-16 h-16 rounded-full;
  @apply bg-gradient-to-br from-fire-orange via-fire-red to-fire-yellow;
  @apply flex items-center justify-center;
  @apply text-dark-bg;
  @apply shadow-lg shadow-fire-orange/50;
  @apply border-4 border-dark-bg;
  @apply transition-transform duration-300;
}

.timeline-item:hover .timeline-icon {
  @apply scale-110 rotate-12;
}

.timeline-content {
  @apply md:w-5/12;
  @apply bg-dark-secondary/70 backdrop-blur-sm rounded-lg p-6;
  @apply border border-fire-orange/30;
  @apply transition-all duration-300;
  @apply hover:border-fire-orange/60 hover:shadow-lg hover:shadow-fire-orange/20;
}

.timeline-item:nth-child(even) .timeline-content {
  @apply md:ml-auto;
}

.activity-time {
  @apply text-fire-gold font-primary text-2xl md:text-3xl font-bold mb-2;
}

.activity-title {
  @apply text-fire-yellow font-primary text-xl md:text-2xl mb-3;
}

.activity-description {
  @apply text-primary font-secondary leading-relaxed mb-4;
}

.activity-location {
  @apply text-fire-orange/80 font-secondary text-sm;
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
</style>
