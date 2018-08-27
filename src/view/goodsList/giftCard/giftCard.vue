/* * @Author: By.zhangTeng * @Date: 2018-05-22 17:14:14 * @Last Modified by: By.zhangTeng * @Last Modified time: 2018-06-08 10:26:26 */

<style lang="less" scoped>
@import url("./giftCard.less");
</style>

<template>
  <div>
    <div class="gy">
      <!-- <div v-for="(product,index) in giftCard" :key="index" class="list" @click="toProductInfo(product.id)">
                <img :src='product.imgUrl ? product.imgUrl : "../../../assets/img/product.png"' alt="" class="img">
            </div> -->
      <div v-for="(product,index) in giftCard" :key="index" class="list" @click="toProductInfo(product.id)">
        <img :src="product.imgUrl" alt="" class="img">
        <!--<div class="title">{{product.proName}}</div>-->
        <!--<div class="gg">{{product.proDetail}}</div>-->
        <!--<div class="price">&yen;{{product.proPrice}}</div>-->
      </div>
    </div>
  </div>
</template>
<script>
import getGiftCard from "../service/giftCard.js";
export default {
  name: "giftCard",
  mixins: [getGiftCard],
  data() {
    return {
      giftCard: null,
      list: [
        {
          id: 100001,
          title: "阳澄湖大闸蟹4对装礼品卡",
          liang: "4.0",
          number: 12,
          price: "299.00"
        },
        {
          id: 100001,
          title: "阳澄湖大闸蟹4对装礼品卡",
          liang: "4.0",
          number: 12,
          price: "299.00"
        },
        {
          id: 100001,
          title: "阳澄湖大闸蟹4对装礼品卡",
          liang: "4.0",
          number: 12,
          price: "299.00"
        },
        {
          id: 100001,
          title: "阳澄湖大闸蟹4对装礼品卡",
          liang: "4.0",
          number: 12,
          price: "299.00"
        },
        {
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
    this.getGiftCard(1) //获取列表
      .then(res => {
        this.giftCard = res;
      });
  }
};
</script>
