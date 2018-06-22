<template>
	<div>
		<van-nav-bar title="1/3" class="evetn-bar">
			<van-icon name="arrow-left" slot="left" class="evetn-icon" @click="goMyCollage" />
		</van-nav-bar>
		<div class="evaluation">
			<div class="wrapper">
				<van-swipe :touchable="true" :show-indicators="false">
					<van-swipe-item v-for="(image, index) in images" :key="index">
						<img style="width:100%;" v-lazy="image" />
					</van-swipe-item>
				</van-swipe>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				swiperOption: {
					loop: true,
					effect: "fade",
				},
				images: ["https://img14.360buyimg.com/popWaterMark/jfs/t17218/268/2177078914/177141/2f4cfd87/5ae920d7N7605a758.jpg", "https://img13.360buyimg.com/popWaterMark/jfs/t18838/254/2140707395/230948/d2c13ef6/5ae920d4N82d84a7f.jpg", "https://img14.360buyimg.com/popWaterMark/jfs/t18088/257/2187333638/209669/c11169a0/5ae920d8N05bc65e2.jpg", "https://img30.360buyimg.com/popWaterMark/jfs/t17695/164/1073632144/214246/a74ac508/5ab8ae48N058b7c22.jpg"],
				//商品主图
			}
		},
		methods: {
			goMyCollage() {
				this.$router.go(-1)
			}
		}
	};
</script>
<style scoped>
	.evetn-bar {
		width: 100%;
		background: #3d3d3d;
		color: #E1BF8A;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 999;
	}
	
	.evetn-bar .evetn-icon {
		color: #E1BF8A;
	}
	
	.evaluation {
		background: #1e1e1e;
		position: fixed;
		top: 45px;
		left: 0;
		right: 0;
		bottom: 0;
		display: flex;
		justify-content: center;
		flex-direction: column;
	}
	
	.wrapper {
		width: 100%;
		height: 0;
		padding-bottom: 100%;
	}
</style>