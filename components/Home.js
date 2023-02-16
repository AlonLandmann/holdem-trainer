import Image from 'next/image'
import css from '../scss/Home.module.scss'

export default function Home() {
  return (
    <div className={css.container}>
      <div className={css.main}>
        <div className={css.title}>RFI</div>
        <div className={css.position}>CO</div>
        <div className={css.history}>
          <div>BB</div>
          <div>SB</div>
          <div>BTN</div>
          <div>CO</div>
          <div>HJ</div>
          <div>UTG</div>
          <div></div>
          <div></div>
          <div>-</div>
          <div>F</div>
          <div>F</div>
          <div>F</div>
        </div>
        <div className={css.holeCards}>
          <div>
            <Image
              src='/deck/Ad.png'
              alt='Ad'
              width={268}
              height={382}
            />
          </div>
          <div>
            <Image
              src='/deck/3d.png'
              alt='3d'
              width={268}
              height={382}
            />
          </div>
        </div>
        <div className={css.answerButtons}>
          <div>fold</div>
          <div>50% fold | 50% 2.5bb</div>
          <div>2.5 bb</div>
        </div>
      </div>
    </div>
  )
}