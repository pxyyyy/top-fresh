<style lang="less" scoped>
@import "./pickDetermine.less";
</style>
<style>
.Cell .van-icon {
  position: absolute;
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
            <p>收货人:
              <i v-if="cartList[0]">{{cartList[0].adPhone}}</i>
              <span v-if="cartList[0]">{{cartList[0].adName}}</span>
            </p>
            <p style="margin-top:5px;">收货地址:
              <span v-if="cartList[0]">{{cartList[0].adAddress}} {{cartList[0].adAddressInfo}}</span>
            </p>
          </van-col>
          <van-col span="2" class="address-right">
            <img src="../../../assets/img/Arrow.png" alt="">
          </van-col>
        </van-row>
      </div>
      <!-- 订单详情 -->
      <div>
        <ul>
          <li class="item">
            <img :src="infoList.productIcon" alt="" class="item-img">
            <div class="item-info">
              <p class="item-title">{{infoList.productName}}</p>
              <p class="item-desc">{{infoList.productInfo}}</p>
              <p class="item-button">
                <strong class="money">￥{{infoList.productOprice}}</strong>
                <span>x{{infoList.productNum}}</span>
              </p>
            </div>
          </li>
        </ul>
        <!-- 单元格 -->
      </div>
      <!-- 支付订单 -->
      <div class="cart-foot">
        <p>￥0.00</p>
        <p>
          <van-button size="normal" class="btnColor" @click="goDetails()">立即提货</van-button>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import MailingOnePic from "../../../assets/img/volume-one.png";
import MailingTwoPic from "../../../assets/img/volume-two.png";
import ActiveMailingOnePic from "../../../assets/img/active-volume-one.png";
import ActiveMailingTwoPic from "../../../assets/img/active-volume-two.png";
import service from "../service/index.js";
import { Toast } from "vant";
export default {
  mixins: [service],
  data() {
    return {
      checked: false,
      MailingTwoPic: MailingTwoPic,
      MailingOnePic: ActiveMailingOnePic,
      Mailing: false,
      MailingActiveOne: true,
      MailingActiveTwo: false,
      Payment: false,
      away: false,
      cartList: [{}],
      infoList: [],
      staffId: this.getCookie("staffId"),
      token: this.getCookie("token")
    };
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
    showOne() {
      this.Mailing = true;
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
      this.saveLading({
        staffId: this.staffId,
        token: this.token,
        odId: this.infoList.odId,
        adId: this.cartList[0].adId
      }).then(res => {
        if (this.cartList[0].adName) {
          this.$router.push(`/cartOut/${res}`);
        } else {
          Toast("请选这收货地址~");
        }
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
    gocartOut() {
      this.$router.push(`/cartOut/${this.$route.params.orderId}`);
    }
  },
  async beforeMount() {
    document.title = "确认订单";
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

    this.getLadingDetail({
      staffId: this.getCookie("staffId"),
      token: this.getCookie("token"),
      card: this.$route.params.value,
      hidecard: this.$route.params.password
    }).then(res => {
      this.infoList = res.data;
    });
  }
};
</script>
