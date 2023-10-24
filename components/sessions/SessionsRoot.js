import { useEffect } from 'react'
import Navbar from '@/components/common/Navbar'
import SessionUiSection from '@/components/sessions/SessionUiSection'
import PastSessions from '@/components/sessions/PastSessions'
import useAuth from '@/hooks/useAuth'
import css from '@/scss/sessions/SessionsRoot.module.scss'

export default function SessionsRoot() {
  const { isLoading, user } = useAuth()

  useEffect(() => {
    if (!isLoading && !user) {
      location.replace('/login')
    }
  }, [isLoading])
  

  if (isLoading || !user) return null

  return (
    <div>
      <Navbar user={user} />
      <div className={css.main}>
        <SessionUiSection user={user} />
        <PastSessions user={user} />
      </div>
    </div>
  )
}