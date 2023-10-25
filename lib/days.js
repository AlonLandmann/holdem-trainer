export function createNewDay(formattedDate) {
  return {
    date: formattedDate,
    signUps: 0,
    activeUsers: [],
    combosTrained: 0,
    rangeAdditions: 0,
    rangeDuplications: 0,
    rangeEdits: 0,
    rangeDeletions: 0
  }
}

export function yyyymmdd(date) {
  const year = date.getUTCFullYear().toString()
  const month = (date.getUTCMonth() + 1).toString().padStart(2, '0')
  const day = date.getUTCDate().toString().padStart(2, '0')

  return year + month + day
}