import { v4 as uuid } from 'uuid'

export const newRange = {
  id: uuid(),
  name: 'New Range',
  folder: 'New',
  nrPlayers: 6,
  position: 'UTG',
  history: '',
  options: [
    {
      index: 0,
      description: 'not in range',
      color: '#ffffff'
    },
    {
      index: 1,
      description: 'Option 1',
      color: '#fafafa'
    }
  ],
  matrix: [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],

    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],

    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  ]
}

export const sampleRange = {
  id: 'bba8a152-e04f-4331-a499-bbe847c06a32',
  name: 'BB vs BTN open',
  folder: 'BB',
  nrPlayers: 6,
  position: 'BB',
  history: 'F, F, F, 2.50 bb, F',
  options: [
    {
      'index': 0,
      'description': 'not in range',
      'color': '#ffffff'
    },
    {
      'index': 1,
      'description': 'Fold',
      'color': '#fafafa'
    },
    {
      'index': 2,
      'description': 'Call the $4',
      'color': '#f5e48e'
    },
    {
      'index': 3,
      'description': '50 C | 50 R',
      'color': '#f4d1c4'
    },
    {
      'index': 4,
      'description': 'Raise to $27',
      'color': '#eea78e'
    }
  ],
  matrix: [
    [4, 4, 4, 4, 4, 2, 2, 2, 2, 2, 3, 3, 2],
    [4, 4, 4, 3, 3, 3, 2, 2, 3, 2, 2, 2, 2],
    [4, 3, 4, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2],
    [4, 3, 2, 4, 4, 4, 4, 3, 2, 2, 2, 2, 2],
    [3, 2, 2, 3, 4, 4, 4, 3, 3, 2, 2, 2, 2],
    [2, 2, 2, 3, 2, 3, 3, 3, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 3, 3, 2, 2, 2, 1, 1],
    [2, 2, 1, 1, 1, 1, 2, 2, 3, 2, 2, 2, 1],
    [3, 2, 1, 1, 1, 1, 1, 2, 2, 3, 2, 2, 2],
    [2, 2, 1, 1, 1, 1, 1, 1, 2, 2, 3, 2, 2],
    [3, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2],
    [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2]
  ]
}