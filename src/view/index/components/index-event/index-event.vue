<style lang="less" scoped>
@import "./index-event.less";
</style>
<template>
  <div class="event-index">
    <van-row class="e-row" v-if="!this.$route.query.from">
      <van-col class="event-list" span="8" @click.native="goGoodListVC('礼卡',0)"><img src="../../../../assets/icon/lipin.png" width="50" height="50"> 礼卡区</van-col>
      <van-col class="event-list" span="8" @click.native="goGoodListVC('现货',1)"><img src="../../../../assets/icon/xianhuo.png" width="50" height="50">现货区</van-col>
      <van-col class="event-list" span="8" @click.native="goPickupVC()"><img src="../../../../assets/icon/tihuo.png" width="50" height="50">礼卡提货</van-col>
    </van-row>
    <van-row class="e-row" v-else>
      <van-col class="event-list" span="6" @click.native="goGoodListVC('礼卡',0)"><img src="../../../../assets/icon/lipin.png" width="50" height="50"> 礼卡区</van-col>
      <van-col class="event-list" span="6" @click.native="goGoodListVC('现货',1)"><img src="../../../../assets/icon/xianhuo.png" width="50" height="50">现货区</van-col>
      <van-col class="event-list" span="6" @click.native="goPickupVC()"><img src="../../../../assets/icon/tihuo.png" width="50" height="50">礼卡提货</van-col>
      <van-col class="event-list" span="6" @click.native="Traceability()"><img src="../../../../assets/icon/candi.png" width="50" height="50">产地溯源</van-col>
    </van-row>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  beforeMount() {},
  methods: {
    Traceability() {
      let from = this.$route.query.from;
      console.log("from", from);
      if (from == "IOS") {
        this.$bridge.callHandler(
          "goGoodOriginVC",
          {
            name: name
          },
          data => {
            console.log("IOS success");
          }
        );
      } else if (from == "Android") {
        this.$bridge.callHandler(
          "goGoodOriginVC",
          {
            name: name
          },
          data => {
            console.log("Android success");
          }
        );
      }
    },
    goGoodListVC(name, id) {
      let from = this.$route.query.from;
      console.log("from", from);
      if (from == "IOS") {
        this.$bridge.callHandler(
          "goGoodListVC",
          {
            name: name
          },
          data => {
            console.log("IOS success");
          }
        );
      } else if (from == "Android") {
        this.$bridge.callHandler(
          "goGoodListVC",
          {
            name: name
          },
          data => {
            console.log("Android success");
          }
        );
      } else {
        this.$router.push(`/goodsList/${id}`);
      }
    },
    goPickupVC() {
      console.log("success");
      let from = this.$route.query.from;
      console.log("from", from);
      if (from == "IOS") {
        this.$bridge.callHandler("goPickupVC", data => {
          console.log("IOS  success");
        });
      } else if (from == "Android") {
        this.$bridge.callHandler("goPickupVC", data => {
          console.log("Android success");
        });
      } else {
        this.$router.push(`/pick`);
      }
    },
    goGoodOriginVC() {
      let from = this.$route.query.from;
      console.log("from", from);
      if (from == "IOS") {
        this.$bridge.callHandler("goGoodOriginVC", data => {
          console.log("success");
        });
      } else if (from == "Android") {
        this.$bridge.callHandler("goGoodOriginVC", data => {
          console.log("success");
        });
      } else {
        this.$router.push(`/pick`);
      }
    }
  },
  mounted() {},
  computed: {
    viewWeight: function() {
      return (window.innerWidth - 20) / 2 + "px";
    }
  }
};
</script>