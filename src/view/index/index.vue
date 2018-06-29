<style scoped lang="less">
@import "./index.less";
</style>
<template>
  <div class="main">
    <swipe :sysbanners="sysbanners"></swipe>
    <index-Event></index-Event>
    <exercise :activities="activities"></exercise>
    <index-Product></index-Product>
    <index-Detail></index-Detail>
  </div>
</template>
<script>
import swipe from "../../components/awesomeSwipe/swipe.vue";
import exercise from "./components/exercise/exercise.vue";
import indexProduct from "./components/index-product/index-product.vue";
import indexDetail from "./components/index-detail/index-detail.vue";
import indexEvent from "./components/index-event/index-event.vue";
import indexService from "./service/index.js";

export default {
  mixins: [indexService],
  data() {
    return {
      sysbanners: "",
      activities: ""
    };
  },
  beforeMount() {
    this.fetchList().then(res => {
      this.sysbanners = res.sysbanners;
      this.activities = res.activities;
      console.log(this.activities);
    });
  },
  methods: {},
  components: {
    swipe,
    exercise,
    indexProduct,
    indexDetail,
    indexEvent
  }
};
</script>