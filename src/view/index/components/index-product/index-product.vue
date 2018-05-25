<style scoped lang="less">
	@import './index-product.less';
</style>
<style>
	.van-tab--active {
		color: #fff!important;
		background: #000!important;
	}
	.van-tabs__nav--card{
		margin: 0 20%;
	}
	.van-tabs__content{
		margin: 10px 10px 0 10px;
	}
</style>
<template>
	<div class="r-product">
		<div class="r-title">
			<p>极味生鲜活动</p>
			<span>给您更好的推荐</span>
		</div>
		<van-tabs type="card" class="r-tab">
			<van-tab v-for="index in 2" :title="index == 1 ? '礼卷' : '现货'" :key="index">
				<img src="../../../../assets/img/组7@2x.png" v-if="index == 1" v-for="i in 4" @click="goGoodInfoVC('1234')" :key="i">
				<img src="../../../../assets/img/组7@2x.png" v-if="index == 2" v-for="i in 4" @click="goGoodInfoVC('1234')" :key="i">
			</van-tab>
		</van-tabs>
		<div class="r-more" @click="goGoodListVC('all')">
			<span>查看全部</span>
			<van-icon name="more" />
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
			}
		},
		beforeMount() {
		},
		methods: {
			goGoodListVC (name) {
				let from = this.$route.query.from;
				if(from=="IOS"){
					this.$bridge.callHandler('goGoodListVC',{'name':name},(data) => {
						console.log("success")
					})
				}else if(from=="Android"){
					this.$bridge.callHandler('goGoodListVC',{'name':name},(data) => {
						console.log("success")
					})
				}else{
					this.$router.push(
				 		`/goodsList/礼卡`
					);
				}
				
			},
			goGoodInfoVC (productId) {
				let from = this.$route.query.from;
				if(from=="IOS"){
					this.$bridge.callHandler('goGoodInfoVC',{'productId':productId},(data) => {
						console.log("success")
					})
				}else if(from=="Android"){
					this.$bridge.callHandler('goGoodInfoVC',{'productId':productId},(data) => {
						console.log("success")
					})
				}else{
					this.$router.push(
				 		`/product/${productId}`
					);
				}
				
			},
		},
		computed: {
			viewWeight: function () {
				return ((window.innerWidth - 20) / 2) + 'px'
			},
		}
	}
</script>