import css from '@/scss/admin/SmallChart.module.scss'

export default function SmallChart({ data, height }) {
  const max = Math.max(...data) || 1;

  function displayHeight(dataPoint) {
    return `${height * dataPoint / max}px`
  }

  return (
    <div className={css.container}>
      {data.map((dataPoint, i) => (
        <div key={i} className={css.bar} style={{ height: displayHeight(dataPoint)}}></div>
      ))}
    </div>
  )
}