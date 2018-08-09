<style lang="less">
	@import './goodsSpecial.less';
</style>

<template>
	<div>
		<div>
			<img src="../../assets/img/special.png" alt="" class="img">
		</div>
		<div class="gy">
			<div v-for="(product,index) in list" :key="index" class="list" @click="toProductInfo('123')">
				<img src="../../assets/img/product.png" alt="" class="img">
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				list: [{
						title: "阳澄湖大闸蟹4对现货",
						liang: "4.0",
						number: 12,
						price: "299.00"
					},
					{
						title: "阳澄湖大闸蟹8对现货",
						liang: "4.0",
						number: 12,
						price: "1299.00"
					},
					{
						title: "阳澄湖大闸蟹12对现货",
						liang: "4.0",
						number: 12,
						price: "2299.00"
					},
					{
						title: "阳澄湖大闸蟹12对现货",
						liang: "4.0",
						number: 12,
						price: "3299.00"
					}
				]
			}
		},
		methods: {
			toProductInfo(productId) {
				this.$router.push(`/product/${productId}`);
			}
		}
	}
</script>