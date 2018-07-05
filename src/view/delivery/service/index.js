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
  }
}
