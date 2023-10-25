import { createNewDay, yyyymmdd } from '@/lib/days'

export async function tallyActiveUser(user) {
  const date = yyyymmdd(new Date())

  let res = await fetch(`/api/days/${date}`)
  let json = await res.json()

  if (json.success) {
    let day = json.data

    if (!day.activeUsers.includes(user.id)) {
      day.activeUsers.push(user.id)
    }

    res = await fetch(`/api/days/${date}`, {
      method: 'PUT',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify(day)
    })

    json = await res.json()

    // if (json.success) {
    //   console.log('active user added to existing day')
    // } else {
    //   console.log('error while adding active user')
    // }
  } else {
    let day = createNewDay(date)

    day.activeUsers.push(user.id)

    res = await fetch(`/api/days`, {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify(day)
    })

    json = await res.json()

    // if (json.success) {
    //   console.log('active user added to new day')
    // } else {
    //   console.log('error while adding active user')
    // }
  }
}