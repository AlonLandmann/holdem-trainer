import Matrix from '@/components/common/Matrix'
import css from '@/scss/ranges/Gallery.module.scss'

export default function Gallery({ user }) {
  return (
    <div className={css.container}>
      {user.ranges.map(range => (
        <Matrix range={range} />
      ))}
    </div>
  )
}