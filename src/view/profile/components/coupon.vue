<style scoped lang="less">
.evetn-bar{
  background: #3d3d3d;
  color: #E1BF8A;
  margin-top: -45px;
}
.evetn-bar .evetn-icon{
  color: #E1BF8A;
}
.coupon{
  background: #fff;
  .coupon-content{
    padding: 10px 20px 10px 20px;
    .coupon-item{
      height: 100px;
      background: #fc5b7a;
      border-radius: 5px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      text-align: center;
      color: #fff;
      padding: 20px;
      box-sizing: border-box;
      strong{
        font-size: 20px;
      }
      .coupon-Large{
        font-size: 50px;
      }
      .coupon-item-left{
        border-right: 1px dotted #fff;
        padding-right: 50px;
      }
    }
  }
  .coupon-Expired .coupon-item{
    background: #cccccc;
  }
}
</style>
<style>
.coupon .van-tabs__nav--card .van-tab.van-tab--active{
  background: none;
  color: #e2bf85;
}
.coupon .van-tabs__nav--card .van-tab.van-tab--active span{
  border-bottom:1px solid #e2bf85;
}
.coupon .van-tabs__nav--card{
  border:none;
  border-bottom: 1px solid #ccc;
}
.coupon .van-tab{
  border: none;
  padding: 0 50px;
}
</style>
<template>
  <div>
    <van-nav-bar title="我的优惠券" class="evetn-bar">
      <van-icon name="arrow-left" slot="left"  class="evetn-icon"  @click="returnProfile"/>
    </van-nav-bar>
    <van-tabs v-model="active" class="coupon"  type="card">
      <van-tab v-for="index in 2" :title="index == 1 ? '未使用' : '已过期'">
        <div v-if="index == 1" class="coupon-content">
          <div class="coupon-item">
            <div class="coupon-item-left">
              <p><strong>￥</strong> <strong class="coupon-Large">20</strong> </p>
            </div>
            <div class="coupon-item-right">
              <p>满199元使用</p>
              <p>2018.1.1-2018.1.31</p>
            </div>
          </div>
        </div>
        <div v-if="index == 1" class="coupon-content">
          <div class="coupon-item">
            <div class="coupon-item-left">
              <p><strong>￥</strong> <strong class="coupon-Large">20</strong> </p>
            </div>
            <div class="coupon-item-right">
              <p>满199元使用</p>
              <p>2018.1.1-2018.1.31</p>
            </div>
          </div>
        </div>
        <div v-if="index == 1" class="coupon-content">
          <div class="coupon-item">
            <div class="coupon-item-left">
              <p><strong>￥</strong> <strong class="coupon-Large">20</strong> </p>
            </div>
            <div class="coupon-item-right">
              <p>满199元使用</p>
              <p>2018.1.1-2018.1.31</p>
            </div>
          </div>
        </div>
        <div v-if="index == 1" class="coupon-content">
          <div class="coupon-item">
            <div class="coupon-item-left">
              <p><strong>￥</strong> <strong class="coupon-Large">20</strong> </p>
            </div>
            <div class="coupon-item-right">
              <p>满199元使用</p>
              <p>2018.1.1-2018.1.31</p>
            </div>
          </div>
        </div>
        <div v-if="index == 1" class="coupon-content">
          <div class="coupon-item">
            <div class="coupon-item-left">
              <p><strong>￥</strong> <strong class="coupon-Large">20</strong> </p>
            </div>
            <div class="coupon-item-right">
              <p>满199元使用</p>
              <p>2018.1.1-2018.1.31</p>
            </div>
          </div>
        </div>
        <!--已过期-->
        <div v-if="index == 2" class="coupon-content coupon-Expired">
          <div class="coupon-item">
            <div class="coupon-item-left">
              <p><strong>￥</strong> <strong class="coupon-Large">20</strong> </p>
            </div>
            <div class="coupon-item-right">
              <p>满199元使用</p>
              <p>2018.1.1-2018.1.31</p>
            </div>
          </div>
        </div>
        <div v-if="index == 2" class="coupon-content coupon-Expired">
          <div class="coupon-item">
            <div class="coupon-item-left">
              <p><strong>￥</strong> <strong class="coupon-Large">20</strong> </p>
            </div>
            <div class="coupon-item-right">
              <p>满199元使用</p>
              <p>2018.1.1-2018.1.31</p>
            </div>
          </div>
        </div>
        <div v-if="index == 2" class="coupon-content coupon-Expired">
          <div class="coupon-item">
            <div class="coupon-item-left">
              <p><strong>￥</strong> <strong class="coupon-Large">20</strong> </p>
            </div>
            <div class="coupon-item-right">
              <p>满199元使用</p>
              <p>2018.1.1-2018.1.31</p>
            </div>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
export default {
    name: "coupon",
    data () {
      return {
        active: 2
      }
    },
    methods: {
      returnProfile () {
        this.$router.push('/profile')
      }
    }
}
</script>
