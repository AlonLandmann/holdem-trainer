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

  const colorMap = [
    ['#a6d66f', '#344520'], // green 1
    ['#358532', '#031a02'], // green 2
    ['#f5e48e', '#544a17'], // yellow 1
    ['#fcd303', '#70600d'], // yellow 2
    ['#F4D1C4', '#7a2d10'], // red 1
    ['#EEA78E', '#611d05'], // red 2
    ['#E65244', '#5c1009'], // red 3
    ['#7ccef7', '#7ccef7'], // blue 1
    ['#3c58fa', '#07114a'], // blue 2
    ['#ceb6fa', '#321b5c'], // purple 1
    ['#8047d6', '#230b47'], // purple 2
    ['#FAFAFA', '#4f4f4f'], // gray 1
    ['#A49A98', '#363534'], // gray 2
    ['#494240', '#FAFAFA'], // gray 3
  ]

  function getTextColor(backgroundColor) {
    let index = 0

    for (let i = 0; i < colorMap.length; i += 1) {
      if (colorMap[i][0] === backgroundColor) {
        index = i
      }
    }

    return colorMap[index][1]
  }

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
              <i className='bi bi-pen'></i>
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
              // style={{
              //   color: getTextColor(option.color),
              //   background: option.color
              // }}
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