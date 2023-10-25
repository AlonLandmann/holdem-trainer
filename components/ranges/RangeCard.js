import { useState } from 'react'
import { cloneDeep } from 'lodash'
import Matrix from '@/components/common/Matrix'
import Legend from '@/components/ranges/Legend'
import StatsMatrix from '@/components/ranges/StatsMatrix'
import StatsLegend from '@/components/ranges/StatsLegend'
import UiButtons from '@/components/ranges/UiButtons'
import { putUser } from '@/db/dbFetch'
import { newSession } from '@/lib/sessions'
import css from '@/scss/ranges/RangeCard.module.scss'
import Button from '../common/Button'

export default function RangeCard({ user, range, handleSelectionChange }) {
  const [formData, setFormData] = useState(cloneDeep(range))
  const [statsInView, setStatsInView] = useState(false)
  const [isSelected, setIsSelected] = useState(false)

  const handleSelectionToggle = () => {
    handleSelectionChange(range.id, isSelected)
    setIsSelected(prev => !prev)
  }

  const handleStartSession = () => {
    let session = newSession([range.id])

    localStorage.setItem('session', JSON.stringify(session))
    location.replace(`/sessions/${session.id}`)
  }

  const handleSaveChanges = () => {
    let updatedUser = cloneDeep(user)

    for (let i = 0; i < updatedUser.ranges.length; i += 1) {
      if (updatedUser.ranges[i].id === range.id) {
        updatedUser.ranges[i] = cloneDeep(formData)

        break;
      }
    }

    // TRACK re
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
        <div className={css.bottom}>
          {statsInView
            ? <StatsLegend />
            : <Legend range={formData} />
          }
          <Button
            theme='gray-white'
            icon={isSelected ? 'check-square' : 'square'}
            onClick={handleSelectionToggle}
          >
            select
          </Button>
          <Button
            theme='dark'
            icon='crosshair'
            onClick={handleStartSession}
          >
            train now
          </Button>
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