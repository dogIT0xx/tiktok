import { httpRequest } from '~/utils/httpRequest.js'

async function searchService(options = {}) {
  const response = await httpRequest.get('users/search', options)
  return response.data.data
}

export { searchService }
