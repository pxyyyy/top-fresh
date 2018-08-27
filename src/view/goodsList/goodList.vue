/* * @Author: By.zhangTeng * @Date: 2018-05-22 17:14:03 * @Last Modified by: By.zhangTeng * @Last Modified time: 2018-05-28 16:34:25 */
<style lang="less" scoped>
.container {
  background-color: #fff;
  padding-top: 10px;
}
.evetn-bar {
  width: 100%;
  background: #3d3d3d;
  color: #e1bf8a;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
}
.evetn-bar .evetn-icon {
  color: #e1bf8a;
}
</style>
<style lang="less">
.list {
  margin-left: 0 !important;
}
.van-tab--active {
  color: #fff !important;
  background: #000 !important;
}

.van-tabs__nav--card {
  width: 60%;
  margin: 0 auto !important;
  color: #666 !important;
}
.van-tabs__nav--card .van-tab {
  border-right: none !important;
}
.van-tabs__content {
  margin: 10px 10px 0 10px;
}
</style>

<template>
  <div class="container">
    <!-- <van-nav-bar :title="title" class="evetn-bar" v-if="!this.$route.query.from">
      <van-icon name="arrow-left" slot="left" class="evetn-icon" @click="last" />
    </van-nav-bar> -->
    <div>
      <van-tabs type="card" v-model="active" v-if="$route.params.id == 0 || $route.params.id == 1">
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
      active: 0,
      title: ""
    };
  },
  async beforeMount() {
    if (this.$route.params.id == 0 || this.$route.params.id == 1) {
      this.title = "全部商品";
      this.active = this.$route.params.id;
    } else {
      await this.selectByPrimaryKey({
        acId: this.$route.params.id
      }).then(res => {
        this.title = res.data[0].acTitle;
      });
    }
    document.title = this.title;
  },
  mounted() {
    var name = this.$route.params.id;
    // if (name == 0) {
    //   this.active = 0;
    // } else {
    //   this.active = 1;
    // }
  },
  methods: {
    last() {
      this.$router.go(-1);
    }
  },
  computed: {
    // title() {
    // return this.$store.state.app.currentActiveName;
    // }
  },
  components: {
    giftCard,
    spotGoods,
    ProductHighlights
  }
};
</script>
