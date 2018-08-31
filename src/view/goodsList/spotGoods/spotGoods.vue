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
    <div class="gy" :style="{marginBottom:marginBottom}">
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
import spotGoods from "../service/giftCard.js";
export default {
  name: "giftCard",
  mixins: [spotGoods],
  data() {
    return {
      giftCard: null,
      marginBottom: '0',
      list: [
        {
          id: 100001,
          title: "阳澄湖大闸蟹4对装礼品卡",
          liang: "4.0",
          number: 12,
          price: "299.00"
        },
        {
          id: 100002,
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
        this.giftCard = res;
      });
  },
  mounted() {
    let from = this.$route.query.from;

    if (from == "Android") {
      this.marginBottom = "-50px";
    }
  },
};
</script>
