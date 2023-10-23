import { useEffect } from 'react'
import toast from 'react-hot-toast'
import { correctAnswer } from '@/lib/cards'
import css from '@/scss/session/AnswerButtons.module.scss'

export default function AnswerButtons({ range, combo, setStats }) {
  const handleAnswer = (index) => {
    if (index === correctAnswer(range, combo)) {
      toast.success('correct')
      setStats(prev => prev.concat([{ range, combo, correct: true }]))
    } else {
      toast.error('false')
      setStats(prev => prev.concat([{ range, combo, correct: false }]))
    }
  }

  const handleShortcutAnswer = (event) => {
    if (Number(event.key) && Number(event.key) < range.options.length) {
      if (Number(event.key) === correctAnswer(range, combo)) {
        toast.success('correct')
        setStats(prev => prev.concat([{ range, combo, correct: true }]))
      } else {
        toast.error('false')
        setStats(prev => prev.concat([{ range, combo, correct: false }]))
      }
    }
  }

  useEffect(() => {
    console.log('add now')
    window.addEventListener('keyup', handleShortcutAnswer);

    return () => {
      window.removeEventListener('keyup', handleShortcutAnswer);
    }
  }, [combo])

  return (
    <div className={css.container}>
      {range.options.slice(1).map(option => (
        <div key={option.index} onClick={() => { handleAnswer(option.index) }}>
          <div className={css.hotkey}>{option.index}</div>
          <div className={css.description}>{option.description || 'option'}</div>
        </div>
      ))}
    </div>
  )
}