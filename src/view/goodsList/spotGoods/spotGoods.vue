/*
 * @Author: By.zhangTeng 
 * @Date: 2018-05-22 17:13:39 
 * @Last Modified by: By.zhangTeng
 * @Last Modified time: 2018-06-04 14:08:16
 */

<style lang="less" scoped>
@import url("./spotGoods.less");
</style>

<template>
    <div>
        <div class="gy">
            <div v-for="(product,index) in giftCard" :key="index" class="list" @click="toProductInfo(product.id)">
                <img :src='product.imgUrl ? product.imgUrl : "../../../assets/img/product.png"' alt="" class="img">
            </div>
        </div>
    </div>
</template>
<script>
import spotGoods from '../service/giftCard.js';
export default {  
  name: "giftCard",
  mixins:[spotGoods],
  data() {
    return {
      giftCard:null,
    };
  }, 
  methods: {
    toProductInfo(productId) {
      this.$router.push(`/product/${productId}`);
    }
  },
  beforeMount(){
    var name=this.$route.params.id;
      this.getGiftCard(2)//获取列表
       .then(res => {
         console.log(res,"12321");
         this.giftCard=res;
         console.log(this.giftCard[0].imgUrl)
       })
    
  }
};
</script>
