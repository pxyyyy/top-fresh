/* * @Author: By.zhangTeng * @Date: 2018-05-22 17:14:03 * @Last Modified by: By.zhangTeng * @Last Modified time: 2018-05-28 16:34:25 */
<style lang="less" scoped>
.container {
  background-color: #fff;
  padding-top: 10px;
}
</style>
<style lang="less">
.van-tab--active {
  color: #fff !important;
  background: #000 !important;
}

.van-tabs__nav--card {
  /* margin: 0 20%; */
  width: 60%;
  margin: 0 auto;
}

.van-tabs__content {
  margin: 10px 10px 0 10px;
}
</style>

<template>
  <div class="container">
    <van-tabs type="card" v-model="active" v-if="$route.params.id == 0">
      <van-tab v-for="index in 2" :key="index" :title="index==1 ? '礼卡' : '现货' ">
        <div v-if="index==1">
          <gift-Card></gift-Card>
        </div>
        <div v-if="index==2">
          <spot-Goods></spot-Goods>
        </div>
      </van-tab>
    </van-tabs>
    <div class="ProductHighlights" v-if="$route.params.id != 0">
      <product-Highlights>
      </product-Highlights>
    </div>
  </div>
</template>
<script>
import giftCard from "./giftCard/giftCard.vue";
import spotGoods from "./spotGoods/spotGoods.vue";
import ProductHighlights from "./ProductHighlights/ProductHighlights.vue";
import service from "./service/giftCard.js";
export default {
  mixins: [service],
  data() {
    return {
      active: 0
    };
  },
  beforeMount() {},
  mounted() {
    var name = this.$route.params.id;
    if (name == 0) {
      this.active = 0;
    } else {
      this.active = 1;
    }
  },
  methods: {},
  components: {
    giftCard,
    spotGoods,
    ProductHighlights
  }
};
</script>