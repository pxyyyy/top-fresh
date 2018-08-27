<style lang="less" scoped>
@import "./LadingRollGive.less";
</style>
<template>
  <div class="Give-wrap">
    <div class="Give">
      <div class="Give-banner">
        <div class="Give-title">
          <p>请填写朋友手机号以便本人验证</p>
          <div class="Give-input">
            <input type="text" v-model="phone">
          </div>
        </div>
      </div>
    </div>
    <div class='user-link'>
      <p>提货卷赠送好友至</p>
      <button @click="copyLink">立即赠送</button>
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
        this.$router.push(`/collectCoupons/${this.$route.params.id}?staffid=${this.getCookie('staffId')}`);
      }
    }
  },
  beforeMount() {
    document.title = "提货券增送";
  }
};
</script>
