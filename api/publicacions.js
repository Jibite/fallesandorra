const _publicacions = [
  { id: 1,
    title: "Roda el foc. 30 anys de falles a Andorra la Vella.",
    author: "ROIG, Albert",
    info: "Anem Editors i Pagès Editors. Lleida, desembre 2017.",
    link: "https://www.pageseditors.cat/ca/roda-el-foc.html"
  },
  { id: 2,
    title: "Les falles del Pirineu",
    author: "RIART, Oriol i JORDÀ, Sebastià",
    info: "Pagès Editors. Lleida, 2015",
    link: "https://www.pageseditors.cat/ca/les-falles-del-pirineu.html"
  },
  { id: 3,
    title: "Foc al faro! La festa de les falles al Pirineu",
    author: "FARRÉ SAHÚN, Xavier i RICART IBARS, Sergi",
    info: "Alpinart.  Taüll, 2012",
    link: ""
  }
  ]

export default {
  getPublicacions(cb) {
    setTimeout(() => cb(_publicacions), 100)
  }
}
