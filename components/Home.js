import Image from 'next/image'
import { useState } from 'react'
import uniqid from 'uniqid'
import getRandomCards from '@/js/getRandomCards'
import getPreflopMatrixPosition from '@/js/getPreflopMatrixPosition'
import css from '@/scss/Home.module.scss'

export default function Home({ spot }) {
  const [cards, setCards] = useState(getRandomCards())

  function checkAnswerFunction(chosenColor) {
    return () => {
      function getCorrectSolution(color) {
        let solutionIndex = null

        spot.options.forEach((option, i) => {
          if (option.color === color) {
            solutionIndex = i
          }
        })

        return solutionIndex
      }
      if (getCorrectSolution(chosenColor) === spot.preflopMatrix[getPreflopMatrixPosition(cards)[0]][getPreflopMatrixPosition(cards)[1]]) {
        setCards(getRandomCards())
      }
    }
  }

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
        <div className={css.answerButtons}>
          {spot.options.map(option =>
            <div key={uniqid()}>
              <div onClick={checkAnswerFunction(option.color)}>{option.description}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}