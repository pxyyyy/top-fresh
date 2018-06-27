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
    getTogetherOrderList(staffId, token) {
      return api.get(`fresh_show/togetherOrder/getTogetherOrderList?staffId=${staffId}&token=${token}`)
        .then(res => {
          if (res.data.code == 100000) {
            return res.data.data;
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  }
}
