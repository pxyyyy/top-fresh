<style scoped lang="less">
	@import './Main.less';
</style>
<template>
	<div>
		<!-- <van-nav-bar left-text="极味生鲜">
		<van-icon name="pending-evaluate" slot="right" />
	</van-nav-bar> -->
		<div class="index-nav-bar">
			<div class="index-nav-bar__left">
				<span>极味生鲜</span>
			</div>
			<div class="index-nav-bar__right"><i class="van-icon van-icon-pending-evaluate index-nav-bar__icon"></i></div>
		</div>
		<router-view></router-view>
		<bottom></bottom>
	</div>
</template>
<script>
	import bottom from '../components/bottom-bar/bottom-bar.vue'
	export default {
		data() {
			return {
				router: 'index',
				icon: {
					normal: '//img.yzcdn.cn/1.png',
					active: '//img.yzcdn.cn/2.png'
				}
			}
		},
		beforeMount() {
		},
		watch: {

		},
		methods: {
			isActivty(path) {
				this.router = path
				this.$router.push({
					name: path
				});
			}
		},
		components:{
			bottom
		}
	}
</script>