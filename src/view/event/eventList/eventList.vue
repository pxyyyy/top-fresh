<style scoped lang="less">
</style>
<style scoped>
  .evetn-bar{
    background: #3d3d3d;
    color: #E1BF8A;
    margin-top: -45px;
  }
  .evetn-bar .evetn-icon{
    color: #E1BF8A;
  }
   img{
    width: 100%;
    height: 100%;
  }
 .bottom{
   background: #3d3d3d;
   position: absolute;
   width: 100%;
   bottom: 0;
 }
  .bottom p{
    text-align: center;
    height: 40px;
    color: #fff;
    position: relative;
    line-height: 40px;
  }
  .bottom span{
    display: inline-block;
    margin-left: 5px;
    font-size: 14px;
  }
  .phone{
    position: absolute;
    top: 13px;
    left: 38%;
  }
</style>
<template>
  <div>
    <van-nav-bar title="招募极味道代理" class="evetn-bar">
      <van-icon name="arrow-left" slot="left"  class="evetn-icon" @click="returnevent"/>
    </van-nav-bar>
    <div class="">
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
      return {
      };
    },
    methods: {
      returnevent () {
        this.$router.push(
          `/event`
        );
      }
    }
  }
</script>
