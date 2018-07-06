<style scoped lang="less">
@import "./index-product.less";
</style>
<style>
.commodityList .van-tab--active {
  color: #fff !important;
  background: #000 !important;
}
.commodityList .van-tabs__nav--card {
  margin: 0 20%;
}
.commodityList .van-tabs__content {
  margin: 10px 10px 0 10px;
}
</style>
<template>
  <div class="r-product">
    <div class="r-title">
      <p>阳澄湖大闸蟹专题推荐</p>
      <span>寻找舌尖的味道</span>
    </div>
    <van-tabs type="card" class="r-tab commodityList" @click="getInfo">
      <van-tab v-for="index in 2" :title="index == 1 ? '礼卷' : '现货'" :key="index">
        <img v-for="item in imgList" :src="item.imgUrl + '?x-oss-process=image/crop,x_0,y_0,h_150,g_center'" v-if="index == 1" @click="goGoodInfoVC(item.id)" :key="item.id">
        <img v-for="item in imgList" alt="" :src="item.imgUrl + '?x-oss-process=image/crop,x_0,y_0,h_150,g_center'" v-if="index == 2" @click="goGoodInfoVC(item.id)" :key="item.id">
      </van-tab>
    </van-tabs>
    <div class="r-more" @click="goGoodListVC('all')">
      <span>查看全部</span>
      <van-icon name="more" />
    </div>
  </div>
</template>
<script>
import indexService from "../../service/index.js";
export default {
  mixins: [indexService],
  data() {
    return {
      imgList: ""
    };
  },
  beforeMount() {
    this.getproducts(1).then(res => {
      console.log(res);
      this.imgList = res;
    });
  },
  methods: {
    getInfo(index) {
      if (index == 0) {
        this.getproducts(index + 1).then(res => {
          this.imgList = res;
          console.log(this.imgList);
        });
      } else {
        this.getproducts(index + 1).then(res => {
          this.imgList = res;
          console.log(this.imgList);
        });
      }
    },
    goGoodListVC(name) {
      let from = this.$route.query.from;
      if (from == "IOS") {
        this.$bridge.callHandler("goGoodListVC", { name: name }, data => {
          console.log("success");
        });
      } else if (from == "Android") {
        this.$bridge.callHandler("goGoodListVC", { name: name }, data => {
          console.log("success");
        });
      } else {
        this.$router.push(`/goodsList/0`);
      }
    },
    goGoodInfoVC(productId) {
      let from = this.$route.query.from;
      if (from == "IOS") {
        this.$bridge.callHandler(
          "goGoodInfoVC",
          { productId: productId },
          data => {
            console.log("success");
          }
        );
      } else if (from == "Android") {
        this.$bridge.callHandler(
          "goGoodInfoVC",
          { productId: productId },
          data => {
            console.log("success");
          }
        );
      } else {
        this.$router.push(`/product/${productId}`);
      }
    }
  },
  computed: {
    viewWeight: function() {
      return (window.innerWidth - 20) / 2 + "px";
    }
  }
};
</script>
