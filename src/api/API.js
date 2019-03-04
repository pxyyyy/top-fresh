import axios from 'axios'
import qs from 'qs';
import { Toast } from "vant";
import { router } from '../router/index';
import { Dialog } from "vant";

// axios.defaults.baseURL = 'http://192.168.10.196:8080'; //公司
axios.defaults.baseURL = 'http://39.106.31.12:8080'; //正式
// axios.defaults.baseURL = 'http://39.107.126.201:8080'; //测试

// axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
let cancel, promiseArr = {};
const CancelToken = axios.CancelToken;

//响应拦截器即异常处理
axios.interceptors.response.use(response => {
	if (response.data.code === '100003') {
		return Promise.reject(response.data)
	}
	if (response.data.code === '100002') {
		return Promise.resolve(response.data)
	}
	return Promise.resolve(response)

}, error => {
	Toast('服务内部错误');
	return Promise.reject(error)
});
var _this = this;
class API {
	get = function (url, params) {
		return new Promise((resolve, reject) => {
			axios({
				method: 'get',
				url,
				params: params,
				cancelToken: new CancelToken(c => {
					cancel = c
				})
			}).then(res => {
				if (res.code == 100002) {
          Dialog.confirm({
            title: "提示",
            message: "请先登录您的账户",
            confirmButtonText: "去登录"
          }).then(() => {
            var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
            if (keys) {
              for (var i = keys.length; i--;)
                document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()
            }
            window.location.href = "http://shop.jiweishengxian.com/login"
          }).catch()
        }else if (res.data.code == 100002) {
          Dialog.confirm({
            title: "提示",
            message: "请先登录您的账户",
            confirmButtonText: "去登录"
          }).then(() => {
            var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
            if (keys) {
              for (var i = keys.length; i--;)
                document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()
            }
            window.location.href = "http://shop.jiweishengxian.com/login"
          }).catch()
        } else {
					resolve(res)
				}
			}).catch(res => {
				Toast(res.message)
			})
		})
	};
	post = function (url, params) {
		var that = this;
		return new Promise((resolve, reject) => {
			axios({
				method: 'post',
				url,
				data: qs.stringify(params),
				cancelToken: new CancelToken(c => {
					cancel = c
				})
			})
				.then(res => {
					 if (res.code == 100002) {
            Dialog.confirm({
              title: "提示",
              message: "请先登录您的账户",
              confirmButtonText: "去登录"
            }).then(() => {
              var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
              if (keys) {
                for (var i = keys.length; i--;)
                  document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()
              }
              sessionStorage.setItem('history',router.history.current.path)
              // console.log(router.history.current.path,'123')
              window.location.href = "http://shop.jiweishengxian.com/login"
            }).catch()

					} else {
						resolve(res)
					}
				})
				.catch(res => {
					Toast(res.message)
				})
		})
	}
}
export default API;
