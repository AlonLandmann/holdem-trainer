import { v4 as uuid } from 'uuid'
import Matrix from '@/components/common/Matrix'
import Options from '@/components/range-editor/Options'
import { getPositions } from '@/lib/positions'
import css from '@/scss/range-editor/RangeEditor.module.scss'

export default function RangeEditor({ user, range, setRange }) {
  const handleChange = (event) => {
    const { name, value } = event.target

    setRange(prevFormData => ({
      ...prevFormData,
      [name]: name === 'nrPlayers' ? Number(value) : value
    }))
  }

  return (
    <form className={css.container}>
      <input
        id='name'
        name='name'
        type='text'
        value={range.name}
        onChange={handleChange}
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
      <select
        id='position'
        name='position'
        value={range.position}
        onChange={handleChange}
      >
        {getPositions(range.nrPlayers).map(position => (
          <option key={uuid()} value={position}>{position}</option>
        ))}
      </select>
      <input
        id='history'
        name='history'
        type='text'
        value={range.history}
        onChange={handleChange}
      />
      <Matrix
        range={range}
        setRange={setRange}
      />
      <Options
        range={range}
        setRange={setRange}
      />
    </form>
  )
}