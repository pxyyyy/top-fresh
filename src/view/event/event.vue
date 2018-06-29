<style scoped lang="less">
@import "./evnet.less";
</style>
<template>
  <div class="event-main">
    <div class="imgs" v-for="item in eventList" :key="item.id" @click="goActiveInfo(item)">
      <img v-lazy="item.src" alt="">
      <span>{{item.acTitle}}</span>
    </div>
    <div class="keepOn">
      <p>
        <span>——</span>推荐商品
        <span>——</span>
      </p>
      <div class="img-conent" @click="toProductInfo(item.id)" v-for="item in products" :key="item.id">
        <img v-lazy="item.imgUrl" alt="">
      </div>
    </div>
  </div>
</template>
<script>
import event1 from "../../assets/img/event1.png";
import service from "./service/index.js";
export default {
  mixins: [service],
  data() {
    return {
      cartLictPic: require("../../assets/img/组7@2x.png"),
      products: "",
      eventList: []
    };
  },
  methods: {
    // 活动跳转
    goActiveInfo(type) {
      console.log(type.acType);
      let from = this.$route.query.from;
      //   优惠券
      if (type.acType == 1) {
        this.$router.push(
          `/myCoupon/${type.acId}`
          // link
        );
        // 拼团
      } else if (type.acType == 2) {
        this.$router.push(
          `/teamwork`
          // link
        );
        // 商品集锦
      } else if (type.acType == 3) {
        this.$router.push(`/goodsList/${type.acId}`);
      }
    },
    goDetails: function() {
      this.$router.push(`/eventList`);
    },
    toProductInfo(productId) {
      this.$router.push(`/product/${productId}`);
    }
  },
  beforeMount() {
    // 活动列表
    this.getCouponsOfReceive({
      pageNum: 1,
      pageSize: 7
    }).then(res => {
      this.eventList = res.data;
    });
    this.selectProByType().then(res => {
      this.products = res.data;
    });
  }
};
</script>