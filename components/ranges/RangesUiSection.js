import { cloneDeep } from 'lodash'
import { putUser } from '@/db/dbFetch'
import { tallyRangeAdditions } from '@/db/dbTrack'
import { newRange } from '@/lib/ranges'
import { newSession } from '@/lib/sessions'
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

  const handleStartSession = (event) => {
    event.stopPropagation()
    
    let session = newSession(selected)

    localStorage.setItem('session', JSON.stringify(session))
    location.replace(`/sessions/${session.id}`)
  }

  return (
    <div className={css.container}>
      <div className={css.add} onClick={handleAddNew}>
        <i className='bi bi-plus-lg'></i>
        <div>add new range</div>
      </div>
      {selected.length > 0 &&
        <div className={css.train} onClick={handleStartSession}>
          <i className='bi bi-crosshair'></i>
          <div>train selection</div>
        </div>
      }
    </div>
  )
}