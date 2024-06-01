import { useState, useEffect } from 'react'
import { sortBy } from 'lodash'
import UserPanel from '@/components/admin/UserPanel'
import { getAllUsers, getAllDays } from '@/db/dbFetch'
import css from '@/scss/admin/Admin.module.scss'

export default function Admin() {
  const [days, setDays] = useState([])
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
 
  useEffect(() => {
    (async () => {
      setDays(await getAllDays())
      setUsers(sortBy(await getAllUsers(), [(obj) => { return -obj.sessions.length }]))
      setIsLoading(false)
    })()
  }, [])
 
  if (isLoading || !days || !users) return <p>Loading...</p>

  return (
    <div className={css.container}>
      {users.map(user => (
        <UserPanel
          key={user.id}
          user={user}
        />
      ))}
    </div>
  )
}