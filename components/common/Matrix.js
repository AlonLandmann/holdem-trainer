import { v4 as uuid } from 'uuid'
import { cloneDeep } from 'lodash'
import { fontColors } from '@/lib/colors'
import css from '@/scss/common/Matrix.module.scss'

export default function Matrix({ range, setFormData }) {
  const labels = ['A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2']
  const indices = range.options.map(option => option.index)
  const colors = range.options.map(option => option.color)

  const handleCellChange = (r, c) => {
    setFormData(prev => {
      const newFormData = cloneDeep(prev)

      newFormData.matrix[r][c] = (newFormData.matrix[r][c] + 1) % indices.length

      return newFormData
    })
  }

  return (
    <div className={css.container}>
      {labels.map((_, r) => (
        <div key={uuid()} className={css.row}>
          {labels.map((_, c) => (
            <div
              key={uuid()}
              className={css.cell}
              onClick={() => { handleCellChange(r, c) }}
              style={{
                color: fontColors[colors[range.matrix[r][c]]],
                background: colors[range.matrix[r][c]]
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
