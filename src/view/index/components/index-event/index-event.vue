<style lang="less" scoped>
	@import './index-event.less';
</style>
<template>
	<div class="event-index">
		<van-row class="e-row">
			<van-col class="event-list" span="6" @click.native="goGoodListVC('礼卡')"><img src="../../../../assets/icon/lipin.png" width="50" height="50"> 礼卡区</van-col>
			<van-col class="event-list" span="6" @click.native="goGoodListVC('现货')"><img src="../../../../assets/icon/xianhuo.png" width="50" height="50">现货区</van-col>
			<van-col class="event-list" span="6" @click.native="goPickupVC()"><img src="../../../../assets/icon/tihuo.png" width="50" height="50">礼卡提货</van-col>
			<van-col class="event-list" span="6" @click.native="goGoodOriginVC()"><img src="../../../../assets/icon/candi.png" width="50" height="50">产地溯源</van-col>
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
			goGoodListVC(name) {
				console.log("success")
				this.$bridge.callHandler('goGoodListVC', { 'name': name }, (data) => {
					console.log("success")
				})
			},
			goPickupVC() {
				console.log("success")
				this.$bridge.callHandler('goPickupVC', (data) => {
					console.log("success")
				})
			},
			goGoodOriginVC() {
				console.log("success")
				this.$bridge.callHandler('goGoodOriginVC', (data) => {
					console.log("success")
				})
			}
		},
		mounted() {

		},
		computed: {
			viewWeight: function () {
				return ((window.innerWidth - 20) / 2) + 'px'
			},
		}
	}
</script>