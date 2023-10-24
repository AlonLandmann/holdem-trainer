import { useEffect } from 'react'
import { cloneDeep } from 'lodash'
import toast from 'react-hot-toast'
import { putUser } from '@/db/dbFetch'
import { correctAnswer } from '@/lib/cards'
import css from '@/scss/session/AnswerButtons.module.scss'

export default function AnswerButtons({ user, session, range, combo, stats, setStats }) {
  const endSession = (sessionToStore)  => {
    let updatedUser = cloneDeep(user)

    updatedUser.sessions.push(sessionToStore)
    putUser(user.email, updatedUser, () => { location.replace('/sessions') })
  }

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

    if (stats.length < session.limit - 1) {
      setStats(prev => prev.concat([dataPoint]))
    } else {
      endSession({ ...session, data: stats.concat([dataPoint])})
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