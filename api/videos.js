const _videos = [
  { id: 1, url: "https://www.youtube.com/embed/QP9aX98GZlA?rel=0&modestbranding=1&showinfo=0"},
  { id: 2, url: "https://www.youtube.com/embed/6LJIVWOJwUA?rel=0&modestbranding=1&showinfo=0"},
  { id: 3, url: "https://www.youtube.com/embed/bKRJVKjPxLE?rel=0&modestbranding=1&showinfo=0"},
  { id: 4, url: "https://www.youtube.com/embed/b21MK7GOdtQ?rel=0&modestbranding=1&showinfo=0"},
  { id: 5, url: "https://www.youtube.com/embed/kcqQjo9PrYg?rel=0&modestbranding=1&showinfo=0"},
  { id: 6, url: "https://www.youtube.com/embed/IX5cXlEU7KY?rel=0&modestbranding=1&showinfo=0"},
  { id: 7, url: "https://www.youtube.com/embed/F_40r3yZaJ4?rel=0&modestbranding=1&showinfo=0"},
  { id: 8, url: "https://www.youtube.com/embed/WOPS0P9Maxc?rel=0&modestbranding=1&showinfo=0"},
  { id: 9, url: "https://www.youtube.com/embed/1vVGMmLZFsA?rel=0&modestbranding=1&showinfo=0"},
  { id: 10, url: "https://www.youtube.com/embed/GhmiEWOXdLQ?rel=0&modestbranding=1&showinfo=0"},
  { id: 11, url: "https://www.youtube.com/embed/DbpS0B2wH8g?rel=0&modestbranding=1&showinfo=0" },
  { id: 12, url: "https://www.youtube.com/embed/2jq0xkhbLuE?rel=0&modestbranding=1&showinfo=0"},
  { id: 13, url: "https://www.youtube.com/embed/ta6iRq_Osrw?rel=0&modestbranding=1&showinfo=0"}
  ]

export default {
  getVideos(cb) {
    setTimeout(() => cb(_videos), 100)
  }
}
