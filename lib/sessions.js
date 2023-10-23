import { v4 as uuid } from 'uuid'

export function newSession(rangeIds) {
  return {
    id: uuid(),
    startedAt: new Date(),
    rangeIds: rangeIds,
    data: []
  }
}

export function randomRange(user, session) {
  const ranges = user.ranges.filter(r => session.rangeIds.indexOf(r.id) > -1)
  
  return ranges[Math.floor(Math.random() * ranges.length)]
}