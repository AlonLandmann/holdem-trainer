import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import uniqid from 'uniqid'
import History from './History'
import HoleCards from './HoleCards'
import css from '@/scss/Edit.module.scss'

export default function Home({ spot, menu }) {
  const [formData, setFormData] = useState({ ...spot })
  const router = useRouter()

  useEffect(() => { setFormData({ ...spot }) }, [spot])

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
      ...prev,
      [event.target.name]: event.target.value
    }))
  }
  function handleChangeForArray(event) {
    setFormData(prev => ({
      ...prev,
      [event.target.name]: event.target.value.split(', ')
    }))
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
              <i className='bi bi-pencil-square'></i>
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
            <div className={css.itemDescription}>Street</div>
            <input
              name='history'
              type='text'
              spellCheck={false}
              value={formData.history.join(', ')}
              onChange={handleChangeForArray}
            />
          </div>
        </form>
      </div>
      <div className={css.spacer}>

      </div>
    </div>
  )
}