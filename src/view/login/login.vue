/* * @Author: By.zhangTeng * @Date: 2018-05-21 10:38:47 * @Last Modified by: By.zhangTeng * @Last Modified time: 2018-06-05 10:50:48 */
<style lang="less" scoped>
@import "./login.less";
</style>
<template>
  <div>
    <transition name="fade" mode="out-in">
      <div v-if="login" class="animated" :key="1">
        <!-- <span class="iconfont shutdown" @click="shutdown">&#xe65c;</span> -->
        <div class="container" :style='{"height":viewHeight}'>
          <div class="title">Hello,极味生鲜</div>
          <div class="login-form">
            <div class="input-frame">
              <div class="prefix">+86</div>
              <input type="text" placeholder="手机号" v-model="phone" class="input">
            </div>
            <van-button size="large" @click="nextStep">提交</van-button>
            <div class="input-title">未注册手机验证后自动登录</div>
          </div>
          <div class="other">
            <div class="other_title">——————— 其他登录方式 ———————</div>
            <div class="fang">
              <div @click="transferWeChat">
                <van-row gutter="20">
                  <van-col span="24">
                    <img src="../../assets/icon/weixin.png" alt="">
                  </van-col>
                </van-row>
              </div>
            </div>
            <div class="foot">注册即代表你同意《极味生鲜协议》和《隐私政策》</div>
          </div>
        </div>
      </div>
      <div v-if="!login" class="animated" :key="2">
        <div class="container" :style='{"height":viewHeight}'>
          <div class="title1">请输入验证码</div>
          <div class="subtitle">验证码已发送至+86 {{phone}}</div>
          <div class="security-code-wrap">
            <label for="code">
              <ul class="security-code-container">
                <li class="field-wrap" v-for="(item, index) in number" :key="index">
                  <i class="char-field">{{value[index] || placeholder}}</i>
                </li>
              </ul>
            </label>
            <input ref="input" class="input-code" @keyup="handleInput($event)" v-model="value" id="code" name="code" type="tel" :maxlength="number" autocorrect="off" autocomplete="off" autocapitalize="off">
          </div>
          <div class="time color" v-show="show" @click="reset">重新获取验证码</div>
          <div class="time" v-show="!show">{{count}}秒后可重新获取</div>
          <van-button class="sure" size="large" @click="sureStep">确定</van-button>
        </div>
      </div>
    </transition>
    <van-popup v-model="mask">{{popup}}</van-popup>
  </div>
</template>
<script>
import { Decrypt, Encrypt } from "@/assets/js/crypto.js";
import { Toast } from "vant";
import login from "./service/login.js";
export default {
  mixins: [login],
  name: "login",
  props: {
    number: {
      type: Number,
      default: 6
    },
    placeholder: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      phone: "",
      height: "",
      weChat: "",
      login: true,
      value: "",
      show: true,
      count: "",
      timer: null,
      mask: false,
      popup: "请输入手机号",
      d2: ""
    };
  },
  watch: {
    login: function() {
      console.log(this.login);
    }
  },
  methods: {
    transferWeChat() {
      window.location.href =
        "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx365ff8d24bc6fd9f&redirect_uri=http%3a%2f%2fshop.jiweishengxian.com%2flogin&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect";
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
    shutdown() {
      this.$router.push("/");
    },
    // setCookieMethods
    setCookie(token, staffId) {
      var Days = 30; //cookie 将被保存30天
      var exp = new Date(); //获得当前时间
      exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000); //换成毫秒
      document.cookie =
        token + "=" + staffId + "; expires=" + exp.toGMTString();
    },
    // 点击下一步获取验证码
    nextStep: function() {
      // 验证手机号
      let reg = /^[1][3,4,5,7,8][0-9]{9}$/;
      if (this.phone == "") {
        this.mask = true;
      } else if (!reg.test(this.phone) || this.phone.length < 11) {
        this.mask = true;
        this.popup = "请输入正确的11位手机号";
      } else {
        this.login = false;
        this.show = false;
        this.timeout();
        let dd = Encrypt(this.phone);
        console.log(dd);
        this.d2 = dd;
        console.log(this.d2);
        // 解密
        // let ss = Decrypt(this.d2);
        // console.log(ss);
        this.getCode(this.d2).then(res => {
          console.log(res);
        });
      }
    },
    // 重新获取验证码
    reset: function() {
      this.show = false;
      this.timeout();
      this.getCode(this.d2).then(res => {
        console.log(res);
      });
    },
    sureStep: function() {
      if (this.weChat) {
        this.toLogin({
          codePhone: this.d2,
          codeValue: this.value,
          openid: this.weChat,
          type: 2
        }).then(res => {
          if (res.code == 100000) {
            this.setCookie("token", res.data[0].staffToken);
            this.setCookie("staffId", res.data[0].staffId);
            this.$router.go(-1);
          } else {
            Toast(res.message);
          }
        });
      } else {
        this.toLogin({
          codePhone: this.d2,
          codeValue: this.value
        }).then(res => {
          console.log(res.data.code);
          if (res.code == 100000) {
            this.setCookie("token", res.data[0].staffToken);
            this.setCookie("staffId", res.data[0].staffId);
            this.$router.go(-1);
          } else {
            Toast(res.message);
          }
        });
      }
    },
    timeout() {
      const TIME_COUNT = 60;
      if (!this.timer) {
        this.count = TIME_COUNT;
        this.show = false;
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= TIME_COUNT) {
            this.count--;
          } else {
            this.show = true;
            clearInterval(this.timer);
            this.timer = null;
          }
        }, 1000);
      }
    },
    hideKeyboard() {
      // 输入完成隐藏键盘
      document.activeElement.blur(); // ios隐藏键盘
      this.$refs.input.blur(); // android隐藏键盘
    },
    handleSubmit() {
      this.$emit("input", this.value);
    },
    handleInput(e) {
      this.$refs.input.value = this.value;
      if (this.value.length >= this.number) {
        this.hideKeyboard();
      }
      this.handleSubmit();
    }
  },
  computed: {
    viewHeight: function() {
      return window.innerHeight + "px";
    }
  },
  beforeMount() {
    this.GetRequest;
    var Request = new Object();
    Request = this.GetRequest();
    let code = Request["code"];
    console.log(code);
    if (code) {
      this.getOpenId({
        type: 3,
        code
      }).then(res => {
        this.weChat = res.data.staffWechat;
        if (!res.data.staffId) {
          Toast("请绑定手机号~");
        } else {
          this.setCookie("token", res.data.staffToken);
          this.setCookie("staffId", res.data.staffId);
          this.$router.go(-3);
        }
      });
    }
  }
};
</script>