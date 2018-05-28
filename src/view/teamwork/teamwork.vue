<style lang="less" scoped>
 @import "./teamwork.less";
</style>
<template>
  <div>
    <van-nav-bar title="我的商品" class="evetn-bar">
      <van-icon name="arrow-left" slot="left"  class="evetn-icon" />
    </van-nav-bar>
    <div class="teamwork">
      <div class="teamwork-content">
        <div class="teamwork-img">
          <img src="../../assets/img/CollageBg.png" alt="">
        </div>
        <div class="teamwork-info">
          <p class="teamwork-info-title">
            阳澄湖大闸蟹8对装诸如此类标题
          </p>
          <p class="teamwork-info-bottom">
            ￥199.00<span>单买价￥299.00</span> <button @click="goCollage('12333')">去开团</button>
          </p>
        </div>
      </div>
      <div class="teamwork-content">
        <div class="teamwork-img">
          <img src="../../assets/img/CollageBg.png" alt="">
        </div>
        <div class="teamwork-info">
          <p class="teamwork-info-title">
            阳澄湖大闸蟹8对装诸如此类标题
          </p>
          <p class="teamwork-info-bottom">
            ￥199.00<span>单买价￥299.00</span> <button @click="goCollage('12333')">去开团</button>
          </p>
        </div>
      </div>
      <div class="teamwork-content">
        <div class="teamwork-img">
          <img src="../../assets/img/CollageBg.png" alt="">
        </div>
        <div class="teamwork-info">
          <p class="teamwork-info-title">
            阳澄湖大闸蟹8对装诸如此类标题
          </p>
          <p class="teamwork-info-bottom">
            ￥199.00<span>单买价￥299.00</span> <button @click="goCollage('12333')">去开团</button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name: "teamwork",
    data(){
      return{

      }
    },
    methods:{
      goCollage(id){
        this.$router.push(
          `/collageDetail/${id}`
        )
      }
    }
}
</script>
