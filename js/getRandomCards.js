export default function getRandomCards() {
  const cards = [getRandomCard(), getRandomCard()]

  while (cards[0] === cards[1]) {
    cards[1] = getRandomCard()
  }

  return cards
}

function getRandomCard() {
  const values = [ 'A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2' ]
  const suits = [ 's', 'h', 'd', 'c' ]

  const v = Math.floor(13 * Math.random())
  const s = Math.floor(4 * Math.random())

  return `${values[v]}${suits[s]}`
}