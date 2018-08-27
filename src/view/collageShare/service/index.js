/*
 * @Author: By.zhangTeng 
 * @Date: 2018-06-04 15:27:53 
 * @Last Modified by: ZT.zhangTeng
 * @Last Modified time: 2018-08-27 21:12:58
 */
import API from '../../../api/API.js'
const api = new API();
export default {
  methods: {
    // 打开分享拼团
    openShareTogetherOrder(json) {
      return api.post('fresh_show/togetherOrder/openShareTogetherOrder', json)
        .then(res => {
          if (res.data.code == 100000) {
            return res.data.data;
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    // 个人信息
    getStaffInfo(json) {
      return api.post(`fresh_show/staff/getStaffInfo`, json)
        .then(res => {
          return res.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    // 分享拼团(生成拼团展示连接)
    getTogetherOrderProcessMessage(json) {
      return api.post('fresh_show/togetherOrder/getTogetherOrderProcessMessage', json)
        .then(res => {
          if (res.data.code == 100000) {
            return res.data.data;
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    // 5人成团购买
    addUserTogetherOrder(json) {
      return api.post('fresh_show/togetherOrder/addUserTogetherOrder', json)
        .then(res => {
            return res.data;
        })
        .catch(function (error) {
          console.log(error);
        });
	},
	getweixinSign(json){
		return api.get('fresh_show/staffC/getweixinSign', json)
        .then(res => {
            return res.data;
        })
        .catch(function (error) {
          console.log(error);
        });
	}
  }
}
