<style scoped lang="less">
@import "./eventList.less";
</style>
<template>
  <div>
    <van-nav-bar title="招募极味道代理" class="evetn-bar">
      <van-icon name="arrow-left" slot="left"  class="evetn-icon" @click="returnevent"/>
    </van-nav-bar>
    <div class="item-img">
      <img src="@/assets/img/介绍.png">
    </div>
    <div class="bottom">
      <p><van-icon name="phone" class="phone"/><span>致电咨询</span></p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    returnevent() {
      this.$router.go(-1);
    }
  }
};
</script>
