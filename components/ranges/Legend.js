import { v4 as uuid } from 'uuid'
import { fontColors } from '@/lib/colors'
import css from '@/scss/ranges/Legend.module.scss'

export default function Legend({ range }) {
  return (
    <div className={css.container}>
        {range.options.slice(1).reverse().map(option => (
          <div
            key={uuid()}
            style={{
              border: `1px solid ${fontColors[option.color]}33`,
              color: fontColors[option.color],
              backgroundColor: option.color
            }}
          >
            {option.description}
          </div>
        ))}
      </div>
  )
}