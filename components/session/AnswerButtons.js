import css from '@/scss/session/AnswerButtons.module.scss'

export default function AnswerButtons({ range }) {
  return (
    <div className={css.container}>
      {range.options.slice(1).map(option => (
        <div key={option.index}>
          {option.description}
        </div>
      ))}
    </div>
  )
}