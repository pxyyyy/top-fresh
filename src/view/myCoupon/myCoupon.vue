<template>
    <div>
        <van-nav-bar title="可领取的优惠券" class="evetn-bar">
            <van-icon name="arrow-left" slot="left" class="evetn-icon" @click="last"/>
        </van-nav-bar>
        <div class="wrapper">
            <van-row class="wrapper-content">
                <van-col span="6" class="wrapperLeft" >
                     <h2><span>￥</span>20</h2>
                </van-col>
                <van-col span="11" class="wrapper-center" offset="1">
                    <p>全品类代金卷</p>
                    <p>2018.1.1 - 2018.1.1</p>
                    <p class="weight">满199元使用</p>
                </van-col>
                <van-col span="6" class="wrapper-right">
                    <div class="wrapper-right-icon">
                        <img src="../../assets/img/myCoupon.png" alt="">
                    </div>
                    <div class="wrapper-right-button">
                        <button>立即领取</button>
                    </div>
                </van-col>
            </van-row>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        last () {
            this.$router.go(-1)
        }
    }
}
</script>

<style lang="less" scoped  >
.evetn-bar{
  width: 100%;
  background: #3d3d3d;
  color: #E1BF8A;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
}
.evetn-bar .evetn-icon{
  color: #E1BF8A;
}
.wrapper {
    margin-top: 45px;
    padding: 10px;
}
.wrapper-content{
    border: 1px solid #fc5b7a;
    border-radius: 5px;
    padding: 5px;
    color: #fc5b7a;
    .wrapperLeft{
        border-right: 1px dashed #d3d3d3;
        h2{
            font-size: 50px;
        }
        span {
            font-size: 16px;
        }
    }
    .wrapper-center{
        font-size: 12px;
        color: #9f9f9f;
        line-height: 20px;
        border-right: 1px dashed #d3d3d3;
        .weight{
            color: black
        }
    }
     .wrapper-right-button {
         text-align: center;
         button{
            background: #fc5a7a;
            color: #fff;             
            padding: 0 10px;
            font-size: 12px;    
            border-radius: 11px;
         }
    }
    .wrapper-right-icon{
        text-align: center;
        height: 0;
        padding-bottom: 40px;
        img{
            width: 30px;
            height: 30px;
        }
    }
}
</style>
