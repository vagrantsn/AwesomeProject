const setupRequest = ({
  body,
  path,
  method,
} : {
  body?: object,
  path: string,
  method: string,
}) => fetch(`https://api.pagar.me/1/${path}`, {
  method,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(body),
})
.then(async (response) => {
  const json = await response.json()

  if (!response.ok) {
    throw new Error('pagar.me request failed', { body: json })
  }

  return json
})

export default setupRequest
