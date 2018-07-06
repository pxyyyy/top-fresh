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
    getOrder(staffId, token, state, pageSize, pageNum) {
      return api.get(`fresh_show/order/selectOrderList?staffId=${staffId}&token=${token}&state=${state}&pageSize=${pageSize}&pageNum=${pageNum}`)
        .then(res => {
          return res.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    selectMyLadingByStaffId(json) {
      return api.post("fresh_show/orderTail/selectMyLadingByStaffId", json)
        .then(res => {
          return res.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    selectOrderPrimaryKey(json) {
      return api.post("fresh_show/order/selectOrderPrimaryKey", json)
        .then(res => {
          if (res.data.code == 100000) {
            return res.data.data;
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    // 拼团详情接口
    getTogetherOrderInfo(json) {
      return api.post("fresh_show/togetherOrder/getUserTogetherOrderInfo", json)
        .then(res => {
          if (res.data.code == 100000) {
            return res.data.data;
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    // 代金卷数量
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
    // 修改用户
    editStaff(json) {
      return api.post(`fresh_show/staff/editStaff`, json)
        .then(res => {
          if (res.data.code == 100000) {
            return res.data.data;
          }

        })
        .catch(function (error) {
          console.log(error);
        });
    },
    // 意见反馈
    addFeedback(json) {
      return api.post(`fresh_show/feedback/addFeedback`, json)
        .then(res => {
          return res.data;

        })
        .catch(function (error) {
          console.log(error);
        });
    },
  }
}
