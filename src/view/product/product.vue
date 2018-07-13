<style lang="less" scoped>
@import "./product.less";
</style>
<style>
.details_content img {
  width: 100%;
  border: 0;
  vertical-align: middle;
}

.details .van-tabs__nav--card .van-tab.van-tab--active {
  background: #fff !important;
  color: #e2c083 !important;
}

.details .van-tabs__nav--card .van-tab.van-tab--active span {
  border-bottom: 2px solid #e2c083;
}

.details .van-tabs__nav--card .van-tab {
  border: none;
  font-size: 14px;
  font-weight: 600;
  color: black;
}

.details .van-tabs__nav--card {
  border: none;
  width: 90%;
}

.details .van-tabs__nav--card {
  margin: 10px 15px;
}

.details .van-tabs--card {
  padding-top: 45px;
}

.details .van-tabs--card .van-tabs__wrap {
  height: 45px;
}

.details .van-tabs__nav {
  justify-content: center;
}

.details .van-tab {
  flex: inherit;
  padding: 0 20px;
}
.swiper-wrapper img {
  border-radius: 0;
}
</style>
<template>
  <!-- 商品详情 页面-->
  <div :class="{top:top}">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(image, index) in product.proImgs" :key="index">
        <img v-lazy="image.imgUrl" class="img" />
      </swiper-slide>
    </swiper>
    <div class="discript">
      <img src="" alt="">
      <p class="title">{{product.productName}}</p>
      <p class="subtitle">{{product.productInfo}}</p>
      <p class="price" v-if="product.productPrice">
        <span>&yen;{{product.productPrice}}/{{product.productNum}}{{product.productUnit}}</span>
        <span class="old">&yen;{{product.productOprice}}</span>
      </p>
      <p class="price" v-else>
        <span>&yen;{{product.productOprice}}/{{product.productNum}}只</span>
      </p>
    </div>
    <div class="xinxi">
      <p>
        <span>商品类型:</span>
        <span>
          <span class="type">{{product.productPtype == 2 ? "大闸蟹 · 现货" : "大闸蟹 · 礼品卡"}}</span>
        </span>
      </p>
      <p>
        <span>商品产地:</span>
        <span>{{product.productAddress}}</span>
      </p>
      <p>
        <span>配送方式:</span>
        <span>{{product.productSendType}}</span>
      </p>
      <p>
        <span>商品规格:</span>
        <span>{{product.productDetail}}</span>
      </p>
    </div>
    <div class="details" :style="{marginBottom:marginBottom}">
      <van-tabs type="card" v-model="active">
        <van-tab v-for="item in ordersList" :title="item.text" :key="item.id">
          <div class="details_content" v-html="product.productImg" v-if="item.id == 1"></div>
          <div class="evaluation" v-if="item.id == 2">
            <div class="evaluationList" v-for="item in 10" :key="item">
              <van-row style="margin-top:10px;">
                <van-col span="3.5" offset="1">
                  <img src="../../assets/img/Avatar.png" alt="">
                </van-col>
                <van-col span="7.5">
                  <p class="evaluationName">2018旺旺网</p>
                  <van-rate v-model="evaluationicon" disabled :size="16" disabled-color="#fdd951" />
                </van-col>
                <van-col span="14" class="date">2018-02-28</van-col>
              </van-row>
              <van-row>
                <van-col span="24" class="evaluationText">
                  你为人热情,性格开朗,亦能说会道。对待学习态度端正,上课能够专心听讲,课下能够认真完成作业。不用去想能攀多高,即使路途遥远,只要一步一个脚印,目标...
                </van-col>
              </van-row>
              <van-row class="evaluationPic">
                <van-col span="8" v-for="item in 10" :key="item">
                  <img v-lazy="valuationPic" alt="" @click='goEvaluation(item)'>
                </van-col>
              </van-row>
            </div>
          </div>
          <div v-if="item.id == 3">
            <div class="keepOn">
              <!-- <p>
                <span>——</span> 推荐商品
                <span>——</span>
              </p> -->
              <div class="gy">
                <div v-for="(product,index) in products" :key="index" class="list">
                  <img :src="product.imgUrl" class="img" @click="toProductInfo(product.id)">
                  <div class="title">{{product.proName}}</div>
                  <div class="gg">{{product.proDetail}}</div>
                  <div class="price">&yen;{{product.proPrice}}</div>
                </div>
              </div>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
    <!-- 图片查看 -->
    <div class="evaluationa" v-if="pictureCorridor" @click="closeCorridor">
      <div class="wrapper">
        <van-swipe :touchable="true" :show-indicators="true" :initial-swipe="picIndex">
          <van-swipe-item v-for="(image, index) in 10" :key="index">
            <img v-lazy="valuationPic" />
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
    <!-- 商品图文详情 -->
    <van-goods-action v-show="show">
      <!-- <van-goods-action-mini-btn icon="like-o" text="收藏" /> -->
      <van-goods-action-mini-btn icon="cart" text="购物车" @click="toCart" />
      <van-goods-action-mini-btn icon="chat" text="客服" v-if="this.$route.query.from" />
      <van-goods-action-big-btn text="加入购物车" @click="openCart" />
      <van-goods-action-big-btn text="立即购买" primary @click="openPay(product.productId)" />
    </van-goods-action>
    <van-actionsheet v-model="show1" title="选择数量">
      <p style="display:fixed">
        <span style="padding-left:1.5rem"></span>
        <van-stepper v-model="number"></van-stepper>
      </p>
      <van-button size="large" style="background-color:#1e1e1e;color:#fff" @click="toCart1">加入购物车</van-button>
    </van-actionsheet>
    <van-popup v-model="show2" position="top" :overlay="false">{{message}}</van-popup>
  </div>
</template>
<script>
import img from "../../assets/img/介绍.png";
import { Dialog, Rate } from "vant";
import traceabilityVue from "../traceability/traceability.vue";
import productInfo from "./service/product.js";
export default {
  name: "product_details",
  mixins: [productInfo],
  data() {
    return {
      picIndex: "",
      top: false,
      pictureCorridor: false,
      cartLictPic: require("../../assets/img/组7@2x.png"),
      valuationPic: require("../../assets/img/评价DEMO.png"),
      marginBottom: "50px",
      number: 1,
      show: false,
      show1: false,
      show2: false,
      message: "",
      type: "",
      evaluationicon: 3,
      swiperOption: {
        loop: true,
        effect: "fade"
      },
      ordersList: [
        { id: 1, text: "详情" },
        { id: 2, text: "评价(201)" },
        { id: 3, text: "推荐" }
      ],
      info: [
        {
          id: "1", //商品ID
          title: "澄阳湖大闸蟹六对礼盒装AB双套餐可选 2.9-2.9两  12只", //商品标题
          subtitle: "澄阳湖大闸蟹 AB双套餐", //商品副标题
          oldprice: 288.0, //商品原价
          newprice: 188.0,
          discount: "7.0", //折扣
          number: 12, //商品数量
          type: "0",
          productType: ["大闸蟹·现货", "2018.2.10"], //商品类型
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
      ],
      product: "",
      staffId: this.getCookie("staffId"),
      token: this.getCookie("token"),
      products: "",
      active: 0
    };
  },
  methods: {
    closeCorridor() {
      let from = this.$route.query.from;
      if (from == "IOS" || from == "Android") {
        this.$bridge.callHandler(
          "previewPicture",
          {
            type: "1"
          },
          data => {
            console.log("success");
          }
        );
      }
      this.pictureCorridor = false;
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
    // 判断用户是否登录
    isToken() {
      var token = this.getCookie("token");
      if (token) {
        return true;
      } else {
        return false;
      }
    },
    openPay(num) {
      console.log(num);
      var istoken = this.isToken();
      if (istoken) {
        var id = this.$route.params.id;
        this.addOrder(this.token, this.staffId, num, this.number).then(res => {
          this.$router.push(`/cartDetermine/${res[0].orderId}`);
        });
      } else {
        Dialog.alert({
          title: "提示",
          message: "亲,游客模式,如需购买,请先登录"
        }).then(() => {
          this.$router.push(`/login`); // on close
        });
      }
    },
    toCart1() {
      var id = this.$route.params.id;
      this.addCart(this.token, this.staffId, id, this.number).then(res => {
        Dialog.alert({
          title: "提示",
          message: "添加成功"
        }).then(() => {
          this.$router.push(`/cart?number=` + this.number); // on close
        });
      });
    },
    openCart(type) {
      var istoken = this.isToken();
      if (istoken) {
        this.show1 = true;
        this.type = type;
      } else {
        Dialog.alert({
          title: "提示",
          message: "亲,游客模式,请先登录"
        }).then(() => {
          this.$router.push(`/login`); // on close
        });
      }
    },
    toCart() {
      var istoken = this.isToken();
      if (istoken) {
        this.$router.push(`/cart?number=` + this.number);
      } else {
        Dialog.alert({
          title: "提示",
          message: "亲，如需购买，请先登录"
        }).then(() => {
          this.$router.push(`/login`); // on close
        });
      }
    },
    goEvaluation(index) {
      let from = this.$route.query.from;
      if (from == "IOS" || from == "Android") {
        this.$bridge.callHandler(
          "previewPicture",
          {
            type: "0"
          },
          data => {
            console.log("success");
          }
        );
      }
      this.picIndex = index - 1;
      this.pictureCorridor = true;
    },
    toProductInfo(productId) {
      let from = this.$route.query.from;
      if (from == "IOS" || from == "Android") {
        this.$bridge.callHandler(
          "goGoodInfoVC",
          {
            productId: `${productId}`
          },
          data => {
            console.log("success");
          }
        );
      } else {
        this.$router.push(`/product/${productId}`);
      }
      this.$router.push(`/product/${productId}`);
      this.active = 0;
    },
    giveShareInfo() {
      // 标题，副标题
      Android.giveShareInfo(
        `${this.product.productName}`,
        `${this.product.productInfo}`
      );
    },
    closePicture() {
      this.pictureCorridor = false;
    }
  },
  created() {
    window.giveShareInfo = this.giveShareInfo;
    window.closePicture = this.closePicture;
  },
  mounted() {
    let from = this.$route.query.from;
    if (from == "IOS" || from == "Android") {
      this.show = false;
      this.top = true;
      this.marginBottom = "0px";
    } else {
      this.show = true;
    }
  },
  beforeMount() {
    this.$bridge.registerHandler("giveShareInfo", (data, responseCallback) => {
      responseCallback({
        title: `${this.product.productName}`,
        toProductInfo: `${this.product.productInfo}`
      });
    });
    this.$bridge.registerHandler("giveShareInfo", (data, responseCallback) => {
      this.pictureCorridor = false;
    });
    var id = this.$route.params.id;
    this.getProductInfo(id) //获取列表
      .then(res => {
        this.product = res;
      });
    this.selectProByType().then(res => {
      this.products = res.data;
    });
  }
};
</script>
