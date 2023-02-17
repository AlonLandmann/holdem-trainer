import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { CirclePicker } from 'react-color'
import { cloneDeep } from 'lodash'
import uniqid from 'uniqid'
import Matrix from './Matrix'
import { dbUpdate } from '@/js/dbUpdate'
import css from '@/scss/Edit.module.scss'

export default function Home({ spot, menu }) {
  const [formData, setFormData] = useState(cloneDeep(spot))
  const router = useRouter()

  const colors = [
    '#a6d66f', // green 1
    '#358532', // green 2
    '#f5e48e', // yellow 1
    '#fcd303', // yellow 2
    '#F4D1C4', // red 1
    '#EEA78E', // red 2
    '#E65244', // red 3
    '#7ccef7', // blue 1
    '#3c58fa', // blue 2
    '#ceb6fa', // purple 1
    '#8047d6', // purple 2
    '#FAFAFA', // gray 1
    '#A49A98', // gray 2
    '#494240', // gray 3
  ]

  useEffect(() => { setFormData(cloneDeep(spot)) }, [spot])

  function handleSubmit() {
    dbUpdate(formData)
  }
  function navToSpotFunction(itemId) {
    return () => {
      router.push(`/${itemId}`)
    }
  }
  function navToEditFunction(itemId) {
    return () => {
      router.push(`/${itemId}/edit`)
    }
  }
  function handleChange(event) {


    setFormData(prev => ({
      ...cloneDeep(prev),
      [event.target.name]: event.target.value
    }))

  }
  function handleChangeForArray(event) {
    setFormData(prev => ({
      ...cloneDeep(prev),
      [event.target.name]: event.target.value === '' ? [] : event.target.value.split(', ')
    }))
  }
  function handleChangeForOptionFunction(optionId) {
    return (event) => {
      setFormData(prev => {
        let newFormData = cloneDeep(prev)

        newFormData.options[optionId][event.target.name] = event.target.value

        return newFormData
      })
    }
  }
  function handleChangeForColorFunction(optionId) {
    return (color, event) => {
      setFormData(prev => {
        let newFormData = cloneDeep(prev)

        newFormData.options[optionId].color = color.hex

        return newFormData
      })
    }
  }
  function handleChangeForMatrix(r, c) {
    setFormData(prev => {
      let newFormData = cloneDeep(prev)
      let currentId = newFormData.preflopMatrix[r][c]

      if (currentId === formData.options.length - 1) {
        newFormData.preflopMatrix[r][c] = 0
      } else {
        newFormData.preflopMatrix[r][c] += 1
      }

      return newFormData
    })
  }
  function addNewOption() {
    if (formData.options.length < 14) {
      setFormData(prev => ({
        ...cloneDeep(prev),
        options: [
          ...prev.options,
          {
            id: prev.options.length,
            color: colors[0],
            description:
            'new option',
            hotkey: ''
          }
        ]
      }))
    } else {
      alert('you have reached the maximum number of options')
    }
  }
  function removeOptionFunction(optionId) {
    return () => {
      setFormData(prev => {
        let newFormData = cloneDeep(prev)
        let arr = []

        for (let i = 0; i < optionId; i += 1) {
          arr.push(newFormData.options[i])
        }
        for (let i = optionId + 1; i < formData.options.length; i += 1) {
          arr.push({
            ...cloneDeep(newFormData.options[i]),
            id: i - 1
          })
        }

        newFormData.options = arr

        return newFormData
      })
    }
  }

  return (
    <div className={css.container}>
      <div className={css.menu}>
        {menu.map(item => (
          <div className={css.item} key={uniqid()}>
            <div className={css.itemTitle} onClick={navToSpotFunction(item.id)}>
              {item.title}
            </div>
            <div className={css.itemEdit} onClick={navToEditFunction(item.id)}>
              <i className='bi bi-pen'></i>
            </div>
          </div>
        ))}
      </div>
      <div className={css.main}>
        <form>
          <div className={css.submit} onClick={handleSubmit}>
            Save
          </div>
          <div className={css.formItem}>
            <div className={css.itemDescription}>Title</div>
            <input
              name='title'
              type='text'
              spellCheck={false}
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div className={css.formItem}>
            <div className={css.itemDescription}>Position</div>
            <input
              name='position'
              type='text'
              spellCheck={false}
              value={formData.position}
              onChange={handleChange}
            />
          </div>
          <div className={css.formItem}>
            <div className={css.itemDescription}>Street</div>
            <input
              name='street'
              type='text'
              spellCheck={false}
              value={formData.street}
              disabled
            />
          </div>
          <div className={css.formItem}>
            <div className={css.itemDescription}>History</div>
            <input
              name='history'
              type='text'
              spellCheck={false}
              value={formData.history.join(', ')}
              onChange={handleChangeForArray}
            />
          </div>
          <div className={css.formItem}>
            <div className={css.optionItemDescription}>Options</div>
            <div className={css.optionItems}>
              {formData.options.map(option => (
                <div className={css.optionItem} key={uniqid()}>
                  <div>{option.id + 1}</div>
                  <input
                    name='description'
                    type='text'
                    spellCheck={false}
                    value={formData.options[option.id].description}
                    onChange={handleChangeForOptionFunction(option.id)}
                  />
                  <input
                    name='hotkey'
                    type='text'
                    spellCheck={false}
                    value={formData.options[option.id].hotkey}
                    onChange={handleChangeForOptionFunction(option.id)}
                  />
                  <CirclePicker
                    color={formData.options[option.id].color} $
                    onChangeComplete={handleChangeForColorFunction(option.id)}
                    colors={colors}
                    circleSize={15}
                    width={220}
                  />
                  <div className={css.removeOption} onClick={removeOptionFunction(option.id)}>
                    <i className='bi bi-trash3'></i>
                  </div>
                </div>
              ))}
              {formData.options.length < 14 &&
                <div className={css.addNewOption} onClick={addNewOption}>
                  <i className='bi bi-plus-lg'></i>
                </div>
              }
            </div>
          </div>
          <div className={css.formItem}>
            <div className={css.optionItemDescription}>Matrix</div>
            <div className={css.matrix}>
              <Matrix
                spot={formData}
                colors={formData.options.map(option => option.color)}
                handleChange={handleChangeForMatrix}
              />
            </div>
          </div>
        </form>
      </div>
      <div className={css.spacer}>

      </div>
    </div>
  )
}