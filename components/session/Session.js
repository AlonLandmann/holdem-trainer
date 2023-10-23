import { useState } from 'react'
import History from '@/components/common/History'
import { randomRange } from '@/lib/sessions'
import { randomCombo } from '@/lib/cards'
import css from '@/scss/session/Session.module.scss'

export default function Session({ user, session, setSession }) {
  const [range, setRange] = useState(randomRange(user, session))
  const [combo, setCombo] = useState(range && randomCombo(range))
  const [tries, setTries] = useState([])

  return (
    <div className={css.container}>
      <div className={css.id}>Session #{session.id.slice(0, 8)}</div>
      <div className={css.name}>{range.name}</div>
      <div className={css.history}><History range={range} /></div>

      
      <div>{JSON.stringify(combo)}</div>
      {range.options.slice(1).toReversed().map(option => (
        <div key={option.index}>
          {option.description}
        </div>
      ))}
      <div>correct {tries.filter(t => t.correct).length}</div>
      <div>trained {tries.length}</div>
      <div>out of {session.length}</div>
      <div>accuracy {tries.length ? Math.floor(100 * tries.filter(t => t.correct).length/tries.length) : '-'}</div>
    </div>
  )
}