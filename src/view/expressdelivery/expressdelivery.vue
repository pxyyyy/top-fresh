<template>
  <div>
    <div class="wrapper">
      <ul class="wrapper-center">
        <li class="wrapper-center-item" v-for="(item,index) in logisticsList" :key="index">
          <div class="center-item-left">
            <p>{{item.time}}</p>
            <h3></h3>
          </div>
          <div class="center-item-right">
            <p>{{item.context}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Decrypt, Encrypt } from "@/assets/js/crypto.js";
import { Dialog } from 'vant';
import service from "./service/index";
export default {
  mixins: [service],
  data() {
    return {
      d2: "",
      logisticsList: "",
      code: ""
    };
  },
  beforeMount() {
    document.title = "顺丰快递";
    this.code = this.$route.params.name + "," + this.$route.params.number;
    let dd = Encrypt(this.code);
    this.d2 = dd;
    this.kuaidiCode({
      code: this.d2
    }).then(res => {
      this.logisticsList = res.data.data;
      if (!res.data.result) {
        Dialog.confirm({
          title: "物流查询",
          message: res.data.message
        })
          .then(() => {
            this.$router.go(-1)
          })
          .catch(() => {
            // on cancel
          });
      }
    });
  }
};
</script>

<style lang="less" scoped>
.wrapper-center {
  background: #fff;
  .wrapper-center-item {
    display: flex;
    padding: 20px 5px;
    border-bottom: 1px solid #e6e6e6;
    .center-item-left {
      text-align: center;
      color: #ff7800;
      border-right: 1px solid #e6e6e6;
      padding-right: 15px;
      p {
        width: 100px;
      }
    }
    .center-item-right {
      font-size: 14px;
      margin-left: 10px;
    }
  }
}
</style>
