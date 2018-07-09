<style scoped lang="less">
@import "./exercise.less";
</style>
<template>
  <div class="exercise">
    <div class="e-title">
      <p>极味生鲜活动</p>
      <span>给您更好的推荐</span>
    </div>
    <div class="exercise-active">
      <div class="left" @click="goActiveInfo(activities[0])">
        <img v-if="activities" :src="activities[0].imgUrl" alt="">
      </div>
      <div class="right">
        <div class="right-info" @click="goActiveInfo(activities[1])">
          <img v-if="activities" :src="activities[1].imgUrl" alt="">
        </div>
        <div class="right-info" @click="goActiveInfo(activities[2])">
          <img v-if="activities" :src="activities[2].imgUrl" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["activities"],
  data() {
    return {};
  },
  mounted() {},
  methods: {
    getCookie(name) {
      var arr,
        reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
      if ((arr = document.cookie.match(reg))) {
        return unescape(arr[2]);
      } else {
        return null;
      }
    },
    goActiveInfo(activeId) {
      let from = this.$route.query.from;
      //   优惠券
      if (activeId.type == 1) {
        if (from == "IOS" || from == "Android") {
          this.$bridge.callHandler(
            "goActiveInfoVC",
            {
              type: 1,
              link: `${activeId.id}`
            },
            data => {
              console.log("success");
            }
          );
        } else {
          if (this.getCookie("token")) {
            this.$router.push(`/myCoupon/${activeId.id}`);
            this.$store.commit("setcurrentActiveName", activeId.title);
          } else {
            this.$router.push(`/login`);
          }
        }
        // 拼团
      } else if (activeId.type == 2) {
        if (from == "IOS" || from == "Android") {
          this.$bridge.callHandler(
            "goActiveInfoVC",
            {
              type: 2,
              link: `${activeId.id}`
            },
            data => {}
          );
        } else {
          if (this.getCookie("token")) {
            this.$router.push(`/teamwork/${activeId.id}`);
          } else {
            this.$router.push(`/login`);
          }
        }
        // 商品集锦
      } else if (activeId.type == 3) {
        if (from == "IOS" || from == "Android") {
          this.$bridge.callHandler(
            "goActiveInfoVC",
            {
              type: 3,
              link: `${activeId.id}`
            },
            data => {
              console.log("success");
            }
          );
        } else {
          this.$router.push(`/goodsList/${activeId.id}`);
          this.$store.commit("setcurrentActiveName", activeId.title);
        }
      } else if (activeId.type == 4) {
        // 静态
        if (from == "IOS" || from == "Android") {
          this.$bridge.callHandler(
            "goActiveInfoVC",
            {
              type: 4,
              link: `${activeId.id}`
            },
            data => {
              console.log("success");
            }
          );
        } else {
          this.$router.push(`/eventList/${activeId.id}`);
          this.$store.commit("setcurrentActiveName", activeId.title);
        }
      } else if (activeId.type == 5) {
        if (from == "IOS" || from == "Android") {
          this.$bridge.callHandler(
            "goActiveInfoVC",
            {
              type: 5,
              link: activeId.link
            },
            data => {
              console.log("success");
            }
          );
        } else {
          window.location.href = activeId.link;
        }
      }
    }
    //   let from = this.$route.query.from;
    //   if (from == "IOS" || from == "Android") {
    //     this.$bridge.callHandler(
    //       "goActiveInfoVC",
    //       {
    //         activeid: activeId
    //       },
    //       data => {
    //         console.log("success");
    //       }
    //     );
    //   } else {
    //     this.$router.push(
    //       // `/eventList?id=`+activeId
    //       `eventList?id=${activeId.id}`
    //     );
    //   }
    // goYouhuiquanVC() {
    //   let from = this.$route.query.from;
    //   if (from == "IOS" || from == "Android") {
    //     this.$bridge.callHandler("goYouhuiquanVC", data => {
    //       console.log("success");
    //     });
    //   } else {
    //     this.$router.push(
    //       `/myCoupon`
    //       // link
    //     );
    //   }
    // },
    // goPintuanGoodsVC() {
    //   let from = this.$route.query.from;
    //   if (from == "IOS" || from == "Android") {
    //     this.$bridge.callHandler("goPintuanGoodsVC", data => {
    //       console.log("success");
    //     });
    //   } else {
    //     this.$router.push(
    //       `/teamwork`
    //       // link
    //     );
    //   }
    // }
  },
  computed: {
    viewWeight: function() {
      return (window.innerWidth - 20) / 2 + "px";
    }
  }
};
</script>