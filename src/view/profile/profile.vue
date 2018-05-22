<style lang="less" scoped>
.profile{
  margin-top: 45px;
}
.information{
  position: relative;
  height: 235px;
  background: #fff;
  margin-bottom: 3px;
  img {
    width: 100%;
  }
  .posi{
    position: absolute;
    top: 60%;
    width: 100%;
  }
  .info{
    width: 100%;
    text-align: center;
    .tel{
      font-size: 12px;
    }
    .telicon,.editicon{
      width: 12px;
      height: 12px;
      display: inline-block;
      background: url("../../assets/img/phone.png");
      background-size:cover ;
      margin-top: 2px;
    }
    .editicon{
      background: url("../../assets/img/edit.png");
      background-size:cover ;
      margin-left: 5px;
    }
  }
  .info-one{
    margin-top: 20px;
    h3{
      color: #E2BF85;
    }
    p{
      font-size: 12px;
    }
  }
  >p{
    position: absolute;
    top: 31%;
    left: 17%;
    width: 60px;
    height: 60px;
    background: #fff;
    border: 1px solid #fff;
    border-radius: 50%;
  }
}
.user {
  &-poster {
    width: 7.5rem;
    height: 4rem;
    display: block;
  }
  &-group {
    margin-bottom: .3rem;
  }
  &-links {
    padding: 15px 0;
    font-size: 12px;
    text-align: center;
    background-color: #fff;
    .van-icon {
      display: block;
      font-size: 24px;
    }
  }
}
.user-links{
  margin-bottom: 3px;
}
.Nofixed{
  position: static;
}
.user-group-list{
  float: left;
  margin-top: 3px;
  img{
    width: 17px;
    height: 17px;
  }
}
.van-cell-text{
  float: left;
  margin-left: 5px;
}
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
            <van-col span="12"><h3>8</h3><p>代金卷</p></van-col>
          </van-row>
        </div>
      </div>
      <!--订单详情-->
      <van-row class="user-links">
        <van-col span="6" v-for="item of information">
          <van-tabbar class="Nofixed">
            <van-tabbar-item icon="chat">
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
        <van-cell is-link v-for="item of FeaturesList">
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
        information:[
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
  };
</script>
