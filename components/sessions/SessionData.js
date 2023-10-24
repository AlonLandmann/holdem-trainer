import css from '@/scss/sessions/SessionData.module.scss'

export default function SessionData({ user, sessionData }) {
  return (
    <div className={css.container}>
      {sessionData.id}
    </div>
  )
}