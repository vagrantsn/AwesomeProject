import setupRequest from './setupRequest'

export const create = ({
  email,
  password
} : {
  email: string,
  password: string,
}) => setupRequest({
  body: { email, password },
  path: 'sessions',
  method: 'POST',
})

export const destroy = ({
  sessionId: session_id,
} : {
  sessionId: string,
}) => setupRequest({
  body: { session_id },
  path: 'sessions',
  method: 'DELETE',
})
