import { useEffect } from 'react'
import { cloneDeep } from 'lodash'
import Button from '@/components/common/Button'
import History from '@/components/common/History'
import Matrix from '@/components/common/Matrix'
import Label from '@/components/range/Label'
import Options from '@/components/common/Options'
import { putUser } from '@/db/dbFetch'
import { tallyRangeEdits } from '@/db/dbTrack'
import { getPositions } from '@/lib/positions'
import css from '@/scss/range/RangeEditor.module.scss'

export default function RangeEditor({ user, range, setRange }) {
  useEffect(() => {
    const { nrPlayers, position } = range

    if (getPositions(nrPlayers).indexOf(position) === -1) {
      setRange(prev => ({
        ...prev,
        position: 'SB'
      }))
    }
  }, [range.nrPlayers])

  const handleChange = (event) => {
    const { name, value } = event.target

    setRange(prev => ({
      ...prev,
      [name]: name === 'nrPlayers' ? Number(value) : value
    }))
  }

  const handleSubmit = () => {
    let updatedUser = cloneDeep(user)

    for (let i = 0; i < updatedUser.ranges.length; i += 1) {
      if (updatedUser.ranges[i].id === range.id) {
        updatedUser.ranges[i] = cloneDeep(range)

        break;
      }
    }

    putUser(user.email, updatedUser, async () => {
      // NEW ***
      await tallyRangeEdits()
      // NEW ***
      location.replace('/ranges')
    })
  }

  return (
    <div className={css.container}>
      <div className={css.title}>{range.name}</div>
      <div className={css.saveButton}>
        <Button large theme='gray-white' icon='floppy' onClick={handleSubmit}>
          save changes
        </Button>
      </div>
      <form className={css.form}>
        <div className={css.metaData}>
          <Label
            htmlFor='name'
            text='Name'
          />
          <input
            id='name'
            name='name'
            type='text'
            value={range.name}
            onChange={handleChange}
          />
          <Label
            htmlFor='folder'
            text='Collection'
          />
          <input
            id='folder'
            name='folder'
            type='text'
            value={range.folder}
            onChange={handleChange}
          />
          <Label
            htmlFor='nrPlayers'
            text='Number of  players'
          />
          <select
            id='nrPlayers'
            name='nrPlayers'
            value={range.nrPlayers}
            onChange={handleChange}
          >
            <option value='6'>6 max</option>
            <option value='9'>9 full-ring</option>
          </select>
          <Label
            htmlFor='position'
            text='Your position'
            tooltip='Your position in the hand. SB and BB stand for the small blind and big blind respectively. UTG stands for Under The Gun and refers to the first player to act. UTG sits after the big blind. For full ring UTG1 is this player and UTG2 is the next to act. Full ring also features MP1 and MP2 which are the next two players sitting in middle position. HJ stands for the Hijack which sits two seats before the dealer, and CO is the cutoff, who sits right before the dealer. BTN stands for the player with the dealer button.'
          />
          <select
            id='position'
            name='position'
            value={range.position}
            onChange={handleChange}
          >
            {getPositions(range.nrPlayers).map(position => (
              <option key={`${range.nrPlayers}${position}`} value={position}>{position}</option>
            ))}
          </select>
          <Label
            htmlFor='history'
            text='History'
            tooltip='Enter, separated by commas and spaces (, ) the history of player actions that have led to this spot. All actions except folds can be named whatever you like, but folds must be indicated by an upper-case F. Note, that opponents who have folded can no longer take any actions.'
          />
          <input
            id='history'
            name='history'
            type='text'
            value={range.history}
            onChange={handleChange}
          />
          <div className={css.history}>
            <History
              range={range}
            />
          </div>
        </div>
        <div>
          <Label
            text='Strategy'
            tooltip={'This matrix contains all possible starting hands in Texas Hold\'em. The combinations on the top-right represent suited hands, meaning both cards are of the same suit. The combinations on the bottom-left represent all the off-suit hands. Click on a cell to alter the desired answer for the corresponding starting hand by cycling through the options determined above. Since the matrix represents the solution to what you are meant to train, it will not be displayed during training.'}
          />
          <Matrix
            range={range}
            setRange={setRange}
            maxWidth={440}
          />
        </div>
        <div>
          <Label
            text='Options'
            tooltip='This is the legend for the solution matrix below. Decide which options are available for your actions at this spot. Every option provided here can be given as a solution for specific hands in the matrix below. You can click on the color selectors to change the colors of the different options. The "not in range" option is always given.'
          />
          <Options
            range={range}
            setRange={setRange}
          />
        </div>
      </form>
    </div>
  )
}