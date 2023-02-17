import { useState } from 'react'
import uniqid from 'uniqid'
import css from '@/scss/Matrix.module.scss'

export default function Matrix({ spot, colors, handleChange }) {
  const [hoveredRow, setHoveredRow] = useState(null)
  const [hoveredCol, setHoveredCol] = useState(null)

  const labels = [
    'A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2'
  ]

  return (
    <div className={css.matrix}>
      <div className={css.row}>
        <div className={css.cornerCell}></div>
        {labels.map((_, r) => (
          <div
            key={uniqid()}
            className={`${css.topCell} ${hoveredCol === r ? css.hovered : ''}`}
          >
            {labels[r]}
          </div>
        ))}
      </div>
      {labels.map((rowLabel, r) => (
        <div className={css.row} key={uniqid()}>
          <div className={`${css.leftCell} ${hoveredRow === r ? css.hovered : ''}`}>
            {rowLabel}
          </div>
          {labels.map((_, c) => (
            <div
              key={uniqid()}
              className={css.contentCell}
              style={{background: colors[spot.preflopMatrix[r][c]]}}
              onMouseEnter={() => { setHoveredRow(r); setHoveredCol(c) }}
              onMouseLeave={() => { setHoveredRow(null); setHoveredCol(null) }}
              onClick={() => { handleChange(r, c) }}
            >

            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
