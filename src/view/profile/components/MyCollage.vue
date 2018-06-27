<style lang="less" scoped>
@import "./MyCollage.less";
</style>
<template>
	<div>
		<van-nav-bar title="我的拼团" class="evetn-bar">
			<van-icon name="arrow-left" slot="left" class="evetn-icon" @click="goProFile" />
		</van-nav-bar>
		<div class="MyCollage">
			<div class="MyCollage-item" v-for="item in MyCollage" :key="item.id">
				<div class="MyCollage-item-content">
					<div class="MyCollage-img">
						<img src="../../../assets/img/Crab.png" alt="">
					</div>
					<div class="MyCollage-info">
						<p>{{item.title}}</p>
						<p class="MyCollage-info-money">￥{{item.priceTogether}}
							<span>￥199.00</span>
						</p>
					</div>
				</div>
				<div class="MyCollage-bottom">
					<p class="MyCollage-bottom-state" v-if="item.status == 1">拼团中</p>
					<p class="MyCollage-bottom-state" v-else-if="item.status == 2">拼团成功</p>
					<p class="MyCollage-bottom-state" v-else>拼团失败</p>
					<p>
						<button>订单详情</button>
					</p>
					<p>
						<button>拼团详情</button>
					</p>
				</div>
			</div>
			<div class="MyCollage-item">
				<div class="MyCollage-item-content">
					<div class="MyCollage-img">
						<img src="../../../assets/img/Crab.png" alt="">
					</div>
					<div class="MyCollage-info">
						<p>阳澄湖大闸蟹8对装</p>
						<p class="MyCollage-info-money">￥199.00
							<span>￥199.00</span>
						</p>
					</div>
				</div>
				<div class="MyCollage-bottom">
					<p class="MyCollage-bottom-state">拼团中</p>
					<p>
						<button>订单详情</button>
					</p>
					<p>
						<button>拼团详情</button>
					</p>
				</div>
			</div>
			<div class="MyCollage-item">
				<div class="MyCollage-item-content">
					<div class="MyCollage-img">
						<img src="../../../assets/img/Crab.png" alt="">
					</div>
					<div class="MyCollage-info">
						<p>阳澄湖大闸蟹8对装</p>
						<p class="MyCollage-info-money">￥199.00
							<span>￥199.00</span>
						</p>
					</div>
				</div>
				<div class="MyCollage-bottom">
					<p class="MyCollage-bottom-state">拼团成功</p>
					<p>
						<button>订单详情</button>
					</p>
					<p>
						<button @click="goCollageSuccess">拼团详情</button>
					</p>
				</div>
			</div>
			<div class="MyCollage-item">
				<div class="MyCollage-item-content">
					<div class="MyCollage-img">
						<img src="../../../assets/img/Crab.png" alt="">
					</div>
					<div class="MyCollage-info">
						<p>阳澄湖大闸蟹8对装</p>
						<p class="MyCollage-info-money">￥199.00
							<span>￥199.00</span>
						</p>
					</div>
				</div>
				<div class="MyCollage-bottom">
					<p class="MyCollage-bottom-state">拼团失败</p>
					<p>
						<button>订单详情</button>
					</p>
					<p @click="goCollageFailure">
						<button>拼团详情</button>
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import service from "../service/order.js";
export default {
  name: "MyCollage",
  mixins: [service],
  data() {
    return {
      MyCollage: ""
    };
  },
  methods: {
    // 获取cook
    getCookie(name) {
      var arr,
        reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
      if ((arr = document.cookie.match(reg))) {
        return unescape(arr[2]);
      } else {
        return null;
      }
    },
    goProFile() {
      this.$router.push("/ProFile");
    },
    goCollageSuccess() {
      this.$router.push("/CollageSuccess");
    },
    goCollageFailure() {
      this.$router.push("/CollageFailure");
    }
  },
  beforeMount() {
    var staffId = this.getCookie("staffId");
    var token = this.getCookie("token");
    this.getTogetherOrderInfo({
      staffId: 20,
      token: "5b28f6ede1c941d68a76fbd6716e0a47"
    }).then(res => {
      this.MyCollage = res;
    });
  }
};
</script>