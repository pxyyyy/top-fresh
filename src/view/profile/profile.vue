<style lang="less" scoped>
  @import "./profile.less";
</style>
<template>
	<div class="profile">
    <div>
      <div class="information">
        <!--头像-->
        <div><img src="@/assets/img/userBanner.png" alt=""></div>
        <p><img src="@/assets/img/Avatar.png" alt=""></p>
        <div class="posi">
          <!--名字及电话-->
          <van-row class="info">
            <van-col span="12"><h3>SAMON</h3></van-col>
            <van-col span="12">
              <span class="telicon"></span>
              <strong class="tel">15966320757</strong>
              <span class="editicon"></span>
            </van-col>
          </van-row>
          <!--积分和代金卷-->
          <van-row class="info info-one">
            <van-col span="12"><h3>2018</h3><p>积分</p></van-col>
            <van-col span="12"><h3 @click="goCoupon">8</h3><p @click="goCoupon">代金卷</p></van-col>
          </van-row>
        </div>
      </div>
      <!--订单详情-->
      <van-row class="user-links">
        <van-col span="6" v-for="(item,index) of informations">
          <van-tabbar class="Nofixed">
            <van-tabbar-item icon="chat" @click="Orders(index)">
              <span>{{item.text}}</span>
              <template slot="icon" slot-scope="props">
                <img :src="item.Url" />
              </template>
            </van-tabbar-item>
          </van-tabbar>
        </van-col>
      </van-row>

      <!--功能-->
      <van-cell-group>
        <van-cell is-link v-for="(item, index) of FeaturesList"  @click="secondLevel(index)">
          <template slot="title">
            <p class="user-group-list"><img :src="item.Url"></p>
            <p class="van-cell-text">{{item.text}}</p>
          </template>
        </van-cell>
      </van-cell-group>
    </div>
	</div>
</template>
<script>
  import icon1 from '../../assets/img/userIcon1.png'
  import icon2 from '../../assets/img/userIcon2.png'
  import icon3 from '../../assets/img/userIcon3.png'
  import icon4 from '../../assets/img/userIcon4.png'
  import FeaturesIcon1 from '../../assets/img/FeaturesList1.png'
  import FeaturesIcon2 from '../../assets/img/FeaturesList2.png'
  import FeaturesIcon3 from '../../assets/img/FeaturesList3.png'
  import FeaturesIcon4 from '../../assets/img/FeaturesList4.png'
  import FeaturesIcon5 from '../../assets/img/FeaturesList5.png'
  export default {
    name: 'profile',
    data () {
      return {
        informations:[
          {
            id: '001',
            Url: icon1,
            text: '待付款'
          },
          {
            id: '001',
            Url: icon2,
            text: '待发货'
          },
          {
            id: '001',
            Url: icon3,
            text: '待收货'
          },
          {
            id: '001',
            Url: icon4,
            text: '全部订单'
          }
        ],
        FeaturesList:[
          {
            id: '001',
            Url: FeaturesIcon1,
            text: '我的提货卷'
          },
          {
            id: '002',
            Url: FeaturesIcon2,
            text: '收货地址'
          },
          {
            id: '003',
            Url: FeaturesIcon3,
            text: '拼团订单'
          },
          {
            id: '004',
            Url: FeaturesIcon4,
            text: '电话客服'
          },
          {
            id: '005',
            Url: FeaturesIcon5,
            text: '意见反馈'
          },
        ]
      }
    },
    methods: {
      goCoupon () {
        this.$router.push('/coupon')
      },
      Orders (index) {
		    this.$store.commit('setCurrentActiveForProfile', index);
        this.$router.push('/Orders')
      },
      secondLevel (index) {
        switch (index) {
          case 0 :
            this.$router.push('/LadingRoll')
        }
      }
    }
  };
</script>
