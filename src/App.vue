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
  .van-radio .van-icon-checked{
    color: #f77b17;
    font-size: 15px;
    margin-top: 3px;
  }
  .van-radio .van-icon-check{
    font-size: 15px;
    margin-top: 3px;
    color: black;
  }
	html,
	body {
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
	}

	* {
		margin: 0;
		padding: 0;
		border: 0;
	}
</style>
