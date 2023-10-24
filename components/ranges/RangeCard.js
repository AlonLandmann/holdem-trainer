import { useState } from 'react'
import { cloneDeep } from 'lodash'
import Matrix from '@/components/common/Matrix'
import Legend from '@/components/ranges/Legend'
import StatsMatrix from '@/components/ranges/StatsMatrix'
import StatsLegend from '@/components/ranges/StatsLegend'
import UiButtons from '@/components/ranges/UiButtons'
import { putUser } from '@/db/dbFetch'
import css from '@/scss/ranges/RangeCard.module.scss'

export default function RangeCard({ user, range }) {
  const [formData, setFormData] = useState(cloneDeep(range))
  const [statsInView, setStatsInView] = useState(false)

  const handleSaveChanges = () => {
    let updatedUser = cloneDeep(user)

    for (let i = 0; i < updatedUser.ranges.length; i += 1) {
      if (updatedUser.ranges[i].id === range.id) {
        updatedUser.ranges[i] = cloneDeep(formData)

        break;
      }
    }

    putUser(user.email, updatedUser, () => { location.reload() })
  }

  return (
    <div className={css.container}>
      <div>
        <div className={css.name}>
          {formData.name}
        </div>
        <div className={css.matrix}>
          {statsInView
            ? <StatsMatrix user={user} range={formData} />
            : <Matrix range={formData} setRange={setFormData} />
          }
        </div>
        <div className={css.legend}>
          {statsInView
            ? <StatsLegend />
            : <Legend range={formData} />
          }
        </div>
      </div>
      <UiButtons
        user={user}
        range={formData}
        handleSaveChanges={handleSaveChanges}
        statsInView={statsInView}
        setStatsInView={setStatsInView}
      />
    </div>
  )
}