<template>
  <div>
    <div class="wrappre">
      <div class="gitcard"></div>
      <div class="gitcard-text">
        <h4>阳澄湖大闸蟹礼盒3对装3对装</h4>
        <h4>雄蟹2.8两 * 3只</h4>
        <h4>雄蟹2.8两 * 3只</h4>
        <h1 class="gitcard-money">￥860</h1>
        <div class="gitcard-bottom">
          <p> <input type="text" placeholder="请输入手机号"> </p>
          <p><input type="text" placeholder="请输入验证码"></p>
          <p>
            <span>59秒后获取</span>
          </p>
          <button>立即提货</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    last() {
      this.$router.go(-1);
    }
  },
  beforeMount() {
    document.title = "领取礼券";
  }
};
</script>

<style scoped lang="less" >
.evetn-bar {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #3d3d3d;
  color: #e1bf8a;
  z-index: 999;
}

.evetn-bar .evetn-icon {
  color: #e1bf8a;
}
.wrappre {
  position: fixed;
  top: 45px;
  left: 0;
  right: 0;
  bottom: 0;
  background: url(../../../assets/img/Giftcard.png) center;
  background-size: cover;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  .gitcard {
    width: 300px;
    height: 100px;
    background: url(../../../assets/img/GiftcardIcon.png) center;
    background-size: cover;
  }
  .gitcard-text {
    text-align: center;
    line-height: 30px;
  }
  .gitcard-money {
    color: #e11c44;
  }
  .gitcard-bottom {
    text-align: center;
    position: absolute;
    width: 200px;
    bottom: 10px;
    left: 50%;
    margin-left: -100px;
    input {
      text-align: center;
      margin: 5px;
    }
    span {
      font-size: 12px;
      color: #fff;
    }
    button {
      width: 150px;
      height: 40px;
      background: yellow;
    }
  }
}
</style>
