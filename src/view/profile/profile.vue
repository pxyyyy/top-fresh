<style lang="less" scoped>
	@import "./profile.less";
</style>
<style>
	.van-hairline--top-bottom::after {
		border: none;
	}

	.van-icon__info {
		background:#e2bf85 !important;
		font-size: 13px !important;
	}
</style>
<template>
	<div class="profile">
		<div>
			<div class="information">
				<div class="editicon-content" @click="editprofile">
					<span class="editicon"> </span> 编辑资料
				</div>
				<!--头像-->
				<div class="userBanner">
					<img src="@/assets/img/userBanner.jpg" alt="">
				</div>
				<p>
					<img :src="ueseInfo.staffPhotourl ? ueseInfo.staffPhotourl : userPic">
				</p>
				<div class="posi">
					<!--名字及电话-->
					<van-row class="info">
						<h3 v-if="ueseInfo.staffNickname" style="margin-top:10px;">{{ueseInfo.staffNickname}}</h3>
						<span class="telicon"></span>
						<strong class="tel">{{ueseInfo.staffPhone}}</strong>
					</van-row>
					<!--积分和代金券-->
					<van-row class="info info-one">
						<van-row class="info-one-wrap">
							<van-col span="8">
								<h3 v-if="ueseInfo.staffScore" @click="integralShow">{{ueseInfo.staffScore}}</h3>
								<h3 v-else @click="integralShow">0</h3>
								<p @click="integralShow">积分</p>
							</van-col>
							<van-col span="8">
								<h3 @click="goMyLading">{{ this.myLadingNum }}</h3>
								<p @click="goMyLading">我的提货券</p>
							</van-col>
							<van-col span="8">
								<h3 @click="goCoupon">{{ueseInfo.couoponSize}}</h3>
								<p @click="goCoupon">代金券</p>
							</van-col>
						</van-row>


					</van-row>
				</div>
			</div>
			<!--订单详情-->
			<van-row class="user-links">
				<van-col v-for="(item,index) of informations" :key="item.id" style="width:20%;">
					<van-tabbar class="Nofixed" info="5">
						<van-tabbar-item icon="" @click="Orders(index)" :info="item.info == 0 ? '' : item.info ">
							<span>
								{{item.text}}
							</span>
							<template slot="icon" slot-scope="props">
								<img :src="item.Url" />
							</template>
						</van-tabbar-item>
					</van-tabbar>
				</van-col>
			</van-row>
			<!--功能-->
			<van-cell-group>
				<van-cell is-link v-for="(item, index) of FeaturesList" @click="secondLevel(index)" :key="item.id" :value="item.phone">
					<template slot="title">
						<p class="user-group-list">
							<img :src="item.Url">
						</p>
						<p class="van-cell-text">
							{{item.text}}
							<span style="float:right;"></span>
						</p>
					</template>
				</van-cell>
			</van-cell-group>
		</div>
		<!-- 继续选购 -->
		<div class="keepOn">
			<p>
				<span> —— </span> 推荐商品
				<span> —— </span>
			</p>
			<div class="gy">
				<div v-for="(product,index) in products" :key="index" class="list">
					<img :src="product.imgUrl" class="img" @click="toProductInfo(product.id)">
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import service from "../cart/service/index.js";
	import oreder from "./service/order.js";
	import { Dialog } from "vant";
	export default {
		mixins: [service, oreder],
		name: "profile",
		data() {
			return {
				products: "",
				userPic: require("../../assets/img/Avatar.png"),
				cartLictPic: require("../../assets/img/组7@2x.png"),
				goldVolume: "",
				ueseInfo: "",
				myLadingNum: 0,
				informations: [
					{
						id: "001",
						Url: require("../../assets/img/userIcon1.png"),
						text: "待付款",
						phone: "",
						info: ""
					},
					{
						id: "002",
						Url: require("../../assets/img/userIcon2.png"),
						text: "待发货",
						info: ""
					},
					{
						id: "003",
						Url: require("../../assets/img/userIcon3.png"),
						text: "待收货",
						info: ""
					},
					{
						id: "005",
						Url: require("../../assets/img/userIcon5.png"),
						text: "待评价",
						info: ""
					},
					{
						id: "004",
						Url: require("../../assets/img/userIcon4.png"),
						text: "全部订单",
						info: ""
					}
				],
				FeaturesList: [
					// {
					//   id: "001",
					//   Url: require("../../assets/img/FeaturesList1.png"),
					//   text: "我的提货券",
					//   phone: ""
					// },
					{
						id: "002",
						Url: require("../../assets/img/FeaturesList2.png"),
						text: "我的收货地址",
						phone: ""
					},
					{
						id: "003",
						Url: require("../../assets/img/FeaturesList3.png"),
						text: "我的拼团",
						phone: ""
					},
					{
						id: "004",
						Url: require("../../assets/img/FeaturesList4.png"),
						text: "电话客服",
						phone: "400-010-5777"
					},
					{
						id: "005",
						Url: require("../../assets/img/FeaturesList5.png"),
						text: "意见反馈",
						phone: ""
					},
					{
						id: "006",
						Url: require("../../assets/img/FeaturesList6.png"),
						text: "设置",
						phone: ""
					}
				]
			};
		},
		methods: {
			integralShow() {
				Dialog.alert({
					title: "积分说明",
					message: this.ueseInfo.jifenInfo
				}).then(() => {
					// on close
				});
			},
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
			editprofile() {
				this.$router.push("/editprofile");
			},
			goCoupon() {
				this.$router.push("/coupon/0/1");
			},
			Orders(index) {
				this.$store.commit("setCurrentActiveForProfile", index);
				this.$router.push("/Orders");
			},
			secondLevel(index) {
				switch (index) {
					case 0:
						this.$router.push("/cartAddress");
						break;
					case 1:
						this.$router.push("/MyCollage");
						// this.$router.push("/LadingRoll");
						break;
					case 2:
						window.location.href = "tel:400-010-5777";
						break;
					case 3:
						this.$router.push(`/feedback/${this.ueseInfo.staffPhone}`);
						break;
					case 4:
						this.$router.push("/Settings");
						break;
				}
			},
			toProductInfo(productId) {
				this.$router.push(`/product/${productId}`);
			},
			goMyLading() {
				this.$router.push(`/LadingRoll`);
			}
		},
		beforeMount() {
			sessionStorage.link = window.location.href;
			document.title = "个人";
			this.selectProByType().then(res => {
				this.products = res.data;
			});
			// 个人信息{
			this.getStaffInfo({
				staffId: this.getCookie("staffId"),
				token: this.getCookie("token")
			}).then(res => {
				this.ueseInfo = res.data;
				this.informations[0].info = this.ueseInfo.fuNum;
				this.informations[1].info = this.ueseInfo.faNum;
				this.informations[2].info = this.ueseInfo.shouNum;
				this.informations[3].info = this.ueseInfo.pingNum;
				if (this.ueseInfo == "") {
					this.$router.push("/login");
				}
			});
			this.selectMyLadingByStaffId({
				token: this.getCookie("token"),
				staffId: this.getCookie("staffId"),
				state: "2",
				pageNum: this.pageNum,
				pageSize: 7
			}).then(res => {
				this.myLadingNum = res.data.length;
			});
			this.selectMyLadingByStaffId({
				token: this.getCookie("token"),
				staffId: this.getCookie("staffId"),
				state: "3",
				pageNum: this.pageNum,
				pageSize: 7
			}).then(res => {
				this.myLadingNum += res.data.length;
			});
		}
	};

</script>
