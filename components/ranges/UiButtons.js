import { cloneDeep } from 'lodash'
import { v4 as uuid } from 'uuid'
import Tooltip from '@mui/material/Tooltip'
import { putUser } from '@/db/dbFetch'
import { tallyRangeDuplications } from '@/db/dbTrack'
import { tallyRangeDeletions } from '@/db/dbTrack'
import css from '@/scss/ranges/UiButtons.module.scss'

export default function UiButtons({ user, range, handleSaveChanges, statsInView, setStatsInView, displayOnly }) {
  const handleViewStatistics = () => {
    setStatsInView(prev => !prev)
  }

  const handleEdit = () => {
    location.replace(`/ranges/${range.id}`)
  }

  const handleDuplicate = () => {
    let updatedUser = cloneDeep(user)
    let duplicateRange = cloneDeep(range)

    duplicateRange.id = uuid()
    duplicateRange.name = duplicateRange.name + ' - copy'
    updatedUser.ranges.push(duplicateRange)

    putUser(user.email, updatedUser, async () => {
      // NEW ***
      await tallyRangeDuplications()
      // NEW ***
      location.replace(`/ranges`)
    })
  }

  const handleDelete = () => {
    if (confirm('Are you sure you want to delete this range?')) {
      let updatedUser = cloneDeep(user)

      for (let i = 0; i < updatedUser.ranges.length; i += 1) {
        if (updatedUser.ranges[i].id === range.id) {
          updatedUser.ranges.splice(i, 1)

          break;
        }
      }

      putUser(user.email, updatedUser, async () => {
        // NEW ***
        await tallyRangeDeletions()
        // NEW ***
        location.reload()
      })
    }
  }

  return (
    <div className={css.container}>
      {!displayOnly &&
        <Tooltip arrow title='view statistics' placement='right' enterDelay={500}>
          <div onClick={handleViewStatistics}>
            <i className={`bi bi-${statsInView ? 'x-lg' : 'bar-chart'}`}></i>
          </div>
        </Tooltip>
      }
      {!displayOnly &&
        <Tooltip arrow title='save changes' placement='right' enterDelay={500}>
          <div onClick={handleSaveChanges}>
            <i className='bi bi-floppy'></i>
          </div>
        </Tooltip>
      }
      {!displayOnly &&
        <Tooltip arrow title='edit range details' placement='right' enterDelay={500}>
          <div onClick={handleEdit}>
            <i className='bi bi-pen'></i>
          </div>
        </Tooltip>
      }
      <Tooltip arrow title='duplicate range' placement='right' enterDelay={500}>
        <div onClick={handleDuplicate}>
          <i className='bi bi-copy'></i>
        </div>
      </Tooltip>
      {!displayOnly &&
        <Tooltip arrow title='delete range' placement='right' enterDelay={500}>
          <div onClick={handleDelete}>
            <i className='bi bi-trash3'></i>
          </div>
        </Tooltip>
      }
    </div>
  )
}