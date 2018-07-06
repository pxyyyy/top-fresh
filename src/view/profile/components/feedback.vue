<template>
    <div>
        <van-nav-bar title="意见反馈" class="evetn-bar">
            <van-icon name="arrow-left" slot="left" class="evetn-icon" @click="last" />
            <van-icon slot="right" class="evetn-icon" @click="save">保存</van-icon>
        </van-nav-bar>
        <div class="inner">
            <textarea v-model="text">
            </textarea>
        </div>
    </div>
</template>

<script>
import { Toast } from "vant";
import oreder from "../service/order.js";
export default {
  data() {
    return {
      text: ""
    };
  },
  mixins: [oreder],
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
    last() {
      this.$router.go(-1);
    },
    save() {
      this.addFeedback({
        staffId: this.getCookie("staffId"),
        token: this.getCookie("token"),
        feedbackStaffid: this.getCookie("staffId"),
        feedbackContent: this.text,
        feedbackPhone: this.$route.params.phone
      }).then(res => {
        if (res.code == 100000) {
          Toast("反馈成功");
          setTimeout(() => {
            this.$router.go(-1);
          }, 1000);
        } else {
          Toast("反馈失败");
          setTimeout(() => {
            this.$router.go(-1);
          }, 1000);
        }
      });
      //   this.$router.go(-1);
    }
  }
};
</script>
<style scoped lang="less" >
.evetn-bar {
  width: 100%;
  background: #3d3d3d;
  color: #e1bf8a;
  position: fixed;
  top: 0;
  left: 0;
}
.evetn-bar .evetn-icon {
  color: #e1bf8a;
}
.inner {
  width: 100%;
  margin-top: 45px;
  textarea {
    width: 100%;
    padding: 10px;
    height: 200px;
    box-sizing: border-box;
  }
}
</style>

