<style scoped lang="less">
@import "./coupon.less";
</style>
<style>
.coupon .van-tabs__wrap {
  z-index: 0;
}

.coupon .van-tabs__nav--card .van-tab.van-tab--active {
  background: none !important;
  color: #e2bf85 !important;
}

.coupon .van-tabs__nav--card .van-tab.van-tab--active span {
  border-bottom: 1px solid #e2bf85 !important;
}

.coupon .van-tabs__nav--card {
  border: none !important;
  border-bottom: 1px solid #ccc !important;
  margin: 0 7%;
}

.coupon .van-tab {
  border: none !important;
  padding: 0 20px !important;
}
</style>
<template>
  <div>
    <van-tabs v-model="active" class="coupon" type="card" @click="Unused">
      <van-tab v-for="index in 2" :title="index == 1 ? '未使用' : '已过期'" :key="index">
        <div v-if="index == 1" class="coupon-content" v-for="(item,num) in coupon" :key='num'>
          <!-- 在购物车进入 -->
          <van-row class="wrapper-content" v-if="$route.params.type == 0">
            <div @click='useaCoupon(item.coupons.couponsValue,item.scId)'>
              <van-col span="6" class="wrapperLeft">
                <h3>
                  <span>￥</span>{{item.coupons.couponsValue}}</h3>
              </van-col>
              <van-col span="11" class="wrapper-center" offset="1">
                <p>{{item.coupons.couponsName}}</p>
                <p>{{item.coupons.couponsStartTime}} - {{item.coupons.createtime}}</p>
                <p class="weight">{{item.couponsType}}</p>
              </van-col>
              <van-col span="6" class="wrapper-right">
                <div class="wrapper-right-icon">
                  <img src="../../../assets/img/myCoupon.png" alt="">
                </div>
                <div class="wrapper-right-button">
                </div>
              </van-col>
            </div>
          </van-row>
          <!-- 个人中心进入 -->
          <van-row v-if="$route.params.type == 1" class="wrapper-content">
            <van-col span="6" class="wrapperLeft">
              <h3 style="font-size:34px;text-align: center;margin-right: 13px;">
                <span>￥</span>{{item.coupons.couponsValue}}</h3>
            </van-col>
            <van-col span="11" class="wrapper-center" offset="1">
              <p>{{item.coupons.couponsName}}</p>
              <p>{{item.coupons.couponsStartTime}} - {{item.coupons.createtime}}</p>
              <p class="weight">{{item.couponsType}}</p>
            </van-col>
            <van-col span="6" class="wrapper-right">
              <div class="wrapper-right-icon">
                <img src="../../../assets/img/myCoupon.png" alt="">
              </div>
              <div class="wrapper-right-button">
              </div>
            </van-col>
          </van-row>
        </div>
        <!--已过期-->
        <div v-if="index == 2" class="coupon-content coupon-Expired" v-for="(item,num) in coupon1" :key='num' @click="Unused">
          <van-row class="wrapper-content" style="border:1px solid #ccc;">
            <van-col span="6" class="wrapperLeft">
              <h3 style="color:#ccc;font-size:34px;text-align: center;margin-right: 13px;">
                <span>￥</span>{{item.coupons.couponsValue}}</h3>
            </van-col>
            <van-col span="11" class="wrapper-center" offset="1">
              <p>{{item.coupons.couponsName}}</p>
              <p>{{item.coupons.couponsStartTime}} - {{item.coupons.createtime}}</p>
              <p class="weight">{{item.couponsType}}</p>
            </van-col>
            <van-col span="6" class="wrapper-right">
              <div class="wrapper-right-icon">
                <img src="../../../assets/img/myCouponUnused.png" alt="">
              </div>
              <div class="wrapper-right-button">
              </div>
            </van-col>
          </van-row>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import coupon from "../service/coupon.js";
import productInfo from "../../product/service/product.js";
export default {
  name: "coupon",
  mixins: [coupon, productInfo],
  data() {
    return {
      active: 2,
      coupon: null,
      coupon1: null,
      token: this.getCookie("token"),
      staffId: this.getCookie("staffId")
    };
  },
  methods: {
    // 使用优惠券
    useaCoupon(money, scId) {
      // 优惠券价格保存
      sessionStorage.money = money;
      sessionStorage.scId = scId;
      this.$router.push(`/cartDetermine`);
    },
    returnProfile() {
      this.$router.go(-1);
    },
    // 点击切换
    Unused(index) {
      if (index == 0) {
        if (this.$route.params.type == 0) {
          var allmoney = this.product.productPtype * this.product.productPrice;
          this.getCoupnsListByOrderId({
            token: this.token,
            staffId: this.staffId,
            allmoney: allmoney
          }).then(res => {
            this.coupon = res;
          });
        } else {
          this.getCoupon(this.staffId, this.token, 0).then(res => {
            this.coupon = res;
          });
        }
      } else {
        this.getCoupon(this.staffId, this.token, 1).then(res => {
          this.coupon1 = res;
        });
      }
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
    }
  },
  beforeDestroy() {
			setTimeout(() => {
				sessionStorage.removeItem('isAddressTop')
			}, 1000)
},
  async beforeMount() {
    var id = this.$route.params.id;
    await this.getProductInfo(id) //获取列表
      .then(res => {
        this.product = res;
      });
    sessionStorage.setItem('isAddressTop', true);
      if (this.$route.params.type == 0) {
        var allmoney = this.product.productPtype * this.product.productPrice;
        this.getCoupnsListByOrderId({
          token: this.token,
          staffId: this.staffId,
          allmoney: allmoney
        }).then(res => {
          this.coupon = res;
        });
      } else {
        this.getCoupon(this.staffId, this.token, 0).then(res => {
          this.coupon = res;
        });
      }
    }
};
</script>
