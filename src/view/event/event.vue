<style scoped lang="less">
@import "./evnet.less";
</style>
<template>
  <div class="event-main">
    <div class="imgs" v-for="item in eventList" :key="item.id" @click="goActiveInfo(item)">
      <img v-lazy="item.acIcon" alt="">
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
    goActiveInfo(activeId) {
      let from = this.$route.query.from;
      //   优惠券
      if (activeId.acType == 1) {
        if (from == "IOS" || from == "Android") {
          this.$bridge.callHandler(
            "goYouhuiquanVC",
            {
              activityId: activeId.acId
            },
            data => {
              console.log("success");
            }
          );
        } else {
          this.$router.push(
            `/myCoupon/${activeId.acId}`
            // link
          );
        }
        // 拼团
      } else if (activeId.acType == 2) {
        if (from == "IOS" || from == "Android") {
          this.$bridge.callHandler("goPintuanGoodsVC", data => {
            console.log("success");
          });
        } else {
          this.$router.push(`/teamwork/${activeId.acId}`);
        }
        // 商品集锦
      } else if (activeId.acType == 3) {
        if (from == "IOS" || from == "Android") {
          this.$bridge.callHandler(
            "goActiveInfoVC",
            {
              activeid: activeId.acId
            },
            data => {
              console.log("success");
            }
          );
        } else {
          this.$router.push(`/goodsList/${activeId.acId}`);
        }
      } else if (activeId.acType == 4) {
        // 静态
        if (from == "IOS" || from == "Android") {
          this.$bridge.callHandler(
            "goActiveInfoVC",
            {
              activeid: activeId.acId
            },
            data => {
              console.log("success");
            }
          );
        } else {
          this.$router.push(`/eventList/${activeId.acId}`);
        }
      } else if (activeId.acType == 5) {
        if (from == "IOS" || from == "Android") {
          this.$bridge.callHandler(
            "goActiveInfoVC",
            {
              activeid: activeId.acId
            },
            data => {
              console.log("success");
            }
          );
        } else {
          window.location.href = activeId.link;
        }
      }
    },
    goDetails: function() {
      this.$router.push(`/eventList`);
    },
    toProductInfo(productId) {
      this.$router.push(`/product/${productId}`);
    },
    // 获取cook
    getCookie(name) {
      var arr,
        reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
      if ((arr = document.cookie.match(reg))) {
        return unescape(arr[2]);
      } else {
        return null;
      }
    }
  },
  beforeMount() {
    // 活动列表
    this.selectlist({
      token: this.getCookie("token"),
      staffId: this.getCookie("staffId"),
      pageNum: 1,
      pageSize: 30
    }).then(res => {
      this.eventList = res.data;
    });
    this.selectProByType().then(res => {
      this.products = res.data;
    });
  }
};
</script>