import { useState } from 'react'
import History from '@/components/common/History'
import Card from '@/components/session/Card'
import AnswerButtons from '@/components/session/AnswerButtons'
import { randomRange } from '@/lib/sessions'
import { randomCombo } from '@/lib/cards'
import css from '@/scss/session/Session.module.scss'

export default function Session({ user, session, setSession }) {
  const [range, setRange] = useState(randomRange(user, session))
  const [combo, setCombo] = useState(range && randomCombo(range))

  return (
    <div className={css.container}>
      <div className={css.id}>Session #{session.id.slice(0, 8)}</div>
      <div className={css.name}>{range.name}</div>
      <div className={css.history}><History range={range} /></div>
      <div className={css.combo}><Card card={combo[0]} /><Card card={combo[1]} /></div>
      <div className={css.options}><AnswerButtons range={range} /></div>
    </div>
  )
}