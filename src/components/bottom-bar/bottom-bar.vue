<style scoped lang="less">
	@import './bottom-bar.less';
</style>
<template>
	<div class="index-bottom-bar">
		<router-link class="index-bottom-bar__item" v-bind:class="{index_bottom_bar__active : router == 'index'}" to="/">
			<div class="index-bottom-bar__icon">
				<img v-lazy="currentHome" v-if="router == 'index'">
				<img src="../../assets/icon/home.png" v-else>
			</div>
			<div>
				<span>首页</span>
			</div>
		</router-link>
		<router-link class="index-bottom-bar__item" v-bind:class="{index_bottom_bar__active : router == 'event'}" to="/event">
			<div class="index-bottom-bar__icon">
				<img src="../../assets/icon/活动@2x.png" v-if="router == 'event'">
				<img src="../../assets/icon/active.png" v-else>
			</div>
			<div>
				<span>活动</span>
			</div>
		</router-link>
		<router-link class="index-bottom-bar__item" v-bind:class="{index_bottom_bar__active : router == 'cart'}" :to="token ? '/cart' : '/login'">
			<div class="index-bottom-bar__icon">
				<img src="../../assets/icon/购物车@2x.png" v-if="router == 'cart'">
				<img src="../../assets/icon/cart.png" v-else>
			</div>
			<div>
				<span>购物车</span>
			</div>
		</router-link>
		<router-link class="index-bottom-bar__item" v-bind:class="{index_bottom_bar__active : router == 'profile'}" :to="token ? '/profile' : '/login' ">
			<div class="index-bottom-bar__icon">
				<img src="../../assets/icon/个人@2x.png" v-if="router == 'profile'">
				<img src="../../assets/icon/profile.png" v-else>
			</div>
			<div>
				<span>个人</span>
			</div>
		</router-link>
	</div>
</template>
<script>
	import {Dialog} from 'vant'
	export default {
		data() {
			return {
				// router: 'index',
				currentHome: require('../../assets/icon/首页@2x.png'),
				currentActive: require('../../assets/icon/活动@2x.png'),
				currentCart: require('../../assets/icon/购物车@2x.png'),
				currentProfile: require('../../assets/icon/个人@2x.png'),
				token:sessionStorage.getItem('token')
			}
		},
		computed: {
			router: function () {
				return this.$route.name
			}
		},
		methods: {
			toSecond(path){
				if(path == "cart" || path == 'profile' ){
					var token=sessionStorage.getItem("token") || "";
					if(token == "" || token==undefined || token == null){
						Dialog.alert({
						title: '提示',
						message: '亲，请先登录'
						})
						.then(() => {
							this.$router.push(
								`/login`
							)	// on close
						});
					}else{
						return `/${path}`
					}
				}
				
			},
			isActivty(path) {
				this.router = path
				this.$router.push({
					name: path
				});
			}
		},
	}
</script>