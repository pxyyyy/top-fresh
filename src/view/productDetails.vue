
<style scoped lang="less">
	@import './Main.less';
</style>
<template>
	<div>
		<div class="index-nav-bar" v-if="!isClient" >
			<div class="index-nav-bar__left" v-if="!currentRoute && !eventRouter">
				<img src="../assets//icon//极味生鲜.png" height="15">
			</div>
			<div class="index-nav-bar__title" v-if="currentRoute">
				<span>购物车(3)</span>
			</div>
			<div class="index-nav-bar__title" v-if="eventRouter">
				<span>活动</span>
			</div>
		</div>
		<router-view v-bind:style="{marginTop:marginTop}"></router-view>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				isClient:false,
				marginTop:"46px",
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
			},
			eventRouter(){
				if (this.$route.name == 'event') {
					return true
				} else {
					return false 
				}
			}
		},
		methods: {
			
		},
		mounted(){
			let from = this.$route.query.from;
			console.log("from",from)
			if(from=="IOS"){
				this.isClient=true;
				this.marginTop="15px";
			}else if(from=="Android"){
				this.isClient=true;
				this.marginTop="0";
			}
		},
		methods: {
		},
		components: {}
	}
</script>
