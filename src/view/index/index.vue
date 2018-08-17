<style scoped lang="less">
	@import "./index.less";
</style>
<template>
	<div class="main">
		<swipe :sysbanners="sysbanners"></swipe>
		<index-Event></index-Event>
		<exercise :activities="activities"></exercise>
		<index-Product></index-Product>
		<index-Detail :content="content"></index-Detail>
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
				activities: "",
				content: ""
			};
		},
		beforeMount() {
			document.title = "首页";
			this.fetchList().then(res => {
				this.sysbanners = res.data.sysbanners;
				this.activities = res.data.activities;
				this.content = res.data.sysContent[0].content;
			});
			var Request = new Object();
			Request = this.GetRequest();
			let code = Request["code"];
			console.log(code);
			if (code) {
				this.getOpenId({
					type: 3,
					code
				}).then(res => {
					this.weChat = res.data.staffWechat;
					this.setCookie("token", res.data.staffToken);
					this.setCookie("staffId", res.data.staffId);
					window.location.href = sessionStorage.link;
				});
			}
		},
		methods: {
			GetRequest() {
				var url = location.search; //获取url中"?"符后的字串
				var theRequest = new Object();
				if (url.indexOf("?") != -1) {
					var str = url.substr(1);
					var strs = str.split("&");
					for (var i = 0; i < strs.length; i++) {
						theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
					}
				}
				return theRequest;
			},
		},
		components: {
			swipe,
			exercise,
			indexProduct,
			indexDetail,
			indexEvent
		}
	};
</script>