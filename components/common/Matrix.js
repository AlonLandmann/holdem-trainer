import { cloneDeep } from 'lodash'
import { fontColors } from '@/lib/colors'
import css from '@/scss/common/Matrix.module.scss'

export default function Matrix({ range, setRange, maxWidth, displayOnly }) {
  const labels = ['A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2']
  const indices = range.options.map(option => option.index)
  const colors = range.options.map(option => option.color)
  const style = {
    width: `min(${maxWidth || 400}px, calc(100vw - 55px))`,
    height: `min(${maxWidth || 400}px, calc(100vw - 55px))`,
    fontSize: `${maxWidth >= 500 ? 14 : 12}px`
  }

  const handleCellChange = (r, c) => {
    if (!displayOnly) {
      setRange(prev => {
        const newRange = cloneDeep(prev)

        newRange.matrix[r][c] = (newRange.matrix[r][c] + 1) % indices.length

        return newRange
      })
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
              onClick={() => { handleCellChange(r, c) }}
              style={{
                color: fontColors[colors[range.matrix[r][c]]],
                background: colors[range.matrix[r][c]],
                cursor: displayOnly ? 'auto' : 'pointer'
              }}
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
