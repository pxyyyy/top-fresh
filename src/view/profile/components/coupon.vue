<style scoped lang="less">
@import "./coupon.less";
</style>
<style>
.coupon .van-tabs__wrap {
  z-index: 0;
}
.coupon .van-tabs__nav--card .van-tab.van-tab--active {
  background: none !important;
  color: #e2bf85 !important;
}
.coupon .van-tabs__nav--card .van-tab.van-tab--active span {
  border-bottom: 1px solid #e2bf85 !important;
}
.coupon .van-tabs__nav--card {
  border: none !important;
  border-bottom: 1px solid #ccc !important;
  margin: 0 7%;
}
.coupon .van-tab {
  border: none !important;
  padding: 0 20px !important;
}
</style>
<template>
  <div>
    <van-nav-bar title="我的优惠券" class="evetn-bar">
      <van-icon name="arrow-left" slot="left"  class="evetn-icon"  @click="returnProfile"/>
    </van-nav-bar>
    <van-tabs v-model="active" class="coupon"  type="card">
      <van-tab v-for="index in 2" :title="index == 1 ? '未使用' : '已过期'">
        <div v-if="index == 1" class="coupon-content">
          <div class="coupon-item">
            <div class="coupon-item-left">
              <p><strong>￥</strong> <strong class="coupon-Large">20</strong> </p>
            </div>
            <div class="coupon-item-right">
              <p>满199元使用</p>
              <p>2018.1.1-2018.1.31</p>
            </div>
          </div>
        </div>
        <div v-if="index == 1" class="coupon-content">
          <div class="coupon-item">
            <div class="coupon-item-left">
              <p><strong>￥</strong> <strong class="coupon-Large">20</strong> </p>
            </div>
            <div class="coupon-item-right">
              <p>满199元使用</p>
              <p>2018.1.1-2018.1.31</p>
            </div>
          </div>
        </div>
        <div v-if="index == 1" class="coupon-content">
          <div class="coupon-item">
            <div class="coupon-item-left">
              <p><strong>￥</strong> <strong class="coupon-Large">20</strong> </p>
            </div>
            <div class="coupon-item-right">
              <p>满199元使用</p>
              <p>2018.1.1-2018.1.31</p>
            </div>
          </div>
        </div>
        <div v-if="index == 1" class="coupon-content">
          <div class="coupon-item">
            <div class="coupon-item-left">
              <p><strong>￥</strong> <strong class="coupon-Large">20</strong> </p>
            </div>
            <div class="coupon-item-right">
              <p>满199元使用</p>
              <p>2018.1.1-2018.1.31</p>
            </div>
          </div>
        </div>
        <div v-if="index == 1" class="coupon-content">
          <div class="coupon-item">
            <div class="coupon-item-left">
              <p><strong>￥</strong> <strong class="coupon-Large">20</strong> </p>
            </div>
            <div class="coupon-item-right">
              <p>满199元使用</p>
              <p>2018.1.1-2018.1.31</p>
            </div>
          </div>
        </div>
        <!--已过期-->
        <div v-if="index == 2" class="coupon-content coupon-Expired">
          <div class="coupon-item">
            <div class="coupon-item-left">
              <p><strong>￥</strong> <strong class="coupon-Large">20</strong> </p>
            </div>
            <div class="coupon-item-right">
              <p>满199元使用</p>
              <p>2018.1.1-2018.1.31</p>
            </div>
          </div>
        </div>
        <div v-if="index == 2" class="coupon-content coupon-Expired">
          <div class="coupon-item">
            <div class="coupon-item-left">
              <p><strong>￥</strong> <strong class="coupon-Large">20</strong> </p>
            </div>
            <div class="coupon-item-right">
              <p>满199元使用</p>
              <p>2018.1.1-2018.1.31</p>
            </div>
          </div>
        </div>
        <div v-if="index == 2" class="coupon-content coupon-Expired">
          <div class="coupon-item">
            <div class="coupon-item-left">
              <p><strong>￥</strong> <strong class="coupon-Large">20</strong> </p>
            </div>
            <div class="coupon-item-right">
              <p>满199元使用</p>
              <p>2018.1.1-2018.1.31</p>
            </div>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
export default {
  name: "coupon",
  data() {
    return {
      active: 2
    };
  },
  methods: {
    returnProfile() {
      this.$router.go(-1);
    }
  }
};
</script>
