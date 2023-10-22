import { useEffect } from 'react'
import { cloneDeep } from 'lodash'
import Button from '@/components/common/Button'
import Navbar from '@/components/common/Navbar'
import Gallery from '@/components/ranges/Gallery'
import useAuth from '@/hooks/useAuth'
import { putUser } from '@/db/dbFetch'
import { newRange } from '@/lib/ranges'
import css from '@/scss/ranges/RangesRoot.module.scss'

export default function RangesRoot() {
  const { isLoading, user } = useAuth()

  useEffect(() => {
    if (!isLoading && !user) {
      location.replace('/login')
    }
  }, [isLoading])

  const addSpot = () => {
    const updatedUser = cloneDeep(user)

    updatedUser.ranges.unshift(newRange)

    putUser(user.email, updatedUser, () => { location.reload() })
  }

  if (isLoading || !user) return null

  return (
    <div>
      <Navbar user={user} />
      <div className={css.main}>
        <div className={css.ui}>
          <Button
            large
            theme='simple'
            icon='plus-lg'
            onClick={addSpot}
          >
            new range
          </Button>
        </div>
        <Gallery user={user} />
      </div>
    </div>
  )
}