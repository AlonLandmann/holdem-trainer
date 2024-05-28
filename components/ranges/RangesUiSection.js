import { cloneDeep } from 'lodash'
import StartSessionButton from '@/components/common/StartSessionButton'
import { putUser } from '@/db/dbFetch'
import { tallyRangeAdditions } from '@/db/dbTrack'
import { newRange } from '@/lib/ranges'
import css from '@/scss/ranges/RangesUiSection.module.scss'

export default function RangesUiSection({ user, selected }) {
  const handleAddNew = () => {
    const updatedUser = cloneDeep(user)

    updatedUser.ranges.unshift(newRange)

    putUser(user.email, updatedUser, async () => {
      // NEW ***
      await tallyRangeAdditions()
      // NEW ***
      location.replace(`/ranges/${newRange.id}`)
    })
  }

  return (
    <div className={css.container}>
      <div className={css.add} onClick={handleAddNew}>
        <i className='bi bi-plus-lg'></i>
        <div>add new range</div>
      </div>
      <StartSessionButton
        selected={selected}
      />
    </div>
  )
}