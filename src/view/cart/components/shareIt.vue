<style lang="less" scoped>
.topbar{
  width: 100%;
  text-align: center;
  background: #3d3d3d;
  color: #E1BF8A;
  line-height: 46px;
  margin-top: -45px;
  position: relative;
  span{
    position: absolute;
    top: 0;
    left: 10px;
  }
}
.shareIt{
  width: 100%;
  background: url("../../../assets/img/shareItbanner.png") no-repeat;
  background-size: cover;
  position: absolute;
  top: 45px;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
}
.shareIt-content{
  width: 100%;
  display: flex;
  flex-direction:column;
  align-items: center;
  position: absolute;
  bottom: 100px;
  p{
    width: 200px;
    height: 30px;
    background: #fff;
    border-radius: 20px;
    margin-top: 10px;
    input{
      background: none;
      line-height: 30px;
      text-align: center;
    }
  }
  .shareItButton{
    width: 200px;
    height: 30px;
    background: #fdd04c;
    border-radius: 20px;
    text-align: center;
    color: #210001;
  }
}
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
        this.$router.push('/cartOut')
      }
    }
}
</script>
