<style scoped lang="less">
	@import './swipe.less';
</style>
<style>
	.swiper-pagination-bullet {
		background: #fff;
		border: 1px solid #fff;
	}
</style>
<template>
	<!-- <swiper :options="swiperOption">
		<swiper-slide v-for="item in dataSwipe" :key="item.id" v-bind:style="{backgroundImage: 'url(' + item.src + ')'}" @click.native="toTeacher(item)">
		</swiper-slide>
		<div class="swiper-pagination" slot="pagination"></div>
	</swiper> -->
	<van-swipe :autoplay="3000" :show-indicators="false" class="index-swipe">
		<van-swipe-item v-for="(image, index) in images" :key="index">
			<img v-lazy="image" />
		</van-swipe-item>
	</van-swipe>
</template>

<script>
	// import banner1 from '../../assets/indexBanner/2091017367.png'
	// import banner2 from '../../assets/indexBanner/2088702585.png'
	// import banner3 from '../../assets/indexBanner/1456697552.png'
	// import banner4 from '../../assets/indexBanner/1355392551.png'
	// import banner5 from '../../assets/indexBanner/948805895.png'
	// import banner6 from '../../assets/indexBanner/576433252.png'
	export default {
		data() {
			return {
				images: [
				'https://img.yzcdn.cn/2.jpg',
				// 'https://img.yzcdn.cn/2.jpg',
				],
			}
		},
		methods: {
			toTeacher() {
				console.log(1)
			}
		}
	}
</script>