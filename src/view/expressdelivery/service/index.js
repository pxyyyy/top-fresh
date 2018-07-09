import API from '../../../api/API.js'
const api = new API();
export default {
  methods: {
    // 物流
    kuaidiCode(json) {
      return api.get('fresh_show/staffC/kuaidiCode', json)
        .then(res => {
          return res
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  }
}
