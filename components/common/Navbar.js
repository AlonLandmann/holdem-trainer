import Link from 'next/link'
import { toast } from 'react-hot-toast'
import Logo from '@/components/common/Logo'
import Button from '@/components/common/Button'
import css from '@/scss/common/Navbar.module.scss'

export default function Navbar({ user }) {
  const handleLogin = () => {
    location.replace('/login')
  }

  const handleLogout = async () => {
    const res = await fetch('/api/auth/logout', {
      method: 'POST',
      headers: { 'Accept': 'application/json' }
    })

    const json = await res.json()

    if (json.success) {
      location.replace('/')
    } else {
      toast.error('an unexpected error occured')
    }
  }

  return (
    <div className={css.container}>
      <div className={css.content}>
        <div onClick={() => { location.replace('/') }}>
          <Logo />
        </div>
        <div className={css.navs}>
          <nav><Link href='/ranges'>ranges</Link></nav>
          <nav><Link href='/sessions'>training</Link></nav>
        </div>
        {!user &&
          <div className={css.auth}>
            <Button theme='dark' onClick={handleLogin}>
              Log in
            </Button>
          </div>
        }
        {user &&
          <div className={css.auth}>
            <Button theme='gray-white' onClick={handleLogout}>
              Log out
            </Button>
          </div>
        }
      </div>
    </div>
  )
}