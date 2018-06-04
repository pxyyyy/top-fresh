<style scoped lang="less">
	@import './exercise.less';
</style>
<template>
	<div class="exercise">
		<div class="e-title">
			<p>极味生鲜活动</p>
			<span>给您更好的推荐</span>
		</div>
		<div class="exercise-active">
			<div class="left" @click="goActiveInfoVC('1234')">
				<img src="../../../../assets//img/组9@2x.png">
        <!--<img :src="activities[0].imgUrl" alt="" @click=''>-->
      </div>
			<div class="right">
				<div class="right-info" @click="goYouhuiquanVC()">
					<img src="../../../../assets/img/组10@2x.png">
          <!--<img :src="activities[1].imgUrl" alt="">-->
        </div>
				<div class="right-info" @click="goPintuanGoodsVC()">
					<img src="../../../../assets/img/组11@2x.png">
          <!--<img :src="activities[2].imgUrl" alt="">-->
        </div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
	  props:['activities'],
		data() {
			return {
			}
		},
		beforeMount() {
		},
		methods: {
			goActiveInfoVC(activeId) {
				let from = this.$route.query.from;
				console.log("from",from)
				if(from == "IOS" || from == "Android"){
					this.$bridge.callHandler('goActiveInfoVC', { "activeid": activeId }, (data) => {
						console.log("success")
					})
				}else{
					this.$router.push(
						`/eventList?id=`+activeId
					)
				}

			},
			goYouhuiquanVC() {
				let from = this.$route.query.from;
				console.log("from",from);
				if(from == "IOS" || from == "Android"){
					this.$bridge.callHandler('goYouhuiquanVC', (data) => {
						console.log("success")
					})
				}else{
					this.$router.push(
						`/coupon`
					)
				}

			},
			goPintuanGoodsVC() {
				let from = this.$route.query.from;
				console.log("from",from);
				if(from == "IOS" || from == "Android"){
					this.$bridge.callHandler('goPintuanGoodsVC', (data) => {
						console.log("success")
					})
				}else{
					this.$router.push(
						`/teamwork`
					)
				}

			}

		},
		computed: {
			viewWeight: function () {
				return ((window.innerWidth - 20) / 2) + 'px'
			},
		}
	}
</script>
