import { cloneDeep } from 'lodash'
import Button from '@/components/common/Button'
import ColorPicker from '@/components/range-editor/ColorPicker'
import { colors } from '@/lib/colors'
import css from '@/scss/range-editor/Options.module.scss'

export default function Options({ range, setRange }) {
  const handleChange = (event, option) => {
    setRange(prev => {
      let newRange = cloneDeep(prev)

      newRange.options[option.index][event.target.name] = event.target.value

      return newRange
    })
  }

  const handleAdd = (event) => {
    event.preventDefault()

    setRange(prev => {
      let newRange = cloneDeep(prev)
      let newColor = '#fafafa'

      while (range.options.map(option => option.color).indexOf(newColor) > -1) {
        newColor = colors[Math.floor(colors.length * Math.random())]
      }

      newRange.options.push(
        {
          index: newRange.options.length,
          description: '',
          color: newColor
        }
      )

      return newRange
    })
  }

  const handleRemove = (option) => {
    setRange(prev => {
      let newRange = { ...cloneDeep(prev), options: [], matrix: [] }
      let newIndex = 0

      for (let i = 0; i < prev.options.length; i += 1) {
        if (i !== option.index) {
          newRange.options.push({ ...prev.options[i], index: newIndex })
          newIndex += 1;
        }
      }

      for (let r = 0; r < prev.matrix.length; r += 1) {
        const newRow = []

        for (let c = 0; c < prev.matrix[r].length; c += 1) {
          if (prev.matrix[r][c] >= option.index) {
            newRow.push(prev.matrix[r][c] - 1)
          } else {
            newRow.push(prev.matrix[r][c])
          }
        }

        newRange.matrix.push(newRow)
      }

      return newRange
    })
  }

  return (
    <div className={css.container}>
      {range.options.map(option => (
        <div key={option.index} className={css.option}>
          <div className={css.index}>{option.index}</div>
          <ColorPicker
            option={option}
            disabled={option.index === 0}
            setRange={setRange}
          />
          <input
            name='description'
            type='text'
            placeholder='description'
            disabled={option.index === 0}
            value={option.description}
            onChange={event => { handleChange(event, option) }}
          />
          {option.index === 0 && <div className={css.remove}></div>}
          {option.index !== 0 &&
            <div className={css.remove} onClick={() => { handleRemove(option) }}>
              <i className='bi bi-trash3'></i>
            </div>
          }
        </div>
      ))}
      {range.options.length <= colors.length &&
        <div className={css.option}>
          <div></div>
          <Button theme='gray' icon='plus-lg' onClick={handleAdd}>add option</Button>
        </div>
      }
    </div>
  )
}