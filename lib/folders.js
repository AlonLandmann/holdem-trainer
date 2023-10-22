export function constructFolders(user) {
  let root = []
  let folders = []

  user.ranges.forEach(range => {
    if (!range.folder) {
      root.push(range)
    } else if (folders.map(f => f.name).indexOf(range.folder) === -1) {
      folders.push({ name: range.folder, ranges: [range] })
    } else {
      folders.filter(f => f.name === range.folder)[0].ranges.push(range)
    }
  })

  return { root, folders }
}