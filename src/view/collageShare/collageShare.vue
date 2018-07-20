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
    <swiper :options="swiperOption" v-if="infoProduct">
      <swiper-slide v-for="(image, index) in infoProduct.product.proImgs" :key="index">
        <img v-lazy="image.imgUrl" class="img" />
      </swiper-slide>
    </swiper>
    <!-- 商品详细信息 -->
    <div class="discript" v-if="infoProduct">
      <p class="title">{{infoProduct.productName}}</p>
      <p class="priceaa">
        <span class="collage">
          ￥{{infoProduct.pingMoney}}
        </span>
        <span class="alone">
          单价买 ￥{{infoProduct.product.productScore}}
        </span>
      </p>

      <ul class="collage-success-info-people" v-if="infoProduct.user">
        <li v-for="(item,index) in infoProductUser" :key="index">
          <img :src="item.staffPhotourl">
        </li>
        <li v-for="item in (5 - infoProductUser.length)" :key="item">
          <img :src="xhdpiPic">
        </li>
      </ul>
      <p class="collage-success-info-success">
        结束时间
        <span class="time">{{info.hourNum}}</span>
      </p>
      <p class="collage-success-info-button">
        <button @click="participate" v-text="riend"></button>
      </p>
      <p class="collage-success-info-bottom">
        <span>邀请好友参团 </span> > 拼团成功分别发货 >人数不足自动退款</p>
    </div>
    <div class="xinxi" v-if="infoProduct">
      <p>
        <span>商品类型:</span>
        <span v-for="(type,index) in infoProduct.product.productPtype" :key="index">
          <span class="type" v-if="type == 2">现货</span>
          <span class="type" v-else>礼品卡</span>
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
        <span>获得积分:</span>
        <span>可获得{{infoProduct.product.productScore}}积分</span>
      </p>
    </div>
    <div class="details" :style="{marginBottom:marginBottom}">
      <p class="details_title">---- 商品详情 ----</p>
      <div class="details_content">
        <img :src="infoProduct.product.productImg" alt="">
      </div>
    </div>
    <!-- 遮罩 -->
    <div class="shareIt" v-if="showshareIt">
      <div>
        <img src="../../assets/img/shareitj.png" alt="">
        <p>请点击右上角分享</p>
      </div>
    </div>
  </div>
</template>
<script>
import img from "../../assets/img/介绍.png";
import traceabilityVue from "../traceability/traceability.vue";
import { Dialog } from "vant";
import service from "./service/index.js";
export default {
  name: "product_details",
  mixins: [service],
  data() {
    return {
      riend: "立即参团",
      xhdpiPic: require("../../assets/img/xhdpi.png"),
      marginBottom: "50px",
      number: 1,
      show: false,
      show1: false,
      type: "",
      showshareIt: false,
      staffId: this.getCookie("staffId"),
      token: this.getCookie("token"),
      swiperOption: {
        loop: true,
        effect: "fade"
      },
      infoProduct: "",
      infoProductUser: [],
      Url: "",
      info: []
    };
  },
  methods: {
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
    openCart(type) {
      this.show1 = true;
      this.type = type;
    },
    toCart() {
      this.$router.push(`/cart?number=` + this.number);
    },
    async participate() {
      if (!this.staffId) {
        this.$router.push("/login");
      } else if (this.staffId != this.$route.params.startUser) {
        // 个人信息
        await this.getStaffInfo({
          staffId: this.getCookie("staffId"),
          token: this.getCookie("token")
        }).then(res => {
          var ueseInfo = res.data;
          if (ueseInfo == "") {
            this.$router.push("/login");
          }
        });
        await this.addUserTogetherOrder({
          staffId: this.getCookie("staffId"),
          token: this.getCookie("token"),
          togetherOrderId: this.infoProduct.togetherOrderId,
          flagTO: 1,
          togetherId: this.infoProduct.togetherId,
          startUser: this.infoProduct.startUser
        }).then(res => {
          this.$router.push(`/collageDetermineOther/${res[0]}`);
        });
      } else {
      }
    }
  },
  mounted() {
    let from = this.$route.query.from;
    if (from == "IOS" || from == "Android") {
      this.show = false;
      this.marginBottom = "0px";
    } else {
      this.show = true;
    }
  },
  created() {
    window.giveShareInfo = this.giveShareInfo;
  },
  beforeMount() {
    let from = this.$route.query.from;
    if (from == "IOS" || from == "Android") {
      this.showshareIt = false;
      this.riend = "邀请好友参团";
    }
    this.getTogetherOrderProcessMessage({
      togetherOrderId: this.$route.params.id
    }).then(res => {
      this.infoProduct = res;
      this.infoProductUser = res.user;
      this.startUser = res.startUser;
      for (let item in this.infoProductUser) {
        if (this.getCookie("staffId") == this.infoProductUser[item].staffId) {
          this.showshareIt = true;
          this.riend = "邀请好友参团";
        } else {
          this.riend = "立即参团";
        }
      }
      this.$bridge.registerHandler(
        "giveShareInfo",
        (data, responseCallback) => {
          responseCallback(
            "你收到一个拼团邀请",
            `${this.infoProduct.product.productName}`,
            window.location.href
          );
        }
      );
      // if (this.staffId == this.$route.params.startUser) {
      //   this.showshareIt = true;
      //   this.riend = "邀请好友参团";
      // } else {
      //   this.riend = "立即参团";
      // }
    });
  }
};
</script>