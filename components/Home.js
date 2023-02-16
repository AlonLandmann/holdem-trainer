import { useEffect, useState } from 'react'
import uniqid from 'uniqid'
import History from './History'
import HoleCards from './HoleCards'
import getRandomCards from '@/js/getRandomCards'
import getSolution from '@/js/getSolution'
import css from '@/scss/Home.module.scss'

export default function Home({ spot }) {
  const [cards, setCards] = useState(getRandomCards())

  useEffect(() => {
    function eventFunction(event) {
      spot.options.forEach(option => {
        if (event.key === option.hotkey) {
          checkAnswerFunction(option.id)()
        }
      })
    }

    document.addEventListener('keyup', eventFunction)

    return () => document.removeEventListener('keyup', eventFunction)
  }, [cards])

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
              <div className={css.hotkey}>{option.hotkey.toUpperCase()}</div>
              <div>{option.description}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}