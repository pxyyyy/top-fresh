<template>
    <div>
        <div class="top">
            <h4>中通快递</h4>
        </div>
        <div class="wrapper">
            <ul class="wrapper-center">
                <li class="wrapper-center-item" v-for="index in 10" :key="index">
                    <div class="center-item-left">
                        <p>2018.06.30</p>
                        <h3>12:31</h3>
                    </div>
                    <div class="center-item-right">
                        <p>【济南市】 快件已在 【济南高新一部】 签收,签收人: 本人, 感谢使用中通快递,期待再次为您服务!</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {};
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
    }
    .center-item-right {
      font-size: 14px;
      margin-left: 10px;
    }
  }
}
</style>
