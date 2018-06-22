<style lang="less" scoped>
	@import "./cartOut.less";
</style>
<template>
	<div>
		<div class="topbar">
			支付完成
			<span class="iconfont" @click="returnDetermine()">&#xe65c;</span>
		</div>
		<!-- 订单详情 -->
		<div class="order"><span>订单号：{{orders.orderCode}}</span></div>
		<div>
			<ul v-for="item in infoList" :key="item.odId">
				<li class="item">
					<img :src="item.odProductIcon" alt="" class="item-img">
					<div class="item-info">
						<p class="item-title">{{item.odProductName}}</p>
						<p class="item-desc">{{item.odProductDes}}</p>
						<p class="item-button"><strong class="money">￥{{item.odProductPprice}}</strong> <span>x{{item.odProductNum}}</span></p>
					</div>
				</li>
			</ul>
		</div>
		<!-- 货品形式 -->
		<div class="myInfoa">
			<div class="border-top price-content">
				<van-row>
					<van-col span="12">商品总额</van-col>
					<van-col span="12" class="price_right">￥199.00</van-col>
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
					<van-col span="24" class="price_right">实付款 <strong class="money">￥{{orders.orderPmoney}}.00</strong></van-col>
				</van-row>
			</div>
		</div>
		<div class="wait">
			<van-button size="mini" class='info-button'>等待发货</van-button>
		</div>
		<div class="shareIt" @click="goShareIt">
			<img src="../../../assets/img/shareIt.png" alt="">
		</div>
		<!-- 继续选购 -->
		<div class="keepOn">
			<p><span>——</span>继续选购<span>——</span></p>
			<div class="img-conent" @click="toProductInfo('123')" v-for="index in 5" :key="index">
				<img v-lazy="cartLictPic" alt="">
			</div>
		</div>
	</div>
</template>
<script>
import service from "../service/index.js";
export default {
    data () {
        return {
    	cartLictPic: require('../../../assets/img/组7@2x.png'),
          infoList: '',
          orders:  ''
        }
    },
    mixins: [service],
    methods: {
      // 获取cook
      getCookie (name) {
        var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
        if(arr=document.cookie.match(reg)){
          return unescape(arr[2]);
        }else{
          return null; 
        }
      },
      toProductInfo(productId) {
        this.$router.push(`/product/${productId}`);
      },
      returnDetermine:function () {
        this.$router.push(
          `/`
        );
      },
      goShareIt:function () {
        this.$router.push({
            name: 'shareIt',
          }
        );
      }
    },
    beforeMount () {
    // 订单详情
    const staffId = this.getCookie("staffId");
    const token = this.getCookie("token");
    this.selectOrderPrimaryKey({
      staffId,
      token,
      orderId:this.$route.params.orderId
    }).then(res => {
      this.infoList = res.orderdetails;
      this.orders = res
    });
    }
}
</script>
