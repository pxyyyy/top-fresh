<template>
  <div class="wrapper-a">
    <div class="bg-top">
      <img src="../../../assets/img/GiftcardText.png" alt="">
    </div>
    <div class="bg-bottom">
      <div class="wrap-text">
        <div class="product-img">
          <img :src="product.productIcon + '?x-oss-process=image/crop,x_0,y_0,h_120,g_center'" alt="">
        </div>
        <div class="product-title">
          <h3>{{product.productName}}</h3>
          <h4>{{product.productDetail}}</h4>
          <h1 class="gitcard-money">￥{{product.productPrice}}</h1>
        </div>
      </div>
      <div class="bg-s">
        <div class="product-bottom">
          <p> <input type="number" placeholder="请输入手机号" v-model="phone"> </p>
          <p><input type="number" placeholder="请输入验证码" @keyup="hideKeyboard" v-model="verificationCodenumber"></p>
          <p @click="verificationCode">
            <span>{{content}}</span>
          </p>
          <button @click="immediately">立即领取</button>
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
      showshareIt: false
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
    shareItClick() {
      this.showshareIt = false;
      $(function() {
        var timestamp = $("#timestamp").val();//时间戳
        var nonceStr = $("#noncestr").val();//随机串
        var signature = $("#signature").val();//签名
        wx.config({
          debug : false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          appId : 'wx365ff8d24bc6fd9f', // 必填，公众号的唯一标识
          timestamp : timestamp, // 必填，生成签名的时间戳
          nonceStr : nonceStr, // 必填，生成签名的随机串
          signature : signature,// 必填，签名，见附录1
          jsApiList : [ 'scanQRCode','onMenuShareAppMessage','onMenuShareTimeline' ]
          // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        });

        wx.ready(function(){
          // wx.hideOptionMenu();
          wx.onMenuShareTimeline({
            title: this.product.productName,
            link: `http://shop.jiweishengxiang.com/collectCoupons/${this.$route.params.id}?staffid=${this.getCookie('staffId')}`,
            imgUrl: this.product.proImgs[0].imgUrl,
            success: function () {
              // 用户确认分享后执行的回调函数
              alert('分享到朋友圈成功');
            },
            cancel: function () {
              // 用户取消分享后执行的回调函数
              alert('你没有分享到朋友圈');
            }
          });
          wx.onMenuShareAppMessage({
            title: this.product.productName,
            desc: this.product.productInfo,
            link: `http://shop.jiweishengxiang.com/collectCoupons/${this.$route.params.id}?staffid=${this.getCookie('staffId')}`,
            imgUrl: this.product.proImgs[0].imgUrl,
            trigger: function (res) {
              // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
            },
            success: function (res) {
              alert('分享给朋友成功');
            },
            cancel: function (res) {
              alert('你没有分享给朋友');
            },
            fail: function (res) {
              alert(JSON.stringify(res));
            }
          });
        });
      });
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
  }
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
      margin-top: 100px;
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
      width: 300px;
      margin: 0 auto;
      img {
        width: 300px;
        height: 150px;
      }
    }
    .product-title {
      text-align: center;
      height: 130px;
    }
  }
  .bg-s {
    width: 100%;
    height: 300px;
    background: url(../../../assets/img/GiftcardBg.png) no-repeat center;
  }
  .product-bottom {
    width: 300px;
    height: auto;
    text-align: center;
    margin: 0 auto;
    input {
      text-align: center;
      margin: 5px;
      padding: 5px;
    }
    span {
      font-size: 12px;
      color: #fff;
      display: inline-block;
      margin: 30px 0;
    }
    button {
      width: 150px;
      height: 40px;
      background: yellow;
    }
  }
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
