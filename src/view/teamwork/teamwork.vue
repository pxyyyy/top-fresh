<style lang="less" scoped>
@import "./teamwork.less";
</style>
<template>
  <div>
    <van-nav-bar title="我的商品" class="evetn-bar">
      <van-icon name="arrow-left" slot="left" class="evetn-icon" @click='last' />
    </van-nav-bar>
    <div class="teamwork">
      <div class="teamwork-content" v-for="item in teamworkList" :key="item.orderId">
        <div class="teamwork-img">
          <img v-lazy="item.coverImg" alt="">
        </div>
        <div class="teamwork-info">
          <p class="teamwork-info-title">
            {{item.title}}
          </p>
          <p class="teamwork-info-bottom">
            ￥{{item.priceTogether}}
            <span>单买价￥{{item.originalPrice}}</span>
            <button @click="goCollage(item.id,item.productId)">去开团</button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import service from "./service/order.js";
export default {
  name: "teamwork",
  mixins: [service],
  data() {
    return {
      CollageBgPic: require("../../assets/img/CollageBg.png"),
      teamworkList: ""
    };
  },
  methods: {
    goCollage(id, productId) {
      this.$router.push(`/collageDetail/${id}/${productId}`);
    },
    last() {
      this.$router.go(-1);
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
    if (!this.getCookie("staffId")) {
      this.$router.push("login");
    }
    var staffId = this.getCookie("staffId");
    var token = this.getCookie("token");
    this.getTogetherOrderList(staffId, token).then(res => {
      this.teamworkList = res;
    });
  }
};
</script>
