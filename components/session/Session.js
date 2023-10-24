import { useEffect, useState } from 'react'
import History from '@/components/common/History'
import TopLine from '@/components/session/TopLine'
import Card from '@/components/session/Card'
import AnswerButtons from '@/components/session/AnswerButtons'
import { randomRange, randomCombo } from '@/lib/cards'
import css from '@/scss/session/Session.module.scss'

export default function Session({ user, session, setSession }) {
  const newRange = randomRange(user, session)
  const newCombo = randomCombo(newRange)

  const [range, setRange] = useState(newRange)
  const [combo, setCombo] = useState(newCombo)
  const [stats, setStats] = useState([])

  useEffect(() => {
    const newRange = randomRange(user, session)
    const newCombo = randomCombo(newRange)

    setRange(newRange)
    setCombo(newCombo)
  }, [stats])

  return (
    <div className={css.container}>
      <div className={css.topLine}><TopLine session={session} stats={stats} /></div>
      <div className={css.name}>{range.name}</div>
      <div className={css.history}><History range={range} /></div>
      <div className={css.combo}><Card card={combo[0]} /><Card card={combo[1]} /></div>
      <div className={css.options}>
        <AnswerButtons
          range={range}
          combo={combo}
          setStats={setStats}
        />
      </div>
    </div>
  )
}