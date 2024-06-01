import { useState } from 'react'
import css from '@/scss/admin/UserPanel.module.scss'
import SmallChart from './SmallChart'
import { totalHands, signUpDate } from '@/lib/analytics'

export default function UserPanel({ user }) {
  const [detailsInView, setDetailsInView] = useState(false)

  let last14days = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

  user.sessions.forEach(session => {
    let dateOfSession = new Date(session.startedAt)
    let now = new Date();
    now.setHours(0, 0, 0, 0);

    let diffMillis = now - dateOfSession;
    let diffDays = Math.floor(diffMillis / (1000 * 60 * 60 * 24));

    if (diffDays < 14 && diffDays >= 0) {
      last14days[13 - diffDays] += session.data.length
    }
  })

  return (
    <div className={css.container}>
      <div className={css.summary}>
        <div className={css.text}>{user.username}</div>
        <div className={css.text}>{user.email}</div>
        <div className={css.text}>{user.admin ? 'A' : ''}</div>
        <div className={css.number}>{signUpDate(new Date(user.createdAt))}</div>
        <div className={css.number}>{user.ranges.length}</div>
        <div className={css.number}>{user.sessions.length}</div>
        <div className={css.number}>{totalHands(user)}</div>
        <div><SmallChart data={last14days} height={20}/></div>
      </div>
      {detailsInView &&
        <div></div>
      }
    </div>
  )
}