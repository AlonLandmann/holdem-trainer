import { useEffect, useState } from 'react'
import { tallyActiveUser } from '@/db/dbTrack'

export default function useAuth() {
  const [auth, setAuth] = useState({ isLoading: true, user: null })

  const fetchUser = async () => {
    const res = await fetch('/api/auth/check')
    const json = await res.json()

    if (json.user) {
      setAuth({ isLoading: false, user: json.user })
      
      // NEW ***
      tallyActiveUser(json.user)
      // NEW ***
    } else {
      setAuth({ isLoading: false, user: null })
    }
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return { ...auth, fetchUser }
}
