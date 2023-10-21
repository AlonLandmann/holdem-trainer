import { useState } from 'react'
import { cloneDeep } from 'lodash'
import Matrix from '@/components/common/Matrix'
import css from '@/scss/ranges/RangeCard.module.scss'

export default function RangeCard({ range }) {
  const [formData, setFormData] = useState(cloneDeep(range))

  return (
    <div>
      <div className={css.name}>{formData.name}</div>
      <Matrix range={formData} setFormData={setFormData} />
    </div>
  )
}