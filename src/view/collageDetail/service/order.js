/*
 * @Author: By.zhangTeng 
 * @Date: 2018-06-04 15:27:53 
 * @Last Modified by: By.zhangTeng
 * @Last Modified time: 2018-06-05 14:58:17
 */
import API from '../../../api/API.js'
const api = new API();

export default {
  methods: {
    getTogetherOrderInfo(json) {
      return api.get('fresh_show/togetherOrder/getTogetherOrderInfo', json)
        .then(res => {
          return res.data
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    getTogetherOrderInfo22(json) {
      return api.post('fresh_show/togetherOrder/getTogetherOrderInfo22', json)
        .then(res => {
          return res.data
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    // 5人成团购买
    addUserTogetherOrder(json) {
      return api.post('fresh_show/togetherOrder/addUserTogetherOrder', json)
        .then(res => {
          if (res.data.code == 100000) {
            return res.data.data;
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
}
