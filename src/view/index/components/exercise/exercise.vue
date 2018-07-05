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
    goActiveInfo(activeId) {
      let from = this.$route.query.from;
      console.log(from);
      //   优惠券
      if (activeId.type == 1) {
        if (from == "IOS" || from == "Android") {
          this.$bridge.callHandler(
            "goYouhuiquanVC",
            {
              link: `/myCoupon/${activeId.id}`
            },
            data => {
              console.log("success");
            }
          );
        } else {
          this.$router.push(
            `/myCoupon/${activeId.id}`
            // link
          );
        }
        // 拼团
      } else if (activeId.type == 2) {
        if (from == "IOS" || from == "Android") {
          this.$bridge.callHandler("goPintuanGoodsVC", data => {
            link: `/teamwork/${activeId.id}`;
          });
        } else {
          this.$router.push(
            `/teamwork/${activeId.id}`
            // link
          );
        }
        // 商品集锦
      } else if (activeId.type == 3) {
        if (from == "IOS" || from == "Android") {
          this.$bridge.callHandler(
            "goActiveInfoVC",
            {
              link: `/goodsList/${activeId.id}`
            },
            data => {
              console.log("success");
            }
          );
        } else {
          this.$router.push(`/goodsList/${activeId.id}`);
        }
      } else if (activeId.type == 4) {
        // 静态
        if (from == "IOS" || from == "Android") {
          this.$bridge.callHandler(
            "goActiveInfoVC",
            {
              link: `/eventList/${activeId.id}`
            },
            data => {
              console.log("success");
            }
          );
        } else {
          this.$router.push(`/eventList/${activeId.id}`);
        }
      } else if (activeId.type == 5) {
        if (from == "IOS" || from == "Android") {
          this.$bridge.callHandler(
            "goActiveInfoVC",
            {
              type: 5
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