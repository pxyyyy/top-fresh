<template>
	<div class="wrapper-a">
		<div class="bg-top">
			<img src="../../../assets/img/GiftcardText.png" alt="">
		</div>
		<div class="bg-bottom">
			<div class="wrap-text">
				<div class="product-img">
					<img :src="product.productIcon" alt="">
				</div>
				<div class="product-title">
					<h3>{{product.productName}}</h3>
					<h4>{{product.productDetail}}</h4>
					<h1 class="gitcard-money">￥{{product.productPrice}}</h1>
				</div>
			</div>
			<div class="bg-s">
				<div class="product-bottom">
					<van-row>
            <van-cell-group style="border-radius: 5px">
              <van-field style="padding-left: 10px" v-model="phone" center clearable placeholder="请输入手机号">
                <van-button @click="verificationCode" slot="button" size="small" type="primary" style="background-color: white;border-color: white;
                border-left-color: grey; padding-left: 10px; color: #e2bf85">{{content}}</van-button>
                <!--<van-button v-if="phone.length !== 11" slot="button" size="small" type="primary" style=" background-color: darkgray;color: white;-->
                 <!--border-color: darkgray;" disable>{{content}}</van-button>-->
              </van-field>
            </van-cell-group>
          </van-row>
          <p style="padding-bottom: 20px">
            <input style="border-radius: 5px" type="number" class="test" placeholder="请输入验证码" @keyup="hideKeyboard" v-model="verificationCodenumber"/>
          </p>
					<button @click="immediately" class="buttons">立即领取</button>
				</div>
			</div>
		</div>
		<div class="shareIt" v-if="showshareIt" @click="shareItClick">
			<div>
				<img src="../../../assets/img/shareitj.png" alt="">
				<p>请点击右上角分享</p>
			</div>
		</div>
	</div>
</template>
<script src="http://res.wx.qq.com/open/js/jweixin-1.2.0.js"></script>

<script>
	import coupon from "../service/coupon";
	import { Decrypt, Encrypt } from "@/assets/js/crypto.js";
	import { Toast } from "vant";
	export default {
		mixins: [coupon],
		data() {
			return {
				product: "",
				content: "发送验证码", // 按钮里显示的内容
				total: 10, //记录具体倒计时时间
				verificationCodenumber: "",
				phone: "",
				d2: "",
				codeValue: "",
        showButton: false,
				showshareIt: false,
        isBack: false

      };
		},
		methods: {
			immediately() {
				const TIME_COUNT = 60;
				let reg = /^[1][3,4,5,7,8][0-9]{9}$/;
				if (this.phone == "") {
					Toast("请输入手机号");
				} else if (!reg.test(this.phone) || this.phone.length < 11) {
					Toast("请输入正确手机号");
				} else if (this.verificationCodenumber == "") {
					Toast("请输入验证码");
				} else {
					this.getFriend({
						phone: this.phone,
						msgcode: this.verificationCodenumber,
						odId: this.$route.params.id
					}).then(res => {
						if (res.code == "100000") {
							Toast("领取成功");
							setTimeout(() => {
								window.location.href = "http://shop.jiweishengxian.com";
              }, 2000);
						} else {
							Toast(res.message);
						}
					});
				}
			},
			getCookie(name) {
				var arr,
					reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
				if ((arr = document.cookie.match(reg))) {
					return unescape(arr[2]);
				} else {
					return null;
				}
			},
			hideKeyboard() {
				if (this.verificationCode.length == 6) {
					document.activeElement.blur(); // ios隐藏键盘
					this.$refs.input.blur(); // android隐藏键盘
				}
			},
      pushHistory() {
        var state = {
          title: "提货券领取",
          url: ""
        };
        window.history.pushState(state, state.title, state.url);
      },
			shareItClick() {
				this.showshareIt = false;

				//   $(function() {
				//     var timestamp = $("#timestamp").val();//时间戳
				//     var nonceStr = $("#noncestr").val();//随机串
				//     var signature = $("#signature").val();//签名
				//     wx.config({
				//       debug : false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
				//       appId : 'wx365ff8d24bc6fd9f', // 必填，公众号的唯一标识
				//       timestamp : timestamp, // 必填，生成签名的时间戳
				//       nonceStr : nonceStr, // 必填，生成签名的随机串
				//       signature : signature,// 必填，签名，见附录1
				//       jsApiList : [ 'scanQRCode','onMenuShareAppMessage','onMenuShareTimeline' ]
				//       // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
				//     });

				//     wx.ready(function(){
				//       // wx.hideOptionMenu();
				//       wx.onMenuShareTimeline({
				//         title: this.product.productName,
				//         link: `http://shop.jiweishengxiang.com/collectCoupons/${this.$route.params.id}?staffid=${this.getCookie('staffId')}`,
				//         imgUrl: this.product.proImgs[0].imgUrl,
				//         success: function () {
				//           // 用户确认分享后执行的回调函数
				//           alert('分享到朋友圈成功');
				//         },
				//         cancel: function () {
				//           // 用户取消分享后执行的回调函数
				//           alert('你没有分享到朋友圈');
				//         }
				//       });
				//       wx.onMenuShareAppMessage({
				//         title: this.product.productName,
				//         desc: this.product.productInfo,
				//         link: `http://shop.jiweishengxiang.com/collectCoupons/${this.$route.params.id}?staffid=${this.getCookie('staffId')}`,
				//         imgUrl: this.product.proImgs[0].imgUrl,
				//         trigger: function (res) {
				//           // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
				//         },
				//         success: function (res) {
				//           alert('分享给朋友成功');
				//         },
				//         cancel: function (res) {
				//           alert('你没有分享给朋友');
				//         },
				//         fail: function (res) {
				//           alert(JSON.stringify(res));
				//         }
				//       });
				//     });
				//   });
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
			verificationCode() {
				const TIME_COUNT = 60;
				let reg = /^[1][3,4,5,7,8][0-9]{9}$/;
				if (this.phone == "") {
					Toast("请输入手机号");
				} else if (!reg.test(this.phone) || this.phone.length < 11) {
					Toast("请输入正确手机号");
				} else {
					let dd = Encrypt(this.phone);
					this.d2 = dd;
					if (this.content == "发送验证码" || this.content == "重新发送验证码") {
						this.getCode(this.d2).then(res => {
							this.codeValue = res[0].codeValue;
						});
						let time = setInterval(() => {
							this.total--;
							this.content = this.total + "s后重新发送";
							if (this.total == 0) {
								this.content = "重新发送验证码";
								this.total = 10;
								clearInterval(time);
							}
						}, 1000);
					}
				}
			}
		},
		beforeMount() {
			var loc = location.href;
			var n1 = loc.length; //地址的总长度
			var n2 = loc.indexOf("="); //取得=号的位置
			var staffid = loc.substr(n2 + 1, n1 - n2); //从=号后面的内容
			document.title = "提货券领取";
			this.getLadingPrimaryKey({
				odId: this.$route.params.id
			}).then(res => {
				this.product = res;
			});
			if (staffid == this.getCookie("staffId")) {
				this.showshareIt = true;
			}
		},
		mounted() {
		  const{ isShare } = this.$route.params;
      if ( isShare == 'false' ){
        //包含isShare
        this.showshareIt = false;
      }else {
        this.showshareIt = true;
      }
      this.pushHistory();
      let that = this;
      window.addEventListener("popstate", function(e) {  //回调函数中实现需要的功能
        if(that.isBack){
          if(isShare == 'false' ){
            //包含
            this.showshareIt = false;
            wx.closeWindow();
          }else{
            this.$router.push(`/LadingRoll`);
            this.showshareIt = false;
          }
        }
      }, false);
      document.title = "提货券领取";

			var Request = new Object();
			Request = this.GetRequest();
			let code = Request["code"];
			this.show = true;
			if (!code) {
        this.isBack=true;
        var url = window.location.href;
        var id = this.$route.params.id, stid = this.$route.params.startUser
        window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx365ff8d24bc6fd9f&redirect_uri=http://shop.jiweishengxian.com/collectCoupons/${this.$route.params.id}?isShare=false}&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect`;
      }else{
        this.isBack=true
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
      this.showshareIt = true;
    },
	};
</script>

<style scoped lang="less">
	img {
		vertical-align: top;
	}

	.wrapper-a {
		background: url(../../../assets/img/GiftcardBg.png) no-repeat center;
		background-size: cover;
		.bg-top {
			img {
				width: 100%;
				margin-top: 40px;
			}
		}
		.bg-bottom {
			width: 100%;
			height: 300px;
			background: url(../../../assets/img/GiftcardProduct.png) no-repeat center;
			background-size: cover;
		}
		.gitcard-money {
			color: #e11c44;
		}
		.wrap-text {
			padding-top: 20px;
			.product-img {
        text-align: center;
        margin: 0 auto;
        padding: 10px 10px;
				img {
					width: 96%;
          border-radius: 10px;
          height: 150px;
				}
			}
			.product-title {
				text-align: center;
			}
		}
		.bg-s {
			width: 100%;
			height: 300px;
			background: url(../../../assets/img/GiftcardBg.png) no-repeat center;
		}
		.product-bottom {
			height: auto;
			text-align: center;
      margin: auto 17px;
      padding: 25px 0;
      .test {
        text-align: center;
        width: 100%;
        margin: 5px 0;
        padding: 5px 0;
      }
      .button {
        width: 90%;
        margin: 5px 0;
        padding: 5px 0;
        height: 31px;
      }
			span {
				font-size: 12px;
				color: #fff;
				display: inline-block;
				margin: 30px 0;
			}
			.buttons {
				width: 100%;
				margin: 5px 0;
        padding: 5px 0;
				background: yellow;
			}
		}
	}
  .van-cell {
    padding: 0;
    border-radius: 5px;
    height: 31px;
  }
  .van-hairline--top-bottom::after {
    border-width: 0 ;
  }
  .van-button--primary {
    background-color: darkgrey;
    border-color: darkgrey;
  }
	.shareIt {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.5);
		z-index: 100 !important;
		img {
			position: absolute;
			top: 20px;
			right: 10px;
			width: 100px;
		}
		p {
			position: absolute;
			top: 100px;
			right: 30px;
			color: #fff;
		}
	}
</style>
