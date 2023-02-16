import Image from 'next/image'
import css from '@/scss/HoleCards.module.scss'

export default function HoleCards({ cards }) {
  return (
    <div className={css.container}>
      <div>
        <Image
          src={`/deck/${cards[0]}.png`}
          alt='leftHoleCard'
          width={268}
          height={382}
        />
      </div>
      <div>
        <Image
          src={`/deck/${cards[1]}.png`}
          alt='rightHoleCard'
          width={268}
          height={382}
        />
      </div>
    </div>
  )
}