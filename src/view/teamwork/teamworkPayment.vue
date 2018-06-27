<style lang="less" scoped>
@import "./teamworkPayment.less";
</style>
<template>
	<div>
		<van-nav-bar title="支付结果" class="evetn-bar">
			<van-icon name="arrow-left" slot="left" class="evetn-icon" @click="last" />
		</van-nav-bar>
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
				<button>立即邀请好友参团</button>
			</p>
			<p class="collage-success-info-bottom">
				<span>邀请好友参团</span>>拼团成功分别发货>人数不足自动退款</p>
		</div>
	</div>
</template>
<script>
export default {
  name: "teamwork",
  data() {
    return {
      xhdpiPic: require("../../assets/img/xhdpi.png")
    };
  },
  methods: {
    last() {
      this.$router.go(-1);
    }
  }
};
</script>