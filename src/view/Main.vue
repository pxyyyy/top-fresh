/* * @Author: tarn.tianrun * @Date: 2018-05-11 10:47:35 * @Last Modified by: tarn.tianrun * @Last Modified time: 2018-05-11
16:04:55 */

<style scoped lang="less">
	@import './Main.less';
</style>
<template>
	<div>
		<!-- <van-nav-bar left-text="极味生鲜" title="标题"> -->
		<!-- </van-nav-bar> -->
		<!-- van-nav-bar__title -->
		<div class="index-nav-bar">
			<div class="index-nav-bar__left" v-if="!currentRoute">
				<span>极味生鲜</span>
			</div>
			<div class="index-nav-bar__title" v-else>
				<span>购物车(3)</span>
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
		computed: {
			currentRoute() {
				if (this.$route.name == 'cart') {
					return true
				} else {
					return false
				}
			}
		},
		methods: {
		},
		components: {
			bottom
		}
	}
</script>