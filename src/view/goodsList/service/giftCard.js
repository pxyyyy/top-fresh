import API from '../../../api/API.js'
const api = new API();

export default {
  methods: {
    getGiftCard(id) {
      return api.get(`fresh_show/pro/selectProList?productPtype=${id}&pageSize=20&pageSize=1`)
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
    // 商品集锦
    getGiftCards(json) {
      return api.post('fresh_show/pr/selectList_back', json)
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
    // 查询活动详情
    selectByPrimaryKey(json) {
      return api.post('fresh_show/activity/selectByPrimaryKey', json)
        .then(res => {
          return res.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  }
}
