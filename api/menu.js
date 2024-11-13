const _menu = [
              {
                  id: 1,
                  param: "falla",
                  link: "/la-falla"
              },
              {
                  id: 2,
                  param: "fallaire",
                link: "/el-fallaire"
              },
              {
                  id: 3,
                  param: "festa",
                  link: "/la-festa"
              },
              {
                  id: 4,
                  param: "community",
                  link: "/comunitat"
              },
              {
                  id: 5,
                  param: "parroquies",
                  link: "/parroquies"
              },
              {
                  id: 6,
                  param: "flinks",
                  link: "/info"
              }
            ]

export default {
  getMenu(cb) {
    setTimeout(() => cb(_menu), 100)
  }
}
