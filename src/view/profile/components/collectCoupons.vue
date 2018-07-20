<template>
  <div>
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
        <span>&yen;{{product.productPrice}}/{{product.productNum}}只</span>
        <span class="old">&yen;{{product.productOprice}}</span>
      </p>
      <p class="price" v-else>
        <span>&yen;{{product.productOprice}}/{{product.productNum}}只</span>
      </p>
    </div>
    <div class="phone">
      <p>
        <input class="phoneNumer" type="number" placeholder="请输入手机号" v-model="phone" maxlength="11" pattern="[0-9]*" oninput="if(value.length>11)value=value.slice(0,11)" />
      </p>
      <p class="verificationwrap">
        <input type="text" placeholder="请输入验证码" class="verificationCode" v-model="yzm">
        <button class="verification" v-if="verificationText == '获取验证码' ||verificationText == '重新发送验证码' " @click="Countdown" v-text="verificationText"></button>
        <button class="verification" v-else v-text="verificationText"></button>
      </p>
      <p style="text-align:center">
        <button class="receive" @click="receivecoupons">领取</button>
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
        <span>可得积分:</span>
        <span>可获得{{product.productScore}}积分</span>
      </p>
    </div>
    <div class="details">
      <van-tabs type="card" v-model="active">
        <van-tab v-for="item in ordersList" :title="item.text" :key="item.id">
          <div class="details_content" v-html="product.productImg" v-if="item.id == 1"></div>
          <div class="evaluation" v-if="item.id == 2">
            <div class="evaluationList" v-for="item in 10" :key="item">
              <van-row style="margin-top:10px;">
                <van-col span="3.5" offset="1">
                  <img src="../../../assets/img/Avatar.png" alt="">
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
                  <img v-lazy="valuationPic" alt="" @click='goEvaluation'>
                </van-col>
              </van-row>
            </div>
          </div>
          <div v-if="item.id == 3">
            <div class="keepOn">
              <p>
                <span>——</span> 推荐商品
                <span>——</span>
              </p>
              <div class="img-conent" @click="toProductInfo(item.id)" v-for="item in products" :key="item.id">
                <img v-lazy="item.imgUrl" alt="">
              </div>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import coupon from "../service/coupon";
import { Decrypt, Encrypt } from "@/assets/js/crypto.js";
import { Toast } from "vant";
export default {
  mixins: [coupon],
  data() {
    return {
      product: "",
      active: "",
      yzm: "",
      evaluationicon: 3,
      valuationPic: require("../../../assets/img/评价DEMO.png"),
      ordersList: [
        { id: 1, text: "详情" },
        { id: 2, text: "评价(201)" },
        { id: 3, text: "推荐" }
      ],
      products: "",
      swiperOption: {
        loop: true,
        effect: "fade"
      },
      verificationText: "获取验证码",
      phone: "",
      show: true,
      count: "",
      timer: null
    };
  },
  methods: {
    goEvaluation() {
      this.$router.push(`/evaluation`);
    },
    receivecoupons() {
      this.getFriend({
        phone: this.phone,
        msgcode: this.yzm,
        odId: this.$route.params.id
      }).then(res => {
        if (res.code == "100000") {
          Toast("领取成功");
        } else {
          Toast(res.message);
        }
      });
    },
    // 验证码倒计时
    Countdown() {
      const TIME_COUNT = 60;
      let reg = /^[1][3,4,5,7,8][0-9]{9}$/;
      if (this.phone == "") {
        Toast("请输入手机号");
      } else if (!reg.test(this.phone) || this.phone.length < 11) {
        Toast("请输入正确手机号");
      } else {
        if (!this.timer) {
          this.count = TIME_COUNT;
          this.show = false;
          this.timer = setInterval(() => {
            if (this.count > 0 && this.count <= TIME_COUNT) {
              this.count--;
              this.verificationText = this.count + "秒后重新获取";
            } else {
              this.show = true;
              clearInterval(this.timer);
              this.timer = null;
              this.verificationText = "重新发送验证码";
            }
          }, 1000);
        }
        let dd = Encrypt(this.phone);
        console.log(dd);
        this.d2 = dd;
        console.log(this.d2);
        this.getCode(this.d2);
      }
    }
  },
  beforeMount() {
    document.title = "提货券领取";
    this.getLadingPrimaryKey({
      odId: this.$route.params.id
    }).then(res => {
      this.product = res;
    });
    this.selectProByType().then(res => {
      this.products = res.data;
    });
  }
};
</script>

<style lang="less" scoped>
@import "./collectCoupons.less";
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
</style>

