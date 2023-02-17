import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import uniqid from 'uniqid'
import { cloneDeep } from 'lodash'
import Matrix from './Matrix'
import css from '@/scss/Edit.module.scss'
import { SliderPicker } from 'react-color'

export default function Home({ spot, menu }) {
  const [formData, setFormData] = useState(cloneDeep(spot))
  const [listener, setListener] = useState(false)
  const router = useRouter()

  useEffect(() => { setFormData(cloneDeep(spot)) }, [spot])

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
      [event.target.name]: event.target.value.split(', ')
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
    return (event) => {
      setFormData(prev => {
        let newFormData = cloneDeep(prev)

        newFormData.options[optionId].color = event.target.value

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
              {spot.options.map(option => (
                <div className={css.optionItem} key={uniqid()}>
                  <div>{option.id}</div>
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
                  <input
                    name='color'
                    type='color'
                    value={formData.options[option.id].color}
                    onChange={handleChangeForColorFunction(option.id)}
                  />
                </div>
              ))}
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