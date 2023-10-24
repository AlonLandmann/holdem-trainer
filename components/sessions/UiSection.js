import css from '@/scss/ranges/UiSection.module.scss'

export default function UiSection() {
  const handleStartNew = () => {
    location.replace('/ranges')
  }

  return (
    <div className={css.container}>
      <div className={css.add} onClick={handleStartNew}>
        <i className='bi bi-plus-lg'></i>
        <div>start new session</div>
      </div>
    </div>
  )
}