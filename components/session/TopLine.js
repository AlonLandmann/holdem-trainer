import { Tooltip } from '@mui/material'
import css from '@/scss/session/TopLine.module.scss'

export default function TopLine({ session, stats, setIsEnding }) {
  const handleEndSession = () => {
    setIsEnding(true)
  }

  return (
    <div className={css.container}>
      <div>Session #{session.id.slice(0, 8)} · {stats.length + 1}</div>
      <Tooltip arrow title='end session' placement='top' enterDelay={200}>
        <div className={css.finish} onClick={handleEndSession}>
          <i className='bi bi-arrow-return-left'></i>
        </div>
      </Tooltip>
    </div>
  )
}