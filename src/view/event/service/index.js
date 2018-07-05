import API from '../../../api/API.js'
const api = new API();

export default {
  methods: {
    // 活动列表
    selectlist(json) {
      return api.post('fresh_show/activity/selectlist', json).then((res) => {
        return res.data;
      }).catch((err) => {
        console.log(err)
      });
    },
    selectProByType() {
      return api.get('fresh_show/homePage/selectProByType')
        .then(res => {
          return res.data
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    // 静态活动
    selectByPrimaryKey(json) {
      return api.post(`fresh_show/activity/selectByPrimaryKey`, json)
        .then(res => {
          return res.data
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  }
}
