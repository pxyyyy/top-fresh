<style lang="less" scoped>
	@import './orders.less';
</style>
<style>
.orders .van-tabs__nav--card .van-tab.van-tab--active {
  background: none !important;
  color: #e2bf85 !important;
}
.orders .van-tabs__nav--card .van-tab.van-tab--active span {
  border-bottom: 2px solid #e2bf85 !important;
}
.orders .van-tabs__nav--card {
  border: none !important;
  border-bottom: 1px solid #ccc !important;
  margin: 0 7%;
}
.orders .van-tab {
  border: none !important;
}
.van-tabs--card .van-tabs__wrap {
  background: #fff;
}
.orders .van-tabs__content {
  margin: 0;
}
</style>
<template>
	<div>
		<van-nav-bar title="我的订单" class="evetn-bar">
			<van-icon name="arrow-left" slot="left" class="evetn-icon" @click="returnProfile" />
		</van-nav-bar>
		<van-tabs v-model="active" class="orders" type="card">
			<van-tab v-for="item in ordersList" :title="item.text">
				<div class="coupon-content" v-if="item.id == 1">
					<ul v-for="(order,index) in orders" :key="index" v-if="order.orderState=='1'">
						<li class="item">
							<div class="item-content">
								<img :src="order.orderdetails[0].odProductIcon ? order.orderdetails[0].odProductIcon : '../../../assets/img/Crab.png' " alt="" class="item-img">
								<div class="item-info">
									<p class="item-title">{{order.orderdetails[0].odProductName}}</p>
									<p class="item-desc">{{order.orderdetails[0].odProductDes}}</p>
									<p class="item-button"><strong class="money">￥{{order.orderAllmoney}}</strong>
										<span> x {{order.orderdetails[0].odProductNum}}</span>
									</p>
								</div>
							</div>
							<div class="item-bottom">
								<p>取消订单 <button>立即付款</button></p>
							</div>
						</li>
					</ul>
				</div>
				<div class="coupon-content" v-if="item.id == 2">
					<ul v-for="(order,index) in orders" :key="index" v-if="order.orderState=='2'">
						<li class="item">
							<div class="item-content">
								<img :src="order.orderdetails[0].odProductIcon ? order.orderdetails[0].odProductIcon : '../../../assets/img/Crab.png' " alt="" class="item-img">
								<div class="item-info">
									<p class="item-title">{{order.orderdetails[0].odProductName}}</p>
									<p class="item-desc">{{order.orderdetails[0].odProductDes}}</p>
									<p class="item-button"><strong class="money">￥{{order.orderAllmoney}}</strong>
										<span> x {{order.orderdetails[0].odProductNum}}</span>
									</p>
								</div>
							</div>
							<div class="item-bottom">
								<p class="item-bottom-two">等待发货</p>
							</div>
						</li>
					</ul>
					
				</div>
				<div class="coupon-content" v-if="item.id == 3">
					<ul v-for="(order,index) in orders" :key="index" v-if="order.orderState=='3'">
						<li class="item">
							<div class="item-content">
								<img :src="order.orderdetails[0].odProductIcon ? order.orderdetails[0].odProductIcon : '../../../assets/img/Crab.png' " alt="" class="item-img">
								<div class="item-info">
									<p class="item-title">{{order.orderdetails[0].odProductName}}</p>
									<p class="item-desc">{{order.orderdetails[0].odProductDes}}</p>
									<p class="item-button"><strong class="money">￥{{order.orderAllmoney}}</strong>
										<span> x {{order.orderdetails[0].odProductNum}}</span>
									</p>
								</div>
							</div>
							<div class="item-bottom">
								<p> <button class="item-bottom-three">确认收货</button><button>查看物流</button></p>
							</div>
						</li>
					</ul>
				</div>
				<div class="coupon-content" v-if="item.id == 4">
					<ul v-for="(order,index) in orders" :key="index" v-if="order.orderState=='1'">
						<li class="item">
							<div class="item-content">
								<img :src="order.orderdetails[0].odProductIcon ? order.orderdetails[0].odProductIcon : '../../../assets/img/Crab.png' " alt="" class="item-img">
								<div class="item-info">
									<p class="item-title">{{order.orderdetails[0].odProductName}}</p>
									<p class="item-desc">{{order.orderdetails[0].odProductDes}}</p>
									<p class="item-button"><strong class="money">￥{{order.orderAllmoney}}</strong>
										<span> x {{order.orderdetails[0].odProductNum}}</span>
									</p>
								</div>
							</div>
							<div class="item-bottom">
								<p>取消订单 <button>立即付款</button></p>
							</div>
						</li>
					</ul>
					<ul v-for="(order,index) in orders" :key="index" v-if="order.orderState=='2'">
						<li class="item">
							<div class="item-content">
								<img :src="order.orderdetails[0].odProductIcon ? order.orderdetails[0].odProductIcon : '../../../assets/img/Crab.png' " alt="" class="item-img">
								<div class="item-info">
									<p class="item-title">{{order.orderdetails[0].odProductName}}</p>
									<p class="item-desc">{{order.orderdetails[0].odProductDes}}</p>
									<p class="item-button"><strong class="money">￥{{order.orderAllmoney}}</strong>
										<span> x {{order.orderdetails[0].odProductNum}}</span>
									</p>
								</div>
							</div>
							<div class="item-bottom">
								<p class="item-bottom-two">等待发货</p>
							</div>
						</li>
					</ul>
					<ul v-for="(order,index) in orders" :key="index" v-if="order.orderState=='3'">
						<li class="item">
							<div class="item-content">
								<img :src="order.orderdetails[0].odProductIcon ? order.orderdetails[0].odProductIcon : '../../../assets/img/Crab.png' " alt="" class="item-img">
								<div class="item-info">
									<p class="item-title">{{order.orderdetails[0].odProductName}}</p>
									<p class="item-desc">{{order.orderdetails[0].odProductDes}}</p>
									<p class="item-button"><strong class="money">￥{{order.orderAllmoney}}</strong>
										<span> x {{order.orderdetails[0].odProductNum}}</span>
									</p>
								</div>
							</div>
							<div class="item-bottom">
								<p> <button class="item-bottom-three">确认收货</button><button>查看物流</button></p>
							</div>
						</li>
					</ul>
				</div>
			</van-tab>
		</van-tabs>
	</div>
</template>
<script>
	import order from "../service/order.js"
	export default {
		mixins:[order],
		name: "orders",
		data() {
			return {
				active: 0,
				ordersList: [
					{ id: 1, text: '待付款' },
					{ id: 2, text: '待发货' },
					{ id: 3, text: '待收货' },
					{ id: 4, text: '全部订单' },
				],
				orders:null,
			}
		},
		computed: {
			changeActive() {
				return this.$store.state.app.currentActiveForProfile;
			}
		},
		mounted() {
			this.init()
		},
		methods: {
			init() {
				this.active = this.changeActive
			},
			returnProfile() {
				this.$router.push('/profile')
			}
		},
		beforeMount(){
			var token=sessionStorage.getItem('token')
      		var staffId=sessionStorage.getItem('staffId')
			this.getOrder(staffId,token,'')
			.then(res => {
				console.log(res)
				this.orders=res;
			})
		}
	}
</script>
