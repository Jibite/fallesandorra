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

  modules: ['@nuxtjs/i18n', '@nuxtjs/tailwindcss', '@dargmuesli/nuxt-cookie-control'],
  
  i18n: {
    defaultLocale: 'ca',
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
  },

  cookieControl: {

    isCssEnabled: true,

    //enable or disable css variables polyfill
    isCssPonyfillEnabled: true,

    //if you want to tree-shake locales set locales you want to use
    locales: ['ca', 'es', 'fr'],

    //modal opener (cookie control)
    isControlButtonEnabled: true,

    //or if you want to set initialState to false (default value for initialState is true)
    //blockIframe: {
      //initialState: true
    //},

    //position of cookie bar:
    //'top-left', 'top-right', 'top-full',
    //'bottom-left', 'bottom-right', 'bottom-full'
    barPosition: 'bottom-right',

    cookies: {
      necessary: [
        {
          name: {
            ca: 'Cookie idioma',
            es: 'Cookie idioma',
            fr: 'Cookie langue'
          },
          id: 'cookie_lang',
          description: {
            ca:  'Utilitzada internament per aquest lloc web per mantenir l´idioma que vostè ha seleccionat i millorar la seva experiència de navegació.',
            es:  'Utilizada internamente por este sitio web para mantener el idioma que ha seleccionada y mejor su experiencia de navegación.',
            fr:  'Utilisé en interne par ce site Web pour conserver la langue que vous avez sélectionnée et pour améliorer votre expérience de navigation.'
          }
        },
        {
          name: {
            ca: 'Acceptació cookies',
            es: 'Aceptación cookies',
            fr: 'Acceptation des cookies'
          },
          id: 'cookie_control_consent',
          targetCookieIds: ['cookie_control_consent','cookie_control_enabled_cookies'],
          description: {
            ca: 'Manté l´acceptació per part del usuari sobre la utilitació de cookies en aquest lloc web i els seus paràmetres',
            es: 'Mantiene la acceptación del uso de cookies por parte del usuario en este sitio web y sus parametros',
            fr: 'Conserve l´acceptation de l´utilisation des cookies par l´utilisateur sur ce site Web et ses paramètres'
          }
        }
      ],
      optional: [
        {
          name:  'Google Analitycs',
          id: 'ga',
          description: {
            ca:  'Google Analytics és un servei d’anàlisi web que ofereix Google que fa un seguiment i informa del trànsit del lloc web.',
            es:  'Google Analytics es un servicio de análisis web ofrecido por Google que rastrea e informa el tráfico del sitio web.',
            fr:  'Google Analytics is a web analytics service offered by Google that tracks and reports website traffic.'
          },
          isPreselected: true,
          src:  'https://www.googletagmanager.com/gtag/js?id=G-H7KT89MQE5',
          targetCookieIds: ['_ga', '_ga_H7KT89MQE5'],
         /*  accepted: () =>{
            window.dataLayer = window.dataLayer || [];
            function gtag(){
              dataLayer.push(arguments);
            }
            gtag('js', new Date());
            gtag('config', 'G-H7KT89MQE5');
          },
          declined: () =>{} */
        }
      ]
    },
    //default colors
    //if you want to disable colors set colors property to false
    colors: {
      barTextColor: '#42413C',
      modalOverlay: '#42413C',
      barBackground: '#FDCC65',
      barButtonColor: '#42413C',
      modalTextColor: '#42413C',
      modalBackground: '#F8F6EC',
      modalOverlayOpacity: 0.8,
      modalButtonColor: '#F8F6EC',
      modalUnsavedColor: '#F8F6EC',
      barButtonHoverColor: '#F8F6EC',
      barButtonBackground: '#F8F6EC',
      modalButtonHoverColor: '#F8F6EC',
      modalButtonBackground: '#42413C',
      controlButtonIconColor: '##FDCC65',
      controlButtonBackground: '#42413C',
      barButtonHoverBackground: '#42413C',
      checkboxActiveBackground: '#42413C',
      checkboxInactiveBackground: '#42413C',
      modalButtonHoverBackground: '#42413C',
      checkboxDisabledBackground: '#B2B2B2',
      controlButtonIconHoverColor: '#F8F6EC',
      controlButtonHoverBackground: '#42413C',
      checkboxActiveCircleBackground: '#F8F6EC',
      checkboxInactiveCircleBackground: '#F8F6EC',
      checkboxDisabledCircleBackground: '#F8F6EC',
    },

    //default texts
    localeTexts: {
      ca: {
        acceptAll: 'Acceptar totes',
        declineAll: 'Eliminar totes',
        manageCookies: 'Gestionar cookies',
        close: 'Tancar',
        save: 'Guardar',
        here: 'aqui'
      },
      es: {
        acceptAll: 'Aceptar todas',
        declineAll: 'Eliminar todas',
        manageCookies: 'Gestionar cookies',
        close: 'Cerrar',
        save: 'Guardar',
        here: 'aquí'
      },
      fr: {
        acceptAll: 'Accepter tout',
        declineAll: 'Tout supprimer',
        manageCookies: 'Gérer les cookies',
        close: 'Fermer',
        save: 'Sauver',
        here: 'ici'
      },
    }
 }
})