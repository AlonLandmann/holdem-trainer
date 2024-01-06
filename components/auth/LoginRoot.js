import Link from 'next/link'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import Button from '@/components/common/Button'
import css from '@/scss/auth/LoginRoot.module.scss'

export default function LoginRoot() {
  const [formData, setFormData] = useState({ email: '', password: '' })

  const handleChange = (event) => {
    setFormData(prev => ({
      ...prev,
      [event.target.name]: event.target.value
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })

    const json = await res.json()

    if (json.success) {
      location.replace('/ranges')
    } else if (json.reason) {
      toast.error(json.reason)
    } else {
      toast.error('an unexpected error occured')
    }
  }

  return (
    <div className={css.root}>
      <form className={css.form} onSubmit={handleSubmit}>
        <div className={css.logo}><i className='bi bi-suit-club-fill'></i></div>
        <div className={css.heading}>Welcome back!</div>
        <div className={css.instructions}>Enter your credentials to log in.</div>
        <label htmlFor='email'>Email</label>
        <input
          id='email'
          name='email'
          type='email'
          value={formData.email}
          onChange={handleChange}
        />
        <label htmlFor='password'>Password</label>
        <input
          id='password'
          name='password'
          type='password'
          value={formData.password}
          onChange={handleChange}
        />
        <Button large theme='dark'>log in</Button>
        <div className={css.redirect}>
          Don't have an account yet? <Link className={css.link} href='/signup'>Sign up</Link> instead.
        </div>
      </form>
    </div>
  )
}