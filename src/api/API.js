import axios from 'axios'

// axios.defaults.baseURL = 'http://192.168.10.141:8080'; //公司
axios.defaults.baseURL = 'http:///39.106.31.12:8080/'; //正式
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
class API {
  get = function (url, params) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url,
        params: params,
      }).then(res => {
        resolve(res)
      })
    })
  }
  post = function (url, params) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url,
        params: params,
      }).then(res => {
        resolve(res)
      })
    })
  }
}
export default API;
