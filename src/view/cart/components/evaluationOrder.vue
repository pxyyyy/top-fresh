<template>
  <div>
    <div class="topbar">
      设置
      <span class="iconfont" @click="last">
        &#xe624;
      </span>
      <p class='release' @click="release">
        发布
      </p>
    </div>
    <div class="shareIt">
      <van-row>
        <van-col span="24">
          <van-rate v-model="value" :size="25" />
        </van-col>
        <van-col span="24" style="padding:20px;">
          <textarea v-model="text" name="" id="" style="border-radius:10px; padding:15px; background:#f1f1f1;font-size:12px; width:80%;height:200px; color:#8e8e8e;" placeholder="评价一下你购买的商品吧~">
          </textarea>
        </van-col>
      </van-row>
      <van-row style="padding: 0 50px;">
        <!-- <van-col span="6" style="text-align:left;">
          <div style="width:60px;height:60px;border:1px dashed #c7c7c7; margin:3px 0;     display: flex;    justify-content: center;    align-items: center;">
            <van-uploader :after-read="onRead">
              <van-icon name="photograph" />
            </van-uploader>
          </div>
        </van-col> -->
        <!-- 评价 -->
        <!-- <van-col span="6" style="text-align:left;" v-for="(item,index) in imgList" :key="index">
          <div class="piclist">
            <img :src="item.src" alt="user image">
            <span @click="delPic(index)">x</span>
          </div>
        </van-col> -->
      </van-row>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import service from "../service/index";
import { Toast } from "vant";
export default {
  data() {
    return {
      value: 1,
      src: "",
      imgList: [],
      text: ""
    };
  },
  mixins: [service],
  methods: {
    last() {
      this.$router.go(-1);
    },
    // 发布
    release() {
      this.addEvaluation({
        staffId: this.getCookie("staffId"),
        token: this.getCookie("token"),
        productid: this.$route.params.id,
        evaluationStaffid: this.getCookie("staffId"),
        evaluationContent: this.text,
        evaluationPraiseNum: this.value //星
      }).then(res => {
        if (res.code == 100000) {
          Toast("评价成功~");
          setTimeout(() => {
            this.$router.go(-1);
          }, 1000);
        } else {
          Toast("评价失败~");
          setTimeout(() => {
            this.$router.go(-1);
          }, 1000);
        }
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
        .then(res => {
          this.imgList.push({ src: res.data.data });
        });
    },
    delPic(index) {
      this.imgList.splice(index, 1);
    }
  }
};
</script>
<style lang="less" scoped>
.topbar {
  width: 100%;
  text-align: center;
  background: #3d3d3d;
  color: #e1bf8a;
  line-height: 46px;
  position: fixed;
  z-index: 999;
  span {
    position: absolute;
    top: 0;
    left: 10px;
  }
  p {
    position: absolute;
    top: 0;
    right: 10px;
    font-size: 14px;
  }
}

.shareIt {
  width: 100%;
  position: absolute;
  top: 45px;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  background: #fff;
  padding-top: 50px;
}

.piclist {
  width: 60px;
  height: 60px;
  border: 1px dashed #c7c7c7;
  margin: 3px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
  span {
    position: absolute;
    top: -5px;
    right: -5px;
    background: black;
    color: #fff;
    width: 15px;
    height: 15px;
    font-size: 10px;
    text-align: center;
    line-height: 15px;
    border-radius: 8px;
  }
}
</style>