/* * @Author: tarn.tianrun * @Date: 2018-05-14 11:08:35 * @Last Modified by: By.zhangTeng * @Last Modified time: 2018-06-08 10:55:43 */

<style scoped lang="less">
@import "./Main.less";
</style>
<template>
  <div>
    <!-- <van-nav-bar left-text="极味生鲜">
		<van-icon name="pending-evaluate" slot="right" />
	</van-nav-bar> -->
    <div class="index-nav-bar" v-if="!isClient">
      <!-- <div class="index-nav-bar__left" v-if="!currentRoute && !eventRouter && !pickRouter">
				<img v-lazy="logoPic" height="15">
			</div>
			<div @click="shangyiye" class="index-nav-bar__left" v-else>
				<van-icon name="arrow-left" />
			</div>
			<div class="index-nav-bar__title" v-if="currentRoute">
				<span>购物车</span>
			</div>
			<div class="index-nav-bar__title" v-if="eventRouter">
				<span>活动</span>
			</div>
			<div class="index-nav-bar__title" v-if="pickRouter">
				<span>{{name}}</span>
			</div> -->

    </div>
    <router-view v-bind:style="{marginTop:marginTop}"></router-view>
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
      marginTop: "0",
      name: ""
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
    },
    pickRouter() {
      if (this.$route.name) {
        this.name = this.$route.name;
        return true;
      } else {
        return false;
      }
    }
    // pickRouter(){
    // 	if (this.$route.name == 'pick') {
    // 		return true
    // 	} else {
    // 		return false
    // 	}
    // },
  },
  methods: {
    isActivty(path) {
      this.router = path;
      this.$router.push({
        name: path
      });
    },
    shangyiye() {
      this.$router.go(-1);
    }
  },
  mounted() {
    let from = this.$route.query.from;
    if (from == "IOS") {
      this.isClient = true;
      this.marginTop = "15px";
    } else if (from == "Android") {
      this.isClient = true;
      this.marginTop = "0";
    }
  },
  components: {
    bottom
  }
};
</script>