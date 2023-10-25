import css from '@/scss/admin/Admin.module.scss'

export default function Admin({ days }) {
  let ttSU = 0
  let mxAU = 0
  let ttCT = 0
  let ttRM = 0
  let raSU = 0
  let raAU = 0
  let raCT = 0
  let raRM = 0

  for (let i = 0; i < days.length; i++) {
    const day = days[i]

    ttSU += day.signUps
    mxAU = Math.max(day.activeUsers.length, mxAU)
    ttCT += day.combosTrained
    ttRM += day.rangeAdditions
    ttRM += day.rangeDuplications
    ttRM += day.rangeEdits
    ttRM += day.rangeDeletions

    if (days.length - i <= 5) {
      raSU += day.signUps
      raAU += day.activeUsers.length
      raCT += day.combosTrained
      raRM += day.rangeAdditions
      raRM += day.rangeDuplications
      raRM += day.rangeEdits
      raRM += day.rangeDeletions
    }
  }

  const divs = []

  days.reverse()

  const rest = days.slice(1)

  for (let i = 0; i < rest.length; i++) {
    const day = rest[i]

    divs.push(
      <div key={`${i}a`}>
        {
          day.date.slice(6) + '-' +
          day.date.slice(4, 6) + '-' +
          day.date.slice(0, 4)
        }
      </div>
    )
    divs.push(<div key={`${i}b`}>{day.signUps}</div>)
    divs.push(<div key={`${i}c`}>{day.activeUsers.length}</div>)
    divs.push(<div key={`${i}d`}>{day.combosTrained}</div>)
    divs.push(
      <div key={`${i}e`}>
        {
          day.rangeAdditions +
          day.rangeDuplications +
          day.rangeEdits +
          day.rangeDeletions
        }
      </div>
    )
  }

  return (
    <div className={css.container}>
      <div className={css.headings}></div>
      <div className={css.headings}>signups</div>
      <div className={css.headings}>active users</div>
      <div className={css.headings}>combos t.</div>
      <div className={css.headings}>range m.</div>

      <div className={css.totals}>total</div>
      <div className={css.totals}>{ttSU}</div>
      <div className={css.totals}>-</div>
      <div className={css.totals}>{ttCT}</div>
      <div className={css.totals}>{ttRM}</div>

      <div className={css.ravgs}>run. avg.</div>
      <div className={css.ravgs}>{Math.round(100 * (raSU / Math.min(5, days.length))) / 100}</div>
      <div className={css.ravgs}>{Math.round(100 * (raAU / Math.min(5, days.length))) / 100}</div>
      <div className={css.ravgs}>{Math.round(100 * (raCT / Math.min(5, days.length))) / 100}</div>
      <div className={css.ravgs}>{Math.round(100 * (raRM / Math.min(5, days.length))) / 100}</div>

      <div className={css.today}>today</div>
      <div className={css.today}>{days[0].signUps}</div>
      <div className={css.today}>{days[0].activeUsers.length}</div>
      <div className={css.today}>{days[0].combosTrained}</div>
      <div className={css.today}>
        {
          days[0].rangeAdditions +
          days[0].rangeDuplications +
          days[0].rangeEdits +
          days[0].rangeEdits
        }
      </div>

      {divs}


    </div>
  )
}