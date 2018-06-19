/*
 * @Author: By.zhangTeng 
 * @Date: 2018-06-04 15:27:53 
 * @Last Modified by: By.zhangTeng
 * @Last Modified time: 2018-06-05 14:58:17
 */
import API from '../../../api/API.js'
const api=new API();

export default {
    methods:{
        getOrder(staffId,token,state,pageSize,pageNum){
            return api.get(`fresh_show/order/selectOrderList?staffId=${staffId}&token=${token}&state=${state}&pageSize=${pageSize}&pageNum=${pageNum}`)
            .then(res => {
                   return res.data;
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        selectMyLadingByStaffId(json){
            return api.post("fresh_show/orderTail/selectMyLadingByStaffId",json)
            .then(res => {
                return res.data;
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        selectOrderPrimaryKey(json){
            return api.post("fresh_show/order/selectOrderPrimaryKey",json)
            .then(res => {
                if(res.data.code==100000){
                   return res.data.data;
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        },

    }
}