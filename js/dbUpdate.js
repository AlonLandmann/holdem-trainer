export function dbUpdate(updatedSpot) {
  async function executeApiCalls() {
    try {
      const res = await fetch(`${window.location.origin}/api/${String(updatedSpot.id)}`, {
        method: 'PUT',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedSpot)
      })

      const json = await res.json()

      if (json.success) {
        return true
      }

      return false
    } catch (error) {
      return false
    }
  }

  executeApiCalls().then(success => {
    if (success) {
      window.location.reload()
    }
  })
}
