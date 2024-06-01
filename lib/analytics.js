export function totalHands(user) {
  let total = 0

  for (let i = 0; i < user.sessions.length; i++) {
    total += user.sessions[i].data.length
  }

  return total
}

export function signUpDate(date) {
  const year = date.getUTCFullYear().toString()
  const month = (date.getUTCMonth() + 1).toString().padStart(2, '0')
  const day = date.getUTCDate().toString().padStart(2, '0')

  return day + '.' + month + '.' + year
}

export function handsOnDays(user) {
  let now = new Date()
  now.setHours(0, 0, 0, 0)

  let signUp = new Date(user.createdAt)
  let diffMillis = now - signUp
  let diffDays = Math.floor(diffMillis / (1000 * 60 * 60 * 24))

  let history = new Array(diffDays + 1).fill(0)

  user.sessions.forEach(session => {
    let sessionDate = new Date(session.startedAt)
    diffMillis = now - sessionDate
    diffDays = Math.floor(diffMillis / (1000 * 60 * 60 * 24))
    if (0 <= diffDays && diffDays < history.length) {
      history[history.length - (1 + diffDays)] += session.data.length
    } else {
      console.log(`this should not have happend, diff = ${diffDays}, hlen: ${history.length}, index: ${history.length - (1 + diffDays)}`)
    }
  })

  return history
}