import { useEffect } from 'react'
import Navbar from '@/components/common/Navbar'
import UiSection from '@/components/sessions/UiSection'
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
        <UiSection />
      </div>
    </div>
  )
}