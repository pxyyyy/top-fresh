<style  scoped lang="less" scoped>
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
    .money{
        font-size: 14px;
        color: #f4547d;
    }
    .wait{
        overflow: hidden;
        background: #fff;
        padding:5px 0;
        text-align: right;
        padding-right: 10px;
    }
.item{
    overflow :hidden;
    display :flex;
    height :100px;
    background: #fff;
    .item-img{
        width :90px;
        height :90px;
        padding: 10px;
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
.order{
    background: #fff;
    font-size: 10px;
    color: #878787;
    padding: 0 10px;
    span{
        border-bottom: 1px solid #dfdfdf;
        width: 100%;
        display: inline-block;
        line-height: 30px;
    }
}
.info{
    background:#fff;
    padding:5px 0;
    font-size:13px;
    .info-content{
        border-bottom: 1px solid #dfdfdf;
        border-top: 1px solid #dfdfdf;
        overflow:hidden;
        width:94%;
        margin-left:10px;
        margin-top:20px;
        .info-right{
            text-align:right;
            margin: 15px 0;
        }
        .info-left{
            margin: 15px 0;
        }
    }
}
.info-button{
    width:70px;
    color:#f8a955;
    border:1px solid #f8a955;
    border-radius:30px;
    height:17px;
    line-height:17px;
}
.keepOn{
    background: #fff;
    margin-top: 10px;
    padding:10px 10px;
    text-align:center;
    font-size:14px;
    color:#565656;
    p{
        margin:5px 0;
    }
    .img-conent img{
        width: 100%
    }
}
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
        <!-- 商品 -->
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
        <!-- 商品 -->
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
       <van-row class='info'>
          <div class='info-content'>
                <van-col span="12" class='info-left'>
                    <p>货品形式</p>
                    <p>实付款(含运费)</p>
                </van-col>
                <van-col span="12" class='info-right'>
                    <p>实体卡</p>
                    <p>¥199.00</p>
                </van-col>
          </div>
        </van-row>
        <div class="wait">
            <van-button size="mini"  class='info-button'>等待发货</van-button>
        </div>
        <!-- 继续选购 -->
        <div class="keepOn">
            <p><span>——</span>继续选购<span>——</span></p>
            <div class="img-conent">
                <img src="../../../assets/img/组7@2x.png" alt="">
            </div>
            <div class="img-conent">
                <img src="../../../assets/img/组7@2x.png" alt="">
            </div>
            <div class="img-conent">
                <img src="../../../assets/img/组7@2x.png" alt="">
            </div>
            <div class="img-conent">
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
      returnDetermine:function () {
        this.$router.push(
          `/cartDetermine`
        );
      }
    }
}
</script>
