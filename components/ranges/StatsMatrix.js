import { cellFromCombo } from '@/lib/cards'
import css from '@/scss/ranges/StatsMatrix.module.scss'

export default function StatsMatrix({ user, range, maxWidth }) {
  const labels = ['A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2']
  const colors = range.options.map(option => option.color)
  const style = {
    width: `min(${maxWidth || 400}px, calc(100vw - 50px))`,
    height: `min(${maxWidth || 400}px, calc(100vw - 50px))`,
    fontSize: `${maxWidth >= 500 ? 14 : 12}px`
  }

  const getAccuracy = (r, c) => {
    const correct = user.sessions.reduce((sum, session) => {
      return sum + session.data.reduce((subSum, dataPoint) => {
        const cell = cellFromCombo(dataPoint.combo)
        const toAdd = (dataPoint.range.id === range.id && cell.r === r && cell.c === c && dataPoint.correct) ? 1 : 0

        return subSum + toAdd
      }, 0)
    }, 0)

    const total = user.sessions.reduce((sum, session) => {
      return sum + session.data.reduce((subSum, dataPoint) => {
        const cell = cellFromCombo(dataPoint.combo)
        const toAdd = (dataPoint.range.id === range.id && cell.r === r && cell.c === c) ? 1 : 0

        return subSum + toAdd
      }, 0)
    }, 0)

    return Math.floor(100 * correct / total)
  }

  const getStyle = (r, c) => {
    if (range.matrix[r][c] === 0) {
      return { color: '#fff', background: '#fff' }
    } else {
      const accuracy = getAccuracy(r, c)

      if (isNaN(accuracy)) {
        return {}
      }

      return {
        color: `rgba(${(100 - accuracy)/3}%, ${accuracy/3}%, ${10}%, 1)`,
        background: `rgba(${100 - accuracy}%, ${accuracy}%, ${30}%, 0.3)`
      }
    }
  }

  return (
    <div className={css.container} style={style}>
      {labels.map((_, r) => (
        <div key={`r${r}`} className={css.row}>
          {labels.map((_, c) => (
            <div
              key={`r${r}c${c}`}
              className={css.cell}
              style={getStyle(r, c)}
            >
              {c >= r ? labels[r] : labels[c]}
              {c >= r ? labels[c] : labels[r]}
              {c > r ? 's' : c === r ? '' : 'o'}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
