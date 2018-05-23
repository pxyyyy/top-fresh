<style lang="less" scoped>
.evetn-bar{
  width: 100%;
  background: #3d3d3d;
  color: #E1BF8A;
  position: fixed;
  top: 0;
  left: 0;
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
    padding: 30px 7px 7px 7px;
    p:nth-child(1){
        float: left;
        margin-left: 10px;
        line-height: 32px;
    }
    p:nth-child(2){
        height: 31px;
        float: right;
        line-height: 31px;
        color: #bdbdbd;
        .arrow-icon{
            float: right;
        }
    }
}
.padding_top{
  padding-top: 7px;
}
.Cell{
    background: #fff;
    color: #777777;
    font-size: 15px;
    overflow: hidden;
    padding: 2px 7px;
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
        text-align: right;
    }
  .checked{
    position: absolute;
    top: 10px;
    right: 20px;
    margin-right: 10px;
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
.price{
  background: #fff;
  font-size: 14px;
  padding: 0 7px 0 7px;
  .price_right{
    text-align: right;
  }
  .price-content{
    padding: 20px 5px;
  }
  .price-bottom{
    margin-top: 20px;
  }
}
.Mailing{
  width: 280px;
  height: 350px;
  background-color: #fff;
  text-align: center;
  padding: 10px;
  color: #e2bf85;
  overflow: hidden;
  strong{
    border-bottom: 2px solid #e2bf85;
  }
  img{
    width: 20px;
    height: 20px;
    margin: 10px;
  }
  .Mailing_button{
    height: 43px;
    line-height: 43px;
    margin-top: 60px;
    border-radius: 0;
    width: 80%;
    background: #191919;
    color: #fff;
  }
}
.Mailing_right,
.Mailing_left{
  width: 128px;
  height: 220px;
  border: 1px solid #e2bf85;
  margin: 0 4px;
  padding: 20px 10px 20px 10px;
  font-size: 14px;
  float: left;
  position: relative;
  box-sizing: border-box;
}
.MailingActive{
  color: black;
  border: 1px solid black;
  strong{
    border-bottom: 2px solid black;
  }
}
.active_volume{
  position: absolute;
  bottom: -25px;
  left: 35%;
}
.Payment {
  width: 200px;
  background: #fff;
  border-radius: 5px;
  text-align: left;
  padding: 20px 20px;
  span{
    margin-left: 20px;
  }
  .Payment-button{
    border-radius: 0;
    background: #191919;
    color: #fff;
    margin-top: 20px;
    width: 200px;
  }
}
.away{
  width: 200px;
  background: #fff;
  border-radius: 5px;
  text-align: left;
  padding: 20px 20px;
  text-align: center;
  span{
    margin-left: 20px;
  }
  .Payment-button{
    border-radius: 0;
    background: #191919;
    color: #fff;
    margin: 20px 10px 0 10px;
    width: 80px;
    float: left;
    border: 1px solid #191919;
  }
  .awayColor{
    border: 1px solid #e2bf85;
    background: none;
    color: #e0c085;
  }
}
</style>
<style>
  .Cell .van-icon{
    position: absolute;
  }
</style>
<template>
  <div>
    <van-nav-bar title="确认订单" class="evetn-bar">
      <van-icon name="arrow-left" slot="left"  class="evetn-icon"  @click="returnCart()"/>
    </van-nav-bar>
    <!--返回弹出-->
    <van-popup v-model="away" class="away">
      <p>正在离开结算页面</p>
      <p>确定不要了吗</p>
      <van-button size="small" class="Payment-button awayColor" @click="goaway">去意已决</van-button>
      <van-button size="small" class="Payment-button" @click="want">朕在想想</van-button>
    </van-popup>
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
          <p>是否邮寄提货卷</p>
          <p @click="showOne">请选择<span class="iconfont arrow-icon">&#xe66b;</span></p>
        </div>
        <!--是否邮寄提货卷弹出-->
        <van-popup v-model="Mailing">
          <van-row class="Mailing">
            <div :class="{Mailing_left:true, MailingActive:MailingActiveOne}"  @click="MailingOne()">
              <p><strong>邮寄提货卷</strong></p>
              <p><img :src="MailingOnePic" alt=""></p>
              <p>将提货卷实体卡邮寄</p>
              <p>至你提供的地址</p>
              <p>可通过实体卡上的密码</p>
              <p>进行提货操作</p>
              <p class="active_volume" v-if="MailingActiveOne"><img src="../../../assets/img/active-volume.png" alt=""></p>
            </div>
            <div :class="{Mailing_right:true, MailingActive:MailingActiveTwo}" @click="MailingTwo">
              <p><strong>使用虚拟提货卷</strong></p>
              <p><img :src="MailingTwoPic" alt=""></p>
              <p>将提货卷实体卡邮寄</p>
              <p>至你提供的地址</p>
              <p>可通过实体卡上的密码</p>
              <p>进行提货操作</p>
              <p class="active_volume" v-if="MailingActiveTwo"><img src="../../../assets/img/active-volume.png" alt=""></p>
            </div>
            <van-button size="large" class="Mailing_button">确定</van-button>
          </van-row>
        </van-popup>
        <div class="select padding_top">
          <div class="border-top padding_top">
            <p>使用代金卷</p>
            <p>选择代金卷<span class="iconfont arrow-icon">&#xe66b;</span></p>
          </div>
        </div>
        <div class="Cell">
          <div class="border-top padding_top">
            <p>可用200积分抵扣20元</p>
            <p class="checked">
              <van-checkbox v-model="checked"></van-checkbox>
            </p>
          </div>
        </div>
        <!--价格详情-->
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
      <!--付款方式弹出-->
      <van-popup v-model="Payment" class="Payment">
        <p>付款金额：<span>￥199</span></p>
        <p>付款方式：<span>微信支付</span></p>
        <van-button size="small" class="Payment-button">去支付</van-button>
      </van-popup>
    </div>
  </div>
</template>
<script>
import wxpic from '../../../assets/img/wx.png'
import zfbpic from '../../../assets/img/zfb.png'
import wxpicActive from '../../../assets/img/active_wx.png'
import zfbpicActive from '../../../assets/img/active_zfb.png'
import FeaturesIcon5 from '../../../assets/img/product.png'
import MailingOnePic from '../../../assets/img/volume-one.png'
import MailingTwoPic from '../../../assets/img/volume-two.png'
import ActiveMailingOnePic from '../../../assets/img/active-volume-one.png'
import ActiveMailingTwoPic from '../../../assets/img/active-volume-two.png'
export default {
    data () {
        return {
            imageURL: FeaturesIcon5,
            checked:false,
            zfb:false,
            wx:true,
            wxPic: wxpicActive,
            zfbPic:zfbpic,
            MailingTwoPic:MailingTwoPic,
            MailingOnePic:ActiveMailingOnePic,
            Mailing: false,
            MailingActiveOne:true,
            MailingActiveTwo:false,
            Payment:false,
            away:false
        }
    },
    methods: {
        showOne () {
          this.Mailing = true
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
        MailingOne () {
          this.MailingActiveOne = true
          this.MailingActiveTwo = false
          this.MailingOnePic = ActiveMailingOnePic
          this.MailingTwoPic = MailingTwoPic
        },
        MailingTwo () {
          this.MailingActiveOne = false
          this.MailingActiveTwo = true
          this.MailingOnePic = MailingOnePic
          this.MailingTwoPic = ActiveMailingTwoPic
        },
        goDetails:function(){
          this.Payment = true
        },
        goAddress:function(){
          this.$router.push(
            `/cartAddress`
          );
        },
        returnCart:function() {
          this.away = true
        },
        goaway:function () {
          this.$router.push(
            `/cart`
          );
        },
        want:function () {
          this.away = false
        }
    }
}
</script>
