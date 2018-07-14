/* * @Author: tarn.tianrun * @Date: 2018-05-14 11:08:35 * @Last Modified by: By.zhangTeng * @Last Modified time: 2018-05-25 10:33:39 */

<style scoped lang="less">
@import "./Main.less";
</style>
<template>
  <div>
    <!-- <van-nav-bar left-text="极味生鲜">
		<van-icon name="pending-evaluate" slot="right" />
	</van-nav-bar> -->
    <div class="index-nav-bar" v-if="!isClient">
      <!-- <div class="index-nav-bar__left" v-if="!currentRoute && !eventRouter">
        <img v-lazy="logoPic" height="15">
      </div> -->
      <!-- <div class="index-nav-bar__title" v-if="currentRoute">
        <span>购物车</span>
      </div> -->
      <!-- <div class="index-nav-bar__title" v-if="eventRouter">
        <span>活动</span>
      </div> -->
    </div>
    <router-view :style="{marginTop:marginTop}"></router-view>
    <bottom v-if="!isClient"></bottom>
  </div>
</template>
<script>
import bottom from "../components/bottom-bar/bottom-bar.vue";
export default {
  data() {
    return {
      logoPic: require("../assets//icon/极味生鲜.png"),
      router: "index",
      icon: {
        normal: "//img.yzcdn.cn/1.png",
        active: "//img.yzcdn.cn/2.png"
      },
      isClient: false,
      marginTop: "0"
    };
  },
  beforeMount() {},
  watch: {},
  computed: {
    currentRoute() {
      if (this.$route.name == "cart") {
        return true;
      } else {
        return false;
      }
    },
    eventRouter() {
      if (this.$route.name == "event") {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    isActivty(path) {
      this.router = path;
      this.$router.push({
        name: path
      });
    }
  },
  mounted() {
    let from = this.$route.query.from;
    console.log("from", from);
    if (from == "IOS") {
      this.isClient = true;
      this.marginTop = "0";
    } else if (from == "Android") {
      this.isClient = true;
      this.marginTop = "0";
    }
  },
  methods: {},
  components: {
    bottom
  }
};
</script>