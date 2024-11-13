const _elinks = [
  {
    id: 1,
    title: "Museu virtual de les falles al Pirineu.",
    author: "",
    info: "Projecte Prometheus, Programa Interreg POCTEFA 2014-2020 ",
    link: "https://www.cultura.ad/el-nostre-patrimoni-mundial-les-falles-de-sant-joan-les-festes-del-foc-del-solstici-d-estiu-als-pirineus"
  },
  {
    id: 2,
    title: "Les fêtes du feu du solstice d'été dans les Pyrénées",
    author: "",
    info: "UNESCO, desembre 2015",
    link: "https://ich.unesco.org/fr/RL/les-fetes-du-feu-du-solstice-d-ete-dans-les-pyrenees-01073?RL=01073"
  }
]

export default {
  getElinks(cb) {
    setTimeout(() => cb(_elinks), 100)
  }
}
