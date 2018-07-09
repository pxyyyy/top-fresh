import API from '../../../api/API.js'
const api = new API();
export default {
  methods: {
    // 拼团接口
    getTogetherOrderInfo(json) {
      return api.get('fresh_show/togetherOrder/getTogetherOrderInfo', json)
        .then(res => {
          if (res.data.code == 100000) {
            return res.data.data;
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    fetchList(staffId, token) {
      return api.get(`fresh_show/prCar/selectProCarList?staffId=${staffId}&token=${token}`).then((res) => {
        const data = res.data;
        return data;
      }).catch((err) => {
        console.log(err)
      });
    },
    // 推荐商品
    selectProByType() {
      return api.get('fresh_show/homePage/selectProByType')
        .then(res => {
          return res.data
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    // 加接口
    add(staffId, token, carId) {
      return api.get(`fresh_show/prCar/addProCarNum?staffId=${staffId}&token=${token}&carId=${carId}`).then((res) => {
        if (res.data.code == 100000 && res.data.message == 'success') {
          const data = res.data.data;
          return data;
        }
      }).catch((err) => {
        console.log(err)
      });
    },
    // 减接口
    cut(staffId, token, carId) {
      return api.get(`fresh_show/prCar/cutProCarNum?staffId=${staffId}&token=${token}&carId=${carId}`).then((res) => {
        if (res.data.code == 100000 && res.data.message == 'success') {
          const data = res.data.data;
          return data;
        }
      }).catch((err) => {
        console.log(err)
      });
    },
    // 收货地址列表
    getAddress(staffId, token, carId) {
      return api.get(`fresh_show/staffAddress/selectStaffAddressList?staffId=${staffId}&token=${token}`).then((res) => {
        if (res.data.code == 100000 && res.data.message == 'success') {
          const data = res.data.data;
          return data;
        }
      }).catch((err) => {
        console.log(err)
      });
    },
    // 新增收货地址
    addStaffAddress(json) {
      return api.post('fresh_show/staffAddress/addStaffAddress', json).then((res) => {
        if (res.data.code == 100000 && res.data.message == 'success') {
          const data = res.data.data;
          return data;
        }
      }).catch((err) => {
        console.log(err)
      });
    },
    // 删除收货地址
    deleteAddress(json) {
      return api.post('fresh_show/staffAddress/deleteByPrimaryKey', json).then((res) => {
        if (res.data.code == 100000 && res.data.message == 'success') {
          const data = res.data.data;
          return data;
        }
      }).catch((err) => {
        console.log(err)
      });
    },
    // 设置默认收货地址
    updateDefaultAddress(json) {
      return api.post('fresh_show/staffAddress/updateDefaultAddress', json).then((res) => {
        if (res.data.code == 100000 && res.data.message == 'success') {
          const data = res.data.data;
          return data;
        }
      }).catch((err) => {
        console.log(err)
      });
    },
    // 修改收货地址
    updateStaffAddress(json) {
      return api.post('fresh_show/staffAddress/updateStaffAddress', json).then((res) => {
        if (res.data.code == 100000 && res.data.message == 'success') {
          const data = res.data.data;
          return data;
        }
      }).catch((err) => {
        console.log(err)
      });
    },
    //购物车结算
    carToOrder(json) {
      return api.post('fresh_show/prCar/carToOrder', json).then((res) => {
        return res
      }).catch((err) => {
        console.log(err)
      });
    },
    // 订单详情
    selectOrderPrimaryKey(json) {
      return api.post('fresh_show/order/selectOrderPrimaryKey', json).then((res) => {
        if (res.data.code == 100000 && res.data.message == 'success') {
          const data = res.data.data;
          return data;
        }
      }).catch((err) => {
        console.log(err)
      });
    },
    // 图片上传
    uploadAll(json) {
      return api.post('fresh_show/User/uploadAll', json).then((res) => {
        return res.data;
      }).catch((err) => {
        console.log(err)
      });
    },
    // 商品评价
    addEvaluation(json) {
      return api.post('fresh_show/evaluation/addEvaluation', json).then((res) => {
        return res.data;
      }).catch((err) => {
        console.log(err)
      });
    },
    // 商品评价
    getScoreByOrderId(json) {
      return api.post('fresh_show/order/getScoreByOrderId', json).then((res) => {
        return res.data;
      }).catch((err) => {
        console.log(err)
      });
    },
  }
}
