const _parroquies = [
  {
    id: 1,
    name: "Andorra la Vella",
    date: "23 de juny",
    place: "De la placeta del Puial a plaça Guillemó (Recorregut Centre Històric).",
    start: "22:30. Placeta del Puial.",
    start_link: "",
    social: {
      face: { enabled: true, link: "https://www.facebook.com/assfallairesalv/"},
      insta: { enabled: true, link: "https://www.instagram.com/assfallairesalv/"},
      twit: { enabled: true, link: "https://www.twitter.com/assfallairesalv/"},
      ytube: { enabled: true, link: "https://www.youtube.com/assfallairesalv/"},
      mail: { enabled: true, link: "mailto:info@fallairesandorralavella.com"},
      web: { enabled: true, link: "www.fallairesandorralavella.com"}
    },
    image: "img_p01.jpg",
    logo: [ "logo_calv.png","logo_falv.png" ],
    transition: "fade",
    col_enable: true,
    entitats: [
      { id: 1, title: "Esbart dansaire d'Andorra la Vella", link: "https://www.facebook.com/esbartandorra", logo: "/alv/esbart.jpg"},
      { id: 2, title: "Escola folk del Pirineu d'Arsèguel", link: "http://www.tradicionarius.cat/", logo: "/alv/efolk.jpg"},
      { id: 3, title: "El Rebost del padrí", link: "https://elrebostdelpadri.eu/", logo: "/alv/rebost.png"},
      { id: 4, title: "Associació de Comerciants Centre Històric", link: "https://www.centrehistoric.ad/", logo: "/alv/asscomer.png"},
    ],
    foto: "©Qucut Producció Audiovisual / Fons Associació Fallaires d'Andorra la Vella (FAFALV)",
    esCelebra: true
  },
  {
    id: 2,
    name: "Sant Julià de Lòria",
    date: "23 de juny",
    place: "Barri Rocacorba - Plaça de la Germandat - Parc del Prat Gran.",
    start: "22:30. Barri Rocacorba",
    start_link: "",
    social: {
      face: { enabled: true, link: "https://www.facebook.com/fallaireslauredians/"},
      insta: { enabled: true, link: "https://www.instagram.com/fallaireslauredians/"},
      twit: { enabled: false, link: ""},
      ytube: { enabled: false, link: ""},
      mail: { enabled: false, link: ""},
      web: { enabled: false, link: ""}
    },
    image: "img_p02.jpg",
    logo: [ "logo_csjl.png" ],
    transition: "fade",
    col_enable: true,
    entitats: [
      { id: 1, title: "Esbart Laurèdia", link: "https://www.esbartlauredia.com/", logo: "/sjl/esbart.jpg"}
    ],
    foto: "©Comú Sant Julià de Lòria",
    esCelebra: true
  },
  {
    id: 3,
    name: "Escaldes-Engordany",
    date: "23 de juny",
    place: "Casc antic - Plaça de l'Església - Av. Carlemany - C. del Paraires - Av. Nacions Unides - Aparcament del Veedors.",
    start: "22:00. Cas antic d'Escaldes-Engordany",
    start_link: "",
    social: {
      face: { enabled: false, link: ""},
      insta: { enabled: false, link: ""},
      twit: { enabled: false, link: ""},
      ytube: { enabled: false, link: ""},
      mail: { enabled: true, link: ""},
      web: { enabled: false, link: ""}
    },
    image: "img_p03.jpg",
    logo: [ "logo_cee.png", "logo_uptee.png" ],
    transition: "fade",
    col_enable: false,
    entitats: [],
    foto: "©Comú d´Escaldes-Engordany / Arxiu Històric",
    esCelebra: true
  },
  {
    id: 4,
    name: "Ordino",
    date: "28 de juny",
    place: "De la plaça Major fins l'aparcament Prat de Vilella (Recorregut Centre Històric).",
    start: "22:30. Plaça major",
    start_link: "",
    social: {
      face: { enabled: true, link: "https://www.facebook.com/fallairesordino"},
      insta: { enabled: true, link: "https://www.instagram.com/fallairesordino"},
      twit: { enabled: false, link: ""},
      ytube: { enabled: true, link: "https://www.youtube.com/channel/UCrClktNEulfNF1RFX3ew2Lg"},
      mail: { enabled: true, link: "mailto:ordino@fallesandorra.com"},
      web: { enabled: false, link: ""}
    },
    image: "img_p05.jpg",
    logo: [ "logo_cord.png","logo_assordino_n.png" ],
    transition: "fade",
    col_enable: true,
    entitats: [
      { id: 1, title: "Esbart de les Valls del nord", link: "https://www.instagram.com/esbartvallsdelnord", logo: "/ord/esbart.png"},
      { id: 2, title: "Castellers d'Andorra", link: "http://www.castellersandorra.com/", logo: "/ord/castellers.png"}
    ],
    foto: "©Eric Rossell",
    esCelebra: true
  },
  {
    id: 5,
    name: "Canillo",
    date: "23 de juny",
    place: "Aparcament dels Refugis",
    start: "21:00. Aparcament dels Refugis",
    start_link: "",
    social: {
      face: { enabled: true, link: "https://www.facebook.com/PuntJoveCanillo/"},
      insta: { enabled: false, link: ""},
      twit: { enabled: false, link: ""},
      ytube: { enabled: false, link: ""},
      mail: { enabled: false, link: ""},
      web: { enabled: true, link: "http://www.canillo.ad/"}
    },
    image: "img_p06.jpg",
    logo: [ "logo_ccan.jpeg" ],
    transition: "fade",
    col_enable: false,
    entitats: [
    ],
    foto: "©Fons Associació Fallaires d'Andorra la Vella (FAFALV)",
    esCelebra: true
  },
  {
    id: 6,
    name: "La Massana",
    date: "23 de juny",
    place: "Del cementiri vell a l'aparcament de les escoles",
    start: "22:30. Cementiri vell",
    start_link: "",
    social: {
      face: { enabled: false, link: "https://www.facebook.com/PuntJoveCanillo/"},
      insta: { enabled: false, link: ""},
      twit: { enabled: false, link: ""},
      ytube: { enabled: false, link: ""},
      mail: { enabled: false, link: ""},
      web: { enabled: false, link: "http://www.canillo.ad/"}
    },
    image: "img_p07.jpg",
    logo: [ "logo_cmas.png" ],
    transition: "fade",
    col_enable: false,
    entitats: [
    ],
    foto: "©Fidel Solsona",
    esCelebra: true
  },
  {
    id: 7,
    name: "Encamp",
    date: "23 de juny",
    place: "Enguany no es celebra",
    start: "Tornarem aviat!",
    start_link: "",
    social: {
      face: { enabled: false, link: "" },
      insta: { enabled: false, link: "" },
      twit: { enabled: false, link: "" },
      ytube: { enabled: false, link: "" },
      mail: { enabled: true, link: "mailto:encamp@fallesandorra.com" },
      web: { enabled: false, link: "" }
    },
    image: "img_p04.jpg",
    logo: ["logo_cenc.png"],
    transition: "fade",
    col_enable: false,
    entitats: [],
    foto: "©Arxiu Fallaires d´Encamp",
    esCelebra: false
  }
]

export default {
  getParroquies(cb) {
    setTimeout(() => cb(_parroquies), 100)
  }
}
