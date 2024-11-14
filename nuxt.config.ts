// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  app: {
    head: {
      title: 'Les Falles d´Andorra',
      titleTemplate: '%s | Les Falles d´Andorra',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, viewport-fit=cover' },
        { hid: 'description', name: 'description', content: 'Informació de la tradició de les falles d´Andorra, patrimoni cultural' },
        { name: 'keywords', content: 'falles, cultura, patrimoni, cultura, andorra, tradicio'}
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'preload' , href: 'https://fonts.googleapis.com/css2?family=Fjalla+One&family=Noto+Sans:wght@400&display=swap', as: 'style', onload: 'this.onload=null;this.rel="stylesheet"' }
      ]
    }
  },

  modules: ['@nuxtjs/i18n', '@nuxtjs/tailwindcss'],
  
  i18n: {
    locales: [
      {
        code: 'ca',
        name: 'Catalan'
      },
      {
        code: 'es',
        name: 'Español'
      },
      {
        code: 'fr',
        name: 'Français'
      }
    ]
  }
})