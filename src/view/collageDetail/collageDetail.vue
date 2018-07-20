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
        <van-button bottom-action @click="aloneBy('123323')">单独购买 ￥{{infoOne.productOprice}}</van-button>
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
      /*
				{
					id: "1", //商品ID
					title: "澄阳湖大闸蟹六对礼盒装", //商品标题
					oldprice: 288.00, //商品原价
					newprice: 188.00,
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
					origin: "阳澄湖", //商品产地
				}
				*/
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
        // this.$router.push(`/cartDetermine?id=` + id);
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
    });
  }
};
</script>