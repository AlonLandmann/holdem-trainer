import { useState } from 'react'
import History from '@/components/common/History'
import { randomRange } from '@/lib/sessions'
import { randomCombo } from '@/lib/cards'
import css from '@/scss/session/Session.module.scss'

export default function Session({ user, session, setSession }) {
  const [range, setRange] = useState(randomRange(user, session))
  const [combo, setCombo] = useState(range && randomCombo(range))

  return (
    <div>
      <History range={range} />
      <div>{JSON.stringify(combo)}</div>
    </div>
  )
}