import css from '@/scss/session/SavingScreen.module.scss'

export default function SavingScreen() {
  return (
    <div className={css.container}>
      <div className={css.heading}>Session complete</div>
      <div className={css.explanation}>Saving results ...</div>
      <div className={css.loader}></div>
    </div>
  )
}