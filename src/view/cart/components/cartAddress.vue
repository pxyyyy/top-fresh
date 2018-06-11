<style  scoped lang="less" scoped>
@import "./cartAddress.less";
</style>
<style>
.van-radio .van-icon-checked {
  color: #f77b17;
  font-size: 15px;
  margin-top: 3px;
}
.van-radio .van-icon {
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
         <div class="address" v-for="item in selectStaffAddressList" :key="item.staffId">
           <div class="address-top">
             <div class="address-top-left">
               收货人 <span>{{item.adName}}</span>
             </div>
             <div class="address-top-right">
               {{item.adPhone}}
             </div>
           </div>
           <div class="address-content">
             收货地址: <span>{{item.adAddress}}，{{item.adAddressInfo}}</span>
           </div>
           <div class="address-bottom">
             <van-radio-group v-model="radio" class="address-bottom-radio">
               <van-radio  :name="item.adIsdefault == 1 ? item.adIsdefault : item.adId" class="radio-text" @click="Switching(item.adId)">默认地址</van-radio>
             </van-radio-group>
             <div>
               <p @click="editAddress(item.adId)"><van-icon name="records" class="address-bottom-icon"/>编辑</p>
             </div>
             <div>
               <p  @click="delAddress(item.adId)"><van-icon name="delete" class="address-bottom-icon"/>删除</p>
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
import service from "../service/index.js";
export default {
  mixins: [service],
  data() {
    return {
      radio: "1",
      selectStaffAddressList: []
    };
  },
  methods: {
    editAddress(id) {
      this.$router.push({
        name: "editAddress",
        params: {
          id
        }
      });
    },
    async Switching(adId) {
      const id = sessionStorage.getItem("staffId");
      const token = sessionStorage.getItem("token");
      await this.updateDefaultAddress({
        staffId: id,
        token,
        adId
      });
    },
    async returnDetermine(adId) {
      this.$router.go(-1);
    },
    goEditing: function() {
      this.$router.push(`/cartAddressEditing`);
    },
    delAddress(adId) {
      const id = sessionStorage.getItem("staffId");
      const token = sessionStorage.getItem("token");
      this.deleteAddress({
        staffId: id,
        token,
        adId
      }).then(res => {
        this.selectStaffAddressList = res;
      });
    }
  },
  beforeMount() {
    const id = sessionStorage.getItem("staffId");
    const token = sessionStorage.getItem("token");
    this.getAddress(id, token).then(res => {
      this.selectStaffAddressList = res;
    });
  },
};
</script>
