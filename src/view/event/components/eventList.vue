<style scoped lang="less">
@import "./eventList.less";
</style>
<style>
.item-img img {
  width: 100%;
}
</style>

<template>
  <div>
    <van-nav-bar title="招募极味道代理" class="evetn-bar" v-if="!from">
      <van-icon name="arrow-left" slot="left" class="evetn-icon" @click="returnevent" />
    </van-nav-bar>
    <div class="item-img" v-html="this.contentHtml">
    </div>
    <div class="bottom">
      <p>
        <van-icon name="phone" class="phone" />
        <span>致电咨询</span>
      </p>
    </div>
  </div>
</template>
<script>
import service from "../service/index.js";
export default {
  mixins: [service],
  data() {
    return {
      cartDetails: require("@/assets/img/介绍.png"),
      token: this.getCookie("token"),
      staffId: this.getCookie("staffId"),
      contentHtml: "",
      from: this.$route.query.from
    };
  },
  methods: {
    returnevent() {
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
    this.selectByPrimaryKey({
      token: this.token,
      staffId: this.staffId,
      acId: this.$route.params.id
    }).then(res => {
      this.contentHtml = res.data[0].acImg;
      console.log(this.contentHtml);
    });
  }
};
</script>
