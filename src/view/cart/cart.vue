<style scoped lang="less">
@import "./cart.less";
</style>
<style lang="less">
.cart-main .van-icon {
  position: absolute;
}
.van-cell-swipe:nth-child(1) {
  margin: -5px 0;
}
.cart-main .van-card {
  background: #fff;
}

.van-cell {
  padding: 10px 5px 10px 10px;
}

.van-cell-swipe {
  margin: 10px 0;
}
.van-card {
  padding: 5px 5px 5px 115px;
  background: #fff;
}

.van-card__title {
  font-size: 14px;
}

.van-card__footer {
  transform: scale(0.8);
  bottom: 0;
}

.cart-card__desc {
  color: #9b9b9b;
  background: #e8e8e8;
  padding: 0 10px;
}

.van-checkbox__label {
  width: 100%;
}

.van-stepper__minus,
.van-stepper__plus {
  width: 20px;
  height: 20px;
  border-radius: 10px;
}

.van-stepper__plus {
  background: #1e1e1e;
  color: #fff;
}

.van-stepper__plus::after,
.van-stepper__plus::before {
  background: #fff;
}

.van-stepper__input {
  height: 21px;
  background: none;
  border: none;
  font-size: 20px;
  color: #868686;
}

.van-cell-swipe__right {
  color: #ffffff;
  font-size: 15px;
  width: 65px;
  text-align: center;
  line-height: 65px;
  background-color: #f44;
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
      <van-cell-swipe :right-width="65" :on-close="onClose(item,index)" v-for="(item,index) in goods" :key="item.carId">
        <div @click=cancel>
          <van-checkbox class="card-goods__item" :name="item.carId">
          </van-checkbox>
        </div>
        <van-cell-group>
          <div class="van-cell-group van-hairline--top-bottom">
            <div class="van-cell van-hairline">
              <span class="van-checkbox__label">
                <div class="van-card">
                  <div class="van-card__thumb">
                    <img :src="item.carProductIcon + '?x-oss-process=image/resize,h_100/crop,w_100,h_100,g_center'" class="van-card__img">
                  </div>
                  <div class="van-card__content">
                    <div class="van-card__row">
                      <div class="van-card__title">{{item.carProductName}}</div>
                    </div>
                    <div class="van-card__row">
                      <div class="van-card__desc cart-card__desc">{{item.carProductDes}}</div>
                    </div>
                    <div class="van-card__row" style="margin-top:2px;">
                      <div class="van-card__desc cart-card__desc" v-if="item.carPtype == 1">礼卡</div>
                      <div class="van-card__desc cart-card__desc" v-else>现货</div>
                    </div>
                    <div class="van-card__row">
                      <div class="cart-card__price">¥{{item.carProductPprice}}</div>
                    </div>
                  </div>
                  <div class="van-card__footer">
                    <van-stepper v-model="item.carProductNum" @plus="increase(item.carId)" @minus="decrease(item.carId)" :min="0" />
                  </div>
                </div>
              </span>
            </div>
          </div>
        </van-cell-group>
        <span slot="right">删除</span>
      </van-cell-swipe>
    </van-checkbox-group>
    <div class="cart-info" v-if="Clearing">
      <div data-v-7f845944="" class="van-cell van-hairline">
        <div data-v-7f845944="" class="van-cell__title cart-info__all" @click="change">
          <van-checkbox v-model="checked" class="cart-info-span">全选</van-checkbox>
        </div>
        <div data-v-7f845944="" class="van-cell__value">
          <span data-v-7f845944="">合计：
            <span class="cart-info__price" v-text=" '￥' + totalPrice"></span>
          </span>
          <van-button size="small" class="cart-info__btn" @click="goDetails">结算</van-button>
        </div>
      </div>
    </div>
    <div class="leary" v-if="learyShow">
      <img src="../../assets/img/leary.png" alt="">
    </div>
  </div>
</template>
<script>
import service from "./service/index.js";
import { Dialog, Toast } from "vant";
import { mapState, mapMutations } from "vuex";
export default {
  mixins: [service],
  data() {
    return {
      learyShow: "",
      value: 3,
      select: true,
      checked: false,
      checkedGoods: [],
      productId: [],
      goods: [],
      Clearing: true,
      orderId: "",
      total: 0,
      price: [],
      staffId: this.getCookie("staffId"),
      token: this.getCookie("token")
    };
  },
  beforeMount() {
    document.title = "购物车";
    this.fetchList(this.staffId, this.token).then(res => {
      if (res.data == "") {
        this.Clearing = false;
        this.learyShow = true;
      } else {
        this.goods = res.data;
      }
    });
  },
  watch: {
    goods(val) {
      if (val == "") {
        this.Clearing = false;
        this.learyShow = true;
      }
    }
  },
  methods: {
    cancel() {
      this.checked = false;
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
    // 购物车加
    increase(carId) {
      this.add(this.staffId, this.token, carId);
    },
    // 购物车减
    async decrease(carId) {
      await this.cut(this.staffId, this.token, carId);
      this.fetchList(this.staffId, this.token).then(res => {
        this.goods = res.data;
      });
    },
    onClose(item, index) {
      return (clickPosition, instance) => {
        switch (clickPosition) {
          case "cell":
          case "outside":
            instance.close();
            break;
          case "right":
            Dialog.confirm({
              message: "确定删除吗？"
            }).then(() => {
              this.goods.splice(index, 1);
              this.emptyProCar({
                staffId: this.staffId,
                token: this.token,
                carProductId: item.carProductId
              });
            });
            break;
        }
      };
    },
    change() {
      if (this.checked) {
        this.total = 0;
        this.goods.forEach(function(goods) {
          this.checkedGoods.push(goods.carId);
          this.total += parseInt(goods.carProductPprice);
        }, this);
      } else {
        this.total = 0;
        this.checkedGoods = [];
      }
    },
    // 结算
    goDetails: async function() {
      let arr = [];
      this.goods.forEach(x =>{
        this.checkedGoods.forEach(y =>{
          if (x.carId === y) {
            arr.push(x)
          }
        });
      });
      let productArr = JSON.stringify([...arr]);
      let carIds = JSON.stringify([...this.checkedGoods]);
      carIds = carIds.split("[")[1].split("]")[0];
      if (this.checkedGoods == "") {
        Toast("请选择订单商品");
      } else if(arr.length > 1){
        arr.forEach((x, i) =>{
          if(i !== 0){
            const { carPtype } = arr[i];
            const { carPtype: preCarPtype } = arr[i - 1];
            if(carPtype !== preCarPtype) {
              Toast('礼券和现货不能同时结算')
            }else{
              sessionStorage.productArr = productArr;
              sessionStorage.carPrice = this.totalPrice;
              this.$router.push(`/cartDetermine`);
            }
          }
        });
      }else {
        sessionStorage.productArr = productArr;
        sessionStorage.carPrice = this.totalPrice;
        this.$router.push(`/cartDetermine`);
      }
    }
  },
  computed: {
    totalPrice() {
      if (this.goods) {
        return this.goods.reduce(
          (total, item) =>
            total +
            (this.checkedGoods.indexOf(item.carId) !== -1
              ? item.carProductPprice * 1 * item.carProductNum
              : 0),
          0
        );
      } else {
        return 0;
      }
    }
  }
};
</script>
