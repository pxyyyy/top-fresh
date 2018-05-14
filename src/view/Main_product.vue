
<style scoped lang="less">
	@import './Main.less';
</style>
<template>
	<div>
		<!-- <van-nav-bar left-text="极味生鲜">
		<van-icon name="pending-evaluate" slot="right" />
	</van-nav-bar> -->
		<div class="index-nav-bar" v-if="!isClient" >
			<div class="index-nav-bar__left" v-if="!currentRoute">
				<span>极味生鲜</span>
			</div>
			<div class="index-nav-bar__title" v-if="currentRoute">
				<span>购物车(2)</span>
			</div>
			<div class="index-nav-bar__right"><i class="van-icon van-icon-pending-evaluate index-nav-bar__icon"></i></div>
		</div>
		<router-view v-bind:style="{marginTop:marginTop}"></router-view>
		<bottom v-if="!isClient"></bottom>
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
				},
				isClient:false,
				marginTop:"45px",
				
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
			isActivty(path) {
				this.router = path
				this.$router.push({
					name: path
				});
			},
		},
		mounted(){
			let from = this.$route.query.from;
			console.log("from",from)
			if(from=="IOS"){
				this.isClient=true;
				this.marginTop="0px";
			}
		},
		methods: {
		},
		components: {
			bottom
		}
	}
</script>