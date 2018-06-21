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
		<swiper-slide v-for="item in sysbanners" :key="item.id" @click.native="toTeacher(item)">
      <img v-lazy="bannerPic" alt="">
      <!--后台调用数据-->
      <!--<img :src="item.imgUrl ? item.imgUrl : '../../assets/img/banner.png'">-->
		</swiper-slide>
	</swiper>
</template>

<script>
	import img from "../../assets/img/banner.png"
	export default {
	  props:['sysbanners'],
		data() {
			return {
				bannerPic: require('../../assets/img/banner.png'),
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
						id: 1, img:img
					},
				],
			}
		},
		methods: {
			toTeacher(item) {
        this.$router.push(item.link)
      },
		}
	}
</script>
