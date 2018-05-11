<style scoped lang="less">
	@import './bottom-bar.less';
</style>
<template>
	<div class="index-bottom-bar">
		<router-link class="index-bottom-bar__item" v-bind:class="{index_bottom_bar__active : router == 'index'}" to="/">
			<div class="index-bottom-bar__icon"><img src="//img.yzcdn.cn/2.png">
			</div>
			<div>
				<span>首页</span>
			</div>
		</router-link>
		<router-link class="index-bottom-bar__item" v-bind:class="{index_bottom_bar__active : router == 'event'}" to="/event">
			<div class="index-bottom-bar__icon"><img src="//img.yzcdn.cn/2.png">
			</div>
			<div>
				<span>活动</span>
			</div>
		</router-link>
		<router-link class="index-bottom-bar__item" v-bind:class="{index_bottom_bar__active : router == 'cart'}" to="/cart">
			<div class="index-bottom-bar__icon"><img src="//img.yzcdn.cn/2.png">
			</div>
			<div>
				<span>购物车</span>
			</div>
		</router-link>
		<router-link class="index-bottom-bar__item" v-bind:class="{index_bottom_bar__active : router == 'profile'}" to="/profile">
			<div class="index-bottom-bar__icon"><img src="//img.yzcdn.cn/2.png">
			</div>
			<div>
				<span>个人</span>
			</div>
		</router-link>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				// router: 'index',
			}
		},
		computed: {
			router: function () {
				return this.$route.name
			}
		},
		methods: {
			isActivty(path) {
				this.router = path
				this.$router.push({
					name: path
				});
			}
		},
	}
</script>