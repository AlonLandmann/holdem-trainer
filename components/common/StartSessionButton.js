import { newSession } from '@/lib/sessions'
import css from '@/scss/common/StartSessionButton.module.scss'

export default function StartSessionButton({ selected }) {
  const handleStartSession = (event) => {
    event.stopPropagation()
    
    let session = newSession(selected)

    localStorage.setItem('session', JSON.stringify(session))
    location.replace(`/sessions/${session.id}`)
  }

  if (selected.length === 0) {
    return
  }

  return (
    <div className={css.container} onClick={handleStartSession}>
      <i className='bi bi-crosshair'></i>
      <div>train selection</div>
    </div>
  )
}