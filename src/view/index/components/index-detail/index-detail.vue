<style scoped lang="less">
@import "./index-detail.less";
</style>
<style>
.video-js {
  width: 100%;
}
.wrapper img {
  width: 100%;
}
.wrapper {
  margin-bottom: 45px;
  padding: 0 10px;
  background: #fff;
}
</style>
<template>
  <div>
    <div class="e-title">
      <p>关于我们</p>
      <span>给您更好的信赖</span>
    </div>
    <div class="wrapper" v-html="content">
    </div>
    <!-- <div class="d-content"><img v-lazy="IntroducePic"></div>-->
    <!-- <div class="d-video">
			<video-player class="vjs-custom-skin" ref="videoPlayer" :options="playerOptions" :playsinline="true">
			</video-player>
		</div> -->
    <!-- <div class="d-content"><img v-lazy="IntroducePic"></div> -->

  </div>
</template>
<script>
export default {
  props: ["content"],
  data() {
    return {
      IntroducePic: require("../../../../assets/img/介绍.png"),
      // videojs options
      playerOptions: {
        height: "360",
        autoplay: false,
        muted: true,
        language: "en",
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [
          {
            type: "video/mp4",
            src:
              "https://1251412368.vod2.myqcloud.com/vodtransgzp1251412368/4564972818913582665/v.f30.mp4?dockingId=37924ab2-fe8a-43d8-a1da-687cde4f6c99&amp;storageSource=1"
          }
        ],
        poster:
          "http://1251412368.vod2.myqcloud.com/vodtransgzp1251412368/4564972818913582665/coverBySnapshot/1515240294_3336859391.100_0.jpg"
      }
    };
  },
  beforeMount() {},
  methods: {}
};
</script>