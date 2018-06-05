/*
 * @Author: By.zhangTeng 
 * @Date: 2018-06-04 15:27:53 
 * @Last Modified by: By.zhangTeng
 * @Last Modified time: 2018-06-04 16:40:14
 */
import API from '../../../api/API.js'
const api=new API();

export default {
    methods:{
        getProductInfo(id){
            return api.get(`fresh_show/pro/selectProDetaiById?productId=${id}`)
            .then(res => {
                console.log(res.data)
                if(res.data.code==100000){
                   return res.data.data;
                }
                
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        addCart(token,staffId,productId,productNum){
            return api.get(`http://39.107.126.201:8080/fresh_show/prCar/addProCar?productId=${id}&staffId=${staffId}&token=${token}&productNum=${productNum}`)
            .then(res => {
                console.log(res.data)
                if(res.data.code==100000){
                   return res.data.data;
                }
                
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }
}