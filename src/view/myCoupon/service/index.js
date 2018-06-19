import API from '../../../api/API.js'
const api = new API();
export default {
  methods: {
    getCouponsOfReceive (json) {
      return api.post('fresh_show/coupons/getCouponsOfReceive',json).then((res) => {
            return res.data;
      }).catch((err)=>{
        console.log(err)
      });
    },
    fetchgetCouponsOfReceiveList (json) {
      return api.post('fresh_show/staffcoupon/CouponsOfReceiveForStaff',json).then((res) => {
            const data = res.data.data;
            return data;
      }).catch((err)=>{
        console.log(err)
      });
    },
  }
}

