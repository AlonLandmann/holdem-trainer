export default function getSolution(holeCards, spot) {
  const values = [ 'A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2' ]
  const suits = [ 's', 'h', 'd', 'c' ]

  const v1 = values.indexOf(holeCards[0].charAt(0))
  const s1 = suits.indexOf(holeCards[0].charAt(1))
  const v2 = values.indexOf(holeCards[1].charAt(0))
  const s2 = suits.indexOf(holeCards[1].charAt(1))

  const row = s1 === s2 ? Math.min(v1, v2) : Math.max(v1, v2)
  const col = s1 === s2 ? Math.max(v1, v2) : Math.min(v1, v2)

  return spot.preflopMatrix[row][col]
}

