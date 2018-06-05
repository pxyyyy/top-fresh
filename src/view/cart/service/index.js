import API from '../../../api/API.js'
const api = new API();
export default {
  methods: {
    fetchList (staffId,token) {
      return api.post('fresh_show/prCar/selectProCarList',{
        staffId,
        token,
      }).then((res) => {
        console.log(res)
        if (res.data.code == 100000 && res.data.message == 'success'){
            // const data = res.data.data;
            // return data;
        }
      }).catch((err)=>{
        console.log(err)
      });
    },
  }
}

