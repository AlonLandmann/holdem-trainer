import Tooltip from '@mui/material/Tooltip'
import css from '@/scss/ranges/UiButtons.module.scss'

export default function UiButtons({ range, saveChanges }) {
  return (
    <div className={css.container}>
      <Tooltip arrow title='save changes' placement='top' enterDelay={500}>
        <div onClick={saveChanges}>
          <i className='bi bi-floppy'></i>
        </div>
      </Tooltip>
      <Tooltip arrow title='edit range details' placement='top' enterDelay={500}>
        <div onClick={() => { location.replace(`/ranges/${range.id}`) }}>
          <i className='bi bi-pen'></i>
        </div>
      </Tooltip>
      <Tooltip arrow title='delete range' placement='top' enterDelay={500}>
        <div>
          <i className='bi bi-trash3'></i>
        </div>
      </Tooltip>
    </div>
  )
}