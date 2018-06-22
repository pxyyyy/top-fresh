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
			<van-icon name="arrow-left" slot="left" class="evetn-icon" @click="returnProfile" />
		</van-nav-bar>
		<van-tabs v-model="active" class="coupon" type="card">
			<van-tab v-for="index in 2" :title="index == 1 ? '未使用' : '已过期'" :key="index">
				<div v-if="index == 1" class="coupon-content" v-for="(item,num) in coupon" :key='num'>
					<div class="coupon-item">
						<div class="coupon-item-left">
							<p>
								<strong>￥</strong>
								<strong class="coupon-Large">{{item.scCouponValue}}</strong>
							</p>
						</div>
						<div class="coupon-item-right">
							<p>满{{item.coupons.couponsMin ? item.coupons.couponsMin : "0" }}元使用</p>
							<p>{{item.scCouponStartTime.split(" ")[0]}}-{{item.scCouponEndTime.split(" ")[0]}}</p>
						</div>
					</div>
				</div>
				<!--已过期-->
				<div v-if="index == 2" class="coupon-content coupon-Expired" v-for="(item,num) in coupon1" :key='num'>
					<div class="coupon-item">
						<div class="coupon-item-left">
							<p>
								<strong>￥</strong>
								<strong class="coupon-Large">{{item.scCouponValue}}</strong>
							</p>
						</div>
						<div class="coupon-item-right">
							<p>满{{item.coupons.couponsMin ? item.coupons.couponsMin : "0" }}元使用</p>
							<p>{{item.scCouponStartTime.split(" ")[0]}}-{{item.scCouponEndTime.split(" ")[0]}}</p>
						</div>
					</div>
				</div>
			</van-tab>
		</van-tabs>
	</div>
</template>
<script>
import coupon from "../service/coupon.js";
export default {
  name: "coupon",
  mixins: [coupon],
  data() {
    return {
      active: 2,
      coupon: null,
      coupon1: null
    };
  },
  methods: {
    returnProfile() {
      this.$router.go(-1);
    },
    // 获取cook
    getCookie (name) {
      var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
      if(arr=document.cookie.match(reg)){
        return unescape(arr[2]);
      }else{
        return null; 
      }
    },
  },
  beforeMount() {
    var token = this.getCookie("token");
    var staffId = this.getCookie("staffId");
    this.getCoupon(staffId, token, 0).then(res => {
      console.log(res);
      this.coupon = res;
    });
    this.getCoupon(staffId, token, 1).then(res => {
      console.log(res);
      this.coupon1 = res;
    });
  }
};
</script>
