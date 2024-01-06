import css from '@/scss/sessions/SessionUiSection.module.scss'

export default function SessionUiSection({ user }) {
  const handleStartNew = () => {
    location.replace('/ranges')
  }

  const correct = user.sessions.reduce((sum, session) => {
    return sum + session.data.filter(dp => dp.correct).length
  }, 0)

  const total = user.sessions.reduce((sum, session) => {
    return sum + session.data.length
  }, 0)

  const accuracy = Math.floor(100 * correct / total)

  return (
    <div className={css.container}>
      <div className={css.start} onClick={handleStartNew}>
        <i className='bi bi-plus-lg'></i>
        <div>start new session</div>
      </div>
      <div className={css.stats}>
        <div>Last {user.sessions.length} session{user.sessions.length === 1 ? '' : 's'}:{' '}</div>
        <div>{correct} / {total} · {accuracy}%</div>
      </div>
    </div>
  )
}