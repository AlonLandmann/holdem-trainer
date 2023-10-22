import { fontColors } from '@/lib/colors'
import css from '@/scss/ranges/Legend.module.scss'

export default function Legend({ range }) {
  return (
    <div className={css.container}>
        {range.options.slice(1).reverse().map(option => (
          <div
            key={option.index}
            style={{
              color: fontColors[option.color],
              backgroundColor: option.color
            }}
          >
            {option.description || '-'}
          </div>
        ))}
      </div>
  )
}