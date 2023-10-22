import { v4 as uuid } from 'uuid'
import RangeCard from '@/components/ranges/RangeCard'
import css from '@/scss/ranges/Folder.module.scss'

export default function Folder({ user, folder }) {
  return (
    <div className={css.container}>
      <div className={css.topLine}>{folder.name}</div>
      <div className={css.ranges}>
        {folder.ranges.map(range => (
          <RangeCard
            key={uuid()}
            user={user}
            range={range}
          />
        ))}
      </div>
    </div>
  )
}