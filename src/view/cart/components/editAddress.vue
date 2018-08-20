<style lang="less" scoped>
	@import "./cartAddressEditing.less";
</style>
<template>
	<div>
		<div class="cart_min">
			<div>
				<div class="Cell">
					<p>收货人</p>
					<p class="Cell-input">
						<input type="text" v-model="from.adName" :placeholder="checkAdName">
					</p>
				</div>
				<div class="Cell border-top">
					<p>联系电话</p>
					<p class="Cell-input">
						<input type="number" v-model="from.adPhone" :placeholder="checkAdPhone">
					</p>
				</div>
				<div class="Cell border-top">
					<p>所在地区</p>
					<p class="Cell-input" @click="showArea">
						<input type="text" :placeholder="placeholderArea" v-model="from.area" disabled style="background: none">
					</p>
				</div>
				<div class="Cell border-top">
					<p>
						<textarea name="" id="" cols="20" rows="2" :placeholder="checkadAddressInfo" v-model="from.adAddressInfo"></textarea>
					</p>
				</div>
				<div class="editing-foot">
					<p>
						<van-radio-group v-model="radio" class="address-bottom-radio">
							<van-radio name="0" class="radio-text">使用该地址</van-radio>
						</van-radio-group>
					</p>
					<p>
						<van-radio-group v-model="radio" class="address-bottom-radio">
							<van-radio name="1" class="radio-text">默认</van-radio>
						</van-radio-group>
					</p>
					<van-area :area-list="areaList" v-if="Area" class="Area" @cancel="Area=false" @confirm="determine" />
				</div>
			</div>
		</div>
		<div class="Placeholder">
			<div class="address-footer" @click="save">
				保存
			</div>
		</div>
	</div>
</template>

<script>
	// 地址数据
	import address from "../address/index.js";
	import service from "../service/index.js";
	import { Dialog, Toast } from "vant";
	export default {
		name: "cartAddressEditinge",
		mixins: [service],
		data() {
			return {
				username: "",
				radio: "0",
				Area: false,
				areaList: address,
				searchResult: [],
				from: {
					adName: "",
					adPhone: "",
					adAddressInfo: "",
					area: ""
				},
				checkAdName: "",
				checkAdPhone: "",
				checkadAddressInfo: "请输入街道和门牌信息",
				placeholderArea: ""
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
			showArea() {
				this.Area = true;
			},
			returnDetermine() {
				this.$router.go(-1);
			},
			determine(type) {
				this.Area = false;
				this.from.area = "";
				for (let i of type) {
					if (
						i.name == "选择省份" ||
						i.name == "选择城市" ||
						i.name == "选择地区" ||
						this.adAddressInfo == ""
					) {
					} else {
						this.from.area += i.name;
					}
				}
			},
			 save() {
				if (this.from.adName == "") {
					this.checkAdName = "请输入姓名";
				}
				if (this.from.adPhone == "") {
					this.checkAdPhone = "请输入电话";
				}
				if (this.from.area == "") {
					this.placeholderArea = "请选择地区";
				}
				if (this.from.adAddressInfo == "") {
					this.checkadAddressInfo = "请输入街道和门牌信息";
				}
				if (
					this.from.adName != "" &&
					this.from.adPhone != "" &&
					this.from.area != "" &&
					this.from.adAddressInfo != ""
				) {
					const staffId = this.getCookie("staffId");
					const token = this.getCookie("token");
					this.updateStaffAddress({
							adId: this.$route.params.id,
							staffId: staffId,
							token: token,
							adName: this.from.adName,
							adPhone: this.from.adPhone,
							adAddress: this.from.area,
							adAddressInfo: this.from.adAddressInfo,
							adIsdefault: this.radio
					}).then(res => {
						console.log(res)
						Toast('地址修改完成')
						
					})
					// this.$router.go(-1);
				}
			}
		},
		mounted() {
			document.title = "收货地址管理";
			const staffId = this.getCookie("staffId");
			const token = this.getCookie("token");
			var id=this.$route.params.id;
			console.log(this.$route.params.id)
			this.getAddress(staffId, token).then(res => {
				console.log(res)
				for(var i=0;i<res.length;i++){
					if(id == res[i].adId){
						this.from=res[i];
						this.from.area=res[i].adAddress
						console.log(this.from)
					}
				}
			});
		}
	};
</script>