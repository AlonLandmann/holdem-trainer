import css from '@/scss/ranges/UiButtons.module.scss'

export default function UiButtons() {
  return (
    <div className={css.container}>
      <div><i className='bi bi-floppy'></i></div>
      <div><i className='bi bi-pen'></i></div>
      <div><i className='bi bi-trash3'></i></div>
    </div>
  )
}