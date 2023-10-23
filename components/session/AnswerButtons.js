import toast from 'react-hot-toast'
import { correctAnswer } from '@/lib/cards'
import css from '@/scss/session/AnswerButtons.module.scss'

export default function AnswerButtons({ range, combo, stats, setStats }) {
  const handleAnswer = (index) => {
    if (index === correctAnswer(range, combo)) {
      toast.success('correct')
      setStats(prev => prev.concat([{ range, combo, correct: true }]))
    } else {
      toast.error('false')
      setStats(prev => prev.concat([{ range, combo, correct: false }]))
    }
  }

  return (
    <div className={css.container}>
      {range.options.slice(1).map(option => (
        <div key={option.index} onClick={() => { handleAnswer(option.index) }}>
          {option.description}
        </div>
      ))}
    </div>
  )
}