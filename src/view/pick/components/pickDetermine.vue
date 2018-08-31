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
      <div class="address" >
        <van-row class="address-content">
          <van-col span="2" class="address-left">
            <img src="../../../assets/img/cartDeteemine.png" alt="">
          </van-col>
          <van-col span="20" @click="goAddress()">
            <p class="addwrap" v-if="showadress">
              <!-- <span>收货人: </span> -->
              <span class="adname">收货人: {{cartList[0].adName}}</span>
              <span class="adphone">{{cartList[0].adPhone}}</span>
            </p>
            <p style="margin-top:5px;">
              <!-- <span>收货地址: </span> -->
              <span class="userAddress" v-if="showadress" @click="goAddress()">收货地址: {{cartList[0].adAddress}} {{cartList[0].adAddressInfo}}</span>
              <span class="userAddress" @click="goEditing()" v-if="showadress === false">请设置收件信息</span>
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
                <span>x1</span>
              </p>
            </div>
          </li>
        </ul>
        <!-- 单元格 -->
      </div>
      <!-- 支付订单 -->
      <div class="cart-foot">
        <p>￥{{infoList.productPrice}}</p>
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
      showadress: false,
      adress: sessionStorage.getItem('adress'),
      cartList: [{}],
      infoList: [],
      type: 0,
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
      if(this.cartList[0] == null) {
        Toast("请选择收货地址~");
      }else{
        this.saveLading({
          staffId: this.staffId,
          token: this.token,
          odId: this.infoList.odId,
          adId: this.cartList[0].adId
        }).then(res => {
          this.$router.push(`/cartOut/${res}`);
        });
      }



    },
    goAddress: function() {
      this.$router.push({
        name: "cartAddress"
      });
    },
    goEditing: function () {
      this.$router.push(`/cartAddressEditing/${this.type}`);
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
        if (res.length > 0) {
          this.showadress = true;
          this.cartList = res.filter((item, index, arr) => {
            return item.adIsdefault == "1";
          });
        } else if (res.length == 0) {
          this.showadress = false;
          this.cartList[0] = null
        }
        this.adress = JSON.parse(this.adress);
        if (this.adress) {
          this.showadress = true;
          this.cartList = this.adress;
        }
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
