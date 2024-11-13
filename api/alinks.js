const _alinks = [
  {
    id: 1,
    title: "Folk-lore Andorrà",
    author: "ARMET I RICART, Salvador. Comte de Carlet",
    info: "Butlletí del Centre Excursionista de Catalunya. Núm. 148. Pàgs 143-156. Barcelona, maig 1907",
    link: "https://ddd.uab.cat/pub/butcenexccat/butcenexccat_a1907m5v17n148.pdf"
  },
  {
    id: 2,
    title: "Les falles de Sant Joan d’Andorra. Quan les rodes del foc encenen les valls",
    author: "BURGOS, Rosa i ROIG, Albert.",
    info: "Govern d'Andorra. Ministeri de Cultura i Esports. Andorra, febrer 2019.",
    link: "https://www.cultura.ad/images/stories/PatrimoniImmaterial/FestesInteresCultural/Separata_FALLES_SANT_JOAN_2019.pdf"
  },
  {
    id: 3,
    title: "El patrimoni festiu andorrà. Expressions immaterials d'identitat i de creativitat",
    author: "DE LA PARTE, Isabel",
    info: "Govern d'Andorra. Ministeri de Cultura i Esports. Andorra, febrer 2019",
    link: "https://www.cultura.ad/images/stories/PatrimoniImmaterial/Patrimoni_festiu_Andorra.pdf"
  },
  {
    id: 4,
    title: "La cremada de falles de Sant Joan d’Andorra la Vella",
    author: "Fallaires d'Andorra la Vella",
    info: "Ex libris Casa Bauró – Número 17. Pàgs 37-47. Govern d’Andorra. Ministeri de Cultura. Biblioteca Nacional d’Andorra. Andorra, 2014",
    link: "https://www.cultura.ad/images/stories/Accio_Cultural/Publicacions/ex-libris/2014/Ex-libris2014.pdf"
  }
]

export default {
  getAlinks(cb) {
    setTimeout(() => cb(_alinks), 100)
  }
}
