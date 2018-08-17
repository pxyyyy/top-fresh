<style lang="less" scoped>
@import "./ptOrderDetails.less";
</style>
<template>
	<div class="OrderDetails">
		<div class="price-wrapper">
			<ul>
				<li class="item">
					<img :src="product.productIcon" alt="" class="item-img">
					<div class="item-info">
						<p class="item-title">{{product.title}}</p>
						<!-- <p class="item-desc">{{item.odProductDes}}</p> -->
						<p class="item-button">
							<strong class="money">￥{{product.priceTogether}}</strong>
							<!-- <span v-if="item.odProductNum">x{{item.odProductNum}}</span> -->
							<span>x1</span>
						</p>
					</div>
				</li>
			</ul>
			<div class="pricepro">
				<div class="border-top price-content">
					<van-row>
						<van-col span="12">商品总额</van-col>
						<van-col span="12" class="price_right">￥{{product.priceTogether}}</van-col>
					</van-row>
					<van-row>
						<van-col span="12">代金券优惠</van-col>
						<van-col span="12" class="price_right" v-if="product.togetherCouponsmoney">-￥{{product.togetherCouponsmoney}}</van-col>
						<van-col span="12" class="price_right" v-else>-￥0.00</van-col>
					</van-row>
					<van-row>
						<van-col span="12">积分优惠</van-col>
						<van-col span="12" class="price_right" v-if="product.togetherScoremoney">-￥{{product.togetherScoremoney}}</van-col>
						<van-col span="12" class="price_right" v-else>-￥0.00</van-col>
					</van-row>
					<van-row class="price-bottom">
						<van-col span="24" class="price_right">实付款
							<strong class="money">￥{{product.priceTogether}}</strong>
						</van-col>
					</van-row>
				</div>
			</div>
		</div>
		<div class="OrderDetails-bottom">
			<p>订单编号:
				<span>{{product.detailCode}}</span>
			</p>
			<p>创建时间:
				<span>{{product.createTime}}</span>
			</p>
			<p>付款时间:
				<span>{{product.payTime}}</span>
			</p>
		</div>
	</div>
</template>

<script>
import order from "../service/order.js";
export default {
  name: "OrderDetails",
  mixins: [order],
  data() {
    return {
			list: "",
			result: ''
    };
	},
	computed: {
		product() {
      return this.$store.state.app.currentActiveName;
    }
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
    goShareIt: function() {
      this.$router.push("/ShareIt");
    },
    last() {
      this.$router.go(-1);
    }
  },
  beforeMount() {
		document.title = "订单详情";
  }
};
</script>
