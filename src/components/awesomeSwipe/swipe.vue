<style scoped lang="less">
@import "./swipe.less";
</style>
<style>
.swiper-pagination-bullet {
  background: #fff;
  border: 1px solid #fff;
}
.swiper-pagination-bullet-active {
  background: #fff !important;
}
</style>
<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="item in sysbanners" :key="item.id">
      <img class="swiper-img" :src="item.imgUrl" alt="" @click="toTeacher(item)">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import img from "../../assets/img/banner.png";
export default {
  props: ["sysbanners"],
  data() {
    return {
      bannerPic: require("../../assets/img/banner.png"),
      swiperOption: {
        loop: true,
        effect: "fade",
        // autoplay: {
        // delay: 6000,
        // disableOnInteraction: false
        // },
        pagination: {
          el: ".swiper-pagination"
          // clickable: true
        }
      },
      dataSwipe: [
        {
          id: 1,
          img: img
        }
      ]
    };
  },
  methods: {
    goSwiperLink() {
      alert(1);
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
    toTeacher(activeId) {
      let from = this.$route.query.from;
      if (activeId.type == 1) {
        if (from == "IOS" || from == "Android") {
          this.$bridge.callHandler(
            "goActiveInfoVC",
            {
              link: `${activeId.id}`,
              type: 1
            },
            data => {
              console.log("success");
            }
          );
        } else {
          this.$router.push(`/product/${activeId.link}`);
        }
        // 活动
      } else if (activeId.type == 2) {
        console.log(activeId.actype);
        if (activeId.actype == 1) {
          if (from == "IOS" || from == "Android") {
            this.$bridge.callHandler(
              "goActiveInfoVC",
              {
                activityId: activeId.acId,
                type: 1
              },
              data => {
                console.log("success");
              }
            );
          } else {
            if (this.getCookie("token")) {
              this.$router.push(`/myCoupon/${activeId.id}`);
              this.$store.commit("setcurrentActiveName", activeId.acTitle);
            } else {
              this.$router.push("/login");
            }
          }
          // 拼团
        } else if (activeId.actype == 2) {
          if (from == "IOS" || from == "Android") {
            this.$bridge.callHandler("goActiveInfoVC", data => {
              console.log("success");
            });
          } else {
            if (this.getCookie("token")) {
              this.$router.push(`/teamwork/${activeId.acId}`);
            } else {
              this.$router.push("/login");
            }
          }
          // 商品集锦
        } else if (activeId.actype == 3) {
          if (from == "IOS" || from == "Android") {
            this.$bridge.callHandler(
              "goActiveInfoVC",
              {
                activeid: activeId.acId,
                type: 3
              },
              data => {
                console.log("success");
              }
            );
          } else {
            this.$router.push(`/goodsList/${activeId.link}`);
            this.$store.commit("setcurrentActiveName", activeId.acTitle);
          }
        } else if (activeId.actype == 4) {
          // 静态
          if (from == "IOS" || from == "Android") {
            this.$bridge.callHandler(
              "goActiveInfoVC",
              {
                activeid: activeId.acId,
                type: 4
              },
              data => {
                console.log("success");
              }
            );
          } else {
            this.$router.push(`/eventList/${activeId.acId}`);
          }
        } else if (activeId.actype == 5) {
          if (from == "IOS" || from == "Android") {
            this.$bridge.callHandler(
              "goActiveInfoVC",
              {
                activeid: activeId.acId,
                type: 5
              },
              data => {
                console.log("success");
              }
            );
          } else {
            window.location.href = "http://" + activeId.acSrc;
          }
        }
        // 外链
      } else if (activeId.type == 3) {
        if (from == "IOS" || from == "Android") {
          this.$bridge.callHandler(
            "goActiveInfoVC",
            {
              link: `${activeId.id}`,
              type: 3
            },
            data => {
              console.log("success");
            }
          );
        } else {
          window.location.href = activeId.link;
        }
      } else if (activeId.type == 4) {
        // 置空
      } else if (activeId.type == 5) {
        if (from == "IOS" || from == "Android") {
          this.$bridge.callHandler(
            "goActiveInfoVC",
            {
              link: activeId.link,
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
      //   console.log(1);
      //   this.$router.push(item.link);
    }
  },
  mounted() {
    console.log(this.sysbanners);
  }
};
</script>
