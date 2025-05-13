<template>
  <div class="min-h-screen bg-bg flex flex-col justify-around">
    <img src="/img/fallaire/capa-actual.jpg" alt="Fer falla" class="absolute opacity-40 w-full h-full object-cover"/>
    <div class="md:px-12 mb-12 flex flex-col">
      <div class="relative text-primary p-8 bg-bgOverlay md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div>
        <img src="/img/fallaire/ilustration.jpg" alt="">
        <h5 class="text-4xl font-primary mt-6">{{ t('capa.title1') }}</h5>
        <span class="text-sm mt-4">Foto: &copy;Oriol Llauradó</span>
      </div>
      <p class="mt-2 font-body text-base tracking-wide">{{ t('capa.text1') }}</p>
      <p class="mt-2 font-body text-base tracking-wide">{{ t('capa.text2') }}</p>
      <p class="mt-2 font-body text-base tracking-wide">{{ t('capa.text3') }}</p>
    </div>
    <div class="mt-24 relative text-primary p-8 flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 items-center gap-4">
      <div>
        <h5 class="text-4xl font-primary mt-6">{{ t('capa.title2') }}</h5>
        <p class="mt-2 font-body text-base tracking-wide">{{ t('capa.text4') }}</p>
      </div>
      <img src="/img/fallaire/capa-antiga_1.jpg" alt="" class="h-[300px]">
      <img src="/img/fallaire/capa-antiga_2.jpg" alt="" class="h-[300px]">
      <p class="mt-2 font-body text-base tracking-wide">{{ t('capa.text5') }}</p>
    </div>
    </div>
  </div>
</template>

<script setup>
const { t } = useI18n(
  {
    useScope: 'local',
  }
)
</script>

<i18n lang="json">
  { 
    "ca": {
      "capa" : {
        "title1" : "Un joc de nens",
        "text1" : "Antigament s’encenien fogueres a les places dels diferents pobles i barris. Al voltant d’aquests focs, els nens  cremaven i feien rodar les falles. També competien entre ells a veure a qui li durava més temps la falla encesa i qui en cremava més.",
        "text2" : "A Andorra la Vella, fins i tot hi havia competències entre les placetes dels diferents barris. En altres pobles, com les Bons i la Mosquera o Sornàs, els nens baixaven les falles giravoltant-les, corrent des d’un pui o turó fins a la plaça on hi havia la foguera.",
        "text3" : "Quan els petits fallaires arribaven a l’adolescència, els seus interessos i compromisos canviaven, així que la cremada de falles es deixava de banda. Amb la recuperació de la tradició l’any 1987 per part d’un grup de joves d’Andorra la Vella, cremar falles passa a ser també una cosa d’adults.",
        "title2" : "La capa",
        "text4" : "En les èpoques en què els nens cremaven falles, anaven vestits amb roba de carrer. A partir dels anys vuitanta, els joves que recuperen la tradició van començar a protegir-se de les guspires de la falla amb sacs d’espart.",
        "text5" : "Posteriorment, es va consolidar la capa com a vestimenta del fallaire. Cada col·lectiu tria un color que els distingeix. Així, Andorra la Vella es caracteritza per la capa lila, els lauredians fan servir una de vermella, Escaldes i Encamp van amb capa negra, els d’Ordino han triat un color marró ferrós, a Canillo an arlequinats i a La Massana blaus."
      }
    },
    "es": {
      "capa" : {
        "title1" : "Un juego de niños",
        "text1" : "Antiguamente se encendían hogueras en las plazas de los diferentes pueblos y barrios. Alrededor de estos fuegos, los niños quemaban y hacían rodar las fallas. También competían entre ellos a ver a quién le duraba más tiempo la falla encendida y quién quemaba más fallas.",
        "text2" : "En Andorra la Vella incluso había competencias entre las plazoletas de los diferentes barrios. En otros pueblos, como les Bons i la Mosquera o Sornàs, los niños bajaban las fallas haciéndolas girar mientras corrían desde un pui o colina hasta la plaza donde estaba la hoguera.",
        "text3" : "Cuando los pequeños fallaires llegaban a la adolescencia, sus intereses y compromisos cambiaban, así que la cremada de falles se dejaba de lado. Con la recuperación de la tradición en 1987 por parte de un grupo de jóvenes de Andorra la Vella, quemar fallas pasa a ser también algo de adultos.",
        "title2" : "La capa",
        "text4" : "En las épocas en que los niños quemaban fallas, iban vestidos con ropa de calle. A partir de los años ochenta, los jóvenes que recuperan la tradición comenzaron a protegerse de las chispas de la falla con sacos de esparto.",
        "text5" : "Posteriormente, se consolidó la capa como vestimenta del fallaire. Cada colectivo elige un color que los distingue. Así, Andorra la Vella se caracteriza por la capa lila, los Lauredians utilizan una roja, Escaldes y Encamp van con capa negra, los de Ordino han escogido un color marrón ferroso, en Canillo van arlequinados y en La Massana azules."
      }
    },
    "fr": {
      "capa" : {
        "title1" : "Un jeux d’enfants",
        "text1" : "Autrefois, des feux de joie étaient allumés sur les places des différents villages et quartiers. Autour de ces feux, les enfants brûlaient et faisaient tourner les falles. Ils rivalisaient aussi les uns avec les autres pour voir qui aurait la falle qui durerait le plus longtemps et celui qui en brûlerait le plus.",
        "text2" : "À Andorra la Vella, il y avait même des compétitions entre les places des différents quartiers. Dans d’autres villages, comme Les Bons et La Mosquera ou Sornàs, les enfants descendaient en courant depuis le haut d’une colline ou d’un versant en faisant virevolter leurs falles jusqu’à atteindre la place où se trouvait le feu de joie.",
        "text3" : "Lorsque les petits fallaires atteignaient l’adolescence, leurs intérêts et leurs engagements changeaient, délaissant progressivement la cremada de falles jusqu’à sa quasi disparition. Avec le rétablissement de la tradition en 1987 par un groupe de jeunes d’Andorra la Vella, brûler des falles devint aussi une affaire d’adultes.",
        "title2" : "La cape",
        "text4" : "À l’époque où les enfants brûlaient les falles, ils étaient vêtus de vêtements de rue. À partir des années 1980, les jeunes retrouvant la tradition ont commencé à se protéger des étincelles des falles avec des sacs en jute.",
        "text5": "Par la suite, la cape fut confirmée comme un élément de la tenue du fallaire. Chaque groupe choisit une couleur qui les distingue. Ainsi, Andorra la Vella se caractérise par la cape violette, les Laurediens l’ont en rouge, Escaldes et Encamp se couvre d’une cape noire, ceux d'Ordino ont choisi une couleur marron ferreux, à Canillo ils vont arlequin et à La Massana bleu."
      }
    }
  }
</i18n>