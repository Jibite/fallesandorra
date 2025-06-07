<template>
  <div class="min-h-screen flex flex-col justify-between">
    <ElementsHeader />
      <slot />
    <ElementsFooter />
    <CookieControl :locale="$i18n.locale">
      <template v-slot:bar>
        <h3>{{t('cookies.barTitle')}}</h3>
        <p>{{t('cookies.barDescription')}}</p>
        <a href="/policy" target="_blank" class="policy-link">{{t('cookies.details')}}</a>
      </template>
      <template v-slot:modal>
        <h3>{{ t('cookies.manageCookies') }}</h3>
        <p>{{ t('cookies.manageCookiesDescription')}}</p>
      </template>
    </CookieControl>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n(
  {
    useScope: 'local'
  },
)
const {
  cookiesEnabled,
  cookiesEnabledIds,
  isConsentGiven,
  isModalActive,
  moduleOptions,
} = useCookieControl()

// example: react to a cookie being accepted
watch(
  () => cookiesEnabledIds.value,
  (current, previous) => {
    if (
      !previous?.includes('google-analytics') &&
      current?.includes('google-analytics')
    ) {
      // cookie with id `google-analytics` got added
      window.location.reload() // placeholder for your custom change handler
    }
  },
  { deep: true },
)
</script>

<i18n lang="json">
  {
    "ca": {
      "cookies" : {
        "barTitle": "Cookies",
        "barDescription": "Utilitzem cookies pròpies i de tercers perquè puguem mostrar-vos aquest lloc web i entendre millor com el feu servir, amb la finalitat de millorar els serveis que oferim. Si continua navegant, considerem que ha acceptat les cookies.",
        "acceptAll": "Acceptar totes",
        "declineAll": "Eliminar totes",
        "manageCookies": "Gestionar cookies",
        "manageCookiesDescription": "Aquí pot trobar les galetes (cookies) de navegació que utlitzem",
        "unsaved": "No ha guardat els canvis",
        "close": "Tancar",
        "save": "Guardar",
        "necessary": "Cookies necessàries",
        "optional": "Cookies opcionals",
        "functional": "Cookies funcionals",
        "blockedIframe": "Per veure aquest contingut, activi les cookies funcionals",
        "here": "aqui",
        "details" : "Veure política de privaciat"
      }
    },
    "es": {
      "cookies" : {
        "barTitle": "Cookies",
        "barDescription": "Utilizamos cookies propias y de terceros para que podamos mostrarle este sitio web y entender mejor cómo lo usa, con el fin de mejorar los servicios que ofrecemos. Si continúa navegando, consideramos que ha aceptado las cookies.",
        "acceptAll": "Aceptar todas",
        "declineAll": "Eliminar todas",
        "manageCookies": "Gestionar cookies",
        "manageCookiesDescription": "Aquí puede encontrar las cookies de navegación que utilizamos",
        "unsaved": "No ha guardado los cambios",
        "close": "Cerrar",
        "save": "Guardar",
        "necessary": "Cookies necesarias",
        "optional": "Cookies opcionales",
        "functional": "Cookies funcionales",
        "blockedIframe": "Para ver este contenido, active las cookies funcionales",
        "here": "aquí",
        "details" : "Ver política de privacidad"
      }
    },
    "fr": {
      "cookies" : {
        "barTitle": "Cookies",
        "barDescription": "Nous utilisons des cookies propriétaires et tiers pour que nous puissions vous montrer ce site Web et mieux comprendre comment vous l'utilisez, afin d'améliorer les services que nous proposons. Si vous continuez à naviguer, nous considérons que vous avez accepté les cookies.",
        "acceptAll": "Accepter tout",
        "declineAll": "Supprimer tout",
        "manageCookies": "Gérer les cookies",
        "manageCookiesDescription": "Ici, vous pouvez trouver les cookies de navigation que nous utilisons",
        "unsaved": "Vous n'avez pas enregistré les modifications",
        "close": "Fermer",
        "save": "Enregistrer",
        "necessary": "Cookies nécessaires",
        "optional": "Cookies optionnels",
        "functional": "Cookies fonctionnels",
        "blockedIframe": "Pour voir ce contenu, activez les cookies fonctionnels",
        "here": "ici",
        "details" : "Voir la politique de confidentialité"
      }
    }
  }
</i18n>