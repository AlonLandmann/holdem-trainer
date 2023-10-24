import Navbar from '@/components/common/Navbar'
import Hero from '@/components/home/Hero'
import Demo from '@/components/home/Demo'
import useAuth from '@/hooks/useAuth'

export default function HomeRoot() {
  const { isLoading, user } = useAuth()

  if (isLoading) return null

  return (
    <div>
      <Navbar user={user} />
      <Hero />
      <Demo />
    </div>
  )
}