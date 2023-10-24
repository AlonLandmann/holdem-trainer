import { suitNames } from '@/lib/cards'
import css from '@/scss/sessions/Combo.module.scss'

export default function Combo({ combo }) {
  return (
    <div className={css.container}>
      <div className={css.card}>
        <div className={`${css.value} ${css[suitNames[combo[0][1]]]}`}>
          {combo[0][0]}
        </div>
        <div className={`${css.suit} ${css[suitNames[combo[0][1]]]}`}>
          <i className={`bi bi-suit-${suitNames[combo[0][1]]}-fill`}></i>
        </div>
      </div>
      <div className={css.card}>
        <div className={`${css.value} ${css[suitNames[combo[1][1]]]}`}>
          {combo[0][0]}
        </div>
        <div className={`${css.suit} ${css[suitNames[combo[1][1]]]}`}>
          <i className={`bi bi-suit-${suitNames[combo[1][1]]}-fill`}></i>
        </div>
      </div>
    </div>
  )
}