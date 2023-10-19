import Navbar from '@/components/common/Navbar'
import useAuth from '@/hooks/useAuth'

export default function HomeRoot() {
  const { isLoading, user } = useAuth()

  if (isLoading) return null

  return (
    <div>
      <Navbar user={user} />
    </div>
  )
}