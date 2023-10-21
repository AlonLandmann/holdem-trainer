import Matrix from '@/components/common/Matrix'
import css from '@/scss/range-editor/RangeEditor.module.scss'

export default function RangeEditor({ user, range, setRange }) {
  return (
    <div className={css.container}>
      <Matrix
        range={range}
        setRange={setRange}
      />
    </div>
  )
}