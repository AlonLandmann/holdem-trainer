export const positionsFor6max = [
  'SB', 'BB', 'UTG', 'HJ', 'CO', 'BTN'
]

export const positionsForFullRing = [
  'SB', 'BB', 'UTG1', 'UTG2', 'MP1', 'MP2', 'HJ', 'CO', 'BTN'
]

export function getPositions(nrPlayers) {
  if (nrPlayers === 6) {
    return positionsFor6max
  }
  if (nrPlayers === 9) {
    return positionsForFullRing
  }

  return []
}