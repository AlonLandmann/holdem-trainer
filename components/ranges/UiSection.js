import { cloneDeep } from 'lodash'
import { putUser } from '@/db/dbFetch'
import { newRange } from '@/lib/ranges'
import css from '@/scss/ranges/UiSection.module.scss'

export default function UiSection({ user }) {
  const handleAddNew = () => {
    const updatedUser = cloneDeep(user)

    updatedUser.ranges.unshift(newRange)

    putUser(user.email, updatedUser, () => { location.reload() })
  }

  return (
    <div className={css.container}>
      <div className={css.add} onClick={handleAddNew}>
        <i className='bi bi-plus-lg'></i>
        <div>add new range</div>
      </div>
    </div>
  )
}