<style scoped lang="less">
</style>
<style>
	.event-main{
		position: absolute;
		margin-top: 45px;
    margin-bottom: 20px;
    padding-bottom: 25px;
	}
  .imgs{
    position: relative;
  }
  .imgs img{
    width: 100%;
  }
  .imgs span{
    width: 100%;
    height: 27px;
    display: inline-block;
    position: absolute;
    bottom: 4px;
    text-indent: .7rem;
    background: rgba(0,0,0,.5);
    line-height: 27px;
    color: #fff;
    font-size: 14px;
  }
</style>
<template>
	<div class="event-main">
    <div class="imgs" v-for="img in imageList" :key="img.id">
      <img v-bind:src="img.src" alt="">
      <span>{{img.text}}</span>
    </div>
	</div>
</template>
<script>
  export default {
    data() {
      return {
        imageList: [
          {
            src:'https://img.yzcdn.cn/2.jpg',
            text:'极品生鲜招募代理中',
            id:1},
          {
            src:'https://img.yzcdn.cn/2.jpg',
            text:'极品生鲜店中店加盟',
            id:2},
          {
            src:'https://img.yzcdn.cn/2.jpg',
            text:'极品生鲜招募代理中',
            id:3},
          {
            src:'https://img.yzcdn.cn/2.jpg',
            text:'极品生鲜招募代理中',
            id:4},
          {
            src:'https://img.yzcdn.cn/2.jpg',
            text:'极品生鲜招募代理中',
            id:5}
        ]
      };
    }
  }
</script>
