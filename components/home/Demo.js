import { useEffect, useState } from 'react'
import AnswerButtons from '@/components/common/AnswerButtons'
import Matrix from '@/components/common/Matrix'
import Options from '@/components/common/Options'
import Card from '@/components/common/Card'
import { sampleRange } from '@/lib/ranges'
import { randomCombo } from '@/lib/cards'
import css from '@/scss/home/Demo.module.scss'

export default function Demo() {
  const [range, setRange] = useState(sampleRange)
  const [combo, setCombo] = useState([['A', 's'], ['K', 'h']])
  const [stats, setStats] = useState([])

  useEffect(() => { if (stats.length) setCombo(randomCombo(range)) }, [stats])

  return (
    <div id='demo' className={css.container}>
      <div className={css.column}>
        <h1>1. Define your range</h1>
        <p>
          The matrix below contains all possible starting hands in Texas Hold'em.
          The combinations on the top-right represent suited hands, meaning both cards are of the same suit.
          The combinations on the bottom-left represent all the off-suit hands.
          Click on a cell to alter the desired correct answer for the corresponding starting hand by cycling through the options determined below.
        </p>
        <div className={css.matrix}>
          <Matrix range={range} setRange={setRange} />
        </div>
        <p>
          The following legend is customizable. Add new possible options as you see fit.
          Click on the color selectors to change the colors of the different options,
          and change the name of the options as they will appear on the answer buttons.
          "not in range" is a default option for every range, which can be used to omit certain hands from training.
        </p>
        <Options range={range} setRange={setRange} />
      </div>
      <div className={css.column}>
        <h1>2. Start training</h1>
        <p>
          The cards below have been dealt to you. Which action do you take?
          The solution is given by the matrix set in step 1.
          Click on the appropriate button or press the corresponding number key on your keyboard to submit your answer.
        </p>
        <div className={css.combo}>
          <Card card={combo[0]} />
          <Card card={combo[1]} />
        </div>
        <div>
          <AnswerButtons
            range={range}
            combo={combo}
            stats={stats}
            setStats={setStats}
          />
        </div>
      </div>
    </div>
  )
}