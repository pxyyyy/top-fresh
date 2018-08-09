<style lang="less" scoped>
@import "./teamwork.less";
</style>
<template>
  <div>
    <div class="teamwork">
      <div class="teamwork-content" v-for="item in teamworkList" :key="item.orderId">
        <div class="teamwork-img">
          <img v-lazy="item.coverImg" alt="">
        </div>
        <div class="teamwork-info">
          <p class="teamwork-info-title">
            {{item.title}}
          </p>
          <p class="teamwork-info-bottom">
            ￥{{item.priceTogether}}
            <span @click="alone">单买价￥{{item.originalPrice}}</span>
            <button v-if="item.canPay == 1" style="background:#ccc;">不可购买</button>
            <button @click="goCollage(item.id,item.productId)" v-else>去开团</button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import service from "./service/order.js";
import { mapState } from "vuex";
export default {
  name: "teamwork",
  mixins: [service],
  data() {
    return {
      CollageBgPic: require("../../assets/img/CollageBg.png"),
      teamworkList: ""
    };
  },
  computed: {
    title() {
      return this.$store.state.app.currentActiveName;
    }
  },
  methods: {
    goCollage(id, productId) {
      this.$router.push(`/collageDetail/${id}/${productId}`);
    },
    last() {
      this.$router.go(-1);
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
  beforeMount() {
    sessionStorage.link = window.location.href;
    document.title = this.title;
    if (!this.getCookie("staffId")) {
      this.$router.push("/login");
    }
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
    var staffId = this.getCookie("staffId");
    var token = this.getCookie("token");
    this.getTogetherOrderList({
      staffId,
      token,
      activityId: this.$route.params.id,
      pageNum: 1,
      pageSize: 7
    }).then(res => {
      this.teamworkList = res;
    });
  }
};
</script>
