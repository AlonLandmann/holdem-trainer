import { useState } from 'react'
import { cloneDeep } from 'lodash'
import { colors } from '@/lib/colors'
import css from '@/scss/range-editor/ColorPicker.module.scss'

export default function ColorPicker({ option, disabled, setRange }) {
  const [isChoosing, setIsChoosing] = useState(false)

  const setColor = (color) => {
    setRange(prev => {
      let newRange = cloneDeep(prev)

      newRange.options[option.index].color = color

      return newRange
    })

    setIsChoosing(false)
  }

  return (
    <div>
      {!isChoosing &&
        <div
          className={`${css.chosenColor} ${disabled ? css.disabled : null}`}
          style={{ background: option.color }}
          onClick={() => { if (!disabled) setIsChoosing(true) }}
        >

        </div>
      }
      <div className={css.colorGrid}>
        {isChoosing && colors.map(color => (
          <div
            key={color}
            className={`${css.colorOption} ${option.color === color ? css.selected : null}`}
            style={{ background: color }}
            onClick={() => { if (!disabled) setColor(color) }}
          >

          </div>
        ))}
      </div>
    </div>
  )
}