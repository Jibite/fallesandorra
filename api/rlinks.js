const _rlinks = [
  {
    id: 1,
    title: "El nostre patrimoni mundial: les Falles de Sant Joan. Les Festes del foc del solstici d’estiu als Pirineus.",
    author: "ARXIU D’ETNOGRAFIA D’ANDORRA",
    info: "Govern d'Andorra. Ministeri de Cultura i Esports. Andorra, febrer 2019.",
    link: "https://www.cultura.ad/el-nostre-patrimoni-mundial-les-falles-de-sant-joan-les-festes-del-foc-del-solstici-d-estiu-als-pirineus"
  },
  {
    id: 2,
    title: "El nostre patrimoni festiu: les festes d’interès cultural",
    author: "ARXIU D’ETNOGRAFIA D’ANDORRA",
    info: "Govern d'Andorra. Ministeri de Cultura i Esports. Andorra, febrer 2019",
    link: "https://www.cultura.ad/el-nostre-patrimoni-festiu-les-festes-d-interes-cultural"
  },
  {
    id: 3,
    title: "Les falles d'Andorra, Patrimoni immaterial de la humanitat. Una festa que creix i uneix dia rere dia",
    author: "ROIG, Albert",
    info: "Govern d'Andorra. Ministeri de Cultura i Esports. Andorra, febrer 2019.",
    link: "https://www.cultura.ad/images/stories/PatrimoniImmaterial/FestesInteresCultural/FestesIC_07_01.pdf"
  }
]

export default {
  getRlinks(cb) {
    setTimeout(() => cb(_rlinks), 100)
  }
}
