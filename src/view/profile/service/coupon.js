/*
 * @Author: By.zhangTeng 
 * @Date: 2018-06-04 15:27:53 
 * @Last Modified by: By.zhangTeng
 * @Last Modified time: 2018-06-05 14:37:21
 */
import API from '../../../api/API.js'
const api = new API();

export default {
  methods: {
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
    // 根据订单查询可用优惠券
    getCoupnsListByOrderId(json) {
      return api.post(`fresh_show/order/getCoupnsListByOrderId`, json)
        .then(res => {
          if (res.data.code == 100000) {
            return res.data.data;
          }

        })
        .catch(function (error) {
          console.log(error);
        });
    },
    // 提货卷赠送好友
    giveFriend(json) {
      return api.post(`fresh_show/orderTail/giveFriend`, json)
        .then(res => {
          return res.data.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    // 好友领取详情
    getLadingPrimaryKey(json) {
      return api.post(`fresh_show/orderTail/getLadingPrimaryKey`, json)
        .then(res => {
          return res.data.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    // 发送验证码
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
    // 好友领取优惠券
    getFriend(json) {
      return api.post(`fresh_show/orderTail/getFriend`, json)
        .then(res => {
          return res.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  }
}
