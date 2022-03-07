function Guitar(name, price, img) {

  return {
    name: name,
    price: price,
    img: img,
  }
}

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../imgs/guitars', false, /\.(png|jpe?g|svg)$/));

let guitars = [
  Guitar('American Original Mustang', 450, images['american-mustang.jpg']),
  Guitar('Jimi Hendrix Stratocaster', 700, images['hendrix-strat.jpg']),
  Guitar('Jim Root Stratocaster', 650, images['jim-root-strat.jpg']),
  Guitar('Nashville Telecaster', 550, images['nashville-tele.jpg']),
  Guitar('Noventa Telecaster', 600, images['noventa-tele.jpg']),
  Guitar('Player Duo-Sonic', 600, images['player-duo-sonic.jpg']),
  Guitar('Player Jazzmaster', 550, images['player-jazzmaster.jpg']),
  Guitar('Player Mustang', 500, images['player-mustang.jpg'])
]

export default guitars