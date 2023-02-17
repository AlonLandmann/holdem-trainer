import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import uniqid from 'uniqid'
import History from './History'
import HoleCards from './HoleCards'
import getRandomCards from '@/js/getRandomCards'
import getSolution from '@/js/getSolution'
import css from '@/scss/Home.module.scss'

export default function Home({ spot, menu, holeCards }) {
  const [cards, setCards] = useState(holeCards)
  const [log, setLog] = useState([])
  const router = useRouter()

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
        setLog(prev => [ <div key={uniqid()} className={css.correct}>correct</div>, ...prev ].slice(0, 30))
        setCards(getRandomCards())
      } else {
        setLog(prev => [ <div key={uniqid()} className={css.false}>false {cards[0]}{cards[1]}</div>, ...prev ].slice(0, 30))
      }
    }
  }
  function navToSpotFunction(itemId) {
    return () => {
      router.push(`/${itemId}`)
    }
  }
  function navToEditFunction(itemId) {
    return () => {
      router.push(`/${itemId}/edit`)
    }
  }

  return (
    <div className={css.container}>
      <div className={css.menu}>
        {menu.map(item => (
          <div className={css.item} key={uniqid()}>
            <div className={css.itemTitle} onClick={navToSpotFunction(item.id)}>
              {item.title}
            </div>
            <div className={css.itemEdit} onClick={navToEditFunction(item.id)}>
              <i className='bi bi-pencil-square'></i>
            </div>
          </div>
        ))}
      </div>
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
      <div className={css.log}>
        {log}
      </div>
    </div>
  )
}