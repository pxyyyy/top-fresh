<style  scoped lang="less" scoped>
.evetn-bar{
  background: #3d3d3d;
  color: #E1BF8A;
  margin-top: -45px;
}
.evetn-bar .evetn-icon{
  color: #E1BF8A;
}
.address{
  background: #fff;
  margin-top: 10px;
  padding: 15px 10px;
  font-size: 14px;
  .address-top{
    display: flex;
    justify-content: space-between;
    .address-top-left{
      width: 50%;
    }
    .address-top-right{
      width: 50%;
      text-align: right;
    }
  }
  .address-content{
    margin-top: 5px;
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
  }
  .address-bottom{
    margin-top: 10px;
    display: flex;
    justify-content:flex-end;
    .radio-text-active{
      color: #f77b17;
    }
    .address-bottom-icon{
      display: inline-block;
      margin: 10px 5px;
      margin-top: -10px;
    }
    p{
      margin: 3px 5px;
      text-align: right;
    }
    .address-bottom-radio{
      flex: auto;
    }
  }
}
.Placeholder{
  background: #EFEFF7;
  width: 100%;
  height: 330px;
}
.address-footer{
  position: fixed;
  left: 0;
  bottom: 0;
  background: #f77c18;
  color: #fff;
  text-align: center;
  width: 100%;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
}
</style>
<template>
     <div>
       <van-nav-bar title="收货地址管理" class="evetn-bar">
         <van-icon name="arrow-left" slot="left"  class="evetn-icon"  @click="returnDetermine()"/>
       </van-nav-bar>
       <!--地址列表-->
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
