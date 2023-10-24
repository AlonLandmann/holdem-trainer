import { useEffect } from 'react'
import Navbar from '@/components/common/Navbar'
import RangesUiSection from '@/components/ranges/RangesUiSection'
import Gallery from '@/components/ranges/Gallery'
import useAuth from '@/hooks/useAuth'
import css from '@/scss/ranges/RangesRoot.module.scss'

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
      <div className={css.main}>
        <RangesUiSection user={user} />
        <Gallery user={user} />
      </div>
    </div>
  )
}