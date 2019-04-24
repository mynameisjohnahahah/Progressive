import Vue from 'vue';
import axios from 'axios'
import cookie from 'js-cookie'

const prefix = 'https://geffoliu.cn/'
axios.defaults.timeout = 10000

axios.interceptors.request.use(
  config => {
    config.headers['Version'] = '1'
    config.headers['Token'] = cookie.get('token') || ''
    config.headers['Timestamp'] = cookie.get('timestamp') || 0
    config.headers['Signature'] = cookie.get('signature') || ''
    return config
  },
  error => Promise.reject(error)
)

axios.interceptors.response.use(
  response => {
    const {code} = response.data
    // 1003: 非法的签名, 1004: 非法的令牌, 1005: 令牌过期
    if (code === 1003 || code === 1004 || code === 1005) {
      alert('重新登录')  // 这里可以用iview或者element的Model框 然后OK的回调用router重定向到登录页面，记得引入import router from '@/router'就是了
    }
    return response.data
  },
  error => {
    return Promise.reject(error)
  }
)

// export default {
//   get (url, params = {}) {
//     return axios
//       .get(prefix + url, {params})
//       .catch(error => {
//         console.log(error)
//       })
//   },
//   post (url, params = {}) {
//     return axios
//       .post(prefix + url, params)
//       .catch(error => {
//         console.log(error)
//       })
//   }
// }
Vue.prototype.$post = (url, params = {}) => {
  return axios
    .post(prefix + url, params)
    .catch(error => {
      console.log(error)
    })
}
Vue.prototype.$post = (url, params = {}) => {
  return axios
    .get(prefix + url, {params})
    .catch(error => {
      console.log(error)
    })
}