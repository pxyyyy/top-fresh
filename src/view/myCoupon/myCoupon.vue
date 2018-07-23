<template>
  <div>
    <div class="wrapper">
      <van-list v-model="loading" :finished="finished" @load="onLoad">
        <van-row class="wrapper-content" v-for="item in myCouponList" :key="item.couponsId">
          <van-col span="6" class="wrapperLeft">
            <h2>
              <span>￥</span>{{item.couponsValue}}</h2>
          </van-col>
          <van-col span="11" class="wrapper-center" offset="1">
            <p>{{item.couponsName}}</p>
            <p>{{item.createtime}} - {{item.couponsEndTime}}</p>
            <!-- <p class="weight">{{item.couponsType}}</p> -->
          </van-col>
          <van-col span="6" class="wrapper-right">
            <div class="wrapper-right-icon">
              <img v-if="item.isReceive == 0 " src="../../assets/img/myCoupon.png" alt="">
              <img v-else src="../../assets/img/myCouponUnused.png" alt="">
            </div>
            <div class="wrapper-right-button">
              <button v-if="item.isReceive == 0 " @click="getCoupon(item)">立即领取</button>
              <button v-else style="background:#ccc;">已领取</button>
            </div>
          </van-col>
        </van-row>
      </van-list>
    </div>
  </div>
</template>

<script>
import service from "./service";
import { Toast } from "vant";
export default {
  mixins: [service],
  data() {
    return {
      myCouponList: [],
      loading: false,
      finished: false,
      pageNum: 0,
      type: "立即领取",
      code: "",
      staffId: this.getCookie("staffId"),
      token: this.getCookie("token"),
      title: ""
    };
  },
  computed: {},
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
    last() {
      this.$router.go(-1);
    },
    onLoad() {
      this.loading = true;
      this.pageNum++;
      this.getCouponsOfReceive({
        staffId: this.staffId,
        token: this.token,
        activityId: this.$route.params.id,
        pageNum: this.pageNum,
        pageSize: 7
      }).then(res => {
        this.loading = false;
        this.code = res.code;
        this.myCouponList = this.myCouponList.concat(res.data);
        if (res.data == "") {
          this.finished = true;
        }
      });
    },
    async getCoupon(item) {
      await this.fetchgetCouponsOfReceiveList({
        staffId: this.staffId,
        token: this.token,
        scCouponId: item.couponsId,
        scStaffId: item.scStaffId,
        scCouponType: item.couponsType,
        scCouponValue: item.couponsValue,
        scCouponStartTime: item.couponsReceiveStartTime,
        scCouponEndTime: item.couponsReceiveEndTime,
        scCouponState: 0,
        scStaffId: this.staffId
      }).then(res => {
        Toast("领取成功");
        this.onLoad();
      });
    }
  },
  async beforeMount() {
    await this.selectByPrimaryKey({
      acId: this.$route.params.id
    }).then(res => {
      this.title = res.data[0].acTitle;
      document.title = this.title;
    });
  }
};
</script>

<style lang="less" scoped>
.evetn-bar {
  width: 100%;
  background: #3d3d3d;
  color: #e1bf8a;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
}

.evetn-bar .evetn-icon {
  color: #e1bf8a;
}

.wrapper {
  padding: 10px;
}

.wrapper-content {
  border: 1px solid #fc5b7a;
  border-radius: 5px;
  padding: 5px;
  color: #fc5b7a;
  margin-top: 10px;
  .wrapperLeft {
    border-right: 1px dashed #d3d3d3;
    h2 {
      font-size: 50px;
    }
    span {
      font-size: 16px;
    }
  }
  .wrapper-center {
    font-size: 12px;
    color: #9f9f9f;
    line-height: 20px;
    border-right: 1px dashed #d3d3d3;
    .weight {
      color: black;
    }
  }
  .wrapper-right {
    padding: 8px;
  }
  .wrapper-right-button {
    text-align: center;
    button {
      background: #fc5a7a;
      color: #fff;
      padding: 0 10px;
      font-size: 12px;
      border-radius: 11px;
    }
  }
  .wrapper-right-icon {
    text-align: center;
    height: 0;
    padding-bottom: 40px;
    img {
      width: 30px;
      height: 30px;
    }
  }
}
</style>