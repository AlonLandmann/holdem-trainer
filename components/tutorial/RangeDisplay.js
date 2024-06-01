import { useState } from 'react'
import { cloneDeep } from 'lodash'
import Matrix from '@/components/common/Matrix'
import Legend from '@/components/ranges/Legend'
import StatsMatrix from '@/components/ranges/StatsMatrix'
import StatsLegend from '@/components/ranges/StatsLegend'
import UiButtons from '@/components/ranges/UiButtons'
import css from '@/scss/tutorial/RangeDisplay.module.scss'

export default function RangeDisplay({ user, range }) {
  const [formData, setFormData] = useState(cloneDeep(range))
  const [statsInView, setStatsInView] = useState(false)

  return (
    <div className={css.container}>
      <div>
        <div className={css.name}>
          {formData.name}
        </div>
        <div className={css.matrix}>
          {statsInView
            ? <StatsMatrix user={user} range={formData} />
            : <Matrix range={formData} setRange={setFormData} displayOnly={true} />
          }
        </div>
        <div className={css.bottom}>
          <div className={css.legend}>
            {statsInView
              ? <StatsLegend />
              : <Legend range={formData} />
            }
          </div>
        </div>
      </div>
      <UiButtons
        user={user}
        range={formData}
        statsInView={statsInView}
        setStatsInView={setStatsInView}
        displayOnly={true}
      />
    </div>
  )
}