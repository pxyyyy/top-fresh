/*
 * @Author: By.zhangTeng 
 * @Date: 2018-06-04 16:50:54 
 * @Last Modified by: By.zhangTeng
 * @Last Modified time: 2018-06-04 17:11:16
 */
import API from '../../../api/API.js'
const api = new API();
export default {
  methods: {
    getCode(phone) {
      return api.get(`fresh_show/staffC/sendCode?codePhone=${phone}`)
        .then(res => {
          console.log(res.data)
          if (res.data.code == 100000) {
            return res.data.data;
          }

        })
        .catch(function (error) {
          console.log(error);
        });
    },
    toLogin(json) {
      return api.post(`fresh_show/staffC/Login`, json)
        .then(res => {
          console.log(res.data)
          return res.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    // 微信登录
    getOpenId(json) {
      return api.post(`fresh_show/staffC/getOpenId`, json).then((res) => {
        return res.data
      }).catch((err) => {
        console.log(err)
      });
    },
  }
}
