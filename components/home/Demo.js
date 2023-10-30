import { useEffect, useState } from 'react'
import Card from '@/components/common/Card'
import AnswerButtons from '@/components/common/AnswerButtons'
import History from '@/components/common/History'
import Matrix from '@/components/common/Matrix'
import StatsMatrixDemo from '@/components/home/StatsMatrixDemo'
import Legend from '@/components/ranges/Legend'
import StatsLegend from '@/components/ranges/StatsLegend'
import { sampleRange } from '@/lib/ranges'
import { randomCombo } from '@/lib/cards'
import css from '@/scss/home/Demo.module.scss'

export default function Demo() {
  const [range, setRange] = useState(sampleRange)
  const [combo, setCombo] = useState([['A', 's'], ['K', 'h']])
  const [stats, setStats] = useState([])

  useEffect(() => { if (stats.length) setCombo(randomCombo(range)) }, [stats])

  return (
    <div id='demo'>
      <div className={css.section}>
        <div className={css.step}>
          <div className={css.stepContent}>
            <h1>1. The Scenario</h1>
            <p>
              You're playing a 6-player game of Texas Hold'em.{' '}
              You're sitting in the <strong>big blind</strong> and have posted <strong>$2</strong> to play the hand.{' '}
            </p>
            <p>
              The first three players to act have all folded, but the player with the dealer button has made a raise to <strong>$6</strong>.{' '}
              The small blind folds, and now the action is on you.
            </p>
            <p>
              You have the cards shown. What do you do? Keep scrolling to find out.
            </p>
          </div>
        </div>
        <div className={`${css.demoField} ${css.demo1}`}>
          <div className={css.combo}>
            <Card card={combo[0]} />
            <Card card={combo[1]} />
          </div>
          <div>
            <History range={range} />
          </div>
        </div>
      </div>
      <div className={css.reverseSection}>
        <div className={`${css.demoField} ${css.demo2}`}>
          <div className={css.rangeCard}>
            <div className={css.name}>
              {range.name}
            </div>
            <Matrix range={range} setRange={setRange} />
            <div className={css.legend}>
              <Legend range={range} />
            </div>
          </div>
        </div>
        <div className={css.step}>
          <div className={css.stepContent}>
            <h1>2. Your Strategy</h1>
            <p>
              The given table represents your strategy in this situation. This is called a <strong>range</strong> in Poker.{' '}
              It describes what action you plan to take depending on which cards you have in your hand.{' '}
            </p>
            <p>
              The cells on the top-right of the table represent suited hands - hands where both cards are of the same suit.{' '}
              The cells on the bottom left are the offsuit hands - hands for which the two cards have different suits.{' '}
            </p>
            <p>
              You can <strong>click</strong> on the individual cells to alter your strategy for the respective hands. {' '}
            </p>
          </div>
        </div>
      </div>
      <div className={css.section}>
        <div className={css.step}>
          <div className={css.stepContent}>
            <h1>3. Start training</h1>
            <p>
              Click the button corresponding to the action you have determined to take for this hand.{' '}
              The trainer will provide you with feedback on whether your answer was correct.
            </p>
            <p>
              Hold'em Trainer allows you to quickly and efficiently test the strategies you define.{' '}
              This is more efficient than practicing while playing, as it lets you quickly test yourself in some of the more rare scenarios you might face.{' '}
            </p>
          </div>
        </div>
        <div className={`${css.demoField} ${css.demo1}`}>
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
      <div className={css.reverseSection}>
        <div className={`${css.demoField} ${css.demo2}`}>
          <div className={css.rangeCard}>
            <div className={css.name}>
              {range.name}
            </div>
            <StatsMatrixDemo range={range} stats={stats} />
            <div className={css.legend}>
              <StatsLegend />
            </div>
          </div>
        </div>
        <div className={css.step}>
          <div className={css.stepContent}>
            <h1>4. Detect your leaks</h1>
            <p>
              With the feedback table you can quickly determine which hands give you trouble in this particular scenario.
            </p>

            <p>
              Poker is a complex game with countless difficult decisions.{' '}
              Whoever is not afraid to make mistakes and to learn from them is destined to rise in the stakes.
            </p>

            <p>
              Keep practicing with the interface above to see how your analytics change.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}