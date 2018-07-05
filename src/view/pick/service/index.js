import API from '../../../api/API.js'
const api = new API();
export default {
  methods: {
    getLadingDetail(json) {
      return api.post(`fresh_show/orderTail/getLadingDetail`, json)
        .then(res => {
          return res.data;
        })
        .catch(function (error) {
          console.log(error);
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
    saveLading(json) {
      return api.post('fresh_show/orderTail/saveLading', json).then((res) => {
        if (res.data.code == 100000 && res.data.message == 'success') {
          const data = res.data.data;
          return data;
        }
      }).catch((err) => {
        console.log(err)
      });
    },
    // 个人中心立即提货
    selectProDetaiById(json) {
      return api.post(`fresh_show/pro/selectProDetaiById`, json)
        .then(res => {
          return res.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    // 我的提货券--立刻提货
    saveMyLading(json) {
      return api.post(`fresh_show/orderTail/saveMyLading`, json)
        .then(res => {
          return res.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
}
