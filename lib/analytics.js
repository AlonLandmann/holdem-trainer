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