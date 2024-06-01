import { useState } from 'react'
import { yyyymmdd } from '@/lib/days'
import css from '@/scss/admin/UserPanel.module.scss'

export default function UserPanel({ user }) {
  const [detailsInView, setDetailsInView] = useState(false)


  let last14days = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

  user.sessions.forEach(session => {
    let dateOfSession = new Date(session.startedAt)
    let now = new Date();
    now.setHours(0, 0, 0, 0);

    let diffMillis = now - dateOfSession;
    let diffDays = Math.floor(diffMillis / (1000 * 60 * 60 * 24));

    if (diffDays <= 14 && diffDays >= 0) {
      last14days[14 - diffDays] += session.data.length
    }
  })

  return (
    <div className={css.container}>
      <div className={css.summary}>
        <div>{user.username}</div>
        <div>{user.email}</div>
        <div>{yyyymmdd(new Date(user.createdAt))}</div>
        <div>{user.admin ? 'A' : ''}</div>
        <div>{user.ranges.length}</div>
        <div>{user.sessions.length}</div>
        <div>{last14days.join(' ')}</div>
      </div>
      {detailsInView &&
        <div></div>
      }
    </div>
  )
}