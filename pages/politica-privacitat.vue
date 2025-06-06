<template>
  <div class="px-64 py-16 text-secondary bg-primary">
    <div class="font-primary text-center text-3xl">
      <h3>{{ t('title')}}</h3>
    </div>
    <div class="mt-8">
      <h5 class="font-primary text-xl">{{t('policy.title1')}}</h5>
      <p class="font-secondary text-base leading-6">{{t('policy.text1')}}</p>
      <p class="mt-2 font-secondary text-base leading-6">{{t('policy.text2')}}</p>
    </div>
    <div class="mt-8">
      <h5 class="font-primary text-xl">{{t('policy.title2')}}</h5>
      <p class="font-secondary text-base leading-6">{{t('policy.text3')}}</p>
      <p class="mt-2 font-secondary text-base leading-6">{{t('policy.text4')}}</p>
      <p class="mt-2 font-secondary text-base leading-6">{{t('policy.text5')}}</p>
    </div>
    <div class="mt-8">
      <h5 class="font-primary text-xl">{{t('policy.title3')}}</h5>
      <p class="mt-2 font-secondary text-base leading-6">{{t('policy.text6')}}</p>
      <p class="mt-2 font-secondary text-base leading-6">{{t('policy.text7')}}</p>
      <p class="mt-2 font-secondary text-base leading-6">{{t('policy.text8')}}</p>
      <ul class="mt-2 ml-6 font-secondary text-base leading-6 list-disc">
        <li>{{t('policy.list1')}}</li>
        <li>{{t('policy.list2')}}</li>
        <li>{{t('policy.list3')}}</li>
      </ul>
    </div>
    <div class="mt-8">
      <h5 class="font-primary text-xl">{{t('policy.title4')}}</h5>
      <p class="mt-2 font-secondary text-base leading-6">{{t('policy.text9')}}</p>
      <p class="mt-2 font-secondary text-base leading-6">{{t('policy.text10')}}</p>
      <p class="mt-2 font-secondary text-base leading-6">{{t('policy.text11')}}</p>
      <p class="mt-2 font-secondary text-base leading-6">{{t('policy.text12_1')}}
        <a href="mailto:webmaster@fallesandorra.com">webmaster@fallesandorra.com</a>
        {{t('policy.text12_2')}}
      </p>
    </div>
  </div>
</template>

<script setup>
const { t } = useI18n({
  useScope: 'local'
})
</script>

<i18n lang="json">
  {
    "ca": {
      "title": "Política de privacitat",
      "policy" : {
        "title1" : "Informació general",
        "text1" : "Aquest lloc web inclou informació relativa a les falles d’Andorra amb l’objectiu de divulgar i preservar la festa de la Cremada de falles al Principat d’Andorra. Així mateix, en ell s´hi fan menció enllaços a publicacions o d’altres llocs web d’interès amb informació sobre aquesta mateixa tradició i fent menció tant a la font com l’autor dels mateixos.",
        "text2" : "Aquest lloc web, donada la seva naturalesa, no emmagatzema ni tracta dades de caràcter personal i només emmagatzema dades anònimes de navegació detallades a continuació.",
        "title2" : "Dades de navegació",
        "text3" : "El sistema de navegació i el programari necessaris per al funcionament d'aquest lloc web recullen, de manera estàndard, algunes dades la transmissió de les quals és implícita en l'ús dels protocols de comunicació d'Internet. En aquesta categoria de dades hi ha l'adreça IP o nom de domini de l'ordinador utilitzat per la persona usuària per connectar-se al lloc web, l'adreça URL del recurs demanat, l'hora, el mètode utilitzat per a la consulta al servidor, la mida de l'arxiu obtingut en la resposta, el codi numèric que indica l'estat de la resposta al servidor, i altres paràmetres relatius al sistema operatiu de l'entorn informàtic de la persona usuària.",
        "text4" : "Aquesta informació no s'associa a persones usuàries concretes i s'utilitza amb la finalitat exclusiva d'obtenir informació estadística sobre les visites al lloc web de les Falles d’Andorra.",
        "text5" : "Aquest lloc web no utilitza galetes (cookies) o altres mitjans de naturalesa anàloga per al tractament de dades personals que permetin la identificació de persones físiques com a usuàries del lloc web. L’ús d’aquestes cookies es reserva per qüestions relacionades amb l’experiència del usuari i la seva exploració, així com per termes purament estadístics de visites i interacció amb l’espai.",
        "title3" : "Protecció dels drets de propietat intel·lectual",
        "text6" : "Els continguts i elements gràfics que formen part del lloc web fallesandorra.com són de titularitat tant de tercers persones físiques com jurídiques les quals n’han autoritzat els seu ús emmarcat dins la tasca de difusió i preservació de la tradició de la Cremada de falles al Principat d’Andorra. Els continguts són objecte de propietat intel·lectual, d’acord amb el que disposa la Llei sobre drets d’autor i drets veïns, de 10-6-99. Per tant, qualsevol ús que l’usuari facin d’aquests continguts o de futurs que s’hi puguin incloure, s’ha de fer seguint i respectant les limitacions de la normativa esmentada.",
        "text7" : "La relació d’autors i/o propietaris de tots els continguts gràfics es pot trobar durant l’exploració del lloc web o bé al apartat ‘Crèdits web’ que trobareu al peu de pàgina del lloc web. No està permès l’ús d’aquests continguts sense el consentiment de cadascun d’ells.",
        "text8" : "No s'autoritza en cap cas:",
        "list1" : "La presentació d'una pàgina del lloc web en una finestra que no pertany al domini fallesandorra.com per mitjà de framing.",
        "list2" : "L'ús comercial dels continguts del lloc web www.fallesandorra.com.",
        "list3" : "L'ús de signes, logotips i en general símbols distintius de qualsevol naturalesa inclosos en aquest lloc web sense el consentiment de la institució o entitat a la que fan referència.",
        "title4" : "Responsabilitat amb relació als continguts",
        "text9" : "En aquest sentit Falles d'Andorra es reserva el dret de modificar els continguts del web i d'eliminar-los, així com també de limitar o impedir l'accés ja sigui temporalment o definitiva, sense notificació prèvia, amb l'objectiu d'acomplir la finalitat esmentada.",
        "text10" : "El lloc web de les falles d’Andorra conté enllaços a llocs web de tercers, cadascun amb les seves polítiques de privacitat pròpies. En accedir a aquests llocs web vostè tindrà la opció que ofereixi dit lloc web pel que fa a l’acceptació de polítiques o galetes (cookies) pròpies. Així mateix i termes generals, vostè té la opció d’acceptar o rebutjar aquestes galetes des de la configuració del seu navegador.",
        "text11" : "Aquest lloc web tant les institucions que hi col·laboren no es fan responsables dels continguts d’altres pàgines web enllaçades des del web www.fallesandorra.com.",
        "text12_1" : "Per qualsevol dubte, aclariment o informació pot contactar-nos a través del correu electrònic ",
        "text12_2" : "."
      }
    },
    "es": {
      "title": "Política de privacidad",
      "policiy" : {
        "title1" : "Información general",
        "text1" : "Este sitio web incluye información relativa a las fallas de Andorra con el objetivo de divulgar y preservar la fiesta de la Quemada de fallas en el Principado de Andorra. Asimismo, en él se mencionan enlaces a publicaciones o de otros sitios web de interés con información sobre esta misma tradición y haciendo mención tanto en la fuente como el autor de los mismos.",
        "text2" : "Este sitio web, dada su naturaleza, no almacena ni trata datos de carácter personal y sólo almacena datos anónimos de navegación detalladas a continuación.",
        "title2" : "Datos de navegación",
        "text3" : "El sistema de navegación y el software necesarios para el funcionamiento de este sitio web recogen, de manera estándar, algunos datos la transmisión de las cuales es implícita en el uso de los protocolos de comunicación de Internet. En esta categoría de datos se encuentra la dirección IP o nombre de dominio del ordenador utilizado por el usuario para conectarse al sitio web, la dirección URL del recurso solicitado, la hora, el método utilizado para la consulta al servidor, el tamaño del archivo obtenido en la respuesta, el código numérico que indica el estado de la respuesta al servidor, y otros parámetros relativos al sistema operativo del entorno informático de la persona usuaria.",
        "text4" : "Esta información no se asocia a personas usuarias concretas y se utiliza con la finalidad exclusiva de obtener información estadística sobre las visitas al sitio web de las Fallas de Andorra.",
        "text5" : "Este sitio web no utiliza galletas (cookies) u otros medios de naturaleza análoga para el tratamiento de datos personales que permitan la identificación de personas físicas como usuarias del sitio web. El uso de estas cookies se reserva por cuestiones relacionadas con la experiencia del usuario y su exploración, así como por términos puramente estadísticos de visitas e interacción con el espacio.",
        "title3" : "Protección de los derechos de propiedad intelectual",
        "text6" : "Los contenidos y elementos gráficos que forman parte del sitio web fallesandorra.com son de titularidad tanto de terceros personas físicas como jurídicas las que han autorizado los su uso enmarcado dentro de la tarea de difusión y preservación de la tradición de la Quemada de fallas en el Principado de Andorra. Los contenidos son objeto de propiedad intelectual, de acuerdo con lo dispuesto en la Ley sobre derechos de autor y derechos conexos, de 10-6-99. Por lo tanto, cualquier uso que el usuario hagan de estos contenidos o de futuros que se puedan incluir, debe hacerse siguiendo y respetando las limitaciones de la normativa mencionada.",
        "text7" : "La relación de autores y / o propietarios de todos los contenidos gráficos se puede encontrar durante la exploración del sitio web o bien al apartado 'Créditos web' que encontrarás al pie de página del sitio web. No está permitido el uso de estos contenidos sin el consentimiento de cada uno de ellos.",
        "text8" : "No se autoriza en ningún caso:",
        "list1" : "La presentación de una página del sitio web en una ventana que no pertenece al dominio fallesandorra.com mediante framing.",
        "list2" : "El uso comercial de los contenidos del sitio web www.fallesandorra.com.",
        "list3" : "El uso de signos, logotipos y en general símbolos distintivos de cualquier naturaleza incluidos en este sitio web sin el consentimiento de la institución o entidad a la que hacen referencia.",
        "title4" : "Responsabilidad con relación a los contenidos",
        "text9" : "En este sentido Falles d'Andorra se reserva el derecho de modificar los contenidos de la web y de eliminarlos, así como también de limitar o impedir el acceso ya sea temporal o definitivamente, sin notificación previa, con el objetivo de cumplir la finalidad mencionada.",
        "text10" : "El sitio web de las fallas de Andorra contiene enlaces a sitios web de terceros, cada uno con sus políticas de privacidad propias. Al acceder a estos sitios web usted tendrá la opción que ofrezca dicho sitio web con respecto a la aceptación de políticas o galletas (cookies) propias. Asimismo y términos generales, usted tiene la opción de aceptar o rechazar estas cookies desde la configuración de su navegador.",
        "text11" : "Este sitio web tanto las instituciones que colaboran no se hacen responsables de los contenidos de otras páginas web enlazadas desde la web www.fallesandorra.com.",
        "text12_1" : "Para cualquier duda, aclaración o información puede contactarnos a través del correo electrónico ",
        "text12_2" : "."
      }
    },
    "fr": {
      "title": "Politique de confidentialité",
      "policiy" : {
        "title1" : "Informations générales",
        "text1" : "Ce site Web contient des informations sur les Fallas de Andorre dans le but de diffuser et de préserver la Fête de l'incendie des Fallas dans la Principauté d'Andorre. Il mentionne également des liens vers des publications ou d'autres sites Web contenant des informations intéressantes sur cette tradition. La source et l'auteur sont référencés dans ces liens.",
        "text2" : "En raison de sa nature, ce site Web ne stocke ni ne traite les données personnelles, mais ne stocke que les données de navigation anonymes énumérées ci-dessous.",
        "title2" : "Donnés de navegation",
        "text3" : "Le système de navigation et les logiciels nécessaires au fonctionnement de ce site Internet collectent, de manière standard, certaines données dont la transmission est implicite dans l'utilisation des protocoles de communication Internet. Cette catégorie de données comprend: l'adresse IP ou le nom de domaine de l'ordinateur utilisé par l'utilisateur pour se connecter au site, l'URL de la ressource demandée, l'heure, la méthode utilisée pour la requête sur le serveur, la taille du fichier obtenu dans la réponse, le code numérique indiquant l'état de la réponse sur le serveur et d'autres paramètres liés au système d'exploitation de l'environnement informatique de l'utilisateur.",
        "text4" : "Ces informations ne sont pas associées à des utilisateurs spécifiques et sont utilisées dans le seul but d’obtenir des informations statistiques sur les visites du site Web de Fallas d’Andorra.",
        "text5" : "Ce site web n'utilise pas de cookies ou d'autres moyens de nature similaire pour le traitement des données personnelles qui permettent l'identification des personnes en tant qu'utilisateurs du site Web. L'utilisation de ces cookies est réservée aux problématiques liées à l'expérience utilisateur et à leur exploration, ainsi qu'à des termes purement statistiques de visites et d'interaction avec l'espace.",
        "title3" : "Protection des droits de propriété intellectuelle",
        "text6" : "Les contenus et éléments graphiques qui font partie de www.fallesandorra.com sont la propriété de tiers, tant naturels que légaux, qui ont autorisé leur utilisation dans le cadre de la diffusion et de la préservation de la tradition de la gravure de échecs en Principauté d'Andorre. Le contenu fait l'objet de la propriété intellectuelle, conformément aux dispositions de la loi sur le droit d'auteur et les droits voisins du 10-6-99. Par conséquent, toute utilisation que l'utilisateur fait de ce contenu ou des futures qui peuvent y être inclus, doit être faite en suivant et en respectant les limitations de la réglementation précitée.",
        "text7" : "La liste des auteurs et / ou propriétaires de tout le contenu graphique peut être trouvée lors de la navigation sur le site Web ou dans la section «Crédits Web» en bas du site Web. L'utilisation d'un tel contenu n'est pas autorisée sans le consentement de chaque individu.",
        "text8" : "Il n'est en aucun cas autorisé:",
        "list1" : "La présentation d'une page du site Web dans une fenêtre n'appartenant pas au domaine fallesandorra.com au moyen de cadrage.",
        "list2" : "Utilisation commerciale du contenu du site www.fallesandorra.com.",
        "list3" : "L'utilisation de signes, logos et en général des signes distinctifs de toute nature inclus dans ce site Web sans le consentement de l'institution ou de l'entité à laquelle ils se réfèrent.",
        "title4" : "Responsabilité par rapport au contenu",
        "text9" : "En ce sens, Falles d'Andorra se réserve le droit de modifier le contenu du site et de le supprimer, ainsi que de limiter ou d'empêcher l'accès de manière temporaire ou permanente, sans préavis, afin de s'y conformer. le but mentionné.",
        "text10" : "Le site Web Andorra Faults contient des liens vers des sites Web tiers, chacun avec ses propres politiques de confidentialité. En accédant à ces sites Web tiers, vous avez la possibilité de les proposer en acceptant vos propres politiques de confidentialité ou cookies. Vous avez également la possibilité d'accepter ou de refuser ces cookies à partir des paramètres de votre navigateur.",
        "text11" : "Les administrateurs de ce site Web, ainsi que les institutions et entités qui y collaborent, ne sont pas responsables du contenu des autres pages Web liées à partir de www.fallesandorra.com.",
        "text12_1" : "Pour toute question, clarification ou information, vous pouvez nous contacter par e-mail ",
        "text12_2" : "."
      }
    }
  }
</i18n>