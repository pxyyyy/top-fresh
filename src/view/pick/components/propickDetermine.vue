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
    <!--返回弹出-->
    <div>
      <!-- 收货地址 -->
      <div class="address" v-if="showadress" @click="goAddress()">
        <van-row class="address-content">
          <van-col span="2" class="address-left">
            <img src="../../../assets/img/cartDeteemine.png" alt="">
          </van-col>
          <van-col span="20">
            <p class="addwrap" >
              <!-- <span>收货人: </span> -->
              <span class="adname">收货人: {{cartList[0].adName}}</span>
              <span class="adphone">{{cartList[0].adPhone}}</span>
            </p>
            <p style="margin-top:5px;">
              <!-- <span>收货地址: </span> -->
              <span class="userAddress">收货地址: {{cartList[0].adAddress}} {{cartList[0].adAddressInfo}}</span>
              <span class="userAddress" v-if="showadress === false" @click="goEditing">请设置收件信息</span>
            </p>
          </van-col>
          <van-col span="2" class="address-right">
            <img src="../../../assets/img/Arrow.png" alt="">
          </van-col>
        </van-row>
      </div>
      <div class="address" v-if="showadress === false" @click="goEditing">
        <van-row class="address-content">
          <van-col span="2" class="address-left">
            <img src="../../../assets/img/cartDeteemine.png" alt="">
          </van-col>
          <van-col span="20">
            <p style="margin-top:5px;">
              <span class="userAddress" >请设置收件信息</span>
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
        <p></p>
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
      cartList: null,
      infoList: [],
      staffId: this.getCookie("staffId"),
      token: this.getCookie("token"),
      showadress: false,
      type: 0,
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
      if(this.cartList == null) {
        Dialog.confirm({
          title: "请输入地址",
          confirmButtonText: "立即录入"
        }).then(() => {
          this.$router.push(`/cartAddressEditing/${this.type}`);
        }).catch(

        )
      }else{
        this.saveMyLading({
          staffId: this.staffId,
          token: this.token,
          odId: this.$route.params.odId,
          adId: this.cartList[0].adId
        }).then(res => {
          sessionStorage.removeItem('adress');
          this.$router.push(`/cartOut/${res.data[0]}`);
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
    // 地址、
    const staffId = this.getCookie("staffId");
    const token = this.getCookie("token");
    try {
      await this.getAddress(staffId, token).then(res => {
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
      });
    } catch (error) {}
    // 订单详情
    this.selectProDetaiById({
      productId: this.$route.params.productId
    }).then(res => {
      this.infoList = res.data;
    });
  }
};
</script>
