import Matrix from '@/components/common/Matrix'
import css from '@/scss/ranges/Gallery.module.scss'

export default function Gallery({ user }) {
  return (
    <div className={css.container}>
      <Matrix range={user.ranges[0]} />
    </div>
  )
}