/*
 * @Author: By.zhangTeng 
 * @Date: 2018-06-04 15:27:53 
 * @Last Modified by: By.zhangTeng
 * @Last Modified time: 2018-06-05 14:37:21
 */
import API from '../../../api/API.js'
const api=new API();

export default {
    methods:{
        getCoupon(staffId,token,scCouponState){
            return api.get(`fresh_show/staffcoupon/selectCouponsByStaffId?staffId=${staffId}&token=${token}&scCouponState=${scCouponState}`)
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