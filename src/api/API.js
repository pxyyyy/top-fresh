import axios from 'axios'

// axios.defaults.baseURL = 'http://192.168.10.196:80/';//公司
// axios.defaults.baseURL = 'http://47.104.18.202:8080/';//正式
axios.defaults.baseURL = 'http://39.107.126.201:8080/';//正式
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
class API {

	get(url, params) {
		return axios.get(url, params);
	}

	post(url, params) {
		return axios.post(url, params);
	}

}
export default API;
