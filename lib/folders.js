export function constructFolders(user) {
  let folders = []
  let unassigned = []

  user.ranges.forEach(range => {
    if (!range.folder) {
      unassigned.push(range)
    } else if (folders.map(f => f.name).indexOf(range.folder) === -1) {
      folders.push({ name: range.folder, ranges: [range] })
    } else {
      folders.filter(f => f.name === range.folder)[0].ranges.push(range)
    }
  })

  if (unassigned.length) {
    folders.unshift({ name: 'New', ranges: unassigned })
  }

  return folders
}