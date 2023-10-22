export function constructFolders(user) {
  let folders = [{ name: 'New', ranges: [] }]

  user.ranges.forEach(range => {
    if (!range.folder) {
      folders[0].ranges.push(range)
    } else if (folders.map(f => f.name).indexOf(range.folder) === -1) {
      folders.push({ name: range.folder, ranges: [range] })
    } else {
      folders.filter(f => f.name === range.folder)[0].ranges.push(range)
    }
  })

  return folders
}