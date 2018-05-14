<style lang="less" scoped>
	@import './index-event.less';
</style>
<template>
	<div class="event-index">
		<van-row class="e-row">
			<van-col class="event-list" span="6">
				<img src="../../../../assets/icon/lipin.png" width="50" height="50">
				礼卡区
			</van-col>
			<van-col class="event-list" span="6"><img src="../../../../assets/icon/xianhuo.png" width="50" height="50">现货区</van-col>
			<van-col class="event-list" span="6"><img src="../../../../assets/icon/tihuo.png" width="50" height="50">礼卡提货</van-col>
			<van-col class="event-list" span="6"><img src="../../../../assets/icon/candi.png" width="50" height="50">产地溯源</van-col>
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