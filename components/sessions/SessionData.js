import { useState } from 'react'
import Combo from '@/components/sessions/Combo'
import css from '@/scss/sessions/SessionData.module.scss'

export default function SessionData({ session }) {
  const [inView, setInView] = useState(true)

  const handleToggle = () => {
    setInView(prev => !prev)
  }

  const correct = session.data.filter(dp => dp.correct).length
  const total = session.data.length
  const accuracy = Math.floor(100 * correct / total)

  return (
    <div className={css.container}>
      <div className={css.topLine} onClick={handleToggle}>
        <div className={css.chevron}>
          {inView
            ? <i className='bi bi-chevron-down'></i>
            : <i className='bi bi-chevron-right'></i>
          }
        </div>
        <div className={css.name}>
          {session.startedAt.slice(0, 19)}
        </div>
        <div className={css.stats}>
          {correct} · {total} · {accuracy}%
        </div>
      </div>
      {inView &&
        <div className={css.data}>
          {session.data.map((dataPoint, i) => (
            <div key={i} className={css.dataPoint}>
              <div className={css.dataPointName}>{dataPoint.range.name}</div>
              <div><Combo combo={dataPoint.combo} /></div>
              <div>
                {dataPoint.correct
                  ? <div style={{ color: '#ccc' }}><i className='bi bi-check2'></i></div>
                  : <div style={{ color: '#555' }}><i className='bi bi-x-lg'></i></div>
                }
              </div>
            </div>
          ))}
        </div>
      }
    </div>
  )
}