<style lang="less" scoped>
@import "./orders.less";
</style>
<style>
.orders .van-tabs__nav--card .van-tab.van-tab--active {
  background: none !important;
  color: #e2bf85 !important;
}

.orders .van-tabs__nav--card .van-tab.van-tab--active span {
  border-bottom: 2px solid #e2bf85 !important;
}

.orders .van-tabs__nav--card {
  border: none !important;
  border-bottom: 1px solid #ccc !important;
}

.orders .van-tab {
  border: none !important;
}

.van-tabs--card .van-tabs__wrap {
  background: #fff;
}

.orders .van-tabs__content {
  margin: 0;
}

.orders .van-tabs__wrap--scrollable .van-tab {
  flex: auto;
}

.orders .van-tabs__wrap--scrollable .van-tabs__nav {
  margin: 0 2%;
}

.orders .van-tabs__nav--card {
  width: 100%;
}
</style>
<template>
  <div>
    <van-tabs v-model="active" class="orders" type="card" @click="onClick">
      <van-tab v-for="item in ordersList" :title="item.text" :key="item.id">
        <div class="coupon-content" v-if="item.id == 1">
          <van-list v-model="loading1" :finished="finished1" @load="onLoad1">
            <ul v-for="(order,index) in orders" :key="index" v-if="order.orderState=='1'">
              <li class="item" v-for="item in order.orderdetails" :key="item.odId">
                <div class="item-content">
                  <img :src="item.odProductIcon ? item.odProductIcon : '../../../assets/img/Crab.png' " alt="" class="item-img">
                  <div class="item-info">
                    <p class="item-title">{{item.odProductName}}</p>
                    <p class="item-desc">{{item.odProductDes}}</p>
                    <p class="item-button">
                      <strong class="money">￥{{item.odProductPprice}}</strong>
                      <span> x{{item.odProductNum}}</span>
                    </p>
                  </div>
                </div>
                <div class="item-bottom">
                  <p>
                    <span @click="cancel(order.orderId)">取消订单</span>
                    <button @click.stop="payment(item.odOrderId)">立即付款</button>
                  </p>
                </div>
              </li>
            </ul>
          </van-list>
        </div>
        <div class="coupon-content" v-if="item.id == 2">
          <van-list v-model="loading2" :finished="finished2" @load="onLoad2">
            <ul v-for="(order,index) in orders" :key="index">
              <li class="item" v-for="item in order.orderdetails" :key="item.odId">
                <div class="item-content">
                  <img :src="item.odProductIcon ? item.odProductIcon : '../../../assets/img/Crab.png' " alt="" class="item-img">
                  <div class="item-info">
                    <p class="item-title">{{item.odProductName}}</p>
                    <p class="item-desc">{{item.odProductDes}}</p>
                    <p class="item-button">
                      <strong class="money">￥{{item.odProductPprice}}</strong>
                      <span> x{{item.odProductNum}}</span>
                    </p>
                  </div>
                </div>
                <div class="item-bottom">
                  <p class="item-bottom-two">等待发货</p>
                </div>
              </li>
            </ul>
          </van-list>
        </div>
        <div class="coupon-content" v-if="item.id == 3">
          <van-list v-model="loading3" :finished="finished3" @load="onLoad3">
            <ul v-for="(order,index) in orders" :key="index" v-if="order.orderState=='3'">
              <li class="item" v-for="item in order.orderdetails" :key="item.odId">
                <div class="item-content">
                  <img :src="item.odProductIcon ? item.odProductIcon : '../../../assets/img/Crab.png' " alt="" class="item-img">
                  <div class="item-info">
                    <p class="item-title">{{item.odProductName}}</p>
                    <p class="item-desc">{{item.odProductDes}}</p>
                    <p class="item-button">
                      <strong class="money">￥{{item.odProductPprice}}</strong>
                      <span> x{{item.odProductNum}}</span>
                    </p>
                  </div>
                </div>
                <div class="item-bottom">
                  <p>
                    <button class="item-bottom-three">确认收货</button>
                    <button @click="viewLogistics(order.orderCode)">查看物流</button>
                  </p>
                </div>
              </li>
            </ul>
          </van-list>
        </div>
        <div class="coupon-content" v-if="item.id == 4">
          <van-list v-model="loading4" :finished="finished4" @load="onLoad4">
            <ul v-for="(order,index) in orders" :key="index">
              <li class="item" v-for="item in order.orderdetails" :key="item.odId">
                <div class="item-content">
                  <img :src="item.odProductIcon ? item.odProductIcon : '../../../assets/img/Crab.png' " alt="" class="item-img">
                  <div class="item-info">
                    <p class="item-title">{{item.odProductName}}</p>
                    <p class="item-desc">{{item.odProductDes}}</p>
                    <p class="item-button">
                      <strong class="money">￥{{item.odProductPprice}}</strong>
                      <span> x{{item.odProductNum}}</span>
                    </p>
                  </div>
                </div>
                <div class="item-bottom">
                  <!-- <button v-if="order.orderState == 1" @click="viewLogistics(order.orderCode)">查看物流</button>
                  <button v-if="order.orderState == 4" @click='gotDetails(item)'>查看详情</button>
                  <p v-else-if="order.orderState == 5">已取消</p> -->
                  <div v-if="order.orderState == 1">
                    <span @click="cancel(order.orderId)">取消订单</span>
                    <button @click.stop="payment(item.odOrderId)">立即付款</button>
                  </div>
                  <div v-if="order.orderState == 2">
                    <div class="item-bottom">
                      <p class="item-bottom-two">等待发货</p>
                    </div>
                  </div>
                  <div v-if="order.orderState == 3">
                    <button class="item-bottom-three">确认收货</button>
                    <button @click="viewLogistics(order.orderCode)">查看物流</button>
                  </div>
                  <div v-if="order.orderState == 4">
                    <button v-if="order.orderState == 4" @click='gotDetails(item)'>查看详情</button>
                  </div>
                  <div v-if="order.orderState == 5">
                    <p>已取消</p>
                  </div>
                </div>
              </li>
            </ul>
          </van-list>
        </div>
        <div class="coupon-content" v-if="item.id == 5">
          <van-list v-model="loading5" :finished="finished5" @load="onLoad5">
            <ul v-for="(order,index) in orders" :key="index">
              <li class="item" v-for="item in order.orderdetails" :key="item.odId">
                <div class="item-content">
                  <img :src="item.odProductIcon ? item.odProductIcon : '../../../assets/img/Crab.png' " alt="" class="item-img">
                  <div class="item-info">
                    <p class="item-title">{{item.odProductName}}</p>
                    <p class="item-desc">{{item.odProductDes}}</p>
                    <p class="item-button">
                      <strong class="money">￥{{item.odProductPprice}}</strong>
                      <span> x {{item.odProductNum}}</span>
                    </p>
                  </div>
                </div>
                <div class="item-bottom">
                  <p>
                    <button @click="viewLogistics(order.orderCode)">查看物流</button>
                    <button @click="goEvaluation(item)">立即评价</button>
                  </p>
                </div>
              </li>
            </ul>
          </van-list>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import order from "../service/order.js";
import { Dialog, Toast } from "vant";
export default {
  mixins: [order],
  name: "orders",
  data() {
    return {
      active: "",
      ordersList: [
        { id: 1, text: "待付款" },
        { id: 2, text: "待发货" },
        { id: 3, text: "待收货" },
        { id: 5, text: "待评价" },
        { id: 4, text: "全部订单" }
      ],
      orders: [],
      loading1: false,
      finished1: false,
      loading2: false,
      finished2: false,
      loading3: false,
      finished3: false,
      loading4: false,
      finished4: false,
      loading5: false,
      finished5: false,
      pageNum: 0,
      code: false,
      staffId: this.getCookie("staffId"),
      token: this.getCookie("token")
    };
  },
  computed: {
    changeActive() {
      return this.$store.state.app.currentActiveForProfile;
    }
  },
  mounted() {
    document.title = "我的订单";
    this.init();
  },
  methods: {
    viewLogistics(code) {
      this.$router.push(`/expressdelivery/shunfeng/${code}`);
    },
    // 取消订单
    cancel(id) {
      Dialog.confirm({
        title: "取消订单",
        message: "您确认取消订单吗"
      })
        .then(() => {
          this.cancelOrder({
            staffId: this.getCookie("staffId"),
            token: this.getCookie("token"),
            orderId: id
          }).then(res => {
            Toast("取消成功");
          });
        })
        .catch(() => {
          // on cancel
        });
    },
    // 评价
    goEvaluation(item) {
      this.$router.push(`/evaluationOrder/${item.odProductId}`);
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
    payment(id) {
      this.$router.push(`/cartDetermine/${id}`);
    },
    onClick(index) {
      this.pageNum = 0;
      this.orders = [];
      if (index == 0) {
        this.finished1 = false;
        this.onLoad1();
      } else if (index == 1) {
        this.finished2 = false;
        this.onLoad2();
      } else if (index == 2) {
        this.finished3 = false;
        this.onLoad3();
      } else if (index == 3) {
        this.finished5 = false;
        this.onLoad5();
      } else if (index == 4) {
        this.finished4 = false;
        this.onLoad4();
      }
    },
    onLoad1() {
      // 待付款
      this.loading1 = true;
      this.pageNum++;
      this.getOrder(this.staffId, this.token, 1, 7, this.pageNum).then(res => {
        this.loading1 = false;
        this.code = res.code;
        this.orders = this.orders.concat(res.data);
        if (res.data == "") {
          this.finished1 = true;
        }
      });
    },
    onLoad2() {
      // 待发货
      this.loading2 = true;
      this.pageNum++;
      this.getOrder(this.staffId, this.token, 2, 7, this.pageNum).then(res => {
        this.loading2 = false;
        this.code = res.code;
        this.orders = this.orders.concat(res.data);
        if (res.data == "") {
          this.finished2 = true;
        }
      });
    },
    onLoad3() {
      // 待收货
      this.loading3 = true;
      this.pageNum++;
      this.getOrder(this.staffId, this.token, 3, 7, this.pageNum).then(res => {
        this.loading3 = false;
        this.code = res.code;
        this.orders = this.orders.concat(res.data);
        if (res.data == "") {
          this.finished3 = true;
        }
      });
    },
    onLoad4() {
      // 全部订单
      this.loading4 = true;
      this.pageNum++;
      this.getOrder(this.staffId, this.token, "", 7, this.pageNum).then(res => {
        this.loading4 = false;
        this.code = res.code;
        this.orders = this.orders.concat(res.data);
        if (res.data == "") {
          this.finished4 = true;
        }
      });
    },
    onLoad5() {
      this.loading5 = true;
      this.pageNum++;
      this.getOrder(this.staffId, this.token, "4", 7, this.pageNum).then(
        res => {
          this.loading5 = false;
          this.code = res.code;
          this.orders = this.orders.concat(res.data);
          if (res.data == "") {
            this.finished5 = true;
          }
        }
      );
    },
    init() {
      this.active = this.changeActive;
    },
    gotDetails(item) {
      this.$router.push(`OrderDetails/${item.odOrderId}`);
    },
    returnProfile() {
      this.$router.push("/profile");
    }
  },
  beforeMount() {
    sessionStorage.link = window.location.href
    if (!this.staffId) {
      this.$router.push("/login");
    } else {
      this.getStaffInfo({
        staffId: this.getCookie("staffId"),
        token: this.getCookie("token")
      }).then(res => {
        this.ueseInfo = res.data;
        if (this.ueseInfo == "") {
          this.$router.push("/login");
        }
      });
    }
  }
};
</script>
