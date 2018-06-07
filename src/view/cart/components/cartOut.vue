<style  lang="less" scoped>
  @import "./cartOut.less";
</style>
<template>
  <div>
    <div class="topbar">
      支付完成
      <span class="iconfont" @click="returnDetermine()">&#xe65c;</span>
    </div>
    <!-- 订单详情 -->
    <div class="order"><span>订单号：2478654763721367</span></div>
    <div>
        <ul>
            <li class="item">
                <img src="../../../assets/img/Crab.png" alt="" class="item-img">
                <div class="item-info">
                    <p class="item-title">阳澄湖大闸蟹四对礼盒4.0两8只四公四母</p>
                    <p class="item-desc">精品推荐 送礼佳选</p>
                    <p class="item-button"><strong class="money">￥199.00</strong> <span>x1</span></p>
                </div>
            </li>
       </ul>
        <ul>
            <li class="item">
                <img src="../../../assets/img/Crab.png" alt="" class="item-img">
                <div class="item-info">
                    <p class="item-title">阳澄湖大闸蟹四对礼盒4.0两8只四公四母</p>
                    <p class="item-desc">精品推荐 送礼佳选</p>
                    <p class="item-button"><strong class="money">￥199.00</strong> <span>x1</span></p>
                </div>
            </li>
       </ul>
    </div>
    <!-- 货品形式 -->
    <div class="price">
      <div class="border-top price-content">
        <van-row>
          <van-col span="12">商品总额</van-col>
          <van-col span="12" class="price_right">￥199.00</van-col>
        </van-row>
        <van-row>
          <van-col span="12">代金卷优惠</van-col>
          <van-col span="12"  class="price_right">-￥10.00</van-col>
        </van-row>
        <van-row>
          <van-col span="12">积分优惠</van-col>
          <van-col span="12"  class="price_right">-￥10.00</van-col>
        </van-row>
        <van-row class="price-bottom">
          <van-col span="24"  class="price_right">实付款 <strong class="money">￥199.00</strong></van-col>
        </van-row>
      </div>
    </div>
    <div class="wait">
        <van-button size="mini"  class='info-button'>等待发货</van-button>
    </div>
    <div class="shareIt" @click="goShareIt">
      <img src="../../../assets/img/shareIt.png" alt="">
    </div>
        <!-- 继续选购 -->
        <div class="keepOn">
            <p><span>——</span>继续选购<span>——</span></p>
            <div class="img-conent" @click="toProductInfo('123')">
                <img src="../../../assets/img/组7@2x.png" alt="">
            </div>
            <div class="img-conent" @click="toProductInfo('123')">
                <img src="../../../assets/img/组7@2x.png" alt="">
            </div>
            <div class="img-conent" @click="toProductInfo('123')">
                <img src="../../../assets/img/组7@2x.png" alt="">
            </div>
            <div class="img-conent" @click="toProductInfo('123')">
                <img src="../../../assets/img/组7@2x.png" alt="">
            </div>
        </div>
  </div>
</template>
<script>
export default {
    data () {
        return {
        }
    },
    methods: {
      toProductInfo(productId) {
        this.$router.push(`/product/${productId}`);
      },
      returnDetermine:function () {
        this.$router.push(
          `/`
        );
      },
      goShareIt:function () {
        this.$router.push({
            name: 'shareIt',
          }
        );
      }
    }
}
</script>
