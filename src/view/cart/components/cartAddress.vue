<style  scoped lang="less" scoped>
  @import "./cartAddress.less";
</style>
<style>
.address .van-radio .van-icon-checked{
  color: #f77b17;
  font-size: 15px;
  margin-top: 3px;
}
.address .van-radio .van-icon{
  font-size: 15px;
  margin-top: 3px;
}
</style>
<template>
     <div>
       <van-nav-bar title="收货地址管理" class="evetn-bar">
         <van-icon name="arrow-left" slot="left"  class="evetn-icon"  @click="returnDetermine()"/>
       </van-nav-bar>
       <!--地址列表-->
       <div class="address-group">
         <div class="address">
           <div class="address-top">
             <div class="address-top-left">
               收货人 <span>段小姐</span>
             </div>
             <div class="address-top-right">
               15214861684
             </div>
           </div>
           <div class="address-content">
             收货地址: <span>山东省济南市高新区舜泰广场9号南楼1102</span>
           </div>
           <div class="address-bottom">
             <van-radio-group v-model="radio" class="address-bottom-radio">
               <van-radio name="1" class="radio-text">默认地址</van-radio>
             </van-radio-group>
             <div>
               <p><van-icon name="records" class="address-bottom-icon"/>编辑</p>
             </div>
             <div>
               <p><van-icon name="delete" class="address-bottom-icon"/>删除</p>
             </div>
           </div>
         </div>
         <div class="address">
           <div class="address-top">
             <div class="address-top-left">
               收货人 <span>段小姐</span>
             </div>
             <div class="address-top-right">
               15214861684
             </div>
           </div>
           <div class="address-content">
             收货地址: <span>山东省济南市高新区舜泰广场9号南楼1102</span>
           </div>
           <div class="address-bottom">
             <van-radio-group v-model="radio" class="address-bottom-radio">
               <van-radio name="2" class="radio-text">默认地址</van-radio>
             </van-radio-group>
             <div>
               <p><van-icon name="records" class="address-bottom-icon"/>编辑</p>
             </div>
             <div>
               <p><van-icon name="delete" class="address-bottom-icon"/>删除</p>
             </div>
           </div>
         </div>
         <div class="address">
           <div class="address-top">
             <div class="address-top-left">
               收货人 <span>段小姐</span>
             </div>
             <div class="address-top-right">
               15214861684
             </div>
           </div>
           <div class="address-content">
             收货地址: <span>山东省济南市高新区舜泰广场9号南楼1102</span>
           </div>
           <div class="address-bottom">
             <van-radio-group v-model="radio" class="address-bottom-radio">
               <van-radio name="3" class="radio-text">默认地址</van-radio>
             </van-radio-group>
             <div>
               <p><van-icon name="records" class="address-bottom-icon"/>编辑</p>
             </div>
             <div>
               <p><van-icon name="delete" class="address-bottom-icon"/>删除</p>
             </div>
           </div>
         </div>
       </div>
       <div class="Placeholder">
         <div class="address-footer"  @click="goEditing()">
           添加新的地址
         </div>
       </div>
     </div>
</template>
<script>
export default {
    data () {
        return {
          radio: '1'
        }
    },
    methods: {
      returnDetermine:function () {
        this.$router.push(
          `/cartDetermine`
        );
      },
      goEditing:function () {
        this.$router.push(
          `/cartAddressEditing`
        );
      }
    }
}
</script>
