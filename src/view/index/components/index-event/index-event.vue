<style lang="less" scoped>
	@import './index-event.less';
</style>
<template>
	<div class="event-index">


		<van-row class="e-row">
			<van-col span="6">礼卡区</van-col>
			<van-col span="6">现货区</van-col>
			<van-col span="6">礼卡提货</van-col>
			<van-col span="6">产地溯源</van-col>
		</van-row>
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