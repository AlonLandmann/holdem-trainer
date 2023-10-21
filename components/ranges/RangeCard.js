import { useState } from 'react'
import { cloneDeep } from 'lodash'
import { v4 as uuid } from 'uuid'
import Matrix from '@/components/common/Matrix'
import { fontColors } from '@/lib/colors'
import css from '@/scss/ranges/RangeCard.module.scss'

export default function RangeCard({ range }) {
  const [formData, setFormData] = useState(cloneDeep(range))

  return (
    <div>
      <div className={css.name}>
        {formData.name}
      </div>
      <div className={css.matrix}>
        <Matrix range={formData} setFormData={setFormData} />
      </div>
      <div className={css.legend}>
        {range.options.slice(1).reverse().map(option => (
          <div
            key={uuid()}
            style={{
              border: `1px solid ${fontColors[option.color]}33`,
              color: fontColors[option.color],
              backgroundColor: option.color
            }}
          >
            {option.description}
          </div>
        ))}
      </div>
    </div>
  )
}