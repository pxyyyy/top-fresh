import API from '../../../api/API.js'
const api = new API();
export default {
  methods: {
    fetchList (staffId,token) {
      return api.get(`fresh_show/prCar/selectProCarList?staffId=${staffId}&token=${token}`).then((res) => {
        if (res.data.code == 100000 && res.data.message == 'success'){
            const data = res.data.data;
            return data;
        }
      }).catch((err)=>{
        console.log(err)
      });
    },
    // 加接口
    add (staffId,token,carId) {
      return api.get(`fresh_show/prCar/addProCarNum?staffId=${staffId}&token=${token}&carId=${carId}`).then((res) => {
        if (res.data.code == 100000 && res.data.message == 'success'){
          const data = res.data.data;
          return data;
        }
      }).catch((err)=>{
        console.log(err)
      });
    },
    // 减接口
    cut (staffId,token,carId) {
      return api.get(`fresh_show/prCar/cutProCarNum?staffId=${staffId}&token=${token}&carId=${carId}`).then((res) => {
        if (res.data.code == 100000 && res.data.message == 'success'){
          const data = res.data.data;
          return data;
        }
      }).catch((err)=>{
        console.log(err)
      });
    },
    // 收货地址列表
    getAddress (staffId,token,carId) {
      return api.get(`fresh_show/staffAddress/selectStaffAddressList?staffId=${staffId}&token=${token}`).then((res) => {
        if (res.data.code == 100000 && res.data.message == 'success'){
          const data = res.data.data;
          return data;
        }
      }).catch((err)=>{
        console.log(err)
      });
    },
    // 新增收货地址
    addStaffAddress (json) {
      return api.post('fresh_show/staffAddress/addStaffAddress',json).then((res) => {
        if (res.data.code == 100000 && res.data.message == 'success'){
          const data = res.data.data;
          return data;
        }
      }).catch((err)=>{
        console.log(err)
      });
    },
    // 删除收货地址
    deleteAddress(json) {
      return api.post('fresh_show/staffAddress/deleteByPrimaryKey',json).then((res) => {
        if (res.data.code == 100000 && res.data.message == 'success'){
          const data = res.data.data;
          return data;
        }
      }).catch((err)=>{
        console.log(err)
      });
    },
    // 设置默认收货地址
    updateDefaultAddress(json) {
      return api.post('fresh_show/staffAddress/updateDefaultAddress',json).then((res) => {
        if (res.data.code == 100000 && res.data.message == 'success'){
          const data = res.data.data;
          return data;
        }
      }).catch((err)=>{
        console.log(err)
      });
    },
    // 修改收货地址
    updateStaffAddress(json) {
      return api.post('fresh_show/staffAddress/updateStaffAddress',json).then((res) => {
        if (res.data.code == 100000 && res.data.message == 'success'){
          const data = res.data.data;
          return data;
        }
      }).catch((err)=>{
        console.log(err)
      });
    },
  }
}

