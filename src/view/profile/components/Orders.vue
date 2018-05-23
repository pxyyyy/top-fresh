<style scoped lang="less">
  .evetn-bar{
    background: #3d3d3d;
    color: #E1BF8A;
    margin-top: -45px;
  }
  .evetn-bar .evetn-icon{
    color: #E1BF8A;
  }
  .orders{
    background: #f0eff4;
    position: absolute;
    top: 45px;
    left: 0;
    right: 0;
    bottom: 0;
    .coupon-content {
    }
  }
  .item{
    overflow :hidden;
    background: #fff;
    padding: 0 20px 20px 20px;
    margin-bottom: 10px;
    .item-content{
      display :flex;
      height :100px;
      padding-bottom: 20px;
      border-bottom: 1px solid #f3f3f3;
      .item-img{
        width :90px;
        height :90px;
        padding: 10px 10px 10px 0px;
      }
      .item-info{
        flex :1;
        padding :8px;
        min-width :0;
        .item-title{
          font-weight: 500;
          font-size: 15px;
        }
        .item-desc{
          line-height :16px;
          color :#b8b8b8;
          font-size: 12px;
          background: #e8e8e8;
          width: 110px;
          text-align: center;
          height: 16px;
        }
        .item-button{
          margin-top :10px;
          span{
            float: right;
            font-size: 12px;
            margin-top: 8px;
          }
        }
      }
    }
  }
  .item-bottom{
    margin-top: 10px;
    display: flex;
    justify-content: flex-end;
    color: #959595;
    font-size: 12px;
    .item-bottom-two{
      color: #f23363;
    }
    button{
      background: #fff;
      border: 1px solid #f23363;
      color: #f23363;
      border-radius: 10px;
      padding: 0 5px;
      margin-left: 20px;
    }
    .item-bottom-three{
      border: 1px solid #959595;
      color: #959595;
    }
  }
</style>
<style>
  .orders .van-tabs__nav--card .van-tab.van-tab--active{
    background: none!important;
    color: #e2bf85!important;
  }
  .orders .van-tabs__nav--card .van-tab.van-tab--active span{
    border-bottom:2px solid #e2bf85!important;
  }
  .orders .van-tabs__nav--card{
    border:none!important;
    border-bottom: 1px solid #ccc!important;
    margin: 0 7%;
  }
  .orders .van-tab{
    border: none !important;
  }
   .van-tabs--card .van-tabs__wrap{
    background: #fff;
  }
  .orders .van-tabs__content{
    margin: 0;
  }
</style>
<template>
  <div>
    <van-nav-bar title="我的优惠券" class="evetn-bar">
      <van-icon name="arrow-left" slot="left"  class="evetn-icon"  @click="returnProfile"/>
    </van-nav-bar>
    <van-tabs v-model="active" class="orders"  type="card">
      <van-tab v-for="item in ordersList" :title="item.text">
        <div class="coupon-content" v-if="item.id == 1">
          <ul>
            <li class="item">
              <div class="item-content">
                <img src="../../../assets/img/Crab.png" alt="" class="item-img">
                <div class="item-info">
                  <p class="item-title">阳澄湖大闸蟹四对礼盒4.0两8只四公四母</p>
                  <p class="item-desc">精品推荐 送礼佳选</p>
                  <p class="item-button"><strong class="money">￥199.00</strong> <span>x1</span></p>
                </div>
              </div>
              <div class="item-bottom">
                <p>取消订单 <button>立即付款</button></p>
              </div>
            </li>
          </ul>
          <ul>
            <li class="item">
              <div class="item-content">
                <img src="../../../assets/img/Crab.png" alt="" class="item-img">
                <div class="item-info">
                  <p class="item-title">阳澄湖大闸蟹四对礼盒4.0两8只四公四母</p>
                  <p class="item-desc">精品推荐 送礼佳选</p>
                  <p class="item-button"><strong class="money">￥199.00</strong> <span>x1</span></p>
                </div>
              </div>
              <div class="item-bottom">
                <p>取消订单 <button>立即付款</button></p>
              </div>
            </li>
          </ul>
          <ul>
            <li class="item">
              <div class="item-content">
                <img src="../../../assets/img/Crab.png" alt="" class="item-img">
                <div class="item-info">
                  <p class="item-title">阳澄湖大闸蟹四对礼盒4.0两8只四公四母</p>
                  <p class="item-desc">精品推荐 送礼佳选</p>
                  <p class="item-button"><strong class="money">￥199.00</strong> <span>x1</span></p>
                </div>
              </div>
              <div class="item-bottom">
                <p>取消订单 <button>立即付款</button></p>
              </div>
            </li>
          </ul>
        </div>
        <div class="coupon-content" v-if="item.id == 2">
          <ul>
            <li class="item">
              <div class="item-content">
                <img src="../../../assets/img/Crab.png" alt="" class="item-img">
                <div class="item-info">
                  <p class="item-title">阳澄湖大闸蟹四对礼盒4.0两8只四公四母</p>
                  <p class="item-desc">精品推荐 送礼佳选</p>
                  <p class="item-button"><strong class="money">￥199.00</strong> <span>x1</span></p>
                </div>
              </div>
              <div class="item-bottom">
                <p class="item-bottom-two">等待发货</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="coupon-content" v-if="item.id == 3">
          <ul>
            <li class="item">
              <div class="item-content">
                <img src="../../../assets/img/Crab.png" alt="" class="item-img">
                <div class="item-info">
                  <p class="item-title">阳澄湖大闸蟹四对礼盒4.0两8只四公四母</p>
                  <p class="item-desc">精品推荐 送礼佳选</p>
                  <p class="item-button"><strong class="money">￥199.00</strong> <span>x1</span></p>
                </div>
              </div>
              <div class="item-bottom">
                <p> <button class="item-bottom-three">确认收货</button><button>查看物流</button></p>
              </div>
            </li>
          </ul>
        </div>
        <div class="coupon-content" v-if="item.id == 4">4</div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
  export default {
    name: "orders",
    data () {
      return {
        active: 0,
        ordersList: [
          {id: 1,text:'待付款'},
          {id: 2,text:'待发货'},
          {id: 3,text:'待收货'},
          {id: 4,text:'全部订单'},
        ]
      }
    },
    methods: {
      returnProfile () {
        this.$router.push('/profile')
      }
    }
  }
</script>
