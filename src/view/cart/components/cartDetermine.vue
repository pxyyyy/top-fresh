<style lang="less" scoped>
	@import "./cartDetermine.less";
</style>
<style>
	.Cell .van-icon {
		position: absolute;
	}
</style>
<template>
	<div>
		<van-nav-bar title="确认订单" class="evetn-bar">
			<van-icon name="arrow-left" slot="left" class="evetn-icon" @click="returnCart()" />
		</van-nav-bar>
		<!--返回弹出-->
		<van-popup v-model="away" class="away">
			<p>正在离开结算页面</p>
			<p>确定不要了吗</p>
			<van-button size="small" class="Payment-button awayColor" @click="goaway">去意已决</van-button>
			<van-button size="small" class="Payment-button" @click="want">朕在想想</van-button>
		</van-popup>
		<div class="cart_min">
			<!-- 收货地址 -->
			<div class="address" @click="goAddress()">
				<van-row class="address-content">
					<van-col span="2" class="address-left">
						<img src="../../../assets/img/cartDeteemine.png" alt="">
					</van-col>
					<van-col span="20">
						<p>收货人: {{cartList[0].adName}}<span>{{cartList[0].adPhone}}</span> </p>
						<p style="margin-top:5px;">收货地址: {{cartList[0].adAddress}},{{cartList[0].adAddressInfo}}</p>
					</van-col>
					<van-col span="2" class="address-right">
						<img src="../../../assets/img/Arrow.png" alt="">
					</van-col>
				</van-row>
			</div>
			<!-- 订单详情 -->
			<div>
				<ul v-for="item in infoList" :key="item.odProductId">
					<li class="item">
						<img :src="item.odProductIcon" alt="" class="item-img">
						<div class="item-info">
							<p class="item-title">{{item.odProductName}}</p>
							<p class="item-desc">{{item.odProductDes}}</p>
							<p class="item-button"><strong class="money">￥{{item.odProductPprice}}</strong> <span>x{{item.odProductNum}}</span></p>
						</div>
					</li>
				</ul>
				<!-- 单元格 -->
				<!--是否邮寄提货卷弹出-->
				<van-popup v-model="Mailing">
					<van-row class="Mailing">
						<div :class="{Mailing_left:true, MailingActive:MailingActiveOne}" @click="MailingOne()">
							<p><strong>邮寄提货卷</strong></p>
							<p><img :src="MailingOnePic" alt=""></p>
							<p>将提货卷实体卡邮寄</p>
							<p>至你提供的地址</p>
							<p>可通过实体卡上的密码</p>
							<p>进行提货操作</p>
							<p class="active_volume" v-if="MailingActiveOne"><img src="../../../assets/img/active-volume.png" alt=""></p>
						</div>
						<div :class="{Mailing_right:true, MailingActive:MailingActiveTwo}" @click="MailingTwo">
							<p><strong>使用虚拟提货卷</strong></p>
							<p><img :src="MailingTwoPic" alt=""></p>
							<p>将提货卷实体卡邮寄</p>
							<p>至你提供的地址</p>
							<p>可通过实体卡上的密码</p>
							<p>进行提货操作</p>
							<p class="active_volume" v-if="MailingActiveTwo"><img src="../../../assets/img/active-volume.png" alt=""></p>
						</div>
						<van-button size="large" class="Mailing_button">确定</van-button>
					</van-row>
				</van-popup>
				<div style="padding-top:30px;background:#fff;">
					<div class="select">
						<p>是否邮寄提货卷</p>
						<p @click="showOne">请选择<span class="iconfont arrow-icon">&#xe66b;</span></p>
					</div>
					<div class="select">
						<div class="border-top" style="padding:2px 0;">
							<p>使用代金卷</p>
							<p>选择代金卷<span class="iconfont arrow-icon">&#xe66b;</span></p>
						</div>
					</div>
					<div class="Cell">
						<div class="border-top" style="padding:2px 0;">
							<p>可用200积分抵扣20元</p>
							<p class="checked">
								<van-checkbox v-model="checked"></van-checkbox>
							</p>
						</div>
					</div>
				</div>
				<!--价格详情-->
				<div class="myInfo">
					<div class="border-top price-content">
						<van-row>
							<van-col span="12">商品总额</van-col>
							<van-col span="12" class="price_right" style="font-wight:300;">￥{{datas.orderAllmoney}}</van-col>
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
							<van-col span="24" class="price_right">实付款 <strong class="money">￥{{datas.orderAllmoney}}</strong></van-col>
						</van-row>
					</div>
				</div>
				<!-- 付款方式 -->
				<div class='payment'>
					<p>付款方式：</p>
					<van-row>
						<van-col span="8">
							<div :class="{wx: true ,wxactive: wx }" @click='wxActive'>
								<img :src="wxPic" alt="">
								<p>微信支付</p>
							</div>
						</van-col>
						<van-col span="8">
							<div :class="{zfb: true, zfbactive: zfb }" @click='zfbActive'>
								<img :src="zfbPic" alt="">
								<p>支付宝</p>
							</div>
						</van-col>
						<van-col span="8">
							<div :class="{yl: true, ylactive: yl }" @click='ylActive'>
								<img :src="ylpic" alt="">
								<p>银联支付</p>
							</div>
						</van-col>
					</van-row>
				</div>
			</div>
			<!-- 支付订单 -->
			<div class="cart-foot">
				<p>付款 :<span>￥{{datas.orderAllmoney}}</span></p>
				<p>
					<van-button size="normal" class="btnColor" @click="goDetails()">支付订单</van-button>
				</p>
			</div>
			<!--付款方式弹出-->
			<van-popup v-model="Payment" class="Payment">
				<p>付款金额：<span>￥{{datas.orderAllmoney}}</span></p>
				<p>付款方式：<span v-text="PaymentType"></span></p>
				<van-button size="small" class="Payment-button" @click="gocartOut">去支付</van-button>
			</van-popup>
		</div>
	</div>
</template>
<script>
import wxpic from "../../../assets/img/wx.png";
import zfbpic from "../../../assets/img/zfb.png";
import ylpic from "../../../assets/img/yl.png";
import wxpicActive from "../../../assets/img/active_wx.png";
import zfbpicActive from "../../../assets/img/active_zfb.png";
import ylpicActive from "../../../assets/img/ylActive.png";
import FeaturesIcon5 from "../../../assets/img/product.png";
import MailingOnePic from "../../../assets/img/volume-one.png";
import MailingTwoPic from "../../../assets/img/volume-two.png";
import ActiveMailingOnePic from "../../../assets/img/active-volume-one.png";
import ActiveMailingTwoPic from "../../../assets/img/active-volume-two.png";
import service from "../service/index.js";
export default {
  mixins: [service],
  data() {
    return {
      imageURL: FeaturesIcon5,
      checked: false,
      zfb: false,
      wx: true,
      yl:false,
      wxPic: wxpicActive,
      zfbPic: zfbpic,
      ylpic: ylpic,
      MailingTwoPic: MailingTwoPic,
      MailingOnePic: ActiveMailingOnePic,
      Mailing: false,
      MailingActiveOne: true,
      MailingActiveTwo: false,
      Payment: false,
      away: false,
      cartList: [{}],
      infoList: [],
      datas: "",
      PaymentType: "微信支付"
    };
  },
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
    showOne() {
      this.Mailing = true;
    },
    wxActive() {
      this.wx = true;
      this.zfb = false;
      this.yl = false;
      this.wxPic = wxpicActive;
      this.zfbPic = zfbpic;
      this.ylpic = ylpic;
      this.PaymentType = "微信支付";
    },
    ylActive() {
      this.wx = false;
      this.zfb = false;
      this.yl = true;
      this.zfbPic = zfbpic;
      this.wxPic = wxpic;
      this.ylpic = ylpicActive;
      this.PaymentType = "银联支付";
    },
    zfbActive() {
      this.wx = false;
      this.zfb = true;
      this.yl = false;
      this.wxPic = wxpic;
      this.zfbPic = zfbpicActive;
      this.ylpic = ylpic;
      this.PaymentType = "支付宝支付";
    },
    MailingOne() {
      this.MailingActiveOne = true;
      this.MailingActiveTwo = false;
      this.MailingOnePic = ActiveMailingOnePic;
      this.MailingTwoPic = MailingTwoPic;
    },
    MailingTwo() {
      this.MailingActiveOne = false;
      this.MailingActiveTwo = true;
      this.MailingOnePic = MailingOnePic;
      this.MailingTwoPic = ActiveMailingTwoPic;
    },
    goDetails: function() {
      this.Payment = true;
    },
    goAddress: function() {
      this.$router.push({
        name: "cartAddress"
      });
    },
    returnCart: function() {
      this.away = true;
    },
    goaway: function() {
      this.$router.push(`/cart`);
    },
    want: function() {
      this.away = false;
    },
    gocartOut() {
      this.$router.push(`/cartOut/${this.$route.params.orderId}`);
    }
  },
  async beforeMount() {
    // 地址、
    const staffId = this.getCookie('staffId')
    const token = this.getCookie('token')
    try {
        await this.getAddress(staffId, token).then(res => {
          this.cartList = res.filter((item, index, arr) => {
          return item.adIsdefault == "1";
        });
      });
    } catch (error) {
    }
    // 订单详情
    this.selectOrderPrimaryKey({
      staffId,
      token,
      orderId:this.$route.params.orderId
    }).then(res => {
      this.datas = res;
      this.infoList = res.orderdetails;
    });
  }
};
</script>
