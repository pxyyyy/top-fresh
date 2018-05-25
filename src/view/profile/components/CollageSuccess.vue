<style lang="less" scoped>
 @import "./Collage.less";
</style>
<template>
  <div>
    <van-nav-bar title="拼团成功" class="evetn-bar">
      <van-icon name="arrow-left" slot="left"  class="evetn-icon"/>
    </van-nav-bar>
    <div class="collage-success">
      <div class="collage-success-topbar">
        拼团成功,等待发货
      </div>
      <div class="collage-success-banner">
        <img src="../../../assets/img/CollageBg.png" alt="">
      </div>
      <div class="collage-success-info">
        <p class="collage-success-info-name">阳澄湖大闸蟹8对装</p>
        <p class="collage-success-info-money"><strong>￥199.00 </strong><span>单买价￥299.00</span> </p>
        <ul class="collage-success-info-people">
          <li><img src="../../../assets/img/xhdpi.png" alt=""></li>
          <li><img src="../../../assets/img/xhdpi.png" alt=""></li>
          <li><img src="../../../assets/img/xhdpi.png" alt=""></li>
          <li><img src="../../../assets/img/xhdpi.png" alt=""></li>
          <li><img src="../../../assets/img/xhdpi.png" alt=""></li>
        </ul>
        <p class="collage-success-info-success">成功开团</p>
        <p class="collage-success-info-button"><button>查看更多拼团商品</button></p>
        <p class="collage-success-info-bottom">邀请好友参团 ><span>拼团成功分别发货</span> >人数不足自动退款</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CollageSuccess"
}
</script>
