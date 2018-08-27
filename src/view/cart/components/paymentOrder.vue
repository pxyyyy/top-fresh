<template>
  <div>
    <div class="address">
      <van-row>
        <div>
          <img src="../../../assets/icon/等待付款.png" :style='{"width":viewWidth}'>
          <p class="font">{{await}}</p>
          <p class="fonts">{{lastPayTime}}</p>
        </div>
      </van-row>
      <van-row>
        <p class="addwrap">
          <span class="adname">
            <span>需要支付: </span>
            <span style="color: #FF0000;" class="adname">¥{{this.orderAllmoney}}</span>
          </span>
        </p>
      </van-row>
      <div class="alt"></div>
      <div class="Cell">
        <div class="method">
          <p>请选择付款方式</p>
        </div>
        <div class="border-top" style="padding:2px 0;line-height: 38px">
          <p>
            <img class="integral" src="../../../assets/icon/微信支付.png">
            微信支付
          </p>
          <p class="checked">
            <van-checkbox v-model="checked" @change="toggle(checked)"></van-checkbox>
          </p>
        </div>
      </div>
      <van-popup v-model="Payment" class="Payment"  position="bottom" :overlay="false">
        <van-button size="large" class="Payment-button" @click="gocartOut">去支付</van-button>
      </van-popup>
    </div>
  </div>

</template>

<script scopedSlots>
  import service from "../service/index.js";
    export default {
      mixins: [service],
      data() {
        return {
          // all: sessionStorage.getItem('all'),
          orderCode: '',
          orderAllmoney: '',
          checked: false,
          Payment: false,
          code: '',
          isBack: true,
          orderCreatetime: '',
          lastPayTime: '',
          await: ''
        }
      } ,
      computed: {
        viewWidth: function () {
          return window.innerWidth + "px";
        }
      },

      mounted() {
        let that = this;
        window.addEventListener("popstate", function(e) {  //回调函数中实现需要的功能
          console.log(that.isBack);
          console.log(that.isBack == false);
          alert("我监听到了浏览器的返回按钮事件啦");
          if(that.isBack){
            window.location.href = `/`
          }
        }, false);
        document.title = "支付订单";
        this.GetRequest();
        var Request = new Object();
        Request = this.GetRequest();
        this.code = Request["code"];
        if (!this.code) {
          this.isBack=false;
          var url = `http://shop.jiweishengxian.com/paymentOrder/${
            this.$route.params.orderId
            }`;
          window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx365ff8d24bc6fd9f&redirect_uri=${url}&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect`;
        }else{
          this.isBack=true
        }
        const staffId = this.getCookie("staffId");
        const token = this.getCookie("token");
        this.selectOrderPrimaryKey({
          staffId: staffId,
          token: token,
          orderId: this.$route.params.orderId
        }).then(res => {
          console.log(res,'res');
          this.orderAllmoney = res.orderAllmoney;
          this.orderCreatetime = res.orderCreatetime;
          this.orderCode = res.orderCode;
        });
        // this.all = JSON.parse(this.all);
        // const { orderCreatetime, orderAllmoney } = this.all;
        // this.orderAllmoney = orderAllmoney;
        setInterval(()=> {
          let createTime = Date.parse(this.orderCreatetime) / 1000;
          let endTime = createTime + 1800;
          let clientTime = Date.parse(new Date()) / 1000;
          let lastTime = endTime - clientTime;
          let int_minute;
          if(lastTime > 0){
            int_minute = Math.floor(lastTime/60);
            lastTime -= int_minute * 60;
            this.await = '等待付款';
            this.lastPayTime = '剩'+int_minute+'分'+ lastTime +'秒'+'关闭';
          } else {
            this.await = '订单失效';
            this.lastPayTime = ''
          }
        },1000);
      },
      created() {

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
        toggle(checked) {
         if (checked === true) {
           this.Payment = true;
         }else {
           this.Payment =false;
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

         //微信支付
        async gocartOut() {
        var staffWechat = this.getCookie("staffWechat");
        await this.weixinPay({
        	staffId: this.getCookie("staffId"),
        	token: this.getCookie("token"),
        	orderCode: this.orderCode,
        	jmoney: this.orderAllmoney,
        	title: "支付订单",
        	ttt: this.code
        }).then(res => {
          sessionStorage.removeItem('money');
          sessionStorage.removeItem('scId');
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
      }
    }
</script>

<style lang="less" scoped>
  @import "./paymentOrder.less";
</style>
<style>
  .Cell .van-icon {
    position: absolute;
    margin-left: 70px;
    width: 20px;
    height: 20px;
    top: 12px;
  }
</style>
