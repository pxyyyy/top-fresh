<style scoped lang="less">
	@import './Main.less';
</style>
<template>
	<div>
		<div class="index-nav-bar" v-if="!isClient">
			<div class="index-nav-bar__left" v-if="!currentRoute && !eventRouter && !goodDetailRouter">
				<img v-lazy="logoPic" height="15">
			</div>
			<div @click="shangyiye" class="index-nav-bar__left" v-else>
				<van-icon name="arrow-left" />
			</div>
			<div class="index-nav-bar__title" v-if="currentRoute">
				<span>购物车(3)</span>
			</div>
			<div class="index-nav-bar__title" v-if="eventRouter">
				<span>活动</span>
			</div>
			<div class="index-nav-bar__title" v-if="goodDetailRouter">
				<span>{{name}}</span>
			</div>
		</div>
		<router-view v-bind:style="{marginTop:marginTop}"></router-view>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				logoPic: require('../assets/icon/极味生鲜.png'),
				isClient: false,
				marginTop: "46px",
				name: ""
			}
		},
		beforeMount() {},
		watch: {

		},
		computed: {
			currentRoute() {
				if(this.$route.name == 'cart') {
					return true
				} else {
					return false
				}
			},
			eventRouter() {
				if(this.$route.name == 'event') {
					return true
				} else {
					return false
				}
			},
			goodDetailRouter() {
				if(this.$route.name) {
					this.name = this.$route.name;
					return true
				} else {
					return false
				}
			}
		},
		methods: {
			shangyiye() {
				this.$router.go(-1)
			}
		},
		mounted() {
			let from = this.$route.query.from;
			console.log("from", from)
			if(from == "IOS") {
				this.isClient = true;
				this.marginTop = "15px";
			} else if(from == "Android") {
				this.isClient = true;
				this.marginTop = "0";
			}
		},
		components: {}
	}
</script>