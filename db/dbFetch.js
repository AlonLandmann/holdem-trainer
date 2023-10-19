import { toast } from 'react-hot-toast'

export async function getUser(email) {
  const res = await fetch(`/api/users/${email}`)
  const json = await res.json()

  if (json.success) {
    return json.data
  } else {
    toast.error('an unexpected error occured')
  }
}

export async function putUser(email, updatedUser, successCallback) {
  const res = await fetch(`/api/users/${email}`, {
    method: 'PUT',
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedUser)
  })

  const json = await res.json()

  if (json.success) {
    successCallback()
  } else {
    toast.error('an unexpected error occured')
  }
}