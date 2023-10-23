import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Navbar from '@/components/common/Navbar'
import RangeEditor from '@/components/range/RangeEditor'
import useAuth from '@/hooks/useAuth'
import css from '@/scss/range/RangeRoot.module.scss'

export default function RangeRoot() {
  const { isLoading, user } = useAuth()
  const router = useRouter()
  const [range, setRange] = useState({})

  useEffect(() => {
    if (!isLoading && !user) {
      location.replace('/login')
    } else if (!isLoading && user) {
      const foundRange = user.ranges.filter(r => r.id === router.query.rangeId)[0]

      if (foundRange) {
        setRange(foundRange)
      } else {
        router.push('/ranges')
      }
    }
  }, [isLoading])

  if (isLoading || !user || !range.options) return null

  return (
    <div>
      <Navbar user={user} />
      <div className={css.main}>
        <RangeEditor
          user={user}
          range={range}
          setRange={setRange}
        />
      </div>
    </div>
  )
}