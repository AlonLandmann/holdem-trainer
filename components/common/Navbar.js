import Link from 'next/link'
import { toast } from 'react-hot-toast'
import Logo from '@/components/common/Logo'
import Button from '@/components/common/Button'
import css from '@/scss/common/Navbar.module.scss'

export default function Navbar({ user, landing }) {
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
        <div className={css.logo} onClick={() => { location.replace('/') }}>
          <Logo />
        </div>
        {(!landing || user) &&
          <div className={css.navs}>
            <nav><Link href='/tutorial'>Tutorial</Link></nav>
            <nav><Link href='/ranges'>My Ranges</Link></nav>
            <nav><Link href='/sessions'>Training</Link></nav>
          </div>
        }
        {!user &&
          <div className={css.auth}>
            <Button theme='dark' onClick={handleLogin}>
              Log in
            </Button>
          </div>
        }
        {user &&
          <div>
            <Button theme='gray-white' onClick={handleLogout}>
              Log out
            </Button>
          </div>
        }
      </div>
    </div>
  )
}