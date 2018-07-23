<style lang="less" scoped>
@import "./collageDetail.less";
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
    <swiper :options="swiperOption">
      <swiper-slide v-for="(image, index) in infoOne.proImgs" :key="index">
        <img v-lazy="image.imgUrl" class="img" />
      </swiper-slide>
    </swiper>
    <!-- 商品详细信息 -->
    <div class="discript">
      <p class="title">{{infoOne.productName}}</p>
      <p class="price">
        <span class="collage">
          ￥{{infoTwo.priceTogether}}
        </span>
        <span class="alone">
          单价买 ￥{{infoTwo.originalPrice}}
        </span>
      </p>
    </div>
    <div class="xinxi">
      <p>
        <span>商品类型:</span>
        <span v-for="(type,index) in infoOne.productPtype" :key="index">
          <span class="type" v-if="type == 1">礼品卡</span>
          <span class="type" v-else>现货</span>
        </span>
      </p>
      <p>
        <span>商品产地:</span>
        <span>{{infoOne.productAddress}}</span>
      </p>
      <p>
        <span>配送方式:</span>
        <span>{{infoOne.productSendType}}</span>
      </p>
      <p>
        <span>获得积分:</span>
        <span>可获得{{infoOne.productScore}}积分</span>
      </p>
    </div>
    <div class="details" :style="{marginBottom:marginBottom}">
      <p class="details_title">---- 商品详情 ----</p>
      <div class="details_content">
        <img v-lazy="infoOne.productIcon" alt="">
      </div>
    </div>
    <!-- 商品图文详情 -->
    <van-row>
      <van-col span="12">
        <van-button bottom-action @click="aloneBy(infoOne.productId)">单独购买 ￥{{infoOne.productOprice}}</van-button>
      </van-col>
      <van-col span="12">
        <van-button type="primary" bottom-action @click="collage('1232321')">{{infoTwo.successPeopleNum}}人成团 ￥{{infoTwo.priceTogether}}</van-button>
      </van-col>
    </van-row>
  </div>
</template>
<script>
import service from "./service/order.js";
import img from "../../assets/img/介绍.png";
import traceabilityVue from "../traceability/traceability.vue";
export default {
  name: "product_details",
  mixins: [service],
  data() {
    return {
      marginBottom: "50px",
      number: 1,
      show: false,
      show1: false,
      type: "",
      swiperOption: {
        loop: true,
        effect: "fade"
      },
      infoOne: "",
      infoTwo: "",
      id: ""
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
    aloneBy(id) {
      let from = this.$route.query.from;
      if (from == "IOS") {
        this.$bridge.callHandler(
          "goPintuanGoodsAlone",
          {
            id: id
          },
          data => {
            console.log("IOS success");
          }
        );
      } else if (from == "Android") {
        this.$bridge.callHandler(
          "goPintuanGoodsAlone",
          {
            id: id
          },
          data => {
            console.log("Android success");
          }
        );
      } else {
        this.$router.push(`/product/${id}`);
      }
    },
    async collage(id) {
      let from = this.$route.query.from;
      if (from == "IOS") {
        this.$bridge.callHandler(
          "goPintuanGoodsPayResult",
          {
            id: id
          },
          data => {
            console.log("IOS success");
          }
        );
      } else if (from == "Android") {
        this.$bridge.callHandler(
          "goPintuanGoodsPayResult",
          {
            id: id
          },
          data => {
            console.log("Android success");
          }
        );
      } else {
        var staffId = this.getCookie("staffId");
        var token = this.getCookie("token");
        await this.addUserTogetherOrder({
          staffId,
          token,
          togetherOrderId: this.$route.params.id
        }).then(res => {
          this.id = res[0];
        });
        sessionStorage.teamworkMoney = "";
        this.$router.push(`/collageDetermine/${this.id}`);
      }
    }
  },
  beforeMount() {
    var staffId = this.getCookie("staffId");
    var token = this.getCookie("token");
    this.getTogetherOrderInfo({
      staffId,
      token,
      productId: this.$route.params.productId,
      id: this.$route.params.id
    }).then(res => {
      this.infoOne = res.data[0];
      this.infoTwo = res.data[1];
      document.title = `${this.infoOne.productName}`;
    });
  }
};
</script>