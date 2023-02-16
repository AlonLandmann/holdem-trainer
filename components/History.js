import uniqid from 'uniqid'
import css from '@/scss/History.module.scss'

export default function History({ spot }) {
  return (
    <div className={css.container}>
      <div>UTG</div>
      <div>HJ</div>
      <div>CO</div>
      <div>BTN</div>
      <div>SB</div>
      <div>BB</div>
      {spot.history.map(action =>
        <div key={uniqid()}>
          {action}
        </div>
      )}
      <div>-</div>
    </div>
  )
}