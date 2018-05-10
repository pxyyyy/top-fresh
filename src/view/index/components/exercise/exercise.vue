<style scoped lang="less">
	@import './exercise.less';
</style>
<template>
	<div class="exercise">
		<div class="e-title">
			<p>极味生鲜活动</p>
			<span>给您更好的推荐</span>
		</div>
		<div class="left" v-bind:style="{width:viewWeight}">
			<img src="../../../../assets//img/5a4ae29389f5447f259a48e494da3d92.png">
		</div>
		<div class="right" v-bind:style="{width:viewWeight}">
			<div class="right-info">
				<img src="../../../../assets/img/a1acfdc9d8086ac36ad9243e8bff1717.png">
			</div>
			<div class="right-info">
				<img src="../../../../assets/img/efa9323abe51f7c2e047739906a2b2c2.png">
			</div>
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