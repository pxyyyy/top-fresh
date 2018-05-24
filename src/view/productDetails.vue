
<style scoped lang="less">
	@import './Main.less';
</style>
<template>
	<div>
		<router-view v-bind:style="{marginTop:marginTop}"></router-view>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				marginTop:"0px",
			}
		},
		beforeMount() {
		},
		watch: {

		},
		computed: {
			
		},
		methods: {
			
		},
		mounted(){
			let from = this.$route.query.from;
			console.log("from",from)
			if(from=="IOS"){
				this.isClient=true;
				this.marginTop="15px";
			}
		},
		methods: {
		},
		components: {}
	}
</script>
