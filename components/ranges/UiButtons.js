import { useRouter } from 'next/router'
import { cloneDeep } from 'lodash'
import Tooltip from '@mui/material/Tooltip'
import { putUser } from '@/db/dbFetch'
import css from '@/scss/ranges/UiButtons.module.scss'

export default function UiButtons({ user, range, handleSaveChanges }) {
  const router = useRouter()

  const handleEdit = () => {
    router.push(`/ranges/${range.id}`)
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

      putUser(user.email, updatedUser, () => { location.reload() })
    }
  }

  return (
    <div className={css.container}>
      <Tooltip arrow title='save changes' placement='top' enterDelay={500}>
        <div onClick={handleSaveChanges}>
          <i className='bi bi-floppy'></i>
        </div>
      </Tooltip>
      <Tooltip arrow title='edit range details' placement='top' enterDelay={500}>
        <div onClick={handleEdit}>
          <i className='bi bi-pen'></i>
        </div>
      </Tooltip>
      <Tooltip arrow title='delete range' placement='top' enterDelay={500}>
        <div onClick={handleDelete}>
          <i className='bi bi-trash3'></i>
        </div>
      </Tooltip>
    </div>
  )
}