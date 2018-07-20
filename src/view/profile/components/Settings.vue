<style scoped lang="less">
@import "./Settings.less";
</style>
<template>
  <div>
    <van-cell-group>
      <van-cell is-link v-for="item of FeaturesList" :key="item.id" @click="binding">
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
import coupon from "../service/coupon.js";
export default {
  mixins: [coupon],
  data() {
    return {
      FeaturesList: [
        {
          id: "001",
          text: "绑定微信账号"
        }
      ]
    };
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
    GetRequest() {
      var url = location.search; //获取url中"?"符后的字串
      var theRequest = new Object();
      if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        var strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
          theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
      }
      return theRequest;
    },
    binding() {
      if (this.FeaturesList[0].text == "绑定微信账号") {
        var link = window.location.href;
        window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx365ff8d24bc6fd9f&redirect_uri=${link}&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect`;
      } else {
        this.clearOpenId({
          staffId: this.getCookie("staffId"),
          token: this.getCookie("token"),
          type: 2
        }).then(res => {
          if (res.code == 100000) {
            Toast("解绑成功");
            this.$router.push("/profile");
          }
        });
      }
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
  },
  beforeMount() {
    this.getStaffInfo({
      staffId: this.getCookie("staffId"),
      token: this.getCookie("token")
    }).then(res => {
      this.ueseInfo = res.data;
      if (this.ueseInfo.staffWechat) {
        this.FeaturesList[0].text = "解绑微信账号";
      }
    });
  },
  mounted() {
    document.title = "设置";
    this.GetRequest;
    var Request = new Object();
    Request = this.GetRequest();
    let code = Request["code"];
    if (code) {
      this.updateOpenId({
        staffId: this.getCookie("staffId"),
        token: this.getCookie("token"),
        type: 3,
        code: code
      }).then(res => {
        if (res.code == 100000) {
          Toast("绑定成功");
          window.location.href = "http://shop.jiweishengxian.com";
        } else {
        }
      });
    }
  }
};
</script>