/*
 * @Author: By.zhangTeng 
 * @Date: 2018-05-22 17:13:39 
 * @Last Modified by: By.zhangTeng
 * @Last Modified time: 2018-05-23 11:03:59
 */

<style lang="less" scoped>
@import url("./spotGoods.less");
</style>

<template>
    <div>
        <div class="gy">
            <div v-for="(product,index) in list" :key="index" class="list" @click="toProductInfo('123')">
                <img v-lazy="productPic" alt="" class="img">
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "giftCard",
  data() {
    return {
    	productPic: require('../../../assets/img/product.png'),
      list: [
        {
          title: "阳澄湖大闸蟹4对现货",
          liang: "4.0",
          number: 12,
          price: "299.00"
        },
        {
          title: "阳澄湖大闸蟹8对现货",
          liang: "4.0",
          number: 12,
          price: "1299.00"
        },
        {
          title: "阳澄湖大闸蟹12对现货",
          liang: "4.0",
          number: 12,
          price: "2299.00"
        },
        {
          title: "阳澄湖大闸蟹12对现货",
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
