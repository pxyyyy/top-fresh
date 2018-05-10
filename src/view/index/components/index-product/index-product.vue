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
			<van-tab v-for="index in 2" :title="index == 1 ? '礼卷' : '现货'">
				<img src="../../../../assets/img/efa9323abe51f7c2e047739906a2b2c2.png" v-if="index == 1" v-for="i in 4">
				<img src="../../../../assets/img/a1acfdc9d8086ac36ad9243e8bff1717.png" v-if="index == 2" v-for="i in 4">
			</van-tab>
		</van-tabs>
		<div class="r-more">
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

		},
		computed: {
			viewWeight: function () {
				return ((window.innerWidth - 20) / 2) + 'px'
			},
		}
	}
</script>