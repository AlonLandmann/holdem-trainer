import { cloneDeep } from 'lodash'
import Button from '@/components/common/Button'
import { putUser } from '@/db/dbFetch'
import { newRange } from '@/lib/ranges'
import css from '@/scss/ranges/UiSection.module.scss'

export default function UiSection({ user }) {
  const addSpot = () => {
    const updatedUser = cloneDeep(user)

    updatedUser.ranges.unshift(newRange)

    putUser(user.email, updatedUser, () => { location.reload() })
  }

  return (
    <div className={css.container}>
      <Button
        large
        theme='simple'
        icon='plus-lg'
        onClick={addSpot}
      >
        new range
      </Button>
    </div>
  )
}