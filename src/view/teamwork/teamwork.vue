<style lang="less" scoped>
	@import "./teamwork.less";
</style>
<template>
	<div>
		<van-nav-bar title="我的商品" class="evetn-bar">
			<van-icon name="arrow-left" slot="left" class="evetn-icon" @click='last' />
		</van-nav-bar>
		<div class="teamwork">
			<div class="teamwork-content">
				<div class="teamwork-img">
					<img v-lazy="CollageBgPic" alt="">
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
	import service from './service/order.js'
	export default {
		name: "teamwork",
		mixins: [service],
		data() {
			return {
				CollageBgPic: require('../../assets/img/CollageBg.png'),
      }
    },
    methods:{
      goCollage(id){
        this.$router.push(
          `/collageDetail/${id}`
        )
      },
      last () {
        this.$router.go(-1);
      },
      // 获取cook
      getCookie (name) {
        var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
        if(arr=document.cookie.match(reg)){
          return unescape(arr[2]);
        }else{
          return null; 
        }
      }
    },
    beforeMount () {
      var staffId = this.getCookie("staffId");
      var token = this.getCookie("token");
      this.getTogetherOrderList(staffId,token)
    }
}
</script>
