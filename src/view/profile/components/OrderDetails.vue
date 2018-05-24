<style lang="less" scoped>
  @import "./OrderDetails.less";
</style>
<template>
  <div class="OrderDetails">
    <van-nav-bar title="订单详情" class="evetn-bar">
      <van-icon name="arrow-left" slot="left"  class="evetn-icon"/>
    </van-nav-bar>
    <div class="OrderDetails-top">
      <div class="OrderDetails-top-group margin-big border-bottom">
        <div class="express-img">
          <img src="../../../assets/img/express.png" alt="">
        </div>
        <div class="OrderDetails-top-info">
          <p>在北京分拨中心进行装车扫描,即将发往：山东省济南市分拨中心</p>
          <p class="express-date">2018-01-20 <span>18:24:21</span></p>
        </div>
      </div>
      <div class="OrderDetails-top-group">
        <div class="express-img">
          <img src="../../../assets/img/address.png" alt="">
        </div>
        <div class="OrderDetails-top-info-end">
          <p>收货人：段小姐 <span class="telephone">17645678987</span> </p>
          <p>收货地址：山东省济南市历下区舜华路舜泰广场9号南楼11楼1102</p>
        </div>
      </div>
    </div>
    <div class="price-wrapper">
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
    </div>
    <div class="OrderDetails-bottom">
      <p>订单编号: <span>1453652716534725</span></p>
      <p>创建时间: <span>2018-01-22&nbsp;23:36:46</span> </p>
      <p>结束时间: <span>2018-01-22&nbsp;23:36:46</span> </p>
      <p>发货时间: <span>2018-01-22&nbsp;23:36:46</span> </p>
      <p class="OrderDetails-bottom-button"><button>查看物流</button><button class="button-confirm">确认收货</button></p>
    </div>
    <div class="shareIt" @click="goShareIt">
      <img src="../../../assets/img/shareIt.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
    name: "OrderDetails",
    methods: {
      goShareIt:function () {
        this.$router.push({
            name: 'shareIt',
            params: {
              project: 'OrderDetails'
            }
          }
        );
      }
    }
}
</script>
