import { useEffect, useState } from 'react'
import Navbar from '@/components/common/Navbar'
import RangesUiSection from '@/components/ranges/RangesUiSection'
import Gallery from '@/components/ranges/Gallery'
import useAuth from '@/hooks/useAuth'
import css from '@/scss/ranges/RangesRoot.module.scss'

export default function RangesRoot() {
  const { isLoading, user } = useAuth()
  const [selected, setSelected] = useState([])

  useEffect(() => {
    if (!isLoading && !user) {
      location.replace('/login')
    }
  }, [isLoading])

  const handleSelectionChange = (rangeId, isSelected) => {
    if (!isSelected) {
      setSelected([...selected, rangeId]);
    } else {
      setSelected(selected.filter((id) => id !== rangeId));
    }
  }

  if (isLoading || !user) return null

  return (
    <div>
      <Navbar user={user} />
      <div className={css.main}>
        <RangesUiSection
          user={user}
          selected={selected}
        />
        <Gallery
          user={user}
          handleSelectionChange={handleSelectionChange}
        />
      </div>
    </div>
  )
}