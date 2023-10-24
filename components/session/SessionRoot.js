import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Navbar from '@/components/common/Navbar'
import Session from '@/components/session/Session'
import useAuth from '@/hooks/useAuth'
import css from '@/scss/session/SessionRoot.module.scss'

export default function SessionRoot() {
  const { isLoading, user } = useAuth()
  const router = useRouter()
  const [session, setSession] = useState({})

  useEffect(() => {
    if (!isLoading && !user) {
      location.replace('/login')
    } else if (!isLoading && user) {
      const foundSession = JSON.parse(localStorage.getItem('session'))

      if (foundSession.id === router.query.sessionId) {
        setSession(foundSession)
      } else {
        router.push('/sessions')
      }
    }
  }, [isLoading])

  if (isLoading || !user || !session.rangeIds ) return null

  return (
    <div>
      <Navbar user={user} />
      <div className={css.main}>
        <Session
          user={user}
          session={session}
        />
      </div>
    </div>
  )
}