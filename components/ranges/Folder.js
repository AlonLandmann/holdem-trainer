import { useState } from 'react'
import { v4 as uuid } from 'uuid'
import RangeCard from '@/components/ranges/RangeCard'
import css from '@/scss/ranges/Folder.module.scss'

export default function Folder({ user, folder }) {
  const [inView, setInView] = useState(true)

  const handleToggle = () => {
    setInView(prev => !prev)
  }

  return (
    <div className={css.container}>
      <div className={css.topLine} onClick={handleToggle}>
        <div className={css.chevron}>
          {inView
            ? <i className='bi bi-chevron-down'></i>
            : <i className='bi bi-chevron-right'></i>
          }
        </div>
        <div className={css.name}>{folder.name}</div>
      </div>
      {inView &&
        <div className={css.ranges}>
          {folder.ranges.map(range => (
            <RangeCard
              key={uuid()}
              user={user}
              range={range}
            />
          ))}
        </div>
      }
    </div>
  )
}