import { v4 as uuid } from 'uuid'
import RangeCard from '@/components/ranges/RangeCard'
import css from '@/scss/ranges/Gallery.module.scss'

export default function Gallery({ user }) {
  return (
    <div className={css.container}>
      {user.ranges.map(range => (
        <RangeCard
          key={uuid()}
          user={user}
          range={range}
        />
      ))}
    </div>
  )
}