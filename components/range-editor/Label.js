import { useState } from 'react'
import css from '@/scss/range-editor/Label.module.scss'

export default function Label({ htmlFor, text, tooltip }) {
  const [tooltipInView, setTooltipInView] = useState(false)

  return (
    <div className={css.container}>
      <label htmlFor={htmlFor}>{text}</label>
      {tooltip &&
        <i
          className='bi bi-question-circle'
          onMouseEnter={() => { setTooltipInView(true) }}
          onMouseLeave={() => { setTooltipInView(false) }}
        >

        </i>
      }
      {tooltipInView &&
        <div className={css.tooltip}>{tooltip}</div>
      }
    </div>
  )
}