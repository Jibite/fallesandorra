<template>
  <section id="contacte" class="social-banner-section relative py-16 md:py-24">
    <!-- Background gradient -->
    <div class="absolute inset-0 bg-gradient-to-br from-dark-secondary via-dark-bg to-dark-secondary opacity-90"></div>

    <!-- Decorative top gradient -->
    <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-fire-orange to-transparent"></div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="max-w-4xl mx-auto text-center">
        <!-- Título -->
        <h2 class="section-title text-3xl md:text-5xl font-primary font-bold mb-4">
          Segueix-nos per Xarxes Socials!
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-fire-orange to-fire-red mx-auto mb-6"></div>

        <!-- Social Media Links -->
        <div class="flex flex-wrap justify-center items-center gap-6">
          <!-- Facebook -->
          <a
            href="https://www.facebook.com/fallesandorra"
            target="_blank"
            rel="noopener noreferrer"
            class="social-link group"
            aria-label="Facebook"
          >
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            <span class="social-label">Facebook</span>
          </a>

          <!-- Instagram -->
          <a
            href="https://www.instagram.com/fallesandorra"
            target="_blank"
            rel="noopener noreferrer"
            class="social-link group"
            aria-label="Instagram"
          >
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span class="social-label">Instagram</span>
          </a>
        </div>

        <!-- Hashtag -->
        <div class="mt-12">
          <p class="text-fire-yellow font-primary text-xl md:text-2xl">
            #10AnysFallesUNESCO #FallesAndorra #FallesPirineus #RodaElFoc #Patrimoni
          </p>
        </div>
      </div>
    </div>

    <!-- Decorative bottom gradient -->
    <div class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-fire-orange to-transparent"></div>

    <!-- Animated flame background effect -->
    <div class="flame-effect"></div>
  </section>
</template>

<script setup lang="ts">
// No need for reactive data, just static social links
</script>

<style scoped>
.section-title {
  background: linear-gradient(135deg, #FFB300 0%, #FF6B35 50%, #D32F2F 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.social-link {
  @apply flex flex-col items-center justify-center gap-3;
  @apply px-6 py-5 rounded-xl;
  @apply bg-dark-secondary/80 backdrop-blur-sm;
  @apply border-2 border-fire-orange/30;
  @apply text-fire-orange;
  @apply transition-all duration-300;
  @apply hover:bg-gradient-to-br hover:from-fire-orange hover:to-fire-red;
  @apply hover:text-dark-bg hover:border-fire-orange;
  @apply hover:scale-110 hover:shadow-xl hover:shadow-fire-orange/50;
  @apply cursor-pointer;
  min-width: 140px;
}

.social-label {
  @apply font-secondary font-semibold text-sm;
  @apply transition-colors duration-300;
}

.social-link:hover .social-label {
  @apply text-dark-bg;
}

.flame-effect {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 200px;
  background: radial-gradient(ellipse at center bottom, rgba(255, 107, 53, 0.1) 0%, transparent 70%);
  pointer-events: none;
  animation: flameFlicker 3s ease-in-out infinite;
}

@keyframes flameFlicker {
  0%, 100% {
    opacity: 0.5;
    transform: scaleY(1);
  }
  50% {
    opacity: 0.8;
    transform: scaleY(1.1);
  }
}
</style>
