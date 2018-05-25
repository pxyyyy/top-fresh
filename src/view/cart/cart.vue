<style scoped lang="less">
	@import './cart.less';
</style>
<style>
  .cart-main .van-icon{
    position: absolute;
  }
  .cart-main .van-card{
    background: #fff;
  }
	.van-cell {
		padding: 10px 5px 10px 10px;
	}

	.van-cell-swipe {
		margin: 5px 0;
	}

	.van-card {
		padding: 5px 5px 5px 115px;
    background: #fff;
	}

	.van-card__title {
		font-size: 14px;
	}

	.van-card__footer {
		transform: scale(.8);
		bottom: 0;
	}

	.cart-card__desc {
		color: #9B9B9B;
		background: #E8E8E8;
		padding: 0 10px;
	}

	.van-checkbox__label {
		width: 100%;
	}

	.van-stepper__minus,
	.van-stepper__plus {
		height: 25px;
	}

	.van-stepper__input {
		height: 21px;
		width: 45px;
	}

	.van-cell-swipe__right {
		color: #FFFFFF;
		font-size: 15px;
		width: 65px;
		text-align: center;
		line-height: 65px;
		background-color: #F44;
		vertical-align: middle;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.van-checkbox__icon {
		top: 50%;
		left: 10px;
		z-index: 1;
		position: absolute;
		margin-top: -10px;
	}

	.cart-card__price {
		color: #f44;
		position: absolute;
		bottom: 2px;
		font-size: 14px;
		font-weight: bold;
	}

	.cart-info__price {
		color: #f44;
		font-size: 14px;
		font-weight: bold;
	}
</style>
<template>
	<div class="cart-main">
		<van-checkbox-group class="card-goods" v-model="checkedGoods">
			<van-cell-swipe :right-width="65" :on-close="onClose" v-for="item in goods" :key="item">
				<van-checkbox class="card-goods__item" :name="item.id">
				</van-checkbox>
				<div data-v-7f845944="" class="van-cell-group van-hairline--top-bottom">
					<div data-v-7f845944="" class="van-cell van-hairline">
						<span class="van-checkbox__label">
							<div data-v-7f845944="" class="van-card">
								<div class="van-card__thumb">
									<img :src="item.thumb" class="van-card__img">
								</div>
								<div class="van-card__content">
									<div class="van-card__row">
										<div class="van-card__title">{{item.title}}</div>
									</div>
									<div class="van-card__row">
										<div class="van-card__desc cart-card__desc">{{item.desc}}</div>
									</div>
									<div class="van-card__row">
										<div class="cart-card__price">¥{{item.price}}</div>
									</div>
								</div>
								<div class="van-card__footer">
									<van-stepper v-model="value" />
								</div>
							</div>
						</span>
					</div>
				</div>
				<span slot="right">删除</span>
			</van-cell-swipe>
		</van-checkbox-group>
		<div class="cart-info">
			<div data-v-7f845944="" class="van-cell van-hairline">
				<div data-v-7f845944="" class="van-cell__title cart-info__all">
					<van-checkbox v-model="checked" class="cart-info-span">全选</van-checkbox>
				</div>
				<div data-v-7f845944="" class="van-cell__value">
					<span data-v-7f845944="">合计：
						<span class="cart-info__price"> ¥3488 </span>
					</span>
					<van-button size="small" class="cart-info__btn" @click="goDetails()">结算</van-button>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import { Dialog } from 'vant';
	export default {
		data() {
			return {
				value:1,
				checked: false,
				checkedGoods: [],
				goods: [{
					id: '1',
					title: '六月黄大闸蟹 2.0两8只 生鲜鲜活螃蟹',
					desc: '尝鲜六月黄',
					price: 208,
					num: 1,
					thumb: '//img12.360buyimg.com/n1/jfs/t19426/264/1610686010/451016/9b083eb8/5ad0334bNde6fb162.jpg'
				}, {
					id: '2',
					title: '阳澄湖大闸蟹礼券提货券礼卡 1688型 公4.5两母3.5两4对',
					desc: '阳澄湖大闸蟹行业协会副会长单位',
					price: 690,
					num: 1,
					thumb: '//img10.360buyimg.com/n1/jfs/t17008/286/1590320824/368612/774836ce/5ad03caaN0df5b894.jpg'
				},
				{
					id: '3',
					title: '阳澄湖大闸蟹 生鲜鲜活螃蟹 全公4.0两3.0母 8只',
					desc: '下单发现货',
					price: 2680,
					num: 1,
					thumb: '//img10.360buyimg.com/n1/jfs/t19381/96/1600937983/477283/c6ed7e78/5acf421cNf054a904.jpg'
				}]
			}
		},
		beforeMount() {
		},
		methods: {
			onClose(clickPosition, instance) {
				switch (clickPosition) {
					case 'cell':
					case 'outside':
						instance.close();
						break;
					case 'right':
						Dialog.confirm({
							message: '确定删除吗？'
						}).then(() => {
							instance.close();
						});
						break;
				}
			},
      goDetails:function(){
        this.$router.push(
          `/cartDetermine`
        );
      }
		}
	}
</script>
