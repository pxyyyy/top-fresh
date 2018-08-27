<template>
  <div class="ProductHighlights">
    <div class="list" v-for="item in list" :key="item.id">
      <img :src="item.productIcon" alt="" class="img" @click='commodity(item)'>
      <div data-v-12f4fbe3="" class="title">{{item.productName}}</div>
      <div data-v-12f4fbe3="" class="gg">{{item.productDetail}}</div>
      <div data-v-12f4fbe3="" class="price">¥{{item.productOprice}}</div>
    </div>
  </div>
</template>

<script>
import service from "../service/giftCard.js";
export default {
  mixins: [service],
  data() {
    return {
      list: ""
    };
  },
  beforeMount() {
    if (!this.$route.params.id == 0) {
      const staffId = this.getCookie("staffId");
      const token = this.getCookie("token");
      this.getGiftCards({
        activityId: this.$route.params.id,
        pageNum: 1,
        pageSize: 7
      }).then(res => {
        this.list = res;
      });
    }
  },
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
    commodity(id) {
      let from = this.$route.query.from;
      if (from == "IOS") {
        this.$bridge.callHandler(
          "goGoodInfoVC",
          { productId: id.productId },
          data => {
          }
        );
      } else if (from == "Android") {
        this.$bridge.callHandler(
          "goGoodInfoVC",
          { productId: id.productId },
          data => {
          }
        );
      } else {
        this.$router.push(`/product/${id.productId}`);
      }
    }
  }
};
</script>

<style scoped>
.list {
  width: 100%;
  position: relative;
  border-radius: 10px;
  margin-bottom: 5px;
  padding: 5px;
  box-sizing: border-box;
}
.img {
  width: 100%;
  height: 150px;
  border-radius: 10px;
}
.title {
  position: absolute;
  bottom: 70px;
  right: 20px;
  color: #fff;
  font-size: 16px;
}
.gg {
  position: absolute;
  bottom: 50px;
  right: 20px;
  font-size: 14px;
  color: #fff;
}
.price {
  position: absolute;
  bottom: 20px;
  right: 20px;
  font-size: 20px;
  color: #e7bf79;
}
.ProductHighlights img {
  width: 100%;
  height: 150px;
  margin-top: -10px;
}
</style>
