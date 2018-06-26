<style lang="less" scoped>
@import "./OrderDetails.less";
</style>
<template>
	<div class="OrderDetails">
		<van-nav-bar title="订单详情" class="evetn-bar">
			<van-icon name="arrow-left" slot="left" class="evetn-icon" @click='last' />
		</van-nav-bar>
		<div class="OrderDetails-top">
			<div class="OrderDetails-top-group margin-big border-bottom">
				<div class="express-img">
					<img src="../../../assets/img/express.png" alt="">
				</div>
				<div class="OrderDetails-top-info">
					<p>在北京分拨中心进行装车扫描,即将发往：山东省济南市分拨中心</p>
					<p class="express-date">2018-01-20
						<span>18:24:21</span>
					</p>
				</div>
			</div>
			<div class="OrderDetails-top-group">
				<div class="express-img">
					<img src="../../../assets/img/address.png" alt="">
				</div>
				<div class="OrderDetails-top-info-end">
					<p>收货人：段小姐
						<span class="telephone">17645678987</span>
					</p>
					<p>收货地址：{{list.orderAddressinfo}}</p>
				</div>
			</div>
		</div>
		<div class="price-wrapper">
			<ul v-for="item in list.orderdetails" :key="item.odId">
				<li class="item">
					<img :src="item.odProductIcon" alt="" class="item-img">
					<div class="item-info">
						<p class="item-title">{{item.odProductName}}</p>
						<p class="item-desc">{{item.odProductDes}}</p>
						<p class="item-button">
							<strong class="money">￥{{item.odProductPprice}}</strong>
							<span v-if="item.odProductNum">x{{item.odProductNum}}</span>
							<span v-else>x1</span>
						</p>
					</div>
				</li>
			</ul>
			<div class="price" v-if="list.orderPmoney">
				<div class="border-top price-content">
					<van-row>
						<van-col span="12">商品总额</van-col>
						<van-col span="12" class="price_right">￥{{list.orderAllmoney}}</van-col>
					</van-row>
					<van-row>
						<van-col span="12">代金卷优惠</van-col>
						<van-col span="12" class="price_right">-￥10.00</van-col>
					</van-row>
					<van-row>
						<van-col span="12">积分优惠</van-col>
						<van-col span="12" class="price_right">-￥10.00</van-col>
					</van-row>
					<van-row class="price-bottom">
						<van-col span="24" class="price_right">实付款
							<strong class="money">￥{{list.orderPmoney}}</strong>
						</van-col>
					</van-row>
				</div>
			</div>
		</div>
		<div class="OrderDetails-bottom">
			<p>订单编号:
				<span>{{list.orderCode}}</span>
			</p>
			<p>创建时间:
				<span>{{list.orderCreatetime}}</span>
			</p>
			<p>结束时间:
				<span>{{list.orderPaytime}}</span>
			</p>
			<p>发货时间:
				<span>{{list.orderSendtime}}</span>
			</p>
			<p class="OrderDetails-bottom-button">
				<button>查看物流</button>
				<button class="button-confirm">确认收货</button>
			</p>
		</div>
		<div class="shareIt" @click="goShareIt">
			<img src="../../../assets/img/shareIt.png" alt="">
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
      list: ""
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
    goShareIt: function() {
      this.$router.push("/ShareIt");
    },
    last() {
      this.$router.go(-1);
    }
  },
  beforeMount() {
    var token = this.getCookie("token");
    var staffId = this.getCookie("staffId");
    this.selectOrderPrimaryKey({
      staffId,
      token,
      orderId: this.$route.params.odOrderId
    }).then(res => {
      this.list = res;
      console.log(this.list);
    });
  }
};
</script>
