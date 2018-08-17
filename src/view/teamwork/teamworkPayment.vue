<style lang="less" scoped>
@import "./teamworkPayment.less";
</style>
<template>
  <div>
    <div class="teamworkPayment">
      <p class="teamworkPayment-title">开团成功</p>
      <p class="teamworkPayment-people">还差
        <span>4</span>人,
        <span class="teamworkPayment-margin">剩余</span>
        <span class="date">2</span>天
        <span class="date">24</span>小时 结束</p>
      <ul class="collage-success-info-people">
        <li><img v-lazy="xhdpiPic" alt=""></li>
        <li><img v-lazy="xhdpiPic" alt=""></li>
        <li><img v-lazy="xhdpiPic" alt=""></li>
        <li><img v-lazy="xhdpiPic" alt=""></li>
        <li><img v-lazy="xhdpiPic" alt=""></li>
      </ul>
      <p class="collage-success-info-success">成功开团</p>
      <p class="collage-success-info-button">
        <button @click="invite">立即邀请好友参团</button>
      </p>
      <p class="collage-success-info-bottom">
        <span>邀请好友参团</span>>拼团成功分别发货>人数不足自动退款</p>
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
      xhdpiPic: require("../../assets/img/xhdpi.png"),
      Url: "",
      staffId: this.getCookie("staffId"),
      token: this.getCookie("token"),
      teamworkId: ""
    };
  },
  methods: {
    // 获取cook
    getCookie(name) {
      var arr,
        reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
      if ((arr = document.cookie.match(reg))) {
        return unescape(arr[2]);
      } else {
        return null;
      }
    },
    last() {
      this.$router.go(-1);
    },
    async invite() {
      await this.shareTogetherOrder({
        token: this.token,
        staffId: this.staffId,
        id: this.$route.params.idone
      }).then(res => {
        this.Url = res[0];
      });
      this.$router.push(
        `/collageShare/${this.Url.id}/${this.Url.productId}/${
          this.Url.staffId
        }/${this.Url.togetherOrderId}/${this.Url.token}`
      );
    }
  },
  beforeMount() {
    document.title = "支付结果";
    this.getTogetherOrderProcessMessage({
      staffId: this.staffId,
      token: this.token,
      togetherOrderId: 3,
      startUser: this.$route.params.id
    }).then(res => {
      this.teamworkId = res;
    });
  }
};
</script>