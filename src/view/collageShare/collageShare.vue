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
    <swiper :options="swiperOption">
      <swiper-slide v-for="(image, index) in infoProduct.productIcon" :key="index">
        <img v-lazy="image" class="img" />
      </swiper-slide>
    </swiper>
    <!-- 商品详细信息 -->
    <div class="discript">
      <p class="title">{{infoProduct.productName}}</p>
      <p class="price">
        <span class="collage">
          ￥{{infoProduct.productOprice}}
        </span>
        <span class="alone">
          单价买 ￥{{infoProduct.productPrice}}
        </span>
      </p>
      <ul class="collage-success-info-people">
        <li><img v-lazy="xhdpiPic" alt=""></li>
        <li><img v-lazy="xhdpiPic" alt=""></li>
        <li><img v-lazy="xhdpiPic" alt=""></li>
        <li><img v-lazy="xhdpiPic" alt=""></li>
        <li><img v-lazy="xhdpiPic" alt=""></li>
      </ul>
      <p class="collage-success-info-success">
        还差
        <span class="num">{{info.lackPeopleNum}}</span>人,剩余
        <span class="time">{{info.surplusDayNum}}</span>天
        <span class="time">{{info.hourNum}}</span>小时 结束
      </p>
      <p class="collage-success-info-button">
        <button @click="participate">立即参团</button>
      </p>
      <p class="collage-success-info-bottom">
        <span>邀请好友参团 </span> > 拼团成功分别发货 >人数不足自动退款</p>
    </div>
    <div class="xinxi">
      <p>
        <span>商品类型:</span>
        <span v-for="(type,index) in infoProduct.productPtype" :key="index">
          <span class="type" v-if="type == 2">现货</span>
          <span class="type" v-else>礼品卡</span>
        </span>
      </p>
      <p>
        <span>商品产地:</span>
        <span>{{infoProduct.productAddress}}</span>
      </p>
      <p>
        <span>配送方式:</span>
        <span>{{infoProduct.productSendType}}</span>
      </p>
      <p>
        <span>获得积分:</span>
        <span>可获得{{infoProduct.productScore}}积分</span>
      </p>
    </div>
    <div class="details" :style="{marginBottom:marginBottom}">
      <p class="details_title">---- 商品详情 ----</p>
      <div class="details_content">
        <img :src="infoProduct.productImg" alt="">
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
      Url: "",
      info: [
        /*
        {
          id: "1", //商品ID
          title: "澄阳湖大闸蟹六对礼盒装", //商品标题
          oldprice: 288.0, //商品原价
          newprice: 188.0,
          discount: "7.0", //折扣
          number: 12, //商品数量
          type: "0",
          productType: ["大闸蟹·现货"], //商品类型
          images: [
            "https://img14.360buyimg.com/popWaterMark/jfs/t17218/268/2177078914/177141/2f4cfd87/5ae920d7N7605a758.jpg",
            "https://img13.360buyimg.com/popWaterMark/jfs/t18838/254/2140707395/230948/d2c13ef6/5ae920d4N82d84a7f.jpg",
            "https://img14.360buyimg.com/popWaterMark/jfs/t18088/257/2187333638/209669/c11169a0/5ae920d8N05bc65e2.jpg",
            "https://img30.360buyimg.com/popWaterMark/jfs/t17695/164/1073632144/214246/a74ac508/5ab8ae48N058b7c22.jpg"
          ], //商品主图
          content: '<div class="d-content"><img src="' + img + '"></div>', //详情,//详情
          distribution: "顺丰空运", //配送方式
          integral: "200", //购买可获得的积分数
          origin: "阳澄湖" //商品产地
		}
		*/
      ]
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
    openCart(type) {
      this.show1 = true;
      this.type = type;
    },
    toCart() {
      this.$router.push(`/cart?number=` + this.number);
    },
    participate() {
      if (!this.staffId) {
        this.$router.push("/login");
      } else if (this.staffId != this.$route.params.staffId) {
        console.log(this.$route.params);
        this.$router.push(
          `/collageDetermineOther/${this.$route.params.id}/${
            this.$route.params.staffId
          }`
        );
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
  beforeMount() {
    this.openShareTogetherOrder({
      id: this.$route.params.id,
      productId: this.$route.params.productId,
      staffId: this.$route.params.staffId,
      togetherOrderId: this.$route.params.togetherOrderId,
      token: this.$route.params.token
    }).then(res => {
      this.info = res;
      this.infoProduct = res.product;
      console.log(this.info);
    });
    if (this.staffId == this.$route.params.staffId) {
      this.showshareIt = true;
    }
  }
};
</script>