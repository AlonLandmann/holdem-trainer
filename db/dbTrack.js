import { createNewDay, yyyymmdd } from '@/lib/days'

const put = async (date, day) => {
  await fetch(`/api/days/${date}`, {
    method: 'PUT',
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify(day)
  })
}

const post = async (day) => {
  await fetch(`/api/days`, {
    method: 'POST',
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify(day)
  })
}

export async function tallyActiveUser(user) {
  const date = yyyymmdd(new Date())

  let res = await fetch(`/api/days/${date}`)
  let json = await res.json()

  if (json.success) {
    let day = json.data

    if (!day.activeUsers.includes(user.id)) {
      day.activeUsers.push(user.id)
    }
    
    put(date, day)
  } else {
    let day = createNewDay(date)

    day.activeUsers.push(user.id)

    post(day)
  }
}

export async function tallySignUps() {
  const date = yyyymmdd(new Date())

  let res = await fetch(`/api/days/${date}`)
  let json = await res.json()

  if (json.success) {
    let day = json.data

    day.signUps++

    put(date, day)
  } else {
    let day = createNewDay(date)

    day.signUps++

    post(day)
  }
}

export async function tallyCombosTrained(amount) {
  const date = yyyymmdd(new Date())

  let res = await fetch(`/api/days/${date}`)
  let json = await res.json()

  if (json.success) {
    let day = json.data

    day.combosTrained += amount

    put(date, day)
  } else {
    let day = createNewDay(date)

    day.combosTrained += amount

    post(day)
  }
}

export async function tallyRangeAdditions() {
  const date = yyyymmdd(new Date())

  let res = await fetch(`/api/days/${date}`)
  let json = await res.json()

  if (json.success) {
    let day = json.data

    day.rangeAdditions++

    put(date, day)
  } else {
    let day = createNewDay(date)

    day.rangeAdditions++

    post(day)
  }
}

export async function tallyRangeDuplications() {
  const date = yyyymmdd(new Date())

  let res = await fetch(`/api/days/${date}`)
  let json = await res.json()

  if (json.success) {
    let day = json.data

    day.rangeDuplications++

    put(date, day)
  } else {
    let day = createNewDay(date)

    day.rangeDuplications++

    post(day)
  }
}

export async function tallyRangeEdits() {
  const date = yyyymmdd(new Date())

  let res = await fetch(`/api/days/${date}`)
  let json = await res.json()

  if (json.success) {
    let day = json.data

    day.rangeEdits++

    put(date, day)
  } else {
    let day = createNewDay(date)

    day.rangeEdits++

    post(day)
  }
}

export async function tallyRangeDeletions() {
  const date = yyyymmdd(new Date())

  let res = await fetch(`/api/days/${date}`)
  let json = await res.json()

  if (json.success) {
    let day = json.data

    day.rangeDeletions++

    put(date, day)
  } else {
    let day = createNewDay(date)

    day.rangeDeletions++

    post(day)
  }
}