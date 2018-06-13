<style lang="less" scoped>
  @import "./LadingRoll.less";
</style>
<style>
  .ladingRoll-item-list .van-tabs__nav--card .van-tab.van-tab--active {
    background: none !important;
    color: #e2bf85 !important;
  }
  .ladingRoll-item-list .van-tabs__nav--card .van-tab.van-tab--active span {
    border-bottom: 2px solid #e2bf85 !important;
  }
  .ladingRoll-item-list .van-tabs__nav--card {
    border: none !important;
    margin: 0 7%;
  }
  .ladingRoll-item-list .van-tab {
    border: none !important;
  }
  .ladingRoll-item .van-tabs--card .van-tabs__wrap {
    background: #fff;
    height: 40px;
  }
  .ladingRoll-item .van-tabs__nav--card .van-tab{
    line-height: 38px;
  }
  .ladingRoll-item-list .van-tabs__content {
    margin: 0;
  }
</style>
<template>
  <div>
    <van-nav-bar title="我的提货卷" class="evetn-bar">
      <van-icon name="arrow-left" slot="left" class="evetn-icon" @click="returnProFile"/>
    </van-nav-bar>
    <div class="ladingRoll-item">
      <van-tabs v-model="active" class="ladingRoll-item-list" type="card">
        <van-tab v-for="item in ordersList" :title="item.text" class="ladingRoll-item-content">
          <div class="coupon-content" v-if="item.id == 1">
            <div class="content-group">
              <div class="content-top">
                <div class="content-top-img">
                  <img src="../../../assets/img/ladingroll.png" alt="">
                </div>
                <div class="content-top-info">
                  <p>阳澄湖大闸蟹四对礼盒装4.0两x8只 四公四母</p>
                  <p class="margin-top content-top-info-date">提货日期</p>
                  <p class="content-top-info-date"><strong>2018.7.1-2019.7.1</strong></p>
                </div>
              </div>
              <div class="content-bottom">
                <p @click="goLadingRollGive"><i><img src="../../../assets/img/Gift.png" alt=""></i>赠送好友</p>
                <p><i><img src="../../../assets/img/immediately.png" alt=""></i>立即提货</p>
                <p @click="gocartAddress"><i><img src="../../../assets/img/Mailing.png" alt=""></i>邮寄实体卡</p>
              </div>
            </div>
          </div>
          <!-- <div class="coupon-content" v-if="item.id == 2">
            <div class="content-group">
              <div class="content-top">
                <div class="content-top-img">
                  <img src="../../../assets/img/ladingroll.png" alt="">
                </div>
                <div class="content-top-info">
                  <p>阳澄湖大闸蟹四对礼盒装4.0两x8只 四公四母</p>
                  <p class="margin-top content-top-info-date">领取人手机号：1378367246 暂未领取2018.7.7 24:00自动返还</p>
                </div>
              </div>
            </div>
            <div class="content-group">
              <div class="content-top">
                <div class="content-top-img">
                  <img src="../../../assets/img/ladingroll.png" alt="">
                </div>
                <div class="content-top-info">
                  <p>阳澄湖大闸蟹四对礼盒装4.0两x8只 四公四母</p>
                  <p class="margin-top content-top-info-date">领取人手机号：1378367246 暂未领取2018.7.7 24:00自动返还</p>
                </div>
              </div>
            </div>
          </div> -->
          <div class="coupon-content" v-if="item.id == 3">
            <div class="content-group"  v-for="item in 5" :key="item">
              <div class="content-top" style="border-bottom: 1px solid #d3d3d3;" >
                <div class="content-top-img">
                  <img src="../../../assets/img/ladingroll.png" alt="">
                </div>
                <div class="content-top-info">
                  <p>阳澄湖大闸蟹四对礼盒装4.0两x8只 四公四母</p>
                  <!-- <p class="margin-top content-top-info-date color-ccc">领取人手机号：12384536732</p> -->
                  <div class="content-top-info-date color-ccc">
                    <p>使用日期</p>
                    <p>2018.7.1 13.25</p>  
                  </div>
                </div>
              </div>
              <div style="margin-top:5px;"><van-button disabled size="mini">已用</van-button></div>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
export default {
    name: "LadingRoll",
    data () {
        return{
          active:0,
          ordersList:[
            {text:'未用',id:1},
            {text:'已用',id:3},
          ]
        }
    },
  methods: {
    returnProFile () {
      this.$router.push('/profile')
    },
    goLadingRollGive () {
      this.$router.push('/LadingRollGive')
    },
    gocartAddress() {
      this.$router.push({
        name: 'cartAddress',
        params: {
          project: 'LadingRoll'
        }
      })
    }
  }
}
</script>
