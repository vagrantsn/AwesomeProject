import setupRequest from './setupRequest'

export const findAll = (params: object) => setupRequest({
  path: `transactions?${new URLSearchParams(params)}`,
  method: 'GET'
})
