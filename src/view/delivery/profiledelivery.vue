<style lang="less" scoped>
@import "./delivery.less";
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
      <swiper-slide v-for="(image, index) in info.proImgs" :key="index">
        <img v-lazy="image.imgUrl" class="img" />
      </swiper-slide>
    </swiper>
    <!-- 商品详细信息 -->
    <div class="discript">
      <!-- 预售图片 -->
      <img src="" alt="">
      <p class="title">{{info.productName}}</p>
      <p class="subtitle">{{info.productInfo}}</p>
      <p class="price" v-if="info.productDiscount">
        <span>&yen;{{info.productPrice}}/{{info.productUnit}}只</span>
        <span class="old">&yen;{{info.productOprice}}</span>
        <span class="discount">{{info.productDiscount}}折</span>
      </p>
      <p class="price" v-else>
        <span>&yen;{{info.productOprice}}/{{info.productUnit}}只</span>
      </p>
    </div>
    <div class="xinxi">
      <p>
        <span>商品类型:</span>
        <span v-for="(type,index) in info.productPtype" :key="index">
          <span class="type" v-if="type == 1">礼品卡</span>
          <span class="type" v-else>礼品卡</span>
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
      <!-- <p>
				<span>提货周期:</span>
				<span>{{info[0].integral}}</span>
			</p> -->
    </div>
    <div class="details">
      <p class="details_title">---- 商品详情 ----</p>
      <div class="details_content">
        <div class="d-content">
          <img src="//img30.360buyimg.com/popWaterMark/jfs/t19498/108/2431894716/126463/a3756bf0/5af28a62Ne2cd4e4e.jpg">
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
            console.log("success");
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