<style lang="less" scoped>
@import "./orders.less";
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

.orders .van-tabs__wrap--scrollable .van-tab {
  flex: auto;
}

.orders .van-tabs__wrap--scrollable .van-tabs__nav {
  margin: 0 2%;
}

.orders .van-tabs__nav--card {
  width: 100%;
}
</style>
<template>
	<div>
		<van-nav-bar title="我的订单" class="evetn-bar" style="z-index: 200;">
			<van-icon name="arrow-left" slot="left" class="evetn-icon" @click="returnProfile" />
		</van-nav-bar>
		<van-tabs v-model="active" class="orders" type="card">
			<van-tab v-for="item in ordersList" :title="item.text" :key="item.id">
				<div class="coupon-content" v-if="item.id == 1">
					<ul v-for="(order,index) in orders" :key="index" v-if="order.orderState=='1'">
						<li class="item" v-for="item in order.orderdetails" :key="item.odId">
							<div class="item-content">
								<img :src="item.odProductIcon ? item.odProductIcon : '../../../assets/img/Crab.png' " alt="" class="item-img">
								<div class="item-info">
									<p class="item-title">{{item.odProductName}}</p>
									<p class="item-desc">{{item.odProductDes}}</p>
									<p class="item-button">
										<strong class="money">￥{{item.odProductPprice}}</strong>
										<span> x{{item.odProductNum}}</span>
									</p>
								</div>
							</div>
							<div class="item-bottom">
								<p>取消订单
									<button @click="payment(item.odOrderId)">立即付款</button>
								</p>
							</div>
						</li>
					</ul>
					<van-row>
						<van-col span="24" style="text-align:center; font-size:10px;margin-bottom:3px;color:#ccc;">
							<div @click='loadMore(1)' v-if="code == '100000'">加载更多 </div>
							<div v-else>已经到底了~~</div>
						</van-col>
					</van-row>
				</div>
				<div class="coupon-content" v-if="item.id == 2">
					<ul v-for="(order,index) in orders" :key="index">
						<li class="item" v-for="item in order.orderdetails" :key="item.odId">
							<div class="item-content">
								<img :src="item.odProductIcon ? item.odProductIcon : '../../../assets/img/Crab.png' " alt="" class="item-img">
								<div class="item-info">
									<p class="item-title">{{item.odProductName}}</p>
									<p class="item-desc">{{item.odProductDes}}</p>
									<p class="item-button">
										<strong class="money">￥{{item.odProductPprice}}</strong>
										<span> x{{item.odProductNum}}</span>
									</p>
								</div>
							</div>
							<div class="item-bottom">
								<p class="item-bottom-two">等待发货</p>
							</div>
						</li>
					</ul>
					<van-row>
						<van-col span="24" style="text-align:center; font-size:10px;margin-bottom:3px;color:#ccc;">
							<div @click='loadMore(2)' v-if="code == '100000'">加载更多 </div>
							<div v-else>已经到底了~~</div>
						</van-col>
					</van-row>
				</div>
				<div class="coupon-content" v-if="item.id == 3">
					<ul v-for="(order,index) in orders" :key="index" v-if="order.orderState=='3'">
						<li class="item" v-for="item in order.orderdetails" :key="item.odId">
							<div class="item-content">
								<img :src="item.odProductIcon ? item.odProductIcon : '../../../assets/img/Crab.png' " alt="" class="item-img">
								<div class="item-info">
									<p class="item-title">{{item.odProductName}}</p>
									<p class="item-desc">{{item.odProductDes}}</p>
									<p class="item-button">
										<strong class="money">￥{{item.odProductPprice}}</strong>
										<span> x{{item.odProductNum}}</span>
									</p>
								</div>
							</div>
							<div class="item-bottom">
								<p>
									<button class="item-bottom-three">确认收货</button>
									<button>查看物流</button>
								</p>
							</div>
						</li>
					</ul>
					<van-row>
						<van-col span="24" style="text-align:center; font-size:10px;margin-bottom:3px;color:#ccc;">
							<div @click='loadMore(3)' v-if="code == '100000'">加载更多 </div>
							<div v-else>已经到底了~~</div>
						</van-col>
					</van-row>
				</div>
				<div class="coupon-content" v-if="item.id == 4">
					<ul v-for="(order,index) in orders" :key="index">
						<li class="item" v-for="item in order.orderdetails" :key="item.odId">
							<div class="item-content">
								<img :src="item.odProductIcon ? item.odProductIcon : '../../../assets/img/Crab.png' " alt="" class="item-img">
								<div class="item-info">
									<p class="item-title">{{item.odProductName}}</p>
									<p class="item-desc">{{item.odProductDes}}</p>
									<p class="item-button">
										<strong class="money">￥{{item.odProductPprice}}</strong>
										<span> x{{item.odProductNum}}</span>
									</p>
								</div>
							</div>
							<div class="item-bottom">
								<button @click='gotDetails(item)'>查看详情</button>
							</div>
						</li>
					</ul>
					<van-row>
						<van-col span="24" style="text-align:center; font-size:10px;margin-bottom:3px;color:#ccc;">
							<div @click='loadMore(0)' v-if="code == '100000'">加载更多 </div>
							<div v-else>已经到底了~~</div>
						</van-col>
					</van-row>
				</div>
				<!-- <div class="coupon-content" v-if="item.id == 5">
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
				</div> -->
			</van-tab>
		</van-tabs>
	</div>
</template>
<script>
import order from "../service/order.js";
export default {
  mixins: [order],
  name: "orders",
  data() {
    return {
      active: "",
      ordersList: [
        { id: 1, text: "待付款" },
        { id: 2, text: "待发货" },
        { id: 3, text: "待收货" },
        { id: 5, text: "待评价" },
        { id: 4, text: "全部订单" }
      ],
      orders: [],
      loading: false,
      finished: false,
      pageNum: 1,
      code: "",
      staffId: this.getCookie("staffId"),
      token: this.getCookie("token")
    };
  },
  computed: {
    changeActive() {
      return this.$store.state.app.currentActiveForProfile;
    }
  },
  mounted() {
    this.init();
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
    payment(id) {
      this.$router.push(`/cartDetermine/${id}`);
    },
    loadMore(index) {
      if (index == 0) {
        index = "";
      }
      this.pageNum++;
      this.showLoad = true;
      this.getOrder(this.staffId, this.token, index, 7, this.pageNum).then(
        res => {
          this.code = res.code;
          console.log(typeof this.code);
          this.orders = this.orders.concat(res.data);
        }
      );
    },
    init() {
      this.active = this.changeActive;
    },
    gotDetails(item) {
      this.$router.push(`OrderDetails/${item.odOrderId}`);
    },
    returnProfile() {
      this.$router.push("/profile");
    }
  },
  watch: {
    active: async function() {
      var token = this.token;
      var staffId = this.staffId;
      if (this.active == 0) {
        //   待付款
        this.pageNum = 1;
        this.orders = "";
        this.getOrder(staffId, token, "1", 7, this.pageNum).then(res => {
          this.code = res.code;
          this.orders = res.data;
        });
      } else if (this.active == 1) {
        // 待发货
        this.pageNum = 1;
        this.orders = "";
        this.getOrder(staffId, token, "2", 7, this.pageNum).then(res => {
          this.code = res.code;
          this.orders = res.data;
        });
      } else if (this.active == 2) {
        //   待收货
        this.pageNum = 1;
        this.orders = "";
        this.getOrder(staffId, token, "3", 7, this.pageNum).then(res => {
          this.code = res.code;
          this.orders = res.data;
        });
      } else if (this.active == 3) {
        //   待评价
        this.pageNum = 1;
        this.orders = "";
      } else if (this.active == 4) {
        //   全部订单
        this.pageNum = 1;
        this.orders = "";
        this.getOrder(staffId, token, "", 7, this.pageNum).then(res => {
          this.code = res.code;
          this.orders = res.data;
        });
      }
    }
  }
};
</script>
