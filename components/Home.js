import Image from 'next/image'
import uniqid from 'uniqid'
import css from '@/scss/Home.module.scss'

export default function Home({ spot }) {
  console.log(spot)

  return (
    <div className={css.container}>
      <div className={css.main}>
        <div className={css.title}>{spot.title}</div>
        <div className={css.position}>{spot.position.toUpperCase()}</div>
        <div className={css.history}>
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
        <div className={css.holeCards}>
          <div>
            <Image
              src='/deck/Ad.png'
              alt='Ad'
              width={268}
              height={382}
              priority
            />
          </div>
          <div>
            <Image
              src='/deck/3d.png'
              alt='3d'
              width={268}
              height={382}
              priority
            />
          </div>
        </div>
        <div className={css.answerButtons}>
          {spot.options.map(option =>
            <div key={uniqid()}>
              <div>{option.description}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}