<style lang="less" scoped>
  @import "./LadingRollGive.less";
</style>
<template>
  <div>
    <van-nav-bar title="提货卷赠送" class="evetn-bar">
      <van-icon name="arrow-left" slot="left"  class="evetn-icon" @click="goLadingRoll"/>
    </van-nav-bar>
    <div class="Give">
      <p>请填写朋友手机号以便本人验证</p>
      <p style="line-height:30px;"><input type="number" maxlength="11" pattern="[0-9]*" oninput="if(value.length>11)value=value.slice(0,11)"/>  </p>
      <p class="Give-Friends">提货卷赠送好友至</p>
      <div class="Give-type">
        <div class="Give-type-icon">
          <p><img src="../../../assets/img/shareWx.png" alt=""></p>
          <p class="icon-desc">微信好友</p>
        </div>
        <div class="Give-type-icon">
          <p><img src="../../../assets/img/sharePyq.png" alt=""></p>
          <p class="icon-desc">朋友圈</p>
        </div>
        <div class="Give-type-icon">
          <p><img src="../../../assets/img/shareUrl.png" alt=""></p>
          <p class="icon-desc">复制链接</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "LadingRollGive",
    methods: {
      goLadingRoll () {
        this.$router.push('/LadingRoll')
      }
  }
}
</script>

