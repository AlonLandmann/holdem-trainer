import { useEffect } from 'react'
import Admin from '@/components/admin/Admin'
import useAuth from '@/hooks/useAuth'

export default function AdminRoot({ days }) {
  const { isLoading, user } = useAuth()

  useEffect(() => {
    if (!isLoading && !user.admin) {
      location.replace('/')
    }
  }, [isLoading])
  

  if (isLoading || !user.admin) return null

  return (
    <div>
      <Admin days={days} />
    </div>
  )
}