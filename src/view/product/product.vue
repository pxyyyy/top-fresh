<style lang="less" scoped>
@import "./product.less";
</style>
<style>
.details_content img {
  width: 100%;
  border: 0;
  vertical-align: middle;
}
.swiper-wrapper{
	height: auto !important;
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
.details .van-tabs__nav--card {
  margin: 10px 15px !important;
}
  .van-actionsheet__header {
    color: #b7b4b4;
    text-align: left;
    margin-left: 1.5rem;
    margin-right: 1.5rem;

  }
</style>
<template>
  <!-- 商品详情 页面-->
  <div :class="{top:top}">
    <swiper :options="swiperOption" v-if="showswiper">
      <swiper-slide v-for="(image, index) in product.proImgs" :key="index" class="Crop">
        <img v-lazy="image.imgUrl" class="img">
      </swiper-slide>
    </swiper>
    <div v-else>
      <div class="Crop">
        <img src="../../assets/img/loading.png" class="img">
      </div>
    </div>
    <div class="discript">
      <p class="title">{{product.productName}}</p>
      <p class="subtitle">{{product.productInfo}}</p>
      <p class="price" v-if="product.productPrice">
        <span>&yen;{{product.productPrice}}/{{product.productUnit}}</span>
        <span class="old" v-if="product.productIfoprice === '1'">&yen;{{product.productOprice}}</span>
      </p>
      <p class="price" v-else>
        <span>&yen;{{product.productOprice}}/{{product.productUnit}}只</span>
      </p>
    </div>
    <div class="xinxi">
      <p>
        <span>商品类型:</span>
        <span>
          <span class="type">{{product.productPtype == 2 ? "现货" : "礼品卡"}}</span>
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
      <p>
        <span>提货周期:</span>
        <span>{{product.productBeginDate}}
          <span style="color:#e2c083 ">—</span> {{product.productEndDate}}</span>
      </p>
    </div>
    <div class="details" :style="{paddingBottom:marginBottom}">
      <van-tabs type="card" v-model="active">
        <van-tab v-for="item in ordersList" :title="item.text" :key="item.id">
          <div class="details_content" v-if="item.id == 1&&product.productImg == ''">
            <img src="../../assets/img/leary.png" />
          </div>
          <div class="details_content" v-html="product.productImg" v-if="item.id == 1">
          </div>
          <div class="evaluation" v-if="item.id == 2">
            <div class="evaluation-img" v-if="pinglunNum == 0">
              <img src="../../assets/img/leary.png" />
            </div>
            <div class="evaluationList" v-for="item in pinglun" :key="item.evaluationId">
              <van-row style="margin-top:10px;">
                <van-col span="3.5" offset="1" class="userPic">
                  <img :src="item.staffPhotourl ? item.staffPhotourl : defaultavatar" alt="">
                </van-col>
                <van-col span="7.5">
                  <p class="evaluationName">{{item.staffNickname}}</p>
                  <van-rate v-model="item.evaluationPraiseNum" disabled :size="16" disabled-color="#fdd951" />
                </van-col>
                <van-col span="13" class="date">{{item.evaluationTime}}</van-col>
              </van-row>
              <van-row>
                <van-col span="24" class="evaluationText">
                  {{item.evaluationContent}}
                </van-col>
              </van-row>
              <van-row class="evaluationPic">
                <van-col span="8" v-for="(usaePic,index) in item.prourl">
                  <img v-lazy="usaePic + '?x-oss-process=image/resize,m_fixed,h_110,w_110'" alt="" @click='goEvaluation(item.prourl,index)'>
                </van-col>
              </van-row>
            </div>
          </div>
          <div v-if="item.id == 3">
            <div class="keepOn">
              <div class="gy">
                <div v-for="(product,index) in products" :key="index" class="list">
                  <img :src="product.imgUrl" class="img" @click="toProductInfo(product.id)">
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
        <swiper :options="swiperOption">
          <swiper-slide v-for="item in swipePic" :key="item.id">
            <img class="swiper-img" :src="item + '?x-oss-process=image/resize,m_fixed,h_375,w_375'" alt="">
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </div>
    <!-- 商品图文详情 -->
    <van-goods-action v-show="show">
      <!-- <van-goods-action-mini-btn icon="like-o" text="收藏" /> -->
      <van-goods-action-mini-btn icon="cart" text="购物车" @click="toCart" />
      <van-goods-action-mini-btn icon="chat" text="客服" v-if="this.$route.query.from == 'ios' || this.$route.query.from == 'android'" />
      <van-goods-action-big-btn text="加入购物车" @click="openCart" />
      <van-goods-action-big-btn text="立即购买" primary @click="openPay(product.productId)" />
    </van-goods-action>
    <van-actionsheet v-model="show1" title="选择数量" style="color:#b7b4b4" class="selectNum">
      <p style="display:fixed">
        <span style="padding-left:1.5rem;color:black">数量</span>
        <van-stepper v-model="number"></van-stepper>
      </p>
      <van-button size="large" style="background-color:#ebc890;color:#fff" @click="toCart1">加入购物车</van-button>
    </van-actionsheet>
    <van-popup v-model="show2" position="top" :overlay="false">{{message}}</van-popup>
  </div>
</template>
<script>
import img from "../../assets/img/介绍.png";
import { Dialog, Rate } from "vant";
import { Toast } from "vant";
import traceabilityVue from "../traceability/traceability.vue";
import productInfo from "./service/product.js";
import defaultavatar from "../../assets/img/defaultavatar.png";
export default {
  name: "product_details",
  mixins: [productInfo, defaultavatar],
  data() {
    return {
      picIndex: "",
      top: false,
      pictureCorridor: false,
      cartLictPic: require("../../assets/img/组7@2x.png"),
      valuationPic: require("../../assets/img/评价DEMO.png"),
      marginBottom: "50px",
      show: false,
      show1: false,
      show2: false,
      message: "",
      type: "",
      number: 1,
      evaluationicon: 3,
      loop: true,
      swiperOption: {
        // 园点配置
        pagination: ".swiper-pagination",
        autoHeight:true,
        // 循环切换
        loop: false,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          autoHeight:true,
        }
      },
      total: 1,
      pinglun: "",
      pinglunNum: -1,
      ordersList: [
        { id: 1, text: "详情" },
        { id: 2, text: "评价()" },
        { id: 3, text: "推荐" }
      ],
      info: [],
      product: "",
      staffId: this.getCookie("staffId"),
      token: this.getCookie("token"),
      products: "",
      defaultavatar: defaultavatar,
      active: 0,
      swipePic: ""
    };
  },
  computed: {
    showswiper () {
      return this.product.proImgs
    }
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
      // 个人信息{
      this.getStaffInfo({
        staffId: this.getCookie("staffId"),
        token: this.getCookie("token")
      }).then(res => {
        this.ueseInfo = res.data;
        if (this.ueseInfo == "") {
          this.$router.push("/login");
        }
      });
      var istoken = this.isToken();
      if (istoken) {
      //   let productArr =  JSON.stringify([this.product]);
      //   sessionStorage.productArr = productArr;
      //   this.$router.push(`/cartDetermine`);
      // }
        var id = this.$route.params.id;
        this.addOrder(this.token, this.staffId, num, this.number).then(res => {
          if (res.code == 100003) {
            Dialog.alert({
              title: "购买失败",
              message: res.message
            }).then(() => {
            });
          }else {
            sessionStorage.path = this.$route.path;
          this.$router.push(`/cartDetermine/${res.data[0].orderId}`);
          }
        });
      }else {
        Dialog.confirm({
          title: "提示",
          message: "请先登录您的账户",
          confirmButtonText: "去登录"
        }).then(() => {
          this.$router.push(`/login`);
        }).catch()
      }
    },
    async toCart1() {
      var id = this.$route.params.id;
      // 个人信息{
      await this.getStaffInfo({
        staffId: this.getCookie("staffId"),
        token: this.getCookie("token")
      }).then(res => {
        this.ueseInfo = res.data;
        if (this.ueseInfo == "") {
          this.$router.push("/login");
        }
      });
      this.addCart(this.token, this.staffId, id, this.number).then(res => {
        if(res.code==100000){
			Dialog.alert({
				title: "提示",
				message: "添加成功"
			}).then(() => {
				this.$router.push(`/cart?number=` + this.number); // on close
			});
		}else{
			Dialog.alert({
				title: "提示",
				message: res.message
			}).then(() => {

			});
		}
      });
    },
    openCart(type) {
      var istoken = this.isToken();
      if (istoken) {
        this.show1 = true;
        this.type = type;
      }
    },
    toCart() {
      var istoken = this.isToken();
      if (istoken) {
        this.$router.push(`/cart?number=` + this.number);
      }
    },
    goEvaluation(item, index) {
      let from = this.$route.query.from;
      if (from == "IOS" || from == "Android") {
        this.$bridge.callHandler(
          "previewPicture",
          {
            type: "0"
          },
          data => {
          }
        );
      }
      this.swipePic = item;
      this.picIndex = index;
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
  watch: {
    number() {
      if (this.number > 99) {
        this.number = this.total;
      }
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
  async beforeMount() {
    sessionStorage.link = window.location.href;
    this.$bridge.registerHandler("giveShareInfo", (data, responseCallback) => {
      responseCallback({
        title: `${this.product.productName}`,
        toProductInfo: `${this.product.productInfo}`,
        link: window.location.href
      });
    });
    this.$bridge.registerHandler("closePicture", (data, responseCallback) => {
      this.pictureCorridor = false;
    });
    var id = this.$route.params.id;
    await this.getProductInfo(id) //获取列表
      .then(res => {
        this.product = res;
        console.log(this.product,'product')
        this.ordersList[1].text = `评价(${this.product.productPinglunnum})`;
        document.title = `${this.product.productName}`;
        this.pinglunNum = this.product.productPinglunnum;
      });
    await this.selectevaluationlist({
      productId: this.$route.params.id,
      pageNum: 1,
      pageSize: 100
    }).then(res => {
      this.pinglun = res;
      for (let item in this.pinglun) {
        this.pinglun[item].evaluationPraiseNum = parseInt(
          this.pinglun[item].evaluationPraiseNum
        );
      }
    });
    this.selectProByType().then(res => {
      this.products = res.data;
    });
  }
};
</script>
