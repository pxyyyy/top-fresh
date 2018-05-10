<style scoped lang="less">
	@import './index-detail.less';
</style>
<style>
	.video-js {
		width: 100%;
	}
</style>
<template>
	<div>
		<div class="d-video">
			<video-player class="vjs-custom-skin" ref="videoPlayer" :options="playerOptions" :playsinline="true">
			</video-player>
		</div>
		<div class="d-content"><img src="//img30.360buyimg.com/popWaterMark/jfs/t19498/108/2431894716/126463/a3756bf0/5af28a62Ne2cd4e4e.jpg"></div>
		<div class="d-content"><img src="//img30.360buyimg.com/popWaterMark/jfs/t17137/235/2364140079/78130/40e5c8b7/5af28a62N2868c0e2.jpg"></div>
		<div class="d-content"><img src="//img30.360buyimg.com/popWaterMark/jfs/t16870/196/2399540650/149936/cff24676/5af28a62N19171db6.jpg"></div>
		<div class="d-content"><img src="//img30.360buyimg.com/popWaterMark/jfs/t17821/286/2384298784/181236/251627fb/5af28a62N80be9aa8.jpg"></div>
		<div class="d-content"><img src="//img30.360buyimg.com/popWaterMark/jfs/t17425/113/2414234401/193633/ccf04a26/5af28a62Nda996d14.jpg"></div>
		<div class="d-content"><img src="//img30.360buyimg.com/popWaterMark/jfs/t17860/324/2348648109/152334/c11b9425/5af28a62Nceca69bf.jpg"></div>
		<div class="d-content"><img src="//img30.360buyimg.com/popWaterMark/jfs/t18118/226/2369909047/173329/aefcb56/5af28a62Na17bdf82.jpg"></div>
		<div class="d-content"><img src="//img30.360buyimg.com/popWaterMark/jfs/t19258/240/2415643848/157626/cb804f5/5af28a63Nb92a3971.jpg"></div>
		<div class="d-content"><img src="//img30.360buyimg.com/popWaterMark/jfs/t19840/296/397182234/129402/4ac4535/5af28a62N55866bc7.jpg"></div>
		<div class="d-content"><img src="//img30.360buyimg.com/popWaterMark/jfs/t16660/326/2335874077/85794/66709cdb/5af28a63N1440a162.jpg"></div>
		<div class="d-content"><img src="//img30.360buyimg.com/popWaterMark/jfs/t17884/359/2377874370/154051/3d7c0f9c/5af28a63Nc75c459f.jpg"></div>
		<div class="d-content"><img src="//img30.360buyimg.com/popWaterMark/jfs/t17056/50/2478338077/174705/b6a3abbf/5af28a63Nad13e7ed.jpg"></div>
		<div class="d-content"><img src="//img30.360buyimg.com/popWaterMark/jfs/t19066/120/2342415215/74818/dc13365b/5af28a63N33585192.jpg"></div>
		<div class="d-content"><img src="//img30.360buyimg.com/popWaterMark/jfs/t19639/323/2396720717/105680/652e0ad4/5af28a63N53c7ce31.jpg"></div>
		<div class="d-content"><img src="//img30.360buyimg.com/popWaterMark/jfs/t17518/143/2400483973/86472/66216098/5af28a63N2bb07f10.jpg"></div>
		<div class="d-content"><img src="//img30.360buyimg.com/popWaterMark/jfs/t17305/266/2369062493/150127/7997283b/5af28a63N5b61f60a.jpg"></div>
		<div class="d-content"><img src="//img30.360buyimg.com/popWaterMark/jfs/t18196/222/2388600417/95992/6983cb86/5af28a63N5d5a37c4.jpg"></div>
		<div class="d-content"><img src="//img30.360buyimg.com/popWaterMark/jfs/t17665/29/2370348061/106086/cb1210e7/5af28a63N0a6f73e7.jpg"></div><br></div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				// videojs options
				playerOptions: {
					height: '360',
					autoplay: false,
					muted: true,
					language: 'en',
					playbackRates: [0.7, 1.0, 1.5, 2.0],
					sources: [{
						type: "video/mp4",
						src: "https://1251412368.vod2.myqcloud.com/vodtransgzp1251412368/4564972818913582665/v.f30.mp4?dockingId=37924ab2-fe8a-43d8-a1da-687cde4f6c99&amp;storageSource=1",
					}],
					poster: "http://1251412368.vod2.myqcloud.com/vodtransgzp1251412368/4564972818913582665/coverBySnapshot/1515240294_3336859391.100_0.jpg",
				},
			}
		},
		beforeMount() {
		},
		methods: {

		},
	}
</script>