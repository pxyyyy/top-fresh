<style scoped lang="less">
  @import "./evnet.less";
</style>
<template>
	<div class="event-main">
    <div class="imgs" v-for="img in imageList" :key="img.id" @click="goDetails()">
      <img v-lazy="img.src" alt="">
      <span>{{img.text}}</span>
    </div>
        <div class="keepOn">
      <p>
        <span>——</span>推荐商品
        <span>——</span></p>
        <div class="img-conent" @click="toProductInfo('123')" v-for="index in 5" :key="index">
              <img v-lazy="cartLictPic" alt="">
            </div>
    </div>
	</div>
</template>
<script>
import event1 from '../../assets/img/event1.png'
  export default {
    data() {
      return {
    	cartLictPic: require('../../assets/img/组7@2x.png'),
        imageList: [
          {
            src: event1,
            text:'极品生鲜招募代理中',
            id:1},
          {
            src: event1,
            text:'极品生鲜店中店加盟',
            id:2},
          {
            src: event1,
            text:'极品生鲜招募代理中',
            id:3},
          {
            src: event1,
            text:'极品生鲜招募代理中',
            id:4},
          {
            src: event1,
            text:'极品生鲜招募代理中',
            id:5}
        ]
      };
    },
    methods: {
      goDetails:function(){
        this.$router.push(
          `/eventList`
        );
      }
    }
  }
</script>
