import { useEffect } from 'react'
import Navbar from '@/components/common/Navbar'
import Gallery from '@/components/ranges/Gallery'
import useAuth from '@/hooks/useAuth'

export default function RangesRoot() {
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
      <Gallery user={user} />
    </div>
  )
}