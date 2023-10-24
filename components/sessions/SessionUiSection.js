import css from '@/scss/sessions/SessionUiSection.module.scss'

export default function SessionUiSection() {
  const handleStartNew = () => {
    location.replace('/ranges')
  }

  return (
    <div className={css.container}>
      <div className={css.start} onClick={handleStartNew}>
        <i className='bi bi-plus-lg'></i>
        <div>start new session</div>
      </div>
    </div>
  )
}