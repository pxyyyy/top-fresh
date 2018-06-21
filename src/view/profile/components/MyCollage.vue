<style lang="less" scoped>
	@import "./MyCollage.less";
</style>
<template>
	<div>
		<van-nav-bar title="我的拼团" class="evetn-bar">
			<van-icon name="arrow-left" slot="left" class="evetn-icon" @click="goProFile" />
		</van-nav-bar>
		<div class="MyCollage">
			<div class="MyCollage-item">
				<div class="MyCollage-item-content">
					<div class="MyCollage-img">
						<img src="../../../assets/img/Crab.png" alt="">
					</div>
					<div class="MyCollage-info">
						<p>阳澄湖大闸蟹8对装</p>
						<p class="MyCollage-info-money">￥199.00<span>￥199.00</span></p>
					</div>
				</div>
				<div class="MyCollage-bottom">
					<p class="MyCollage-bottom-state">拼团中</p>
					<p><button>订单详情</button></p>
					<p><button>拼团详情</button></p>
				</div>
			</div>
			<div class="MyCollage-item">
				<div class="MyCollage-item-content">
					<div class="MyCollage-img">
						<img src="../../../assets/img/Crab.png" alt="">
					</div>
					<div class="MyCollage-info">
						<p>阳澄湖大闸蟹8对装</p>
						<p class="MyCollage-info-money">￥199.00<span>￥199.00</span></p>
					</div>
				</div>
				<div class="MyCollage-bottom">
					<p class="MyCollage-bottom-state">拼团成功</p>
					<p><button>订单详情</button></p>
					<p><button @click="goCollageSuccess">拼团详情</button></p>
				</div>
			</div>
			<div class="MyCollage-item">
				<div class="MyCollage-item-content">
					<div class="MyCollage-img">
						<img src="../../../assets/img/Crab.png" alt="">
					</div>
					<div class="MyCollage-info">
						<p>阳澄湖大闸蟹8对装</p>
						<p class="MyCollage-info-money">￥199.00<span>￥199.00</span></p>
					</div>
				</div>
				<div class="MyCollage-bottom">
					<p class="MyCollage-bottom-state">拼团失败</p>
					<p><button>订单详情</button></p>
					<p @click="goCollageFailure"><button>拼团详情</button></p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "MyCollage",
		methods: {
			goProFile() {
				this.$router.push('/ProFile')
			},
			goCollageSuccess() {
				this.$router.push('/CollageSuccess')
			},
			goCollageFailure() {
				this.$router.push('/CollageFailure')
			}
		}
	}
</script>