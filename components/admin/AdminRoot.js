import { useEffect } from 'react'
import useAuth from '@/hooks/useAuth'
import css from '@/scss/admin/AdminRoot.module.scss'

export default function AdminRoot() {
  const { isLoading, user } = useAuth()

  useEffect(() => {
    if (!isLoading && !user.admin) {
      location.replace('/')
    }
  }, [isLoading])
  

  if (isLoading || !user.admin) return null

  return (
    <div className={css.container}>
      Admin
    </div>
  )
}