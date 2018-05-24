<style lang="less" scoped>
  @import "./shareItOut.less";
</style>
<template>
  <div>
    <div class="topbar">
      现金红包送不停
      <span class="iconfont" @click="returnDetermine()">&#xe624;</span>
    </div>
    <div class="shareIt">
      <div class="shareIt-content">
        <div class="shareIt-item">
          <div class="shareIt-item-left">
            <p>全品类代金卷</p>
            <p>2018.1.1-2017.3.1</p>
            <p class="shareIt-item-leftBottom">满199使用</p>
          </div>
          <div class="shareIt-item-right">
            <p><strong>￥</strong><strong class="money">20</strong></p>
          </div>
        </div>
        <div class="shareIt-item">
          <div class="shareIt-item-left">
            <p>全品类代金卷</p>
            <p>2018.1.1-2017.3.1</p>
            <p class="shareIt-item-leftBottom">满199使用</p>
          </div>
          <div class="shareIt-item-right">
            <p><strong>￥</strong><strong class="money">20</strong></p>
          </div>
        </div>
        <div class="shareIt-item-booton">
          <p>红包已放入账号 <span>16749506845</span> </p>
          <button>立即使用</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "shareItOut"
  }
</script>
