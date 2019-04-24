import service from './service'

export default {
  test (params) {
    return service.post('/test', params)
  },
}