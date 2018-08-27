import API from '../../../api/API.js'
const api = new API();
export default {
	methods: {
		fetchList() {
			return api.get('fresh_show/homePage/selectHome').then((res) => {
				const data = res.data;
				return data;
			}).catch((err) => {
				console.log(err)
			});
		},
		// 微信登录
		getOpenId(json) {
			return api.get(`fresh_show/staffC/getOpenId`, json).then((res) => {
				console.log(res)
				return res.data
			}).catch((err) => {
				console.log(err)
			});
		},
    //第三方登录
    thirdLogin(json) {
      return api.post(`fresh_show/staffC/thirdLogin`, json)
        .then(res => {
          console.log(res.data);
          return res.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
		getproducts(index) {
			return api.get(`fresh_show/homePage/selectProByType?pType=${index}`).then((res) => {
				if (res.data.code == 100000 && res.data.message == 'success') {
					const data = res.data.data;
					return data
				}
			}).catch((err) => {
				console.log(err)
			});
		},
	}
}
