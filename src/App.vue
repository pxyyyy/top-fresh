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
		/* text-align: center; */
		/* color: #2c3e50; */
		background-color: #EFEFF7;
		overflow: hidden;
	}

	html,
	body {
		overflow: hidden;
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