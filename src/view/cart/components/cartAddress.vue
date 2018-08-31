<style scoped lang="less" scoped>
	@import "./cartAddress.less";
</style>
<style>
	.van-radio .van-icon-checked {
		color: #e2bf84;
		font-size: 15px;
		margin-top: 3px;
	}

	.van-radio .van-icon {
		font-size: 15px;
		margin-top: 3px;
	}
</style>
<template>
	<div>
		<!--地址列表-->
		<div class="address-group">
			<div class="address" v-for="item in selectStaffAddressList" :key="item.staffId">
				<div class="address-top">
					<div class="address-top-left" @click="callback(item)">
						收货人
						<span>{{item.adName}}</span>
					</div>
					<div class="address-top-right" @click="callback(item)">
						{{item.adPhone}}
					</div>
				</div>
				<div class="address-content" @click="callback(item)">
					收货地址:
					<span>{{item.adAddress}}，{{item.adAddressInfo}}</span>
				</div>
				<div class="address-bottom">
					<van-radio-group v-model="radio" class="address-bottom-radio">
						<van-radio :name="item.adIsdefault == 1 ? item.adIsdefault : item.adId" class="radio-text" @click="Switching(item.adId)">默认地址</van-radio>
					</van-radio-group>
					<div>
						<p @click="editAddress(item.adId)">
							<van-icon name="records" class="address-bottom-icon" />编辑
						</p>
					</div>
					<div>
						<p @click="delAddress(item.adId)">
							<van-icon name="delete" class="address-bottom-icon" />删除
						</p>
					</div>
				</div>
			</div>
		</div>
		<div class="Placeholder">
			<div class="address-footer" @click="goEditing()">
				添加新的地址
			</div>
		</div>
	</div>
</template>
<script>
	import { Dialog } from 'vant';
	import service from "../service/index.js";
	export default {
		mixins: [service],
		data() {
			return {
				radio: "1",
				selectStaffAddressList: [],
				staffId: this.getCookie("staffId"),
				token: this.getCookie("token"),
				type: 1
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
			editAddress(id) {
				console.log(id)
				this.$router.push({
					name: "editAddress",
					params: {
						id
					}
				});
			},
      callback(item) {
			  let arr = [];
			  arr.push(item);
			  const result = JSON.stringify(arr);
			  sessionStorage.adress = result;
        this.$router.go(-1);
      },
			async Switching(adId) {
				await this.updateDefaultAddress({
					staffId: this.staffId,
					token: this.token,
					adId
				})
			},
			async returnDetermine(adId) {
				this.$router.go(-1);
			},
			goEditing: function () {
				if (this.selectStaffAddressList.length == 0) {
					this.type = 0;
				}
				this.$router.push(`/cartAddressEditing/${this.type}`);
			},
			delAddress(adId) {
				Dialog.confirm({
					title: '是否确认删除此地址',
				}).then(() => {
					this.deleteAddress({
						staffId: this.staffId,
						token: this.token,
						adId
					}).then(res => {
						this.selectStaffAddressList = res;
					});
				}).catch(() => {
					// on cancel
				});
			}
		},
		beforeMount() {
			sessionStorage.setItem('isAddressTop', true);
			this.getAddress(this.staffId, this.token).then(res => {
				this.selectStaffAddressList = res;
			});
			document.title = "收货地址";
		},
		beforeDestroy() {
			setTimeout(() => {
				sessionStorage.removeItem('isAddressTop')
			}, 1000)
		}
	};
</script>
