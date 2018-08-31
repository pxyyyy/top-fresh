<template>
  <div>
    <div class="inner">
      <textarea v-model="text" placeholder="请输入您诚恳的建议">
      </textarea>
    </div>
    <div class="mailbox">
      <input type="text" v-model="mailbox" placeholder="请输入您的邮箱或者电话（非必填）">
    </div>
    <div class="btnsave-wrapper" @click="save">
      <van-button type="primary" class="btnsave">保存</van-button>
    </div>
  </div>
</template>

<script>
import { Toast, Dialog } from "vant";
import oreder from "../service/order.js";
export default {
  data() {
    return {
      text: "",
      mailbox: ""
    };
  },
  mixins: [oreder],
  beforeMount() {
    document.title = "意见反馈";
  },
   created() {
    window.callHandler = this.callHandler;
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
    last() {
      this.$router.go(-1);
    },
    save() {
      let from = this.$route.query.from;
      this.addFeedback({
        staffId: this.getCookie("staffId"),
        token: this.getCookie("token"),
        feedbackStaffid: this.getCookie("staffId"),
        feedbackContent: this.text,
        feedbackBeizhu: this.mailbox

      }).then(res => {
        if (res.code == 100000) {
          Dialog.alert({
            title: '提示',
            message: "感谢您的建议，我们会及时查看并联系您，祝您生活愉快！"
          })
            .then(() => {
            if (from == "IOS" || from == "Android") {
                  this.$bridge.callHandler(
                    "closePage",
                    {
                    },
                    data => {

                    }
                  );
                }else{
                  this.$router.go(-1);
                }
            })
        } else {
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
  textarea {
    width: 100%;
    padding: 10px;
    height: 200px;
    box-sizing: border-box;
  }
}
.btnsave-wrapper {
  width: 100px;
  height: 40px;
  margin: 0 auto;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 40px;
}
.btnsave {
  background: #f77b17;
  border: none;
  margin: 0 auto;
  width: 100px;
  height: 40px;
}
.mailbox {
  width: 100%;
  input {
    width: 100%;
    height: 35px;
    border-radius: 5px;
    text-indent: 1rem;
  }
}
</style>

