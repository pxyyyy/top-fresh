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
    getTogetherOrderList(json) {
      return api.post(`fresh_show/togetherOrder/getTogetherOrderList222`, json)
        .then(res => {
          if (res.data.code == 100000) {
            return res.data.data;
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    // 分享拼团(生成拼团展示连接)
    shareTogetherOrder(json) {
      return api.post('fresh_show/togetherOrder/shareTogetherOrder', json)
        .then(res => {
          if (res.data.code == 100000) {
            return res.data.data;
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    // 拼团付款成功后展示（剩余人数。结束时间。已参加用户）
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
    // 拼团优惠券
    getCoupnsListByMoney(json) {
      return api.post(`fresh_show/order/getCoupnsListByMoney`, json)
        .then(res => {
          if (res.data.code == 100000) {
            return res.data.data;
          }

        })
        .catch(function (error) {
          console.log(error);
        });
    },
    getCoupon(staffId, token, scCouponState) {
      return api.get(`fresh_show/staffcoupon/selectCouponsByStaffId?staffId=${staffId}&token=${token}&scCouponState=${scCouponState}`)
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
  }
}
