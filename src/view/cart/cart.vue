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
			<van-cell-swipe :right-width="65" :on-close="onClose" v-for="item in goods" :key="item.id">
				<van-checkbox class="card-goods__item" :name="item.id">
				</van-checkbox>
				<div class="van-cell-group van-hairline--top-bottom">
					<div  class="van-cell van-hairline">
						<span class="van-checkbox__label">
							<div class="van-card">
								<div class="van-card__thumb">
									<img :src="item.thumb" class="van-card__img">
								</div>
								<div class="van-card__content">
									<div class="van-card__row">
										<div class="van-card__title">{{item.carProductName}}</div>
									</div>
									<div class="van-card__row">
										<div class="van-card__desc cart-card__desc">{{item.carProductDes}}</div>
									</div>
									<div class="van-card__row">
										<div class="cart-card__price">¥{{item.carProductPprice}}</div>
									</div>
								</div>
								<div class="van-card__footer">
									<van-stepper v-model="item.carProductNum" @plus="increase(item.carId)" @minus="decrease(item.carId)"/>
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
				<div data-v-7f845944="" class="van-cell__title cart-info__all"  @click="change">
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
  import service  from './service/index.js'
	import { Dialog } from 'vant';
	export default {
	  mixins:[service],
		data() {
			return {
				value:3,
				select:true,
				checked: false,
				checkedGoods: [],
				goods: []
			}
		},
		beforeMount() {
	    const id  = sessionStorage.getItem('staffId');
      const token  = sessionStorage.getItem('token');
      this.fetchList(id, token).then((res)=>{
        this.goods  = res
      })
		},
		methods: {
	    // 购物车加
      increase (carId) {
        const id  = sessionStorage.getItem('staffId');
        const token  = sessionStorage.getItem('token');
        this.add(id, token,carId)
      },
      // 购物车减
      decrease (carId) {
        const id  = sessionStorage.getItem('staffId');
        const token  = sessionStorage.getItem('token');
        this.cut(id, token,carId)
      },
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
			change(){
				if(this.checked){
					 this.goods.forEach(function (goods) {
						this.checkedGoods.push(goods.id)
					}, this)
				}else{
					this.checkedGoods=[];
				}
			},
      goDetails:function(){
        this.$router.push({
            name: 'cartDetermine',
            params: {
              goods:this.goods
            }
          }
        );
      }
		}
	}
</script>
