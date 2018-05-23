<style lang="less" scoped>
.evetn-bar{
  width: 100%;
  background: #3d3d3d;
  color: #E1BF8A;
  position: fixed;
  top: 0;
  left: 0;
}
.evetn-bar .evetn-icon{
  color: #E1BF8A;
}
.border-top{
  border-top:1px solid #e5e5e5;
}
.Cell{
  background: #fff;
  color: #777777;
  font-size: 14px;
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
  .Cell-input{
    width: 70%;
    text-indent: 1rem;
    padding: 0 5px;
  }
 input{
   flex: 1;
   color: #777;
   text-align: right;
   width: 80%;
 }
}
.cart_min{
  position: absolute;
  width: 100%;
  top: 45px;
  bottom: 0;
  background: #EFEFF7;
  .editing-foot{
    background: #fff;
    margin-top: 10px;
    font-size: 14px;
    padding: 5px 5px;
    p{
      margin-top: 5px;
    }
  }
}
.Area{
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>

<template>
  <div>
    <van-nav-bar title="收货地址管理" class="evetn-bar">
      <van-icon name="arrow-left" slot="left"  class="evetn-icon" @click="returnDetermine"/>
    </van-nav-bar>
    <div class="cart_min">
      <div>
        <div class="Cell">
          <p>收货人</p>
          <p class="Cell-input"><input type="text"></p>
        </div>
        <div class="Cell border-top">
          <p>联系电话</p>
          <p class="Cell-input"><input type="text"></p>
        </div>
        <div class="Cell border-top">
          <p>所在地区</p>
          <p class="Cell-input" @click="showArea"><input type="text"></p>
        </div>
        <div class="Cell border-top">
          <p><textarea name="" id="" cols="20" rows="2" placeholder="请输入接到与门牌信息"></textarea></p>
        </div>
        <div class="editing-foot">
          <p>
            <van-radio-group v-model="radio" class="address-bottom-radio">
              <van-radio name="1" class="radio-text">使用该地址</van-radio>
            </van-radio-group>
          </p>
          <p>
            <van-radio-group v-model="radio" class="address-bottom-radio">
              <van-radio name="2" class="radio-text">默认</van-radio>
            </van-radio-group>
          </p>
          <van-area :area-list="areaList" v-if="Area" class="Area"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cartAddressEditing',
  data() {
    return {
      radio: '1',
      Area: false,
      areaList:{
        province_list: {
          110000: '北京市',
          120000: '天津市'
        },
        city_list: {
          110100: '北京市',
          110200: '县',
          120100: '天津市',
          120200: '县'
        },
        county_list: {
          110101: '东城区',
          110102: '西城区',
          110105: '朝阳区',
          110106: '丰台区',
          120101: '和平区',
          120102: '河东区',
          120103: '河西区',
          120104: '南开区',
          120105: '河北区',
        }
      },
      searchResult: []
    }
  },

  methods: {
    showArea () {
      this.Area = true
    },
    returnDetermine () {
      this.$router.push(
        `/cartDetermine`
      );
    }
  }
}
</script>
