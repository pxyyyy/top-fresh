<style lang="less" scoped>
@import "./LadingRollGive.less";
</style>
<template>
  <div>
    <div class="Give">
      <p>请填写朋友手机号以便本人验证</p>
      <p style="line-height:30px;"><input type="number" v-model="phone" maxlength="11" pattern="[0-9]*" oninput="if(value.length>11)value=value.slice(0,11)" /> </p>
      <p class="Give-Friends" @click="copyLink">
        <button class="receive">立即赠送</button>
      </p>
      <!-- <div class="Give-type">
        <div class="Give-type-icon">
          <p><img src="../../../assets/img/shareWx.png"></p>
          <p class="icon-desc">微信好友</p>
        </div>
        <div class="Give-type-icon">
          <p><img src="../../../assets/img/sharePyq.png"></p>
          <p class="icon-desc">朋友圈</p>
        </div>
        <div class="Give-type-icon">
          <p><img src="../../../assets/img/shareUrl.png"></p>
          <p class="icon-desc">复制链接</p>
        </div> -->
    </div>
  </div>
</template>

<script>
import coupon from "../service/coupon";
import { Toast } from "vant";
export default {
  name: "LadingRollGive",
  mixins: [coupon],
  data() {
    return {
      token: this.getCookie("token"),
      staffId: this.getCookie("staffId"),
      phone: ""
    };
  },
  methods: {
    getCookie(name) {
      var arr,
        reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
      if ((arr = document.cookie.match(reg))) {
        return unescape(arr[2]);
      } else {
        return null;
      }
    },
    goLadingRoll() {
      this.$router.push("/LadingRoll");
    },
    // 赠送
    async copyLink() {
      let reg = /^[1][3,4,5,7,8][0-9]{9}$/;
      if (this.phone == "") {
        Toast("请输入手机号");
      } else if (!reg.test(this.phone) || this.phone.length < 11) {
        Toast("请输入正确手机号");
      } else {
        Toast("请复制链接分享");
        this.giveFriend({
          staffId: this.staffId,
          token: this.token,
          sendPhone: this.phone,
          odId: this.$route.params.id
        }).then(res => {});
        this.$router.push(`/collectCoupons/${this.$route.params.id}`);
      }
    }
  },
  beforeMount() {
    document.title = "提货卷增送";
  }
};
</script>