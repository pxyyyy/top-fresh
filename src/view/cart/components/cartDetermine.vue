<style lang="less" scoped>
	@import "./cartDetermine.less";
</style>
<style>
	.Cell .van-icon {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
		margin-top: 0;
		margin-left: 0;
	}

	.van-dialog__confirm,
	.van-dialog__confirm:active {
		color: #e2bf85
	}
</style>
<template>
	<div>
		<div class="cart_min">
			<!-- 收货地址 -->
			<div class="address" v-if="showadress" @click="goAddress()">
				<van-row class="address-content">
					<van-col span="2" class="address-left">
						<img src="../../../assets/icon/确认订单地址@2x.png" alt="">
					</van-col>
					<van-col span="20">
						<p class="addwrap">
							<!-- <span>收货人: </span> -->
							<span class="adname">收货人: {{cartList[0].adName}}</span>
							<span class="adphone">{{cartList[0].adPhone}}</span>
						</p>
						<p style="margin-top:5px;">
							<!-- <span>收货地址: </span> -->
							<span class="userAddress">收货地址: {{cartList[0].adAddress}} {{cartList[0].adAddressInfo}}</span>
						</p>
					</van-col>
        </van-row>
			</div>
      <div class="address" v-if="showadress === false" @click="goEditing()">
        <van-row class="address-content">
          <van-col span="2" class="address-left">
            <img src="../../../assets/icon/确认订单地址@2x.png" alt="">
          </van-col>
          <van-col span="20">
            <van-col span="20">
              <span class="userAddress">请设置收件信息</span>
            </van-col>
          </van-col>
        </van-row>
      </div>
			<!-- 商品详情 -->
			<div>
				<ul v-for="item in infoList" :key="item.odProductId" v-if="infoList">
					<li class="item">
						<img :src="item.odProductIcon" alt="" class="item-img">
						<div class="item-info">
							<p class="item-title">{{item.odProductName}}</p>
							<p class="item-desc">{{item.odProductDes}}</p>
							<p class="item-button">
								<strong class="money">￥{{item.odProductPprice}}</strong>
								<span>x{{item.odProductNum}}</span>
							</p>
						</div>
					</li>
				</ul>
			</div>
			<!--<div>-->
			<!--<div v-if="showProduct">-->
			<!--<ul v-for="item in productArr" :key="item.productId">-->
			<!--<li class="item">-->
			<!--<img :src="item.proImgs[0].imgUrl" alt="" class="item-img">-->
			<!--<div class="item-info">-->
			<!--<p class="item-title">{{item.productName}}</p>-->
			<!--<p class="item-desc">{{item.productInfo}}</p>-->
			<!--<p class="item-button">-->
			<!--<strong class="money">￥{{item.productPrice}}</strong>-->
			<!--<span>x{{1}}</span>-->
			<!--</p>-->
			<!--</div>-->
			<!--</li>-->
			<!--</ul>-->
			<!--</div>-->
			<!--<div v-if="buyNow">-->
			<!--<ul v-for="item in productArr" :key="item.odProductId">-->
			<!--<li class="item">-->
			<!--<img :src="item.odProductIcon" alt="" class="item-img">-->
			<!--<div class="item-info">-->
			<!--<p class="item-title">{{item.odProductName}}</p>-->
			<!--<p class="item-desc">{{item.odProductDes}}</p>-->
			<!--<p class="item-button">-->
			<!--<strong class="money">￥{{item.odProductPprice}}</strong>-->
			<!--<span>x{{item.odProductNum}}</span>-->
			<!--</p>-->
			<!--</div>-->
			<!--</li>-->
			<!--</ul>-->
			<!--</div>-->
			<!--<div v-if="car">-->
			<!--<ul v-for="item in productArr" :key="item.carProductId">-->
			<!--<li class="item">-->
			<!--<img :src="item.carProductIcon" alt="" class="item-img">-->
			<!--<div class="item-info">-->
			<!--<p class="item-title">{{item.carProductName}}</p>-->
			<!--<p class="item-desc">{{item.carProductDes}}</p>-->
			<!--<p class="item-button">-->
			<!--<strong class="money">￥{{item.carProductPprice}}</strong>-->
			<!--<span>x{{item.carProductNum}}</span>-->
			<!--</p>-->
			<!--</div>-->
			<!--</li>-->
			<!--</ul>-->
			<!--</div>-->
			<!--是否邮寄提货券弹出-->
			<van-popup v-model="Mailing">
				<van-row class="Mailing">
					<div :class="{Mailing_left:true, MailingActive:MailingActiveOne}" @click="MailingOne()">
						<p>
							<strong>邮寄提货券</strong>
						</p>
						<p><img :src="MailingOnePic" alt=""></p>
						<p>将提货券实体卡邮寄</p>
						<p>至你提供的地址</p>
						<p>可通过实体卡上的密码</p>
						<p>进行提货操作</p>
						<p class="active_volume" v-if="MailingActiveOne">
							<img src="../../../assets/img/active-volume.png" alt="">
						</p>
					</div>
					<div :class="{Mailing_right:true, MailingActive:MailingActiveTwo}" @click="MailingTwo()">
						<p>
							<strong>使用虚拟提货券</strong>
						</p>
						<p><img :src="MailingTwoPic" alt=""></p>
						<p>将提货券实体卡邮寄</p>
						<p>至你提供的地址</p>
						<p>可通过实体卡上的密码</p>
						<p>进行提货操作</p>
						<p class="active_volume" v-if="MailingActiveTwo">
							<img src="../../../assets/img/active-volume.png" alt="">
						</p>
					</div>
					<van-button size="large" class="Mailing_button" @click="determine">确定</van-button>
				</van-row>
			</van-popup>
			<div style="padding-top:30px;background:#fff;">
				<!--<div class="select" @click="showOne" v-if="showMail">-->
				<!--<p>是否邮寄提货券</p>-->
				<!--<p>-->
				<!--{{MailingText}}-->
				<!--<span class="iconfont arrow-icon">&#xe66b;</span>-->
				<!--</p>-->
				<!--</div>-->
				<div class="select" @click="showOne" v-if="showMail">
					<p>是否邮寄提货券</p>
					<p>
						{{MailingText}}
						<span class="iconfont arrow-icon">&#xe66b;</span>
					</p>
				</div>
				<div class="select">
					<div class="border-top" style="padding:2px 0;" @click='usingaVouchers'>
						<p>使用代金券</p>
						<p v-if="this.offer">
							-{{this.offer}}元
							<span class="iconfont arrow-icon">&#xe66b;</span>
						</p>
						<p v-else>
							<span v-text="offerText"></span>
							<span class="iconfont arrow-icon">&#xe66b;</span>
						</p>
					</div>
				</div>
				<div class="Cell">
					<div class="border-top" style="padding:2px 0;">
						<p>
							可用{{this.integralZero}}积分,抵扣{{this.integralOne}}元
							<span class="iconfont integral" @click="help">&#xe62a;</span>
						</p>
						<p class="checkeds">
							<van-checkbox v-model="checked"></van-checkbox>
						</p>
					</div>
				</div>
				<div class="selects">
					<div class="border-top" style="padding-top: 10px">
						<p>商品总额</p>
						<p class="black">
							<!--￥{{this.allPrice}}-->
							￥{{datas.orderAllmoney}}
						</p>
					</div>
				</div>
				<div class="selects">
					<div>
						<p>代金券优惠</p>
						<p class="black" v-if="offer">-￥{{offer}}
						</p>
						<p class="black" v-else>-￥0.00
						</p>
					</div>
				</div>
				<div class="selects" style="padding-bottom: 5px">
					<div>
						<p>积分优惠</p>
						<p class="black" v-if="checked">
							-￥{{this.integralOne}}
						</p>
						<p v-else>
							-￥0.00
						</p>
					</div>
				</div>
      </div>
      <div class='payment'>
        <p>付款方式：</p>
        <van-row>
          <van-col span="24">
            <div :class="{wx: true ,wxactive: wx }" @click='wxActive'>
              <img :src="wxPic" alt="">
              <p>微信支付</p>
            </div>
          </van-col>
        </van-row>
      </div>
			<div class="cart-foot">
				<p>付款 :
					<span v-if="orderAllmoney < 0">
						￥{{0.01}}
					</span>
					<span v-else>￥{{orderAllmoney}}</span>
				</p>
				<p>
					<van-button size="normal" class="btnColor" @click="goDetails()">支付订单</van-button>
				</p>
			</div>
			<!--付款方式弹出-->
			<van-popup v-model="Payment" class="Payment">
				<p>付款金额：
					<span v-if="orderAllmoney < 0">
						￥{{0.01}}
					</span>
					<span v-else>￥{{orderAllmoney}}</span>
				</p>
				<p>付款方式：
					<span v-text="PaymentType"></span>
				</p>
				<van-button size="small" class="Payment-button" @click="gocartOut">去支付</van-button>
			</van-popup>
		</div>
	</div>
</template>
<script scopedSlots>
	import zfbpic from "../../../assets/img/zfb.png";
	import ylpic from "../../../assets/img/yl.png";
	import wxpicActive from "../../../assets/img/active_wx.png";
	import FeaturesIcon5 from "../../../assets/img/product.png";
	import MailingOnePic from "../../../assets/img/volume-one.png";
	import MailingTwoPic from "../../../assets/img/volume-two.png";
	import ActiveMailingOnePic from "../../../assets/img/active-volume-one.png";
	import ActiveMailingTwoPic from "../../../assets/img/active-volume-two.png";
	import productInfo from "../../product/service/product.js";
	import service from "../service/index.js";
	import { Dialog, Toast } from "vant";

	export default {
		mixins: [service, productInfo],
		data() {
			return {
				imageURL: FeaturesIcon5,
				checked: false,
				offerText: "选择代金券",
				zfb: false,
				wx: true,
				yl: false,
				wxPic: wxpicActive,
				zfbPic: zfbpic,
				ylpic: ylpic,
				MailingTwoPic: ActiveMailingTwoPic,
				MailingOnePic: MailingOnePic,
				Mailing: false,
				MailingActiveOne: true,
				MailingActiveTwo: false,
				Payment: false,
				away: false,
				cartList: null,
				// infoList: sessionStorage.getItem("infoList"),
				infoList: [],
				datas: '',
				PaymentType: "微信支付",
				MailingText: "请选择",
				MailingType: "",
				offer: sessionStorage.getItem("money"),
				scId: sessionStorage.getItem("scId"),
				integralZero: "",
				integralOne: "",
				code: "",
				isBack: true,
				product: "",
				imgUrl: "",
				showMail: false,
				showProduct: false,
        showadress: false,
				buyNow: false,
				number: '',
				proNum: '',
				carPrice: sessionStorage.getItem('carPrice'),
				allPrice: null,
				productArr: sessionStorage.getItem('productArr'),
				staffId: this.getCookie("staffId"),
				token: this.getCookie("token"),
				orderSendlading: '',
				staffCouponId: '',
				orderScore: '',
				orderScoremoney: '',
				types: '',
        type: 0,
				adress: sessionStorage.getItem('adress'),
				// carIds: '',
				// adId: '',
				// car: false,
				// allmoney: null,
				// showAdress: false,
				// adress: false
				integral: "",
				userInfo: "",
				orderId: "",
				jmoney: "",
				orderCode: "",
        path: sessionStorage.getItem('path'),
				email: sessionStorage.getItem('email')
			};
		},
		// 优惠的价格
		// computed: {
		// 	orderAllmoney() {
		// 		if (this.checked) {
		// 			if (sessionStorage.getItem("money")) {
		// 				return (
		// 					this.allPrice -
		// 					sessionStorage.getItem("money") -
		// 					this.integralOne
		// 				);
		// 			} else {
		// 				return this.allPrice - this.integralOne;
		// 			}
		// 		} else {
		// 			if (sessionStorage.getItem("money")) {
		// 				return this.allPrice - sessionStorage.getItem("money");
		// 			} else {
		// 				return this.allPrice;
		// 			}
		// 		}
		// 	}
		// },
		computed: {
			orderAllmoney() {
				if (this.checked) {
					if (sessionStorage.getItem("money")) {
						return (
							this.datas.orderAllmoney -
							sessionStorage.getItem("money") -
							this.integralOne
						);
					} else {
						return this.datas.orderAllmoney - this.integralOne;
					}
				} else {
					if (sessionStorage.getItem("money")) {
						return this.datas.orderAllmoney - sessionStorage.getItem("money");
					} else {
						return this.datas.orderAllmoney;
					}
				}
			}
		},
		methods: {
			GetRequest() {
				var url = location.search; //获取url中"?"符后的字串
				var theRequest = new Object();
				if (url.indexOf("?") != -1) {
					var str = url.substr(1);
					var strs = str.split("&");
					for (var i = 0; i < strs.length; i++) {
						theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
					}
				}
				return theRequest;
			},
			help() {
				Dialog.alert({
					title: "积分说明",
					message: this.ueseInfo.jifenInfo
				}).then(() => {
					// on close
				});
			},
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
			setCookie(token, staffId) {
				var Days = 30; //cookie 将被保存30天
				var exp = new Date(); //获得当前时间
				exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000); //换成毫秒
				document.cookie =
					token + "=" + staffId + "; expires=" + exp.toGMTString();
			},
			showOne() {
				this.Mailing = true;
			},
			usingaVouchers() {
        sessionStorage.email = this.MailingText;
        sessionStorage.computedMoney = this.orderAllmoney;
				if (this.offer) {
					Dialog.confirm({
						title: '是否重新选择优惠券',
						confirmButtonText: '重新选择',
						cancelButtonText: '取消选择'
					}).then(() => {
						this.$router.push(`/coupon/${this.$route.params.orderId}/0`);
					}).catch(() => {
						this.offer = null;
					})
				} else {
					this.$router.push(`/coupon/${this.$route.params.orderId}/0`);
				}


			},
			// 邮寄提货券确定点击
			determine() {
				if (this.MailingText == "请选择") {
					this.MailingText = "邮件提货券";
				}
				this.Mailing = false;
				console.log(this.MailingText,'text')
			},
			// 付款图标点击
			wxActive() {
				this.wx = true;
				this.zfb = false;
				this.yl = false;
				this.wxPic = wxpicActive;
				this.zfbPic = zfbpic;
				this.ylpic = ylpic;
				this.PaymentType = "微信支付";
			},
			// 提货券点击动画
			MailingOne() {
				this.MailingActiveOne = true;
				this.MailingActiveTwo = false;
				this.MailingOnePic = MailingOnePic;
				this.MailingTwoPic = ActiveMailingTwoPic;
				this.MailingText = "邮件提货券";
			},
			MailingTwo() {
				this.MailingActiveOne = false;
				this.MailingActiveTwo = true;
				this.MailingOnePic = ActiveMailingOnePic;
				this.MailingTwoPic = MailingTwoPic;
				this.MailingText = "虚拟提货券";
			},
      goEditing: function () {
        this.isBack = false;
        this.$router.push(`/cartAddressEditing/${this.type}`);
      },
			goDetails: function () {
				var staffWechat = this.getCookie("staffWechat");
				if (this.cartList === null) {
          Dialog.confirm({
            title: "请输入地址",
            confirmButtonText: "立即录入"
          }).then(() => {
            this.isBack = false;
            this.$router.push(`/cartAddressEditing/${this.type}`);
          }).catch(
          )
				} else if (
					this.MailingText == "请选择" &&
					this.showMail === true
				) {
					Toast("请选择提货券类型");
				} else if (!staffWechat) {
					// Toast("未绑定微信，将进行微信绑定")
				} else {
					this.Payment = true;
					if (this.MailingText == "邮寄提货券") {
						this.orderSendlading = 1;
					} else {
						this.orderSendlading = 2;
					}
					if (this.checked) {
						if (this.datas.orderdetails[0].odPtypeId != 2) {
							this.updateOrderBeginPay({
								staffId: this.getCookie("staffId"),
								token: this.getCookie("token"),
								orderId: this.$route.params.orderId,
								adId: this.cartList[0].adId,
								orderSendlading: this.orderSendlading,
								staffCouponId: sessionStorage.getItem("scId") || "",
								orderScore: this.integralZero,
								orderScoremoney: this.integralOne
							}).then(res => {
								this.jmoney = res.data[0];
							});
						} else {
							this.updateOrderBeginPay({
								staffId: this.getCookie("staffId"),
								token: this.getCookie("token"),
								orderId: this.$route.params.orderId,
								adId: this.cartList[0].adId,
								staffCouponId: sessionStorage.getItem("scId") || "",
								orderScore: this.integralZero,
								orderScoremoney: this.integralOne
							}).then(res => {
								this.jmoney = res.data[0];
							});
						}
					} else {
						if (this.datas.orderdetails[0].odPtypeId != 2) {
							this.updateOrderBeginPay({
								staffId: this.getCookie("staffId"),
								token: this.getCookie("token"),
								orderId: this.$route.params.orderId,
								orderSendlading: this.orderSendlading,
								adId: this.cartList[0].adId,
								staffCouponId: sessionStorage.getItem("scId") || ""
							}).then(res => {
								this.jmoney = res.data[0];
							});
						} else {
							this.updateOrderBeginPay({
								staffId: this.getCookie("staffId"),
								token: this.getCookie("token"),
								orderId: this.$route.params.orderId,
								adId: this.cartList[0].adId,
								staffCouponId: sessionStorage.getItem("scId") || ""
							}).then(res => {
								this.jmoney = res.data[0];
							});
						}
					}

					// this.$router.push(`/paymentOrder/${this.orderId}`)

					// 	  if(this.MailingText === '邮件提货券') {
					// 	    this.orderSendlading = '1'
					// }
					//   this.orderSendlading = '2';

					// 	  const param = {
					//   proNum: this.number,
					//   staffCouponId: this.scId,
					//   orderScore: this.integralZero,
					//   orderScoremoney: this.integralOne,
					//   types: this.type,
					//   productId: this.productId,
					//   staffId: this.staffId,
					//   token: this.token,
					//   adId: this.cartList.adId,
					//   carIds:this.carIds
					// };
					// this.newAddOrder(param)
					//   .then(res =>{
					//     sessionStorage.all = JSON.stringify(res[0]);
					//     sessionStorage.removeItem('money');
					//     sessionStorage.removeItem('scId');
					//     this.$router.push(`/paymentOrder`);
					//   });

				}

			},
			goAddress: function () {
				this.isBack = false;
				this.$router.push({
					name: "cartAddress"
				});
			},
			returnCart: function () {
				this.away = true;
			},
			goaway: function () {
				this.$router.go(-1);
			},
			want: function () {
				this.away = false;
			},
			pushHistory() {
				var state = {
					title: "确认订单",
					url: ""
				};
				window.history.pushState(state, state.title, state.url);
			},


			// 微信支付
			async gocartOut() {
				var staffWechat = this.getCookie("staffWechat");
				await this.weixinPay({
					staffId: this.getCookie("staffId"),
					token: this.getCookie("token"),
					orderCode: this.orderCode,
					jmoney: this.jmoney,
					title: "支付订单",
					ttt: this.code
				}).then(res => {
					sessionStorage.removeItem('adress');
					var orderId = this.$route.params.orderId;
					WeixinJSBridge.invoke(
						"getBrandWCPayRequest",
						{
							appId: res.data.info.appId, //公众号名称，由商户传入
							timeStamp: res.data.info.timeStamp, //时间戳，自1970年以来的秒数
							nonceStr: res.data.info.nonceStr, //随机串
							package: res.data.info.package,
							signType: res.data.info.signType, //微信签名方式：
							paySign: res.data.info.sign //微信签名
						},
						function (re) {
							if (re.err_msg == "get_brand_wcpay_request:ok") {
								window.location.href = `http://shop.jiweishengxian.com/cartOut/${orderId}`;

              }
						}
					);
				});
			}
		},

		mounted() {
      document.title = "确认订单";
			this.GetRequest;
			var Request = new Object();
			Request = this.GetRequest();
			this.code = Request["code"];

			if (!this.code) {
				this.isBack = false;
				var url = `http://shop.jiweishengxian.com/cartDetermine/${this.$route.params.orderId}`;
        window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx365ff8d24bc6fd9f&redirect_uri=${url}&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect`;
			} else {
				this.isBack = true
			}
      this.pushHistory();
      let that = this;
      window.addEventListener("popstate", function (e) {  //回调函数中实现需要的功能
        var path = sessionStorage.getItem('path');
        if (that.isBack) {
          // window.location.href =  `http://shop.jiweishengxian.com${path}`;
          that.$router.go(-2);
          sessionStorage.removeItem('email')
        }
      }, false);
			var staffWechat = this.getCookie("staffWechat");

			if (this.code && !staffWechat) {
				this.updateOpenId({
					staffId: this.getCookie("staffId"),
					token: this.getCookie("token"),
					type: 3,
					code: this.code
				}).then(res => {
					if (res.code == 100000) {
						Toast("绑定成功");
					} else {
					}
				});
			}
			// 地址、
			const staffId = this.getCookie("staffId");
			const token = this.getCookie("token");
			this.getAddress(staffId, token)
				.then(res => {
					// this.cartList =  res.filter((item) => {
					//        return item.adIsdefault == "1";
					//   });
					// if(this.cartList.length !== 0) {
					// this.cartList = this.cartList[0];
					// this.adress = true;
					// }else {
					//   this.showAdress = true;
					// }
					// console.log(this.adress,'adress')
          if (res.length > 0) {
            this.cartList = res.filter((item, index, arr) => {
              return item.adIsdefault == "1";
            });
            if (this.cartList.length == 0) {
              this.showadress = false;
            }else {
              this.showadress = true;
            }
          } else if (res.length == 0) {
            sessionStorage.removeItem('adress');
            this.adress = null;
            this.showadress = false;
            this.cartList = null
          }
          this.adress = JSON.parse(this.adress);
          if (this.adress !== null) {
            this.showadress = true;
            this.cartList = this.adress;
          }
          if(this.email !== null) {
            this.MailingText = this.email;
          }

				});
			//订单详情
			this.selectOrderPrimaryKey({
				staffId,
				token,
				orderId: this.$route.params.orderId
			}).then(res => {
				this.datas = res;
				// 积分
				this.getScoreByOrderId({
					staffId,
					token,
					allmoney: this.datas.orderAllmoney,
				}).then(res => {
					this.integralZero = res.data[0];
					this.integralOne = res.data[1];
				});

				// 优惠券;
				this.getCoupnsListByOrderId({
					token: this.getCookie("token"),
					staffId: this.getCookie("staffId"),
					allmoney: this.datas.orderAllmoney
				}).then(res => {
					if (!res) {
						this.offerText = "无可用代金券";
					}
				});
				this.infoList = res.orderdetails;
				if (this.infoList[0].odPtypeId !== '2') {
					this.showMail = true;
				}
				this.orderId = res.orderId;
				this.orderCode = res.orderCode;
			});


			// 个人信息
			this.getStaffInfo({
				staffId: this.getCookie("staffId"),
				token: this.getCookie("token")
			}).then(res => {
				this.ueseInfo = res.data;
			});


		},
		// async beforeMount() {

		// this.productArr = JSON.parse(this.productArr);
		// var allprice = 0;
		// const number = [];
		// const carProductId = [];
		// const carIds = [];
		// this.productArr.forEach(x =>{
		//   if (x.productId) {
		//     this.showProduct = true;
		//     if(x.productPtype !== '2') {
		//       this.showMail = true
		//     }
		//     this.number = '1';
		//     this.allmoney =  this.productArr[0].productPrice;
		//     allprice += parseFloat(x.productPrice);
		//     this.type = this.productArr[0].productPtype;
		//     this.productId =  this.productArr[0].productId;
		//     this.allPrice = allprice;
		//   } if (x.carProductId){
		//     this.car = true;
		//     if(x.carPtype !== '2') {
		//       this.showMail = true
		//     }
		//     number.push(x.carProductNum) ;
		//     carProductId.push(x.carProductId);
		//     carIds.push(x.carId);
		//     this.allmoney = JSON.parse(this.carPrice);
		//     this.allPrice = JSON.parse(this.carPrice);
		//     this.type = this.productArr[0].carPtype;
		//   } if (x.odProductId) {
		//     this.buyNow = true;
		//     if(x.odPtypeId !== '2') {
		//       this.showMail = true
		//     }
		//     this.number = this.productArr[0].odProductNum;
		//     carProductId.push(x.odProductId);
		//     this.allmoney =  this.productArr[0].odProductPprice;
		//     allprice += parseFloat(x.odProductPprice);
		//     this.type = this.productArr[0].odPtypeId;
		//     this.productId =  this.productArr[0].odProductId;
		//     this.allPrice = this.number*this.allmoney ;
		//   }
		// });
		//     if(number.length !== 0) {
		//       this.number = number.join(",")
		//     }
		//     if(carProductId.length !== 0) {
		//       this.productId = carProductId.join(",")
		//     }
		//     if(carIds.length !== 0) {
		//       this.carIds = carIds.join(",")
		//     }

		// this.getCoupnsListByOrderId({
		//   token: this.getCookie("token"),
		//   staffId: this.getCookie("staffId"),
		//   allmoney: this.allmoney
		// }).then(res => {
		//   if (!res) {
		//     this.offerText = "无可用代金券";
		//   }
		// });
		//   // 积分
		//   this.getScoreByOrderId({
		//     token: this.getCookie("token"),
		//     staffId: this.getCookie("staffId"),
		//     allmoney: this.allmoney
		//   }).then(res => {
		//     this.integralZero = res.data[0];
		//     this.integralOne = res.data[1];
		//   });
		// }





	};
</script>
