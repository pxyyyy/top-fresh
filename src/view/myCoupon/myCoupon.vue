<template>
    <div>
        <van-nav-bar title="可领取的优惠券" class="evetn-bar">
            <van-icon name="arrow-left" slot="left" class="evetn-icon" @click="last" />
        </van-nav-bar>
        <div class="wrapper">
                <van-row class="wrapper-content" v-for="item in myCouponList" :key="item.couponsId">
                    <van-col span="6" class="wrapperLeft">
                        <h2>
                            <span>￥</span>{{item.couponsValue}}</h2>
                    </van-col>
                    <van-col span="11" class="wrapper-center" offset="1">
                        <p>{{item.couponsName}}</p>
                        <p>{{item.couponsReceiveStartTime}} - {{item.couponsReceiveEndTime}}</p>
                        <p class="weight">{{item.couponsType}}</p>
                    </van-col>
                    <van-col span="6" class="wrapper-right">
                        <div class="wrapper-right-icon">
                            <img v-if="item.isReceive == 0 " src="../../assets/img/myCoupon.png" alt="">
                            <img v-else  src="../../assets/img/myCouponUnused.png" alt="">
                        </div>
                        <div class="wrapper-right-button">
                            <button  v-if="item.isReceive == 0 "   @click="getCoupon(item)">立即领取</button>
                            <button  v-else    style="background:#ccc;">已领取</button>
                        </div>
                    </van-col>
                </van-row>
                 <van-row>
            <van-col span="24" style="text-align:center; font-size:10px;margin:20px 0;color:#ccc;">
                <div  @click='loadMore()' v-if="code == '100000'">加载更多 </div>
                <div v-else >没有更多数据~~</div>
              </van-col>
          </van-row>
        </div>
    </div>
</template>

<script>
import service from "./service";
export default {
  mixins: [service],
  data() {
    return {
      myCouponList: "",
      loading: false,
      finished: false,
      pageNum: 1,
      type: '立即领取',
      code: ''
    };
  },
  methods: {
    last() {
      this.$router.go(-1);
    },
    loadMore (index) {
      var staffId = sessionStorage.getItem("staffId");
      var token = sessionStorage.getItem("token");
      this.pageNum ++
      this.getCouponsOfReceive({
        staffId,
        token,
        pageNum: this.pageNum,
        pageSize: 7
      }).then((res) =>{
        this.code = res.code
        this.myCouponList = this.myCouponList.concat(res.data);
      })
		},
    async getCoupon (item) {
      var staffId = sessionStorage.getItem("staffId");
      var token = sessionStorage.getItem("token");
      await this.fetchgetCouponsOfReceiveList({
        staffId,
        token,
        scCouponId:item.couponsId,
        scStaffId:item.scStaffId,
        scCouponType:item.couponsType,
        scCouponValue:item.couponsValue,
        scCouponStartTime:item.couponsReceiveStartTime,
        scCouponEndTime:item.couponsReceiveEndTime,
        scCouponState:0,
        scStaffId:staffId
      });
      this.getCouponsOfReceive({
        staffId,
        token,
        pageNum: this.pageNum,
        pageSize: 7
      }).then(res => {
        this.myCouponList = res.data;
        this.code = res.code 
      });
    },
  },
  computed: {
  },
  beforeMount() {
      var staffId = sessionStorage.getItem("staffId");
      var token = sessionStorage.getItem("token");
      this.getCouponsOfReceive({
        staffId,
        token,
        pageNum: 1,
        pageSize: 7
      }).then((res) =>{
        this.code = res.code
        this.myCouponList = res.data
      })
  }
};
</script>

<style lang="less" scoped  >
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
  margin-top: 45px;
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
