<style lang="less" scoped>
@import "./collageDetail.less";
</style>
<style>
.detail img {
  width: 100%;
  border: 0;
  margin-bottom: 50px;
  vertical-align: middle;
}
</style>
<template>
  <!-- 商品详情 页面-->
  <div>
    <!-- 商品主图  有赞轮播组件-->
    <swiper :options="swiperOption" :class="{marginIos:ismarginIos}">
      <swiper-slide v-for="(image, index) in infoOne.proImgs" :key="index">
        <img v-lazy="image.imgUrl" class="img"/>
      </swiper-slide>
    </swiper>
    <!-- 商品详细信息 -->
    <div class="discript" >
      <p class="title">{{infoOne.productName}}</p>
      <p class="price" style="font-size:36px;">
        <span class="collage">
          ￥{{infoTwo.priceTogether}}/{{infoOne.productUnit}}
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
        <span>商品规格:</span>
        <span>{{infoOne.productDetail}}</span>
      </p>
      <p>
        <span>提货周期:</span>
        <span>{{infoOne.productBeginDate}} <span style="color:#e2c083 ">—</span>  {{infoOne.productEndDate}}</span>
      </p>
    </div>
    <div class="details">
      <p class="details_title">---- 商品详情 ----</p>
      <div class="detail"  v-if="infoOne.productImg == ''">
        <img src="../../assets/img/leary.png"/>
      </div>
      <div class="detail" v-else v-html="infoOne.productImg">
      </div>
    </div>
    <!-- 商品图文详情 -->
    <van-row style="border-top:1px solid #e5e5e5">
      <van-col span="12" style="border-right:1px solid #e5e5e5">
        <van-button bottom-action @click="aloneBy(infoOne.productId)">单独购买 ￥{{infoOne.productOprice}}</van-button>
      </van-col>
      <van-col span="12">
        <van-button type="primary" bottom-action style="background-color: #ddd" v-if="this.$route.query.canPay == '1'||canPay == '1'" disable>{{infoTwo.successPeopleNum}}人成团 ￥{{infoTwo.priceTogether}}</van-button>
        <van-button type="primary" bottom-action @click="collage('1232321')" v-else>{{infoTwo.successPeopleNum}}人成团 ￥{{infoTwo.priceTogether}}</van-button>
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
      number: 1,
      show: false,
      show1: false,
      canPay: sessionStorage.getItem('canPay'),
      type: "",
      ismarginIos:false,
      swiperOption: {
        // 园点配置
        pagination: ".swiper-pagination",
        // 循环切换
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      },
      infoOne: "",
      infoTwo: "",
      id: "",
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

          }
        );
      } else if (from == "Android") {
        this.$bridge.callHandler(
          "goPintuanGoodsAlone",
          {
            id: id
          },
          data => {
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
          }
        );
      } else if (from == "Android") {
        this.$bridge.callHandler(
          "goPintuanGoodsPayResult",
          {
            id: id
          },
          data => {
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
        sessionStorage.path = this.$route.path;
        this.$router.push(`/collageDetermine/${this.id}`);
      }
    }
  },
  beforeMount() {
    let from = this.$route.query.from;
    if(from) {
      this.ismarginIos = true
    }
    var staffId = this.getCookie("staffId");
    var token = this.getCookie("token");
    this.getTogetherOrderInfo({
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
