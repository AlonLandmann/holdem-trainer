import { useState } from 'react'
import RangeCard from '@/components/ranges/RangeCard'
import css from '@/scss/ranges/Folder.module.scss'

export default function Folder({ user, folder, handleSelectionChange }) {
  const [inView, setInView] = useState(false)

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
              key={range.id}
              user={user}
              range={range}
              handleSelectionChange={handleSelectionChange}
            />
          ))}
        </div>
      }
    </div>
  )
}