import { useEffect, useState } from 'react'
import History from '@/components/common/History'
import Card from '@/components/session/Card'
import AnswerButtons from '@/components/session/AnswerButtons'
import { randomRange } from '@/lib/sessions'
import { randomCombo } from '@/lib/cards'
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
      <div className={css.id}>Session #{session.id.slice(0, 8)}</div>
      <div className={css.name}>{range.name}</div>
      <div className={css.history}><History range={range} /></div>
      <div className={css.combo}><Card card={combo[0]} /><Card card={combo[1]} /></div>
      <div className={css.options}>
        <AnswerButtons
          range={range}
          combo={combo}
          stats={stats}
          setStats={setStats}
        />
      </div>
      <div>{stats.length}</div>
    </div>
  )
}