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
    <swiper :options="swiperOption" v-if="infoProduct" :class="{marginTop:ismarginTop}">
      <swiper-slide v-for="(image, index) in infoProduct.product.proImgs" :key="index">
        <img v-lazy="image.imgUrl" class="img" />
      </swiper-slide>
    </swiper>
    <!-- 商品详细信息 -->
    <div class="discript" v-if="infoProduct">
      <p class="title">{{infoProduct.productName}}</p>
      <p class="priceaa">
        <span class="collage" style="font-size:36px;">
          ￥{{infoProduct.pingMoney}}/{{infoProduct.product.productUnit}}
        </span>
        <span class="alone">
          单价买 ￥{{infoProduct.product.productPrice}}
        </span>
      </p>

      <ul class="collage-success-info-people" v-if="infoProduct.user">
        <li v-for="(item,index) in infoProductUser" :key="index">
          <img :src="item.staffPhotourl ? item.staffPhotourl : defaultavatar">
        </li>
        <li v-for="item in (infoProduct.successPeopleNum - infoProductUser.length )" :key="item" v-if="infoProduct.successPeopleNum < 5 && infoProductUser">
          <img :src="xhdpiPic">
        </li>
        <li v-for="item in (5 - infoProductUser.length)" :key="item" v-if="infoProduct.successPeopleNum >= 5 && infoProductUser ">
          <img :src="xhdpiPic">
        </li>
      </ul>
      <p class="collage-success-info-success">
        结束时间
        <span class="time">{{infoProduct.product.productEndDate}}</span>
      </p>
      <p class="collage-success-info-button">
        <button @click="participate" v-text="riend"></button>
      </p>
      <p class="collage-success-info-bottom">
        <span :class="{spanActive1:isspan1}">邀请好友参团 </span> > <span :class="{spanActive2:isspan2}">拼团成功分别发货</span> > <span>人数不足自动退款</span></p>
    </div>
    <div class="xinxi" v-if="infoProduct">
      <p>
        <span>商品类型:</span>
        <span v-for="(type,index) in infoProduct.product.productPtype" :key="index">
          <span class="type" v-if="type == 2">现货</span>
          <span class="type" v-else>礼卡</span>
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
        <span>商品规格:</span>
        <span>{{infoProduct.product.productDetail}}</span>
      </p>
      <p>
        <span>提货周期:</span>
        <span>{{infoProduct.product.productBeginDate}} <span style="color:#e2c083 ">—</span>  {{infoProduct.product.productEndDate}}</span>
      </p>
    </div>
    <div class="details" :style="{marginBottom:marginBottom}" v-if="infoProduct.product.productImg">
      <p class="details_title">
        ---- 商品详情 ----
      </p>
      <div class="details_content" v-html="infoProduct.product.productImg">
      </div>
    </div>
    <!-- 遮罩 -->
    <div class="shareIt" v-if="showshareIt" @click="shareItClick">
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
import defaultavatar from "../../assets/img/defaultavatar.png";
export default {
  name: "product_details",
  mixins: [service],
  data() {
    return {
      isspan1:true,
      isspan2:false,
      defaultavatar: defaultavatar,
      riend: "立即参团",
      ismarginTop: false,
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
    shareItClick() {
      this.showshareIt = false;
    },
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
    // setCookieMethods
    setCookie(token, staffId) {
      var Days = 30; //cookie 将被保存30天
      var exp = new Date(); //获得当前时间
      exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000); //换成毫秒
      document.cookie =
        token + "=" + staffId + "; expires=" + exp.toGMTString();
    },
    async participate() {
      sessionStorage.link = window.location.href;
      let from = this.$route.query.from;
      if (from == "Android") {
        this.giveShareInfo();
      } else if (from == "IOS") {
        this.$bridge.callHandler(
          "giveShareInfo",
          {
            title: "你收到一个拼团邀请",
            toProductInfo: `${this.infoProduct.product.productName}`,
            link: window.location.href
          },
          data => {
            console.log("success");
          }
        );
      } else {
        if (!this.staffId && this.riend == "立即参团") {
          sessionStorage.link = window.location.href;
          this.$router.push("/login");
        } else if (this.staffId != this.$route.params.startUser  && this.riend == "立即参团") {
          // 个人信息
          await this.getStaffInfo({
            staffId: this.getCookie("staffId"),
            token: this.getCookie("token")
          }).then(res => {
            var ueseInfo = res.code;
            if (ueseInfo != 100000) {
              sessionStorage.link = window.location.href;
              this.$router.push("/login");
            } else {
              if(this.riend == "立即参团"){
                this.addUserTogetherOrder({
                  staffId: this.getCookie("staffId"),
                  token: this.getCookie("token"),
                  togetherOrderId: this.infoProduct.togetherOrderId,
                  flagTO: 1,
                  togetherId: this.infoProduct.togetherId,
                  startUser: this.infoProduct.startUser
                }).then(result => {
                  sessionStorage.teamworkMoney = "";
                  if (result.code == 100003) {
                    Dialog.alert({
                      title: "参团提醒",
                      message: "亲,你已经参加过此类团购"
                    }).then(() => {
                      window.location.href = "http://shop.jiweishengxian.com";
                    });
                  }else{
                    this.$router.push(`/collageDetermineOther/${result.data[0]}`);
                  }
                });
              }
            }
          });
        }
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
  async beforeMount() {
    let from = this.$route.query.from;
    if (from) {
      this.ismarginTop = true;
    }
    await this.getTogetherOrderProcessMessage({
      togetherOrderId: this.$route.params.id
    }).then(res => {
      this.infoProduct = res;
      this.infoProductUser = res.user;
      this.startUser = res.startUser;
      if (from == "IOS" || from == "Android") {
        this.showshareIt = false;
        this.riend = "邀请好友参团";
      } else {
        for (let item in this.infoProductUser) {
          if (this.getCookie("staffId") == this.infoProductUser[item].staffId) {
            this.showshareIt = true;
            this.riend = "邀请好友参团";
          } else {
            this.riend = "立即参团";
          }
        }
        if(this.infoProductUser.length == this.infoProduct.successPeopleNum) {
          this.riend = "拼团成功";
          this.showshareIt = false;
          this.isspan1 = false;
          this.isspan2 = true;
        }
      }
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
