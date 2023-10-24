import { useEffect } from 'react'
import toast from 'react-hot-toast'
import { correctAnswer } from '@/lib/cards'
import css from '@/scss/session/AnswerButtons.module.scss'

export default function AnswerButtons({ session, range, combo, stats, setStats, setIsEnding }) {
  const handleAnswer = (isCorrect) => {
    const dataPoint = {
      range: { id: range.id, name: range.name },
      combo: combo,
      correct: isCorrect
    }

    if (isCorrect) {
      toast.success('correct')
    } else {
      toast.error('false')
    }

    if (stats.length < session.limit) {
      setStats(prev => prev.concat([dataPoint]))
    }
  }

  const handleButtonAnswer = (index) => {
    handleAnswer(index === correctAnswer(range, combo))
  }

  const handleShortcutAnswer = (event) => {
    if (Number(event.key) && Number(event.key) < range.options.length) {
      handleAnswer(Number(event.key) === correctAnswer(range, combo))
    }
  }

  useEffect(() => {
    window.addEventListener('keyup', handleShortcutAnswer);

    return () => {
      window.removeEventListener('keyup', handleShortcutAnswer);
    }
  }, [combo])

  return (
    <div className={css.container}>
      {range.options.slice(1).map(option => (
        <div key={option.index} onClick={() => { handleButtonAnswer(option.index) }}>
          <div className={css.hotkey}>{option.index}</div>
          <div className={css.description}>{option.description || 'option'}</div>
        </div>
      ))}
    </div>
  )
}