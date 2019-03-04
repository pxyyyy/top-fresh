<style lang="less" scoped>
	@import "./collageShare.less";
</style>
<style>
	.details_content img {
		width: 100%;
		border: 0;
		vertical-align: middle;
	}
</style>

<template>
	<!-- 商品详情 页面-->
	<div>
		<!-- 商品主图  有赞轮播组件-->
		<swiper :options="swiperOption" v-if="infoProduct" :class="{marginTop:ismarginTop}">
			<swiper-slide v-for="(image, index) in infoProduct.product.proImgs" :key="index">
				<img v-lazy="image.imgUrl" class="img" />
			</swiper-slide>
		</swiper>
		<!-- 商品详细信息 -->
		<div class="discript" v-if="infoProduct">
			<p class="title">{{infoProduct.product.productName}}{{infoProduct.product.productDetail}}</p>
			<p class="priceaa">
				<span class="collage" style="font-size:14px;">
					￥{{infoProduct.pingMoney}}/{{infoProduct.product.productUnit}}
				</span>
				<span class="alone">
					单价买 ￥{{infoProduct.product.productPrice}}
				</span>
			</p>
			<ul class="collage-success-info-people" v-if="infoProduct.user">
				<li v-for="(item,index) in infoProductUser" :key="index">
					<img :src="item.staffPhotourl ? item.staffPhotourl : defaultavatar">
				</li>
				<li v-for="item in (infoProduct.successPeopleNum - infoProductUser.length )" :key="item" v-if="infoProduct.successPeopleNum < 5 && infoProductUser">
					<img :src="xhdpiPic">
				</li>
				<li v-for="item in (5 - infoProductUser.length)" :key="item" v-if="infoProduct.successPeopleNum >= 5 && infoProductUser ">
					<img :src="xhdpiPic">
				</li>
			</ul>
			<p class="collage-success-info-success">
        还差
        <span style="color: red">{{infoProduct.lackPeopleNum}}</span>
        人，
				结束时间
				<span class="time">{{infoProduct.endTime}}</span>
			</p>
			<p class="collage-success-info-button">
				<button @click="participate" v-text="riend"></button>
			</p>
			<p class="collage-success-info-bottom">
				<span :class="{spanActive1:isspan1}">邀请好友参团 </span> > <span :class="{spanActive2:isspan2}">拼团成功分别发货</span>
				> <span>人数不足自动退款</span></p>
		</div>
		<div class="xinxi" v-if="infoProduct">
			<p>
				<span>商品类型:</span>
				<span v-for="(type,index) in infoProduct.product.productPtype" :key="index">
					<span class="type" v-if="type == 2">现货</span>
					<span class="type" v-else>礼卡</span>
				</span>
			</p>
			<p>
				<span>商品产地:</span>
				<span>{{infoProduct.product.productAddress}}</span>
			</p>
			<p>
				<span>配送方式:</span>
				<span>{{infoProduct.product.productSendType}}</span>
			</p>
			<p>
				<span>商品规格:</span>
				<span>{{infoProduct.product.productDetail}}</span>
			</p>
			<p>
				<span>提货周期:</span>
				<span>{{infoProduct.product.productBeginDate}} <span style="color:#e2c083 ">—</span> {{infoProduct.product.productEndDate}}</span>
			</p>
		</div>
		<div class="details" :style="{marginBottom:marginBottom}" v-if="infoProduct.product.productImg">
			<p class="details_title">
				---- 商品详情 ----
			</p>
			<div class="details_content" v-html="infoProduct.product.productImg">
			</div>
		</div>
		<!-- 遮罩 -->
		<div class="shareIt" v-if="showshareIt" @click="shareItClick">
			<div>
				<img src="../../assets/img/shareitj.png" alt="">
				<p>请点击右上角分享</p>
			</div>
		</div>
	</div>
</template>
<script src="http://res.wx.qq.com/open/js/jweixin-1.2.0.js"></script>
<script>
	import img from "../../assets/img/介绍.png";
	import traceabilityVue from "../traceability/traceability.vue";
	import { Dialog } from "vant";
	import service from "./service/index.js";
	import defaultavatar from "../../assets/img/defaultavatar.png";
	import wx from "weixin-js-sdk";
	export default {
		name: "product_details",
		mixins: [service],
		data() {
			return {
				isspan1: true,
				isspan2: false,
				defaultavatar: defaultavatar,
				riend: "立即参团",
				ismarginTop: false,
				xhdpiPic: require("../../assets/img/xhdpi.png"),
				marginBottom: "50px",
				number: 1,
				show: false,
				show1: false,
				type: "",
				timestamp: '', // 必填，生成签名的时间戳
				nonceStr: '', // 必填，生成签名的随机串
				signature: '',// 必填，签名，见附录1
				showshareIt: false,
				staffId: this.getCookie("staffId"),
				token: this.getCookie("token"),
				swiperOption: {
					loop: true,
					effect: "fade"
				},
				infoProduct: {
					product: {
						productImg: ""
					}
				},
				infoProductUser: [],
				Url: "",
				info: [],
        isBack: true,
        path: sessionStorage.getItem('path')
			};
		},
		methods: {
			shareItClick() {
				this.showshareIt = false;
			},
			giveShareInfo() {
				Android.giveShareInfo(
					"你收到一个拼团邀请",
					`${this.infoProduct.product.productName}`,
					window.location.href
				);
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
      pushHistory() {
        var state = {
          title: "拼团详情",
          url: ""
        };
        window.history.pushState(state, state.title, state.url);
      },
			openCart(type) {
				this.show1 = true;
				this.type = type;
			},
			toCart() {
				this.$router.push(`/cart?number=` + this.number);
			},
			// setCookieMethods
			setCookie(token, staffId) {
				var Days = 30; //cookie 将被保存30天
				var exp = new Date(); //获得当前时间
				exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000); //换成毫秒
				document.cookie =
					token + "=" + staffId + "; expires=" + exp.toGMTString();
			},
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
			async participate() {
				sessionStorage.link = window.location.href;
				let from = this.$route.query.from;
				if (from == "Android") {
					this.giveShareInfo();
				} else if (from == "IOS") {
					this.$bridge.callHandler(
						"giveShareInfo",
						{
							title: "你收到一个拼团邀请",
							toProductInfo: `${this.infoProduct.product.productName}`,
							link: window.location.href
						},
						data => {
						}
					);
				} else {
					if (!this.staffId && this.riend == "立即参团") {
						sessionStorage.link = window.location.href;
						this.$router.push("/login");
					} else if (this.staffId != this.$route.params.startUser && this.riend == "立即参团") {
						// 个人信息
						await this.getStaffInfo({
							staffId: this.getCookie("staffId"),
							token: this.getCookie("token")
						}).then(res => {
							var ueseInfo = res.code;
							if (ueseInfo != 100000) {
								sessionStorage.link = window.location.href;
								this.$router.push("/login");
							} else {
								if (this.riend == "立即参团") {
									this.addUserTogetherOrder({
										staffId: this.getCookie("staffId"),
										token: this.getCookie("token"),
										togetherOrderId: this.infoProduct.togetherOrderId,
										flagTO: 1,
										togetherId: this.infoProduct.togetherId,
										startUser: this.infoProduct.startUser
									}).then(result => {
										sessionStorage.teamworkMoney = "";
										if (result.code == 100003) {
											Dialog.alert({
												title: "参团提醒",
												message: "亲,你已经参加过此类团购"
											}).then(() => {
												window.location.href = "http://shop.jiweishengxian.com";
                      });
										} else {
										  sessionStorage.path = this.$route.path
											this.$router.push(`/collageDetermineOther/${result.data[0]}`);
										}
									});
								}
							}
						});
					} else if (this.staffId && this.riend == "邀请好友参团") {
						this.showshareIt = true
					}
				}
			}
		},
		mounted() {
      this.pushHistory();
      let that = this;
      window.addEventListener("popstate", function (e) {  //回调函数中实现需要的功能
        var path = sessionStorage.getItem('path');
        if (that.isBack) {
          window.location.href = `/`
        }
      }, false);
			let from = this.$route.query.from;
			if (from == "IOS" || from == "Android") {
				this.show = false;
				this.marginBottom = "0px";
			} else {
        var Request = new Object();
				Request = this.GetRequest();
				let code = Request["code"];
				this.show = true;
				if (!code) {
          this.isBack = false;
					var url = window.location.href;
					var id = this.$route.params.id, stid = this.$route.params.startUser
					window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx365ff8d24bc6fd9f&redirect_uri=http://shop.jiweishengxian.com/collageShare/${id}/${stid}&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect`;
				} else {
          this.isBack = true
        }

			}

			// if (code) {
			// 	var params = {
			// 		url: window.location.href,
			// 		code: code
			// 	}
			// 	this.getweixinSign(params).then(res => {
			// 		console.log(res)
			// 		if (res.code == 100000) {
			// 			this.timestamp = res.data.timestamp;
			// 			this.nonceStr = res.data.nonceStr;
			// 			this.signature = res.data.signature
			// 		}
			// 	})
			// } else
      var url = window.location.href;
			wx.config({
				debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
				appId: 'wx365ff8d24bc6fd9f', // 必填，企业号的唯一标识，此处填写企业号corpid
				timestamp: this.timestamp, // 必填，生成签名的时间戳
				nonceStr: this.nonceStr, // 必填，生成签名的随机串
				signature: this.signature,// 必填，签名，见附录1
				jsApiList: ['onMenuShareAppMessage', 'onMenuShareTimeline'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
			});
			wx.ready(function () {
				// config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
				wx.onMenuShareTimeline({
					title: "极味生鲜", // 分享标题
					link: url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
					// link: url + '#/...', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
					imgUrl: "http://jiweishengxian.oss-cn-qingdao.aliyuncs.com/picture/20180806/384554611533522458355.png", // 分享图标

          success() {
						alert('分享朋友圈成功')
						// 用户确认分享后执行的回调函数
					},
					cancel() {
						// 用户取消分享后执行的回调函数
					}
				})

				wx.onMenuShareAppMessage({
					title: "极味生鲜", // 分享标题
					desc: "极味生鲜邀请好友拼团", // 分享描述
					link: url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
					// link: url + '#/...', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
					imgUrl: "http://jiweishengxian.oss-cn-qingdao.aliyuncs.com/picture/20180806/384554611533522458355.png", // 分享图标
          // type: 'video', // 分享类型,music、video或link，不填默认为link
					// dataUrl: this.details.videoUrl, // 如果type是music或video，则要提供数据链接，默认为空
					success: function () {
						alert('分享给朋友成功')
						// 用户确认分享后执行的回调函数
					},
					cancel: function () {
						// 用户取消分享后执行的回调函数
					}
				})

			});
			wx.error(function (res) {
				// config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
			});
		},
		created() {
			window.giveShareInfo = this.giveShareInfo;
		},
		async beforeMount() {
			let from = this.$route.query.from;
			if (from) {
				this.ismarginTop = true;
			}
			await this.getTogetherOrderProcessMessage({
				togetherOrderId: this.$route.params.id
			}).then(res => {
				this.infoProduct = res;
				this.infoProductUser = res.user;
				const { status } = res.together;
				if (status == 2) {
          if (this.staffId == this.$route.params.startUser) {
              this.showshareIt = true;
              this.riend = "邀请好友参团";
            } else {
              this.riend = "立即参团";
            }
        }else if ( status == 3) {
				  this.riend ='拼团失败'
        }else if (status == 4) {
				  this.riend = '拼团成功'
        }else if (status == 5) {
				  this.riend = '取消拼团'
        }
				this.startUser = res.startUser;
				if (from == "IOS" || from == "Android") {
          this.showshareIt = false;
				} else {
					for (let item in this.infoProductUser) {
						if (this.getCookie("staffId") == this.infoProductUser[item].staffId) {
							this.showshareIt = true;
						}
					}
					if (this.infoProductUser.length == this.infoProduct.successPeopleNum) {
						this.showshareIt = false;
						this.isspan1 = false;
						this.isspan2 = true;
					}
				}
			});
		}
	};
</script>
