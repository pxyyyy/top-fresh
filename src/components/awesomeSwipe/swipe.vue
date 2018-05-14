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
	<swiper :options="swiperOption">
		<swiper-slide v-for="item in dataSwipe" :key="item.id" @click.native="toTeacher(item)">
			<img :src="item.img" alt="">
		</swiper-slide>
	</swiper>
</template>

<script>
	export default {
		data() {
			return {
				swiperOption: {
					loop: true,
					effect: 'fade',
					// autoplay: {
						// delay: 6000,
						// disableOnInteraction: false
					// },
					// pagination: {
					// 	el: '.swiper-pagination',
					// 	clickable: true
					// }
				},
				dataSwipe: [
					{
						id: 1, img: 'https://yanxuan.nosdn.127.net/5b018f61184d52a03bd3d00a74b5c14f.jpg?imageView&thumbnail=750x0&quality=75'
					},
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