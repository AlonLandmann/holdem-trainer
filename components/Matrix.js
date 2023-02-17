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
        <div className={`${css.topCell} ${hoveredCol === 0 ? css.hovered : ''}`}>A</div>
        <div className={`${css.topCell} ${hoveredCol === 1 ? css.hovered : ''}`}>K</div>
        <div className={`${css.topCell} ${hoveredCol === 2 ? css.hovered : ''}`}>Q</div>
        <div className={`${css.topCell} ${hoveredCol === 3 ? css.hovered : ''}`}>J</div>
        <div className={`${css.topCell} ${hoveredCol === 4 ? css.hovered : ''}`}>T</div>
        <div className={`${css.topCell} ${hoveredCol === 5 ? css.hovered : ''}`}>9</div>
        <div className={`${css.topCell} ${hoveredCol === 6 ? css.hovered : ''}`}>8</div>
        <div className={`${css.topCell} ${hoveredCol === 7 ? css.hovered : ''}`}>7</div>
        <div className={`${css.topCell} ${hoveredCol === 8 ? css.hovered : ''}`}>6</div>
        <div className={`${css.topCell} ${hoveredCol === 9 ? css.hovered : ''}`}>5</div>
        <div className={`${css.topCell} ${hoveredCol === 10 ? css.hovered : ''}`}>4</div>
        <div className={`${css.topCell} ${hoveredCol === 11 ? css.hovered : ''}`}>3</div>
        <div className={`${css.topCell} ${hoveredCol === 12 ? css.hovered : ''}`}>2</div>
      </div>
      {labels.map((rowLabel, r) => (
        <div
          className={css.row} key={uniqid()}
        >
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
