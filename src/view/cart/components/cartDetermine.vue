<style  scoped lang="less" scoped>
  .evetn-bar{
    background: #3d3d3d;
    color: #E1BF8A;
    margin-top: -45px;
    }
    .money{
        font-size: 14px;
        color: #f4547d;
    }
    .evetn-bar .evetn-icon{
        color: #E1BF8A;
    }
    .cart_min{
      width: 100%;
      background: #EFEFF7;
      padding-bottom: 150px;
    }
    .address {
      background:  #fff;
      margin: 5px 0;
      padding: 3px 8px;
        .address-content{
            background: #fff;
            font-size: 13px;
            padding: 13px 0;
            color: #280808;
            .address-right{
                text-align: center;
            }
            img{
                width: 20px;
                 height: 20px;
                 margin-top: 18px;
            }
            span{
              float: right;
            }
        }
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
.select{
    background: #fff;
    color: #777777;
    font-size: 15px;
    overflow: hidden;
    padding: 30px 0 13px 0;
    p:nth-child(1){
        float: left;
        margin-left: 10px;
        line-height: 32px;
    }
    p:nth-child(2){
        width: 170px;
        height: 31px;
        float: right;
        line-height: 31px;
        padding: 0 3px 0 5px;
        background: #f2f2f2;
        border: 1px solid #dcdcdc;
        color: #bdbdbd;
        margin-right: 10px;
        .arrow-icon{
            float: right;
        }
    }
}
.Cell{
    background: #fff;
    color: #777777;
    font-size: 15px;
    overflow: hidden;
    padding: 6px 7px;
    position: relative;
    p:nth-child(1){
        float: left;
        margin-left: 10px;
        line-height: 32px;
    }
    p:nth-child(2){
        height: 31px;
        float: right;
        line-height: 31px;
        padding: 0 3px 0 5px;
        color: #818181;
        margin-right: 10px;
        text-align: right;
    }
  .checked{
    position: absolute;
    top: 5px;
    right: 20px;
  }
}
.border-bottom{
    border-bottom:1px solid #e5e5e5;
}
.border-top{
    border-top:1px solid #e5e5e5;
}
.payment{
    height: 100px;
    background: #fff;
    margin-top: 10px;
    padding-top:10px;
    >p{
        font-size: 14px;
        color: #777777;
        margin-left: 20px;
    }
}
.wx,.zfb{
    width: 50%;
    height: 55px;
    text-align: center;
    margin: 10px auto;
    border:1px solid #dbdbdb;
    border-radius:8px;
    p{
        font-size: 12px;
        color: #dbdbdb;
    }
    img{
        width: 30px;
        margin-top: 3px;
    }
}
.wxactive{
      border:1px solid #26d56a;
      p{
          color: #26d56a;
      }
}
.zfbactive{
      border:1px solid #00aaff;
      p{
          color: #00aaff;
      }
}
.cart-foot{
    position: fixed;
    bottom:0;
    width: 100%;
    height: 50px;
    display: flex;
    background: #fff;
    margin-top: 10px;
    line-height: 50px;
    justify-content:space-between;
    background: #1e1e1e;
    color: #fff;
    p{
        margin-left:10px;
    }
    .btnColor{
        background: #e2bf85;
        color: #fff;
        border: none;
        padding: 0 28px;
        margin-right: 20px;
        border-radius: 50px;
        height: 30px;
        line-height: 30px;
    }
    span{
        margin-left: 10px;
    }
}
</style>
<template>
  <div>
    <van-nav-bar title="确认订单" class="evetn-bar">
      <van-icon name="arrow-left" slot="left"  class="evetn-icon"  @click="returnCart()"/>
    </van-nav-bar>
    <div class="cart_min">
      <!-- 收货地址 -->
      <div class="address" @click="goAddress()">
        <van-row class="address-content">
          <van-col span="2" class="address-left">
            <img src="../../../assets/img/cartDeteemine.png" alt="">
          </van-col>
          <van-col span="20">
            <p>收货人: 段小姐<span>15248516731</span> </p>
            <p>收获地址: 山东省济南市高新区舜泰广场9号南楼1102卧室</p>
          </van-col>
          <van-col span="2" class="address-right">
            <img src="../../../assets/img/Arrow.png" alt="">
          </van-col>
        </van-row>
      </div>
      <!-- 订单详情 -->
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
        <!-- 单元格 -->
        <div class="select">
          <p>货品形式选择</p>
          <p>请选择<span class="iconfont arrow-icon">&#xe64a;</span></p>
        </div>
        <!--货品形式选择弹出-->
        <van-actionsheet v-model="show" :actions="actions" />
        <div class="Cell border-top">
          <p>配送费</p>
          <p>免配送费</p>
        </div>
        <div class="Cell border-top">
          <p>使用代金卷</p>
          <p>选择代金卷</p>
        </div>
        <div class="Cell border-top">
          <p>积分扣现金,可用200积分</p>
          <p class="checked">
            <van-checkbox v-model="checked"></van-checkbox>
          </p>
        </div>
        <div class="Cell border-top">
          <p>合计</p>
          <p><strong class="money">￥199.00</strong></p>
        </div>
        <!-- 付款方式 -->
        <div class='payment'>
          <p>付款方式：</p>
          <van-row>
            <van-col span="12">
              <div :class="{wx: true ,wxactive: wx }" @click='wxActive'>
                <img :src="wxPic" alt="">
                <p>微信支付</p>
              </div>
            </van-col>
            <van-col span="12">
              <div :class="{zfb: true, zfbactive: zfb }" @click='zfbActive'>
                <img :src="zfbPic" alt="">
                <p>支付宝</p>
              </div>
            </van-col>
          </van-row>
        </div>
      </div>
      <!-- 支付订单 -->
      <div class="cart-foot">
        <p>付款 :<span>¥199.00</span></p>
        <p><van-button size="normal" class="btnColor" @click="goDetails()">支付订单</van-button></p>
      </div>
    </div>
  </div>
</template>
<script>
import wxpic from '../../../assets/img/wx.png'
import zfbpic from '../../../assets/img/zfb.png'
import wxpicActive from '../../../assets/img/active_wx.png'
import zfbpicActive from '../../../assets/img/active_zfb.png'
import FeaturesIcon5 from '../../../assets/img/product.png'
const coupon = {
    available: 1,
    discount: 0,
    denominations: 150,
    origin_condition: 0,
    reason: '',
    value: 150,
    name: '嗯嗯',
    start_at: 1489104000,
    end_at: 1514592000
};

export default {
    data () {
        return {
            imageURL: FeaturesIcon5,
            show: false,
            showList: false,
            actions: [
                {
                name: '选项',
                callback: this.onClick
                },
                {
                name: '选项',
                subname: '描述信息'
                },
                {
                name: '选项',
                loading: true
                }
            ],
            chosenCoupon: -1,
            coupons: [coupon],
            disabledCoupons: [coupon],
            checked:false,
            zfb:false,
            wx:false,
            wxPic: wxpic,
            zfbPic:zfbpic,
            checked: false
        }
    },
    methods: {
        onClick(item) {
            console.log(item)
        },
        onChange(index) {
            this.showList = false;
            this.chosenCoupon = index;
        },
        onExchange(code) {
        this.coupons.push(coupon);
        },
        wxActive() {
            this.wx = true;
            this.zfb = false;
            this.wxPic = wxpicActive;
            this.zfbPic = zfbpic;
        },
        zfbActive() {
            this.wx = false;
            this.zfb = true;
            this.wxPic = wxpic;
            this.zfbPic = zfbpicActive;
        },
        goDetails:function(){
          this.$router.push(
            `/cartOut`
          );
        },
        goAddress:function(){
          this.$router.push(
            `/cartAddress`
          );
        },
        returnCart:function() {
          this.$router.push(
            `/cart`
          );
        }
    }
}
</script>
