import { fontColors } from '@/lib/colors'
import css from '@/scss/ranges/Legend.module.scss'

export default function Legend({ range }) {
  // const percentage = (option) => {
  //   let optionCount = 0
  //   let outOfRangeCount = 0

  //   for (let r = 0; r < 13; r++) {
  //     for (let c = 0; c < 13; c++) {
  //       let nrOfCombos

  //       if (r === c) {
  //         nrOfCombos = 6
  //       } else if (r > c) {
  //         nrOfCombos = 12
  //       } else if (r < c) {
  //         nrOfCombos = 4
  //       }

  //       if (range.matrix[r][c] === option.index) {
  //         optionCount += nrOfCombos
  //       }
  //       if (range.matrix[r][c] === 0) {
  //         outOfRangeCount += nrOfCombos
  //       }
  //     }
  //   }

  //   return `${((Math.round(1000 * optionCount / (1326 - outOfRangeCount)) / 10) || 0).toFixed(1)} %`
  // }

  return (
    <div className={css.container}>
      {range.options.slice(1).reverse().map(option => (
        <div
          key={option.index}
          className={css.item}
          style={{
            color: fontColors[option.color],
            backgroundColor: option.color
          }}
        >
          <div>{option.description || '-'}</div>
          {/*<div>{percentage(option)}</div>*/}
        </div>
      ))}
    </div>
  )
}