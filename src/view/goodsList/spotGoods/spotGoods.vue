/*
 * @Author: By.zhangTeng 
 * @Date: 2018-05-22 17:13:39 
 * @Last Modified by: By.zhangTeng
 * @Last Modified time: 2018-06-08 10:26:27
 */

<style lang="less" scoped>
@import url("./spotGoods.less");
</style>

<template>
    <div>
        <div class="gy">
            <!-- <div v-for="(product,index) in giftCard" :key="index" class="list" @click="toProductInfo(product.id)">
                <img :src='product.imgUrl ? product.imgUrl : "../../../assets/img/product.png"' alt="" class="img">
            </div> -->
            <div v-for="(product,index) in list" :key="index" class="list" @click="toProductInfo(product.id)">
                <img src="../../../assets/img/product.png" alt="" class="img">
                <div class="title">{{product.title}}</div>
                <div class="gg">{{product.liang}}两 x {{product.number}}只</div>
                <div class="price">&yen;{{product.price}}</div> 
            </div>
        </div>
    </div>
</template>
<script>
import spotGoods from "../service/giftCard.js";
export default {
  name: "giftCard",
  mixins: [spotGoods],
  data() {
    return {
      giftCard: null,
      list: [
        {
          id:100001,
          title: "阳澄湖大闸蟹4对装礼品卡",
          liang: "4.0",
          number: 12,
          price: "299.00"
        },
        {
          id:100002,
          title: "阳澄湖大闸蟹4对装礼品卡",
          liang: "4.0",
          number: 12,
          price: "299.00"
        }
      ]
    };
  },
  methods: {
    toProductInfo(productId) {
      this.$router.push(`/product/${productId}`);
    }
  },
  beforeMount() {
    var name = this.$route.params.id;
    this.getGiftCard(2) //获取列表
      .then(res => {
        console.log(res, "12321");
        this.giftCard = res;
        console.log(this.giftCard[0].imgUrl);
      });
  }
};
</script>
