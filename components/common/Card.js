import { suitNames } from '@/lib/cards'
import css from '@/scss/common/Card.module.scss'

export default function Card({ card }) {
  const suit = suitNames[card[1]]

  return (
    <div className={`${css.container} ${css[suit]}`}>
      {card[0]}
      <i className={`bi bi-suit-${suit}-fill ${css.topLeft}`}></i>
      <i className={`bi bi-suit-${suit}-fill ${css.bottomRight}`}></i>
    </div>
  )
}