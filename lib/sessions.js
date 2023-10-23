import { v4 as uuid } from 'uuid'

export function newSession(rangeIds) {
  return {
    id: uuid(),
    startedAt: new Date(),
    rangeIds: rangeIds,
    length: 50,
    data: []
  }
}