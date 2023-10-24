import { Tooltip } from '@mui/material'
import css from '@/scss/session/TopLine.module.scss'

export default function TopLine({ session, stats }) {
  return (
    <div className={css.container}>
      <div>Session #{session.id.slice(0, 8)} · {stats.length + 1}</div>
      <Tooltip arrow title='finish session' placement='top' enterDelay={200}>
        <div className={css.finish}>
          <i className='bi bi-arrow-return-left'></i>
        </div>
      </Tooltip>
    </div>
  )
}