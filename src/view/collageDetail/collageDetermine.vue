<style lang="less" scoped>
@import "./collageDetermine.less";
</style>
<style>
.Cell .van-icon {
  position: absolute;
}
</style>
<template>
  <div>
    <!--返回弹出-->
    <van-popup v-model="away" class="away">
      <p>正在离开结算页面</p>
      <p>确定不要了吗</p>
      <van-button size="small" class="Payment-button awayColor" @click="goaway">去意已决</van-button>
      <van-button size="small" class="Payment-button" @click="want">朕在想想</van-button>
    </van-popup>
    <div class="cart_min">
      <!-- 订单详情 -->
      <div>
        <ul v-if="info">
          <li class="item">
            <img :src="info.product.productIcon" alt="" class="item-img">
            <div class="item-info">
              <p class="item-title">{{info.product.productName}}</p>
              <p class="item-desc">{{info.product.productInfo}}</p>
              <p class="item-button">
                <strong class="money">￥{{info.priceTogether}}</strong>
                <span>x1</span>
              </p>
            </div>
          </li>
        </ul>
        <!-- 单元格 -->
        <!--是否邮寄提货卷弹出-->
        <div style="padding-top:30px;background:#fff;">
          <div class="select">
            <div class="border-top" style="padding:2px 0;" @click='usingaVouchers'>
              <p>使用代金卷</p>
              <p v-if="this.offer">
                -{{this.offer}}元
                <span class="iconfont arrow-icon">&#xe66b;</span>
              </p>
              <p v-else>选择代金卷
                <span class="iconfont arrow-icon">&#xe66b;</span>
              </p>
            </div>
          </div>
          <div class="Cell">
            <div class="border-top" style="padding:2px 0;">
              <p>可用{{this.integral[0]}}积分,抵扣{{this.integral[1]}}元</p>
              <p class="checked">
                <van-checkbox v-model="checked"></van-checkbox>
              </p>
            </div>
          </div>
          <div class="select">
            <div class="border-top" style="padding:2px 0;">
              <p>商品总额</p>
              <p class="black">
                ￥{{info.priceTogether}}
              </p>
            </div>
          </div>
          <div class="select">
            <div class="border-top" style="padding:2px 0;">
              <p>代金卷优惠</p>
              <p class="black" v-if="this.offer">-￥{{this.offer}}
              </p>
              <p class="black" v-else>-￥0
              </p>
            </div>
          </div>
          <div class="select">
            <div class="border-top" style="padding:2px 0;">
              <p>积分优惠</p>
              <p class="black">-￥{{10.00}}
              </p>
            </div>
          </div>
        </div>
        <!--价格详情-->
        <div class="myInfo" v-if="info">
          <div class="border-top price-content">
            <van-row class="price-bottom">
              <van-col span="24" class="price_right">实付款
                <strong class="money">￥{{orderAllmoney}}</strong>
              </van-col>
            </van-row>
          </div>
        </div>
        <!-- 付款方式 -->
        <div class='payment' v-if="info">
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
      <div class="cart-foot" v-if="info">
        <p>付款 :
          <span>￥{{orderAllmoney}}</span>
        </p>
        <p>
          <van-button size="normal" class="btnColor" @click="goDetails()">支付订单</van-button>
        </p>
      </div>
      <!--付款方式弹出-->
      <van-popup v-model="Payment" class="Payment" v-if="info">
        <p>付款金额：
          <span>￥{{orderAllmoney}}</span>
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
import wxpic from "../../assets/img/wx.png";
import zfbpic from "../../assets/img/zfb.png";
import ylpic from "../../assets/img/yl.png";
import wxpicActive from "../../assets/img/active_wx.png";
import zfbpicActive from "../../assets/img/active_zfb.png";
import ylpicActive from "../../assets/img/ylActive.png";
import FeaturesIcon5 from "../../assets/img/product.png";
import MailingOnePic from "../../assets/img/volume-one.png";
import MailingTwoPic from "../../assets/img/volume-two.png";
import ActiveMailingOnePic from "../../assets/img/active-volume-one.png";
import ActiveMailingTwoPic from "../../assets/img/active-volume-two.png";
import service from "./service/order.js";
export default {
  mixins: [service],
  data() {
    return {
      imageURL: FeaturesIcon5,
      checked: false,
      zfb: false,
      wx: true,
      yl: false,
      integral: "",
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
      info: "",
      datas: "",
      PaymentType: "微信支付",
      offer: sessionStorage.getItem("teamworkMoney"),
      jmoney: "",
      code: ""
    };
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
    // 代金卷
    usingaVouchers() {
      this.$router.push(`/teamworkcoupon/${this.info.priceTogether}`);
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
    wxActive() {
      this.wx = true;
      this.zfb = false;
      this.yl = false;
      this.wxPic = wxpicActive;
      this.zfbPic = zfbpic;
      this.ylpic = ylpic;
      this.PaymentType = "微信支付";
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
      this.updateTogetherBeginPay({
        staffId: this.getCookie("staffId"),
        token: this.getCookie("token"),
        id: this.$route.params.id
      }).then(res => {
        this.jmoney = res[0];
      });
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
      this.$router.go(-1);
    },
    want: function() {
      this.away = false;
    },
    async gocartOut() {
      await this.weixinPay2({
        staffId: this.getCookie("staffId"),
        token: this.getCookie("token"),
        orderCode: this.info.detailCode,
        jmoney: this.jmoney,
        title: " 拼团订单",
        ttt: this.code
      }).then(res => {
        var detailCode = this.info.detailCode;
        var startUser = this.info.startUser;
        WeixinJSBridge.invoke(
          "getBrandWCPayRequest",
          {
            appId: res.info.appId, //公众号名称，由商户传入
            timeStamp: res.info.timeStamp, //时间戳，自1970年以来的秒数
            nonceStr: res.info.nonceStr, //随机串
            package: res.info.package,
            signType: res.info.signType, //微信签名方式：
            paySign: res.info.sign //微信签名
          },
          function(re) {
            if (re.err_msg == "get_brand_wcpay_request:ok") {
              window.location.href = `http://shop.jiweishengxian.com/collageShare/${detailCode}/${startUser}`;
            }
          }
        );
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
    }
  },
  // 优惠的价格
  computed: {
    orderAllmoney() {
      if (sessionStorage.getItem("teamworkMoney")) {
        return (
          this.info.priceTogether - sessionStorage.getItem("teamworkMoney")
        );
      } else {
        return this.info.priceTogether;
      }
    }
  },
  async beforeMount() {
    document.title = "确认订单";
    this.GetRequest;
    var Request = new Object();
    Request = this.GetRequest();
    this.code = Request["code"];
    if (!this.code) {
      var url = window.location.href;
      window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx365ff8d24bc6fd9f&redirect_uri=${url}&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect`;
    }
    const staffId = this.getCookie("staffId");
    const token = this.getCookie("token");
    this.getTogetherOrderInfo22({
      staffId,
      token,
      id: this.$route.params.id
    }).then(res => {
      this.info = res.data;
      alert(this.info.detailCode);
    });
    // 积分
    this.getScoreByMoney({
      staffId,
      token,
      money: this.info.priceTogether
    }).then(res => {
      this.integral = res;
    });
  }
};
</script>
