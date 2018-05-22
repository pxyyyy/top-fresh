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
  background: url("../../../assets/img/shareItOutbanner.png") no-repeat;
  background-size: cover;
  position: absolute;
  top: 45px;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  display: flex;
  flex-direction:column;
  align-items: center;
}
.shareIt-content{
  width: 80%;
  position: absolute;
  bottom: 50px;
  background: rgba(252,154,151,.7);
  border-radius: 5px;
  padding: 15px;
}
.shareIt-item{
  display: flex;
  background: #fff;
  text-align: left;
  padding: 10px;
  justify-content: space-between;
  margin-top: 5px;
  font-size: 14px;
  border-radius: 5px;
  position: relative;
}
.shareIt-item::after{
  content: '';
  width: 6px;
  height: 12px;
  position: absolute;
  top: 50%;
  left: 0;
  background: rgb(252,154,151);
  border-radius:0 50px 50px 0;
}
.shareIt-item::before{
  content: '';
  width: 6px;
  height: 12px;
  position: absolute;
  top: 50%;
  right: 0;
  background: rgb(252,154,151);
  border-radius:50px 0 0 50px;
}
.shareIt-item-right{
  margin-top: 20px;
  strong{
    color: #fc5b7a;
  }
  .money{
    font-size: 50px;
  }
}
.shareIt-item-leftBottom{
  margin-top: 10px;
  color: #959595;
}
.shareIt-item-booton{
  color: #fff;
  font-size: 12px;
  p{
    margin: 20px 0;
  }
  button{
    width: 200px;
    height: 30px;
    margin-top: 10px;
    background: #f7302b;
    color: #fff;
    border-radius: 5px;
  }
}
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
