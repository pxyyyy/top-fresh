<style lang="less" scoped>
@import "./MyCollage.less";
</style>
<template>
  <div>
    <div class="leary" v-if="learyShow">
      <img src="../../../assets/img/leary.png" alt="">
    </div>
    <div class="MyCollage">
      <div class="MyCollage-item" v-for="item in MyCollage" :key="item.id">
        <div class="MyCollage-item-content">
          <div class="MyCollage-img">
            <img src="../../../assets/img/Crab.png" alt="">
          </div>
          <div class="MyCollage-info">
            <p>{{item.title}}</p>
            <p class="MyCollage-info-money">￥{{item.priceTogether}}
              <span>￥{{item.originalPrice}}</span>
            </p>
          </div>
        </div>
        <div class="MyCollage-bottom">
          <p class="MyCollage-bottom-state" v-if="item.status == 2">拼团中</p>
          <p class="MyCollage-bottom-state" v-else-if="item.status == 3">拼团失败</p>
          <p class="MyCollage-bottom-state" v-else-if="item.status == 4">拼团成功</p>
          <p class="cancel" @click="cancelPt(item.id)" v-if="item.status == 2">取消拼团</p>
          <p>
            <button @click="details(item)">订单详情</button>
          </p>
          <p>
            <button @click="goInfo(item.togetherId,item.startUser)">拼团详情</button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import service from "../service/order.js";
import { Dialog, Toast } from "vant";
export default {
  name: "MyCollage",
  mixins: [service],
  data() {
    return {
      MyCollage: "",
      learyShow: false
    };
  },
  methods: {
    cancelPt(id) {
      Dialog.confirm({
        title: "取消拼团",
        message: "您确定要取消吗？"
      })
        .then(() => {
          this.togetherOrder(
            id,
            this.getCookie("staffId"),
            this.getCookie("token")
          ).then(res => {
            Toast("取消拼团成功,钱将原价返回");
            this.getTogetherOrderInfo({
              staffId:this.getCookie('staffId'),
              token:this.getCookie('token')
            }).then(res => {
              this.MyCollage = res;
              console.log(this.MyCollage)
              if (this.MyCollage == "") {
                this.learyShow = true;
              }
            });
          });
        })
        .catch(() => {
          // on cancel
        });
    },
    details(json) {
      this.$router.push("/ptOrderDetails");
      this.$store.commit("setcurrentActiveName", json);
    },
    goInfo(detailCode, startUser) {
      this.$router.push(`/collageShare/${detailCode}/${startUser}`);
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
    goProFile() {
      this.$router.push("/ProFile");
    },
    goCollageSuccess() {
      this.$router.push("/CollageSuccess");
    },
    goCollageFailure() {
      this.$router.push("/CollageFailure");
    }
  },
  beforeMount() {
    document.title = "我的拼团";
    var staffId = this.getCookie("staffId");
    var token = this.getCookie("token");
    this.getTogetherOrderInfo({
      staffId,
      token
    }).then(res => {
      this.MyCollage = res;
      if (this.MyCollage == "") {
        this.learyShow = true;
      }
    });
  }
};
</script>