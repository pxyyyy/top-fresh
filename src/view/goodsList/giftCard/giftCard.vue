/*
 * @Author: By.zhangTeng 
 * @Date: 2018-05-22 17:14:14 
 * @Last Modified by: By.zhangTeng
 * @Last Modified time: 2018-05-23 11:03:23
 */

<style lang="less" scoped>
@import url("./giftCard.less");
</style>

<template>
    <div>
        <div class="gy">
            <div v-for="(product,index) in list" :key="index" class="list" @click="toProductInfo('123')">
                <img src="../../../assets/img/product.png" alt="" class="img">
                <div class="title">{{product.title}}</div>
                <div class="gg">{{product.liang}}两 x {{product.number}}只</div>
                <div class="price">&yen;{{product.price}}</div> 
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "giftCard",
  data() {
    return {
      list: [
        {
          title: "阳澄湖大闸蟹4对装礼品卡",
          liang: "4.0",
          number: 12,
          price: "299.00"
        },
        {
          title: "阳澄湖大闸蟹8对装礼品卡",
          liang: "4.0",
          number: 12,
          price: "1299.00"
        },
        {
          title: "阳澄湖大闸蟹12对装礼品卡",
          liang: "4.0",
          number: 12,
          price: "2299.00"
        },
        {
          title: "阳澄湖大闸蟹12对装礼品卡",
          liang: "4.0",
          number: 12,
          price: "3299.00"
        }
      ]
    };
  },
  methods: {
    toProductInfo(productId) {
      this.$router.push(`/product/${productId}`);
    }
  }
};
</script>
