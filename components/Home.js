import { useState } from 'react'
import uniqid from 'uniqid'
import History from './History'
import HoleCards from './HoleCards'
import getRandomCards from '@/js/getRandomCards'
import getSolution from '@/js/getSolution'
import css from '@/scss/Home.module.scss'

export default function Home({ spot }) {
  const [cards, setCards] = useState(getRandomCards())

  function checkAnswerFunction(chosenId) {
    return () => {
      if (getSolution(cards, spot) === chosenId) {
        setCards(getRandomCards())
      }
    }
  }

  return (
    <div className={css.container}>
      <div className={css.main}>
        <div className={css.title}>{spot.title}</div>
        <div className={css.position}>{spot.position.toUpperCase()}</div>
        <History spot={spot} />
        <HoleCards cards={cards} />
        <div className={css.answerButtons}>
          {spot.options.map(option =>
            <div
              key={uniqid()}
              onClick={checkAnswerFunction(option.id)}
            >
              {option.description}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}