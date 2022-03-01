function Guitar(name, img) {
  return {
    name: name,
    img: img
  }
}

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../imgs/guitars', false, /\.(png|jpe?g|svg)$/));

let guitars = [
  Guitar('American Original Mustang', images['american-mustang.jpg']),
  Guitar('Jimi Hendrix Stratocaster', images['hendrix-strat.jpg']),
  Guitar('Jim Root Stratocaster', images['jim-root-strat.jpg']),
  Guitar('Nashville Telecaster', images['nashville-tele.jpg']),
  Guitar('Noventa Telecaster', images['noventa-tele.jpg']),
  Guitar('Player Duo-Sonic', images['player-duo-sonic.jpg']),
  Guitar('Player Jazzmaster', images['player-jazzmaster.jpg']),
  Guitar('Player Mustang', images['player-mustang.jpg'])
]

export default guitars