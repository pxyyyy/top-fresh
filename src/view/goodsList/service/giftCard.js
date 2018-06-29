import API from '../../../api/API.js'
const api = new API();

export default {
  methods: {
    getGiftCard(id) {
      return api.get(`fresh_show/pro/selectProList?productPtype=${id}`)
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
  }
}
