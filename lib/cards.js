const values = ['A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2']
const suits = ['s', 'h', 'd', 'c']

export const suitNames = { 's': 'spade', 'h': 'heart', 'd': 'diamond', 'c': 'club' }

function potentialCells(range) {
  const cells = []

  for (let r = 0; r < values.length; r++) {
    for (let c = 0; c < values.length; c++) {
      if (range.matrix[r][c]) {
        cells.push({ r, c })
      }
    }
  }

  return cells
}

function potentialCombosFromCell({ r, c }) {
  const combos = []

  if (r < c) {
    combos.push([[values[r], 's'], [values[c], 's']])
    combos.push([[values[r], 'h'], [values[c], 'h']])
    combos.push([[values[r], 'd'], [values[c], 'd']])
    combos.push([[values[r], 'c'], [values[c], 'c']])
  } else if (r === c) {
    combos.push([[values[r], 's'], [values[c], 'h']])
    combos.push([[values[r], 's'], [values[c], 'd']])
    combos.push([[values[r], 's'], [values[c], 'c']])
    combos.push([[values[r], 'h'], [values[c], 'd']])
    combos.push([[values[r], 'h'], [values[c], 'c']])
    combos.push([[values[r], 'd'], [values[c], 'c']])
  } else {
    combos.push([[values[r], 's'], [values[c], 'h']])
    combos.push([[values[r], 's'], [values[c], 'd']])
    combos.push([[values[r], 's'], [values[c], 'c']])
    combos.push([[values[r], 'h'], [values[c], 's']])
    combos.push([[values[r], 'h'], [values[c], 'd']])
    combos.push([[values[r], 'h'], [values[c], 'c']])
    combos.push([[values[r], 'd'], [values[c], 's']])
    combos.push([[values[r], 'd'], [values[c], 'h']])
    combos.push([[values[r], 'd'], [values[c], 'c']])
    combos.push([[values[r], 'c'], [values[c], 's']])
    combos.push([[values[r], 'c'], [values[c], 'h']])
    combos.push([[values[r], 'c'], [values[c], 'd']])
  }

  return combos
}

function potentialCombosFromRange(range) {
  const cells = potentialCells(range)
  const combos = []

  cells.forEach(cell => { combos.push(...potentialCombosFromCell(cell)) })

  return combos
}

export function randomCombo(range) {
  const combos = potentialCombosFromRange(range)

  return combos[Math.floor(Math.random() * combos.length)]
}
