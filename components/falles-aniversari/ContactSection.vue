<template>
  <section id="contacte" class="contact-section relative py-20 md:py-32 bg-dark-bg">
    <!-- Decorative gradient -->
    <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-fire-orange to-transparent"></div>

    <div class="container mx-auto px-4">
      <!-- Título de la sección -->
      <div class="text-center mb-16">
        <h2 class="section-title text-4xl md:text-6xl font-primary font-bold mb-6">
          Contacte
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-fire-orange to-fire-red mx-auto mb-8"></div>
        <p class="text-fire-gold text-xl md:text-2xl font-secondary max-w-3xl mx-auto">
          Tens alguna pregunta? Estem aquí per ajudar-te
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <!-- Información de contacto -->
        <div class="space-y-8">
          <!-- Email -->
          <div class="contact-card group">
            <div class="flex items-start">
              <div class="icon-wrapper">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div class="ml-4 flex-1">
                <h3 class="text-fire-yellow font-primary text-xl mb-2">Correu electrònic</h3>
                <a href="mailto:info@falles10anys.ad" class="contact-link">
                  info@falles10anys.ad
                </a>
              </div>
            </div>
          </div>

          <!-- Teléfono -->
          <div class="contact-card group">
            <div class="flex items-start">
              <div class="icon-wrapper">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <div class="ml-4 flex-1">
                <h3 class="text-fire-yellow font-primary text-xl mb-2">Telèfon</h3>
                <a href="tel:+376123456" class="contact-link">
                  +376 123 456
                </a>
                <p class="text-primary/70 font-secondary text-sm mt-1">
                  Dilluns a divendres: 9:00 - 18:00
                </p>
              </div>
            </div>
          </div>

          <!-- Redes sociales -->
          <div class="contact-card group">
            <div class="flex items-start">
              <div class="icon-wrapper">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
                </svg>
              </div>
              <div class="ml-4 flex-1">
                <h3 class="text-fire-yellow font-primary text-xl mb-3">Xarxes socials</h3>
                <div class="flex flex-wrap gap-3">
                  <!-- Facebook -->
                  <a href="https://facebook.com/fallespirineu" target="_blank" rel="noopener noreferrer" class="social-link">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <!-- Instagram -->
                  <a href="https://instagram.com/fallespirineu" target="_blank" rel="noopener noreferrer" class="social-link">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <!-- Twitter -->
                  <a href="https://twitter.com/fallespirineu" target="_blank" rel="noopener noreferrer" class="social-link">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <!-- YouTube -->
                  <a href="https://youtube.com/@fallespirineu" target="_blank" rel="noopener noreferrer" class="social-link">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Horario oficina -->
          <div class="contact-card group">
            <div class="flex items-start">
              <div class="icon-wrapper">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div class="ml-4 flex-1">
                <h3 class="text-fire-yellow font-primary text-xl mb-3">Horari d'atenció</h3>
                <div class="space-y-2 text-primary font-secondary">
                  <p><span class="text-fire-gold font-semibold">Dilluns - Divendres:</span> 9:00 - 13:00 / 15:00 - 18:00</p>
                  <p><span class="text-fire-gold font-semibold">Dissabtes:</span> 10:00 - 14:00</p>
                  <p><span class="text-fire-gold font-semibold">Diumenges:</span> Tancat</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Formulario de contacto -->
        <div class="contact-form-container">
          <h3 class="text-fire-yellow font-primary text-2xl md:text-3xl mb-6 text-center">
            Envia'ns un missatge
          </h3>
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <!-- Nombre -->
            <div>
              <label for="name" class="form-label">Nom complet *</label>
              <input
                type="text"
                id="name"
                v-model="formData.name"
                required
                class="form-input"
                placeholder="El teu nom"
              />
            </div>

            <!-- Email -->
            <div>
              <label for="email" class="form-label">Correu electrònic *</label>
              <input
                type="email"
                id="email"
                v-model="formData.email"
                required
                class="form-input"
                placeholder="el.teu.correu@exemple.com"
              />
            </div>

            <!-- Teléfono -->
            <div>
              <label for="phone" class="form-label">Telèfon</label>
              <input
                type="tel"
                id="phone"
                v-model="formData.phone"
                class="form-input"
                placeholder="+376 XXX XXX"
              />
            </div>

            <!-- Mensaje -->
            <div>
              <label for="message" class="form-label">Missatge *</label>
              <textarea
                id="message"
                v-model="formData.message"
                required
                rows="5"
                class="form-input"
                placeholder="Escriu el teu missatge aquí..."
              ></textarea>
            </div>

            <!-- Submit button -->
            <button type="submit" class="submit-button">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
              </svg>
              Enviar missatge
            </button>
          </form>
        </div>
      </div>
    </div>

    <!-- Decorative gradient bottom -->
    <div class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-fire-orange to-transparent"></div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const formData = ref({
  name: '',
  email: '',
  phone: '',
  message: ''
})

const handleSubmit = () => {
  // Aquí se implementaría la lógica de envío del formulario
  console.log('Form submitted:', formData.value)
  alert('Gràcies pel teu missatge! Ens posarem en contacte aviat.')

  // Reset form
  formData.value = {
    name: '',
    email: '',
    phone: '',
    message: ''
  }
}
</script>

<style scoped>
.section-title {
  background: linear-gradient(135deg, #FFB300 0%, #FF6B35 50%, #D32F2F 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.contact-card {
  @apply bg-dark-secondary/50 backdrop-blur-sm rounded-lg p-6;
  @apply border border-fire-orange/20;
  @apply transition-all duration-300;
  @apply hover:border-fire-orange/50 hover:shadow-lg hover:shadow-fire-orange/20;
}

.icon-wrapper {
  @apply w-12 h-12 rounded-full flex-shrink-0;
  @apply bg-gradient-to-br from-fire-orange to-fire-red;
  @apply flex items-center justify-center;
  @apply text-dark-bg;
  @apply shadow-lg shadow-fire-orange/30;
}

.contact-link {
  @apply text-fire-orange font-secondary text-lg;
  @apply hover:text-fire-yellow transition-colors duration-300;
  @apply underline decoration-fire-orange/50 hover:decoration-fire-yellow;
}

.social-link {
  @apply w-12 h-12 rounded-full;
  @apply bg-dark-bg border-2 border-fire-orange/30;
  @apply flex items-center justify-center;
  @apply text-fire-orange;
  @apply transition-all duration-300;
  @apply hover:bg-fire-orange hover:text-dark-bg hover:border-fire-orange;
  @apply hover:scale-110 hover:shadow-lg hover:shadow-fire-orange/50;
}

.contact-form-container {
  @apply bg-gradient-to-br from-dark-secondary to-dark-bg;
  @apply rounded-xl p-8;
  @apply border-2 border-fire-orange/30;
  @apply shadow-xl shadow-fire-orange/10;
}

.form-label {
  @apply block text-fire-gold font-secondary font-semibold mb-2;
}

.form-input {
  @apply w-full px-4 py-3 rounded-lg;
  @apply bg-dark-bg border-2 border-fire-orange/30;
  @apply text-primary font-secondary;
  @apply transition-all duration-300;
  @apply focus:outline-none focus:border-fire-orange focus:shadow-lg focus:shadow-fire-orange/20;
  @apply placeholder-primary/40;
}

.submit-button {
  @apply w-full flex items-center justify-center;
  @apply bg-gradient-to-r from-fire-orange via-fire-red to-fire-orange;
  @apply text-dark-bg font-primary font-bold text-lg;
  @apply px-8 py-4 rounded-lg;
  @apply transition-all duration-300;
  @apply hover:shadow-xl hover:shadow-fire-orange/50;
  @apply hover:scale-105;
  @apply focus:outline-none focus:ring-2 focus:ring-fire-orange focus:ring-offset-2 focus:ring-offset-dark-bg;
  background-size: 200% auto;
  animation: shimmer 3s linear infinite;
}

@keyframes shimmer {
  to {
    background-position: 200% center;
  }
}
</style>
