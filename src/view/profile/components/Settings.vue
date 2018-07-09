<style scoped lang="less">
@import "./Settings.less";
</style>
<template>
  <div>
    <van-nav-bar title="设置" class="evetn-bar">
      <van-icon name="arrow-left" slot="left" class="evetn-icon" @click="last" />
    </van-nav-bar>
    <van-cell-group style="margin-top:45px;">
      <van-cell is-link v-for="item of FeaturesList" :key="item.id" @click="goThisPage">
        <template slot="title">
          <p class="van-cell-text">
            {{item.text}}
          </p>
        </template>
      </van-cell>
    </van-cell-group>
    <van-row style="background:#fff; padding:10px 0;font-size:14px;text-align:center;color:#f00b32;margin-top:20px;">
      <div @click='emptyCookie'>
        <van-col span="24">
          退出登录
        </van-col>
      </div>
    </van-row>
  </div>
</template>
<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      FeaturesList: [
        {
          id: "001",
          text: "绑定账号"
        }
      ]
    };
  },
  methods: {
    goThisPage() {
      alert(1);
    },
    last() {
      this.$router.go(-1);
    },
    // 获取cookie
    getCookie(name) {
      var arr = document.cookie.match(
        new RegExp("(^| )" + name + "=([^;]*)(;|$)")
      );
      if (arr != null) {
        return unescape(arr[2]);
      } else {
        return null;
      }
    },
    // 删除cookie
    delCookie(name) {
      var exp = new Date();
      exp.setTime(exp.getTime() - 1);
      var cval = this.getCookie(name);
      if (cval != null)
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
    },
    emptyCookie() {
      Toast("退出成功");
      setTimeout(() => {
        this.delCookie("token");
        this.delCookie("staffId");
        this.$router.push("/");
      }, 1000);
    }
  }
};
</script>