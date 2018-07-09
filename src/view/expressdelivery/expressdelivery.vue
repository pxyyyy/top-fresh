<template>
    <div>
        <div class="top">
            <h4>顺丰快递</h4>
        </div>
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
    this.code = this.$route.params.name + "," + this.$route.params.number;
    console.log(this.code);
    let dd = Encrypt(this.code);
    this.d2 = dd;
    this.kuaidiCode({
      code: this.d2
    }).then(res => {
      this.logisticsList = res.data.data;
      console.log(this.logisticsList);
    });
  }
};
</script>

<style lang="less" scoped>
.top {
  background: #3d3d3d;
  text-align: center;
  height: 45px;
  line-height: 45px;
  h4 {
    color: #e1bf8a;
  }
}
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
