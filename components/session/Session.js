import css from '@/scss/session/Session.module.scss'

export default function Session({ user, session, setSession }) {
  return (
    <div>
      hello, this is session {session.id}
    </div>
  )
}