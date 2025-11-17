<template>
  <section id="sobre-les-falles" class="about-section relative py-20 md:py-32 bg-dark-bg">
    <!-- Decorative gradient -->
    <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-fire-orange to-transparent"></div>

    <div class="container mx-auto px-4">
      <!-- Título de la sección -->
      <div class="text-center mb-16">
        <h2 class="section-title text-4xl md:text-6xl font-primary font-bold mb-6">
          Les Falles del Pirineu
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-fire-orange to-fire-red mx-auto mb-8"></div>
      </div>

      <!-- Contenido en grid -->
      <div class="max-w-6xl mx-auto">
        <!-- Historia de las Fallas -->
        <div class="content-card group grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div class="flex items-center mb-6">
              <h3 class="text-2xl md:text-3xl font-primary text-fire-yellow ml-4">
                D'Andorra...
              </h3>
            </div>
            <p class="text-primary font-secondary leading-relaxed text-lg">
              Les Falles del solstici d’estiu són Festes d’interès cultural incloses com a bé immaterial a l’Inventari general del Patrimoni cultural d’Andorra.
            </p>
          </div>
          <div>
            <div class="flex items-center mb-6">
            <h3 class="text-2xl md:text-3xl font-primary text-fire-yellow ml-4">
            ...als Pirineus
            </h3>
          </div>
          <p class="text-primary font-secondary leading-relaxed text-lg">
            Andorra va promoure la incorporació de les falles a la llista de Patrimoni cultural immaterial de la humanitat per la UNESCO. S’hi va incloure el 2015, juntament amb altres Festes del foc del solstici d’estiu als Pirineus que se celebren a Andorra, Aragó, Catalunya i Occitània.
          </p>
          </div> 
        </div>

        <!-- Importancia cultural -->
        <div class="content-card group">
          <div class="flex items-center justify-center mb-6">
            <h3 class="text-2xl md:text-3xl font-primary text-fire-yellow ml-4">
              Importància comunitària
            </h3>
          </div>
          <p class="text-primary font-secondary leading-relaxed text-lg">
            Les falles són molt més que una festa: són un element cohesionador que uneix generacions i manté viu l'esperit comunitari dels pobles pirinencs. La transmissió dels coneixements, les tècniques i els valors associats a aquesta tradició garanteixen la seva continuïtat i enriqueixen el patrimoni cultural dels Pirineus.
          </p>
        </div>
      </div>
    </div>

    <!-- Decorative gradient bottom -->
    <div class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-fire-orange to-transparent"></div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.section-title {
  background: linear-gradient(135deg, #FFB300 0%, #FF6B35 50%, #D32F2F 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.content-card {
  @apply bg-dark-secondary/50 backdrop-blur-sm rounded-lg p-8;
  @apply border border-fire-orange/20;
  @apply transition-all duration-500;
  @apply hover:border-fire-orange/50 hover:shadow-lg hover:shadow-fire-orange/20;
}

.icon-wrapper {
  @apply w-14 h-14 rounded-full;
  @apply bg-gradient-to-br from-fire-orange to-fire-red;
  @apply flex items-center justify-center;
  @apply shadow-lg shadow-fire-orange/30;
}

.quote-box {
  @apply relative bg-gradient-to-br from-dark-secondary to-dark-bg;
  @apply rounded-lg p-8 md:p-12;
  @apply border-l-4 border-fire-gold;
  @apply shadow-xl shadow-fire-orange/10;
}

.quote-icon {
  @apply w-12 h-12 text-fire-orange/20 mb-4;
}
</style>
