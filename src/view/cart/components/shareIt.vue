<style lang="less" scoped>
  @import "./shareIt.less";
</style>
<template>
  <div>
    <div class="topbar">
      现金红包送不停
      <span class="iconfont" @click="gocartDetermine">&#xe624;</span>
    </div>
    <div class="shareIt">
      <div class="shareIt-content">
        <p><input type="text" value="" placeholder="请输入手机号"></p>
        <p class="shareItButton"><input type="button" value="立即抢"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "shareIt",
    methods: {
      gocartDetermine: function () {
        let date  = this.$route.params.project
        this.$router.push(`/${date}`)
      }
    },
}
</script>
