<template>
  <div>
    <div class="wrapper">
      <van-row class="wrapperList">
        <van-col span="16">头像</van-col>
        <van-col span="4" offset="4">
          <div class="user-pic">
            <img :src="userPic">
            <van-uploader :after-read="onRead">
              <van-icon name="photograph" />
            </van-uploader>
          </div>
        </van-col>
      </van-row>
      <van-row class="wrapperList border-top ">
        <van-col span="16">昵称</van-col>
        <van-col span="8 " class="wrapperName">
          <input type="text " v-model="ueseInfo.staffNickname">
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import oreder from "../service/order.js";
export default {
  data() {
    return {
      ueseInfo: "",
      userPic: "",
      uesrName: ""
    };
  },
  mixins: [oreder],
  methods: {
    onRead(file) {
      let param = new FormData(); // 创建form对象
      param.append("file", file.file, file.file.name); // 通过append向form对象添加数据
      let config = {
        headers: { "Content-Type": "multipart/form-data" }
      };
      axios
        .post(
          `http://192.168.10.141:8080/fresh_show/User/uploadAll?staffId=${this.getCookie(
            "staffId"
          )}&token=${this.getCookie("token")}&type=4`,
          param,
          config
        )
        .then(response => {
          this.userPic = response.data.data;
        });
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
    last() {
      this.$router.go(-1);
    },
    save() {
      this.editStaff({
        staffId: this.getCookie("staffId"),
        token: this.getCookie("token"),
        staffNickname: this.ueseInfo.staffNickname,
        staffPhotourl: this.userPic,
        staffPhone: this.ueseInfo.staffPhone
      });
      this.$router.go(-1);
    }
  },
  beforeMount() {
    document.title = "编辑资料";
    this.getStaffInfo({
      staffId: this.getCookie("staffId"),
      token: this.getCookie("token")
    }).then(res => {
      this.ueseInfo = res.data;
      this.userPic = res.data.staffPhotourl;
    });
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
.wrapper {
  margin-top: 45px;
}
.wrapperList {
  background: #fff;
  height: 40px;
  text-indent: 0.5rem;
  font-size: 14px;
  line-height: 40px;
}
.border-top {
  border-top: 1px solid #efeff7;
}
.wrapperList img {
  width: 30px;
  margin-top: 5px;
}
.user-pic {
  line-height: 0;
  position: relative;
  overflow: hidden;
  img {
    width: 30px;
    height: 30px;
  }
}
.van-uploader {
  background: red;
  position: absolute;
  left: 0;
  height: 40px;
  opacity: 0;
}
.wrapperName {
  overflow: hidden;
  text-align: center;
  input {
    text-align: center;
  }
}
</style>

