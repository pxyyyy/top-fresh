<template>
	<div>
		<van-nav-bar title="" left-text="极味生鲜" >
			<van-icon name="search" slot="right" />
		</van-nav-bar>
		<van-swipe :autoplay="3000">
			<van-swipe-item>1</van-swipe-item>
			<van-swipe-item>2</van-swipe-item>
			<van-swipe-item>3</van-swipe-item>
			<van-swipe-item>4</van-swipe-item>
		</van-swipe>
		<van-row>
			<van-col span="6">span: 6</van-col>
			<van-col span="6">span: 6</van-col>
			<van-col span="6">span: 6</van-col>
			<van-col span="6">span: 6</van-col>
		</van-row>
	</div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.van-swipe{
	height: 300px;
	background: #000;
}
</style>
