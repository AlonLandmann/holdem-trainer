import SessionData from '@/components/sessions/SessionData'
import css from '@/scss/sessions/PastSessions.module.scss'

export default function PastSessions({ user }) {
  return (
    <div className={css.container}>
      {[...user.sessions].reverse().map(session => (
        <SessionData
          key={session.id}
          sessionData={session}
        />
      ))}
    </div>
  )
}