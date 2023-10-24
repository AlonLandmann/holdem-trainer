import { useEffect, useState } from 'react'
import { cloneDeep } from 'lodash'
import History from '@/components/common/History'
import SavingScreen from '@/components/session/SavingScreen'
import TopLine from '@/components/session/TopLine'
import Card from '@/components/session/Card'
import AnswerButtons from '@/components/session/AnswerButtons'
import { putUser } from '@/db/dbFetch'
import { randomRange, randomCombo } from '@/lib/cards'
import css from '@/scss/session/Session.module.scss'

export default function Session({ user, session }) {
  const newRange = randomRange(user, session)
  const newCombo = randomCombo(newRange)

  const [range, setRange] = useState(newRange)
  const [combo, setCombo] = useState(newCombo)
  const [stats, setStats] = useState([])
  const [isEnding, setIsEnding] = useState(false)

  useEffect(() => {
    if (stats.length < session.limit) {
      const newRange = randomRange(user, session)
      const newCombo = randomCombo(newRange)

      setRange(newRange)
      setCombo(newCombo)
    } else {
      setIsEnding(true)
    }
  }, [stats])

  useEffect(() => {
    if (isEnding) {
      if (!stats.length) {
        location.replace('/sessions')
      } else {
        let updatedUser = cloneDeep(user)

        updatedUser.sessions.push({ ...session, data: stats })
        putUser(user.email, updatedUser, () => { location.replace('/sessions') })
      }
    }
  }, [isEnding])

  if (isEnding) {
    return <SavingScreen />
  }

  return (
    <div className={css.container}>
      <div className={css.topLine}>
        <TopLine
          session={session}
          stats={stats}
          setIsEnding={setIsEnding}
        />
      </div>
      <div className={css.name}>{range.name}</div>
      <div className={css.history}><History range={range} /></div>
      <div className={css.combo}><Card card={combo[0]} /><Card card={combo[1]} /></div>
      <div className={css.options}>
        <AnswerButtons
          session={session}
          range={range}
          combo={combo}
          stats={stats}
          setStats={setStats}
          setIsEnding={setIsEnding}
        />
      </div>
    </div>
  )

}