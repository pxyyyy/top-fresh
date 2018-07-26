<style lang="less" scoped>
@import "./cartOut.less";
</style>
<template>
  <div>
    <!-- 订单详情 -->
    <div class="order">
      <span>
        <i class="iconfont" style="font-size:14px;margin-right:10px;" @click="history">&#xe65c;</i>订单号：{{orders.orderCode}}</span>
    </div>
    <div>
      <ul v-for="item in infoList" :key="item.odId">
        <li class="item">
          <img :src="item.odProductIcon" alt="" class="item-img">
          <div class="item-info">
            <p class="item-title">{{item.odProductName}}</p>
            <p class="item-desc">{{item.odProductDes}}</p>
            <p class="item-button">
              <strong class="money">￥{{item.odProductPprice}}</strong>
              <span v-if="item.odProductNum">x{{item.odProductNum}}</span>
              <span v-else>x1</span>
            </p>
          </div>
        </li>
      </ul>
    </div>
    <!-- 货品形式 -->
    <div class="myInfoa" v-if="orders.orderPmoney">
      <div class="border-top price-content">
        <van-row>
          <van-col span="12">商品总额</van-col>
          <van-col span="12" class="price_right">￥{{orders.orderPmoney}}</van-col>
        </van-row>
        <van-row>
          <van-col span="12">代金券优惠</van-col>
          <van-col span="12" class="price_right">-￥{{orders.orderCouponsmoney}}.00</van-col>
        </van-row>
        <van-row>
          <van-col span="12">积分优惠</van-col>
          <van-col span="12" class="price_right" v-if="orders.orderScoremoney">-￥{{orders.orderScoremoney}}.00</van-col>
          <van-col span="12" class="price_right" v-else>-￥0.00</van-col>
        </van-row>
        <van-row class="price-bottom">
          <van-col span="24" class="price_right">实付款
            <strong class="money">￥{{orders.orderAllmoney}}</strong>
          </van-col>
        </van-row>
      </div>
    </div>
    <div class="wait">
      <van-button size="mini" class='info-button'>等待发货</van-button>
    </div>
    <!-- 继续选购 -->
    <div class="keepOn">
      <p>
        <span>——</span>继续选购
        <span>——</span>
      </p>
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
</template>
<script>
import service from "../service/index.js";
export default {
  data() {
    return {
      cartLictPic: require("../../../assets/img/组7@2x.png"),
      infoList: "",
      orders: "",
      products: ""
    };
  },
  mixins: [service],
  methods: {
    history() {
      this.$router.push("/");
    },
    pushHistory() {
      var state = {
        title: "title",
        url: "#"
      };
      window.history.pushState(state, "title", "#");
    },
    // 获取cook
    getCookie(name) {
      console.log(this);
      var arr,
        reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
      if ((arr = document.cookie.match(reg))) {
        return unescape(arr[2]);
      } else {
        return null;
      }
    },
    toProductInfo(productId) {
      this.$router.push(`/product/${productId}`);
    },
    returnDetermine: function() {
      this.$router.push(`/`);
    },
    goShareIt: function() {
      this.$router.push({
        name: "shareIt"
      });
    }
  },
  beforeMount() {
    // 返回事件
    // this.pushHistory();
    // window.addEventListener(
    //   "popstate",
    //   function(e) {
    //     window.location = "http://shop.jiweishengxian.com";
    //   },
    //   false
    // );
    // 订单详情
    const staffId = this.getCookie("staffId");
    const token = this.getCookie("token");
    this.selectOrderPrimaryKey({
      staffId,
      token,
      orderId: this.$route.params.orderId
    }).then(res => {
      this.infoList = res.orderdetails;
      this.orders = res;
    });
    // 继续选购
    this.selectProByType().then(res => {
      this.products = res.data;
    });
  }
};
</script>
