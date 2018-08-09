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
}
</style>
<template>
  <div>
    <div class="cart_min">
      <!-- 收货地址 -->
      <div class="address" @click="goAddress()">
        <van-row class="address-content">
          <van-col span="2" class="address-left">
            <img src="../../../assets/img/cartDeteemine.png" alt="">
          </van-col>
          <van-col span="20">
            <p class="addwrap">
              <span>收货人: </span>
              <span v-if="cartList[0]" class="adname">{{cartList[0].adName}}</span>
              <span v-if="cartList[0]" class="adphone">{{cartList[0].adPhone}}</span>
            </p>
            <p style="margin-top:5px;">
              <span>收货地址: </span>
              <span class="userAddress" v-if="cartList[0]">{{cartList[0].adAddress}} {{cartList[0].adAddressInfo}}</span>
            </p>
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
              <p class="item-button">
                <strong class="money">￥{{item.odProductPprice}}</strong>
                <span>x{{item.odProductNum}}</span>
              </p>
            </div>
          </li>
        </ul>
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
              <p class="active_volume" v-if="MailingActiveOne"><img src="../../../assets/img/active-volume.png" alt=""></p>
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
              <p class="active_volume" v-if="MailingActiveTwo"><img src="../../../assets/img/active-volume.png" alt=""></p>
            </div>
            <van-button size="large" class="Mailing_button" @click="determine">确定</van-button>
          </van-row>
        </van-popup>
        <div style="padding-top:30px;background:#fff;">
          <!-- v-if="!infoList.orderdetails[0].odPtypeId == 2" -->
          <div class="select" @click="showOne" v-if="this.datas.orderdetails[0].odPtypeId != 2">
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
                可用{{this.integral[0]}}积分,抵扣{{this.integral[1]}}元
                <span class="iconfont integral" @click="help">&#xe62a;</span>
              </p>
              <p class="checked">
                <van-checkbox v-model="checked"></van-checkbox>
              </p>
            </div>
          </div>
          <div class="select">
            <div class="border-top" style="padding:2px 0;">
              <p>商品总额</p>
              <p class="black">
                ￥{{datas.orderAllmoney}}
              </p>
            </div>
          </div>
          <div class="select">
            <div class="border-top" style="padding:2px 0;">
              <p>代金券优惠</p>
              <p class="black" v-if="this.offer">-￥{{this.offer}}
              </p>
              <p class="black" v-else>-￥0.00
              </p>
            </div>
          </div>
          <div class="select">
            <div class="border-top" style="padding:2px 0;">
              <p>积分优惠</p>
              <p class="black" v-if="checked">
                -￥{{this.integral[1]}}
              </p>
              <p v-else>
                -￥0.00
              </p>
            </div>
          </div>
        </div>
        <!--价格详情-->
        <div class="myInfo">
          <div class="border-top price-content">
            <van-row class="price-bottom">
              <van-col span="24" class="price_right">实付款
                <strong class="money" v-if="orderAllmoney < 0">￥{{0.01}}</strong>
                <strong class="money" v-else>￥{{orderAllmoney}}</strong>
              </van-col>
            </van-row>
          </div>
        </div>
        <!-- 付款方式 -->
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
      </div>
      <!-- 支付订单 -->
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
<script>
  import zfbpic from "../../../assets/img/zfb.png";
  import ylpic from "../../../assets/img/yl.png";
  import wxpicActive from "../../../assets/img/active_wx.png";
  import FeaturesIcon5 from "../../../assets/img/product.png";
  import MailingOnePic from "../../../assets/img/volume-one.png";
  import MailingTwoPic from "../../../assets/img/volume-two.png";
  import ActiveMailingOnePic from "../../../assets/img/active-volume-one.png";
  import ActiveMailingTwoPic from "../../../assets/img/active-volume-two.png";
  import service from "../service/index.js";
  import {Dialog, Toast} from "vant";

  export default {
  mixins: [service],
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
      cartList: [{}],
      infoList: [],
      datas: "",
      PaymentType: "微信支付",
      MailingText: "请选择",
      MailingType: "",
      offer: sessionStorage.getItem("money"),
      integral: "",
      userInfo: "",
      orderSendlading: "",
      orderId: "",
      jmoney: "",
      code: "",
      orderCode: ""
    };
  },
  // 优惠的价格
  computed: {
    orderAllmoney() {
      if (this.checked) {
        if (sessionStorage.getItem("money")) {
          return (
            this.datas.orderAllmoney -
            sessionStorage.getItem("money") -
            this.integral[1]
          );
        } else {
          return this.datas.orderAllmoney - this.integral[1];
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
    showOne() {
      this.Mailing = true;
    },
    usingaVouchers() {
      this.$router.push(`/coupon/${this.$route.params.orderId}/0`);
    },
    // 邮寄提货券确定点击
    determine() {
      if (this.MailingText == "请选择") {
        this.MailingText = "邮件提货券";
      }
      this.Mailing = false;
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
    goDetails: function() {
      if (!this.cartList[0].adName) {
        Toast("请选择收货地址");
      } else if (
        this.MailingText == "请选择" &&
        this.datas.orderdetails[0].odPtypeId != 2
      ) {
        Toast("请选择提货券类型");
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
              orderScore: this.integral[0],
              orderScoremoney: this.integral[1]
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
              orderScore: this.integral[0],
              orderScoremoney: this.integral[1]
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
      }
    },
    goAddress: function() {
      this.$router.push({
        name: "cartAddress"
      });
    },
    pushHistory() {
      var state = {
        title: "title",
        url: "#"
      };
      window.history.pushState(state, "title", "#");
    },
    returnCart: function() {
      this.away = true;
    },
    goaway: function() {
      this.$router.go(-1);
    },
    want: function() {
      this.away = false;
    },
    // 微信支付
    async gocartOut() {
      await this.weixinPay({
        staffId: this.getCookie("staffId"),
        token: this.getCookie("token"),
        orderCode: this.orderCode,
        jmoney: this.jmoney,
        title: "支付订单",
        ttt: this.code
      }).then(res => {
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
          function(re) {
            if (re.err_msg == "get_brand_wcpay_request:ok") {
              window.location.href = `http://shop.jiweishengxian.com/cartOut/${orderId}`;
            }
          }
        );
      });
    }
  },
  async beforeMount() {
    let that = this;
    this.pushHistory()
    window.addEventListener("popstate", function(e) {
        if (!sessionStorage.getItem("isAddressTop")) {
          that.$router.push("/");
          sessionStorage.removeItem('isAddressTop')
        }
      }, false
    );

    document.title = "确认订单";
    this.GetRequest;
    var Request = new Object();
    Request = this.GetRequest();
    this.code = Request["code"];
    if (!this.code) {
      var url = `http://shop.jiweishengxian.com/cartDetermine/${
        this.$route.params.orderId
      }`;
      window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx365ff8d24bc6fd9f&redirect_uri=${url}&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect`;
    }
    // 地址、
    const staffId = this.getCookie("staffId");
    const token = this.getCookie("token");
    try {
      await this.getAddress(staffId, token).then(res => {
        this.cartList = res.filter((item, index, arr) => {
          return item.adIsdefault == "1";
        });
      });
    } catch (error) {}
    // 订单详情
    this.selectOrderPrimaryKey({
      staffId,
      token,
      orderId: this.$route.params.orderId
    }).then(res => {
      this.datas = res;
      this.infoList = res.orderdetails;
      this.orderId = res.orderId;
      this.orderCode = res.orderCode;
    });
    // 积分
    this.getScoreByOrderId({
      staffId,
      token,
      orderId: this.$route.params.orderId
    }).then(res => {
      this.integral = res.data;
    });
    // 个人信息
    this.getStaffInfo({
      staffId: this.getCookie("staffId"),
      token: this.getCookie("token")
    }).then(res => {
      this.ueseInfo = res.data;
    });
    // 优惠券;
    this.getCoupnsListByOrderId({
      token: this.getCookie("token"),
      staffId: this.getCookie("staffId"),
      orderId: this.$route.params.orderId
    }).then(res => {
      if (!res) {
        this.offerText = "无可用代金券";
      }
    });
  }
};
</script>
