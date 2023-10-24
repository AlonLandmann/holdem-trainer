import { getPositions } from '@/lib/positions'
import css from '@/scss/common/History.module.scss'

export default function History({ range }) {
  const positions = getPositions(range.nrPlayers)

  const adjustHistory = (history) => {
    if (!history) {
      history = [null, null, '-']
    } else {
      history = [null, null, ...history.split(', '), '-']
    }

    const newHistory = []
    const positionsThatFolded = []

    for (let i = 0; i < history.length; i += 1) {
      if (positionsThatFolded.includes(newHistory.length % range.nrPlayers)) {
        newHistory.push(null)
        i -= 1;

        if (positionsThatFolded.length === range.nrPlayers) {
          break;
        }
      } else if (history[i] === 'F') {
        positionsThatFolded.push(i % range.nrPlayers)
        newHistory.push('F')
      } else {
        newHistory.push(history[i])
      }
    }

    return newHistory
  }

  return (
    <div className={css.container} style={{ gridTemplateColumns: `repeat(${range.nrPlayers}, auto)` }}>
      {positions.map(position =>
        <div
          key={position}
          className={`${css.positionCell} ${position === range.position ? css.activePosition : null}`}
        >
          {position}
        </div>
      )}
      {adjustHistory(range.history).map((action, i) =>
        <div
          key={i}
          className={`
            ${action ? css.actionCell : css.emptyCell}
            ${i % range.nrPlayers === positions.indexOf(range.position) ? css.activePosition : null}
          `}
        >
          {action}
        </div>
      )}
    </div>
  )
}