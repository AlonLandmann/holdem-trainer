import css from '@/scss/common/Logo.module.scss'

export default function Logo() {
  return (
    <div className={css.container}>
      <div><i className='bi bi-suit-club-fill'></i></div>
      <div className={css.logoText}>Holdem Trainer</div>
    </div>
  )
}