import css from '@/scss/ranges/Legend.module.scss'

export default function StatsLegend() {
  return (
    <div className={css.container}>
      <div
        style={{
          color: `rgba(0%, ${100 / 3}%, 10%, 1)`,
          background: `rgba(0%, 100%, 30%, 0.3)`
        }}
      >
        100% accuracy
      </div>
      <div>
        no data
      </div>
      <div
        style={{
          color: `rgba(${100 / 3}%, 0%, 10%, 1)`,
          background: `rgba(100%, 0%, 30%, 0.3)`
        }}
      >
        0% accuracy
      </div>
    </div>
  )
}