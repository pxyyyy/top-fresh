<style lang="less" scoped>
@import "./delivery.less";
</style>
<style>
.details_content img {
  width: 100%;
  border: 0;
  vertical-align: middle;
}
.pricebug {
  font-size: 18px;
  color: #e7bf7a;
  font-weight: bold;
  position: static !important;
}
.btntype{
  display: inline-table;
  color: #fff;
  padding: 2px 5px;
  border-radius: 2px;
  background: #e7bf7a;
  border-radius: 5px;
}
</style>

<template>
  <!-- 商品详情 页面-->
  <div>
    <!-- 商品主图  有赞轮播组件-->
    <swiper :options="swiperOption">
      <swiper-slide v-for="(image, index) in info.proImgs" :key="index">
        <img v-lazy="image.imgUrl" class="img" />
      </swiper-slide>
    </swiper>
    <!-- 商品详细信息 -->
    <div class="discript">
      <!-- 预售图片 -->
      <img src="" alt="">
      <p class="titlebug">{{info.productName}}</p>
      <p class="subtitlebug">{{info.productInfo}}</p>
      <p class="pricebug" v-if="info.productDiscount"  style="font-size:36px;">
        <span>&yen;{{info.productPrice}}/{{info.productUnit}}只</span>
        <span class="old">&yen;{{info.productOprice}}</span>
        <span class="discount">{{info.productDiscount}}折</span>
      </p>
      <p class="pricebug" v-else  style="font-size:36px;">
        <span>&yen;{{info.productOprice}}/{{info.productUnit}}</span>
      </p>
    </div>
    <div class="xinxi">
      <p>
        <span>商品类型:</span>
        <span v-for="(type,index) in info.productPtype" :key="index">
          <span class="btntype" v-if="type == 1">礼品卡</span>
          <span class="btntype" v-else>礼品卡</span>
        </span>
      </p>
      <p>
        <span>商品产地:</span>
        <span>{{info.productAddress}}</span>
      </p>
      <p>
        <span>配送方式:</span>
        <span>{{info.productSendType}}</span>
      </p>
      <p>
				<span>商品规格:</span>
				<span>{{info.productDetail}}</span>
			</p>
      <p>
        <span>提货周期:</span>
        <span>{{info.productBeginDate}}<span style="color:#e2c083 ">—</span>  {{info.productEndDate}}</span>
      </p>
    </div>
    <div class="details">
      <p class="details_title">---- 商品详情 ----</p>
      <div class="details_content">
        <div class="d-content" v-html="info.productImg">
        </div>
      </div>
    </div>
    <van-button bottom-action @click="goAddress()">马上提取现货 </van-button>
    <!-- 商品图文详情 -->
  </div>
</template>
<script>
import service from "./service/index.js";
import { Toast } from "vant";
export default {
  name: "product_details",
  mixins: [service],
  data() {
    return {
      swiperOption: {
        loop: true,
        effect: "fade"
      },
      info: ""
    };
  },
  beforeMount() {
    this.selectProDetaiById({
      productId: this.$route.params.odProductId
    }).then(res => {
      this.info = res.data;
    });
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
    goAddress() {
      var code = this.$route.params.id;
      let from = this.$route.query.from;
      if (from == "IOS" || from == "Android") {
        this.$bridge.callHandler(
          "goPickupInfoVC",
          {
            code: code,
            odId: this.$route.params.odId,
            type: "0"
          },
          data => {
          }
        );
      } else {
        this.$router.push(
          `/propickDetermine/${this.$route.params.odId}/${
            this.$route.params.odProductId
          }`
        );
      }
    }
  }
};
</script>