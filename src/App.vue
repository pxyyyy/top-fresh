<template>
	<div id="app">
		<router-view/>
	</div>
</template>

<script>
	export default {
		name: 'App'
	}
</script>

<style>
	#app {
		font-family: '微软雅黑', 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		-webkit-overflow-scrolling:touch;
		color: #3d3d3d;
		background-color: #EFEFF7;
	}
	html,
	body {
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
    background-color: #EFEFF7;
  }

	* {
		margin: 0;
		padding: 0;
		border: 0;
	}
	.van-checkbox--checked {
		background:#e1bf82 !important; 
		border: none !important;
	}
	.van-radio .van-icon-checked{
		color: #f77b17 !important;
	}
	.van-radio .van-icon{
		font-size: 15px !important;
	}
</style>
