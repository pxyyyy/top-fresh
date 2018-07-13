<style lang="less" scoped>
@import "./LadingRoll.less";
</style>
<style>
.ladingRoll-item-list .van-tabs__nav--card .van-tab.van-tab--active {
  background: none !important;
  color: #e2bf85 !important;
}

.ladingRoll-item-list .van-tabs__nav--card .van-tab.van-tab--active span {
  border-bottom: 2px solid #e2bf85 !important;
}

.ladingRoll-item-list .van-tabs__nav--card {
  border: none !important;
  margin: 0 7%;
  width: 90%;
}

.ladingRoll-item-list .van-tab {
  border: none !important;
}

.ladingRoll-item .van-tabs--card .van-tabs__wrap {
  background: #fff;
  height: 40px;
}

.ladingRoll-item .van-tabs__nav--card .van-tab {
  line-height: 38px;
}

.ladingRoll-item-list .van-tabs__content {
  margin: 0;
}
</style>
<template>
  <div>
    <van-nav-bar title="我的提货卷" class="evetn-bar">
      <van-icon name="arrow-left" slot="left" class="evetn-icon" @click="returnProFile" />
    </van-nav-bar>
    <div class="ladingRoll-item">
      <van-tabs v-model="active" class="ladingRoll-item-list" type="card" @click="getLadingRollType">
        <van-tab v-for="item in ordersList" :title="item.text" class="ladingRoll-item-content" :key="item.id">
          <div class="coupon-content" v-if="item.id == 1">
            <div class="content-group" v-for="info in pickupVolume">
              <div class="content-top">
                <div class="content-top-img">
                  <img :src="info.odProductIcon" alt="">
                </div>
                <div class="content-top-info">
                  <p>{{info.odProductName}}</p>
                  <p class="margin-top content-top-info-date">提货日期</p>
                  <p class="content-top-info-date">
                    <strong>{{info.begindate}}-{{info.enddate}}</strong>
                  </p>
                </div>
              </div>
              <div class="content-bottom">
                <p @click="goLadingRollGive(info.odId)">
                  <i><img src="../../../assets/img/Gift.png" alt=""></i>赠送好友</p>
                <p @click="goprofiledelivery(info)">
                  <i><img src="../../../assets/img/immediately.png" alt=""></i>立即提货</p>
                <p @click="gocartAddress">
                  <i><img src="../../../assets/img/Mailing.png" alt=""></i>邮寄实体卡</p>
              </div>
            </div>
            <van-row>
              <van-col span="24" style="text-align:center; font-size:10px;margin:20px 0;color:#ccc;">
                <div @click='loadMore(2)' v-if="code == '100000'">加载更多 </div>
                <div v-else>没有更多数据~~</div>
              </van-col>
            </van-row>
          </div>
          <!-- <div class="coupon-content" v-if="item.id == 2">
            <div class="content-group">
              <div class="content-top">
                <div class="content-top-img">
                  <img src="../../../assets/img/ladingroll.png" alt="">
                </div>
                <div class="content-top-info">
                  <p>阳澄湖大闸蟹四对礼盒装4.0两x8只 四公四母</p>
                  <p class="margin-top content-top-info-date">领取人手机号：1378367246 暂未领取2018.7.7 24:00自动返还</p>
                </div>
              </div>
            </div>
            <div class="content-group">
              <div class="content-top">
                <div class="content-top-img">
                  <img src="../../../assets/img/ladingroll.png" alt="">
                </div>
                <div class="content-top-info">
                  <p>阳澄湖大闸蟹四对礼盒装4.0两x8只 四公四母</p>
                  <p class="margin-top content-top-info-date">领取人手机号：1378367246 暂未领取2018.7.7 24:00自动返还</p>
                </div>
              </div>
            </div>
          </div> -->
          <div class="coupon-content" v-if="item.id == 3">
            <div class="content-group" v-for="info in pickupVolume">
              <div class="content-top" style="border-bottom: 1px solid #d3d3d3;">
                <div class="content-top-img">
                  <img src="../../../assets/img/ladingroll.png" alt="">
                </div>
                <div class="content-top-info">
                  <p>{{info.odProductName}}</p>
                  <!-- <p class="margin-top content-top-info-date color-ccc">领取人手机号：12384536732</p> -->
                  <div class="content-top-info-date color-ccc">
                    <p>使用日期</p>
                    <p>{{info.usetime}}</p>
                  </div>
                </div>
              </div>
              <div style="margin-top:5px;">
                <van-button disabled size="mini">已用</van-button>
              </div>
            </div>
            <van-row>
              <van-col span="24" style="text-align:center; font-size:10px;margin:20px 0;color:#ccc;">
                <div @click='loadMore(3)' v-if="code == '100000'">加载更多 </div>
                <div v-else>没有更多数据~~</div>
              </van-col>
            </van-row>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import service from "../service/order.js";
export default {
  name: "LadingRoll",
  mixins: [service],
  data() {
    return {
      active: 0,
      ordersList: [{ text: "未用", id: 1 }, { text: "已用", id: 3 }],
      pickupVolume: "",
      pageNum: 1,
      code: "",
      staffId: this.getCookie("staffId"),
      token: this.getCookie("token")
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
    // 立即提货
    goprofiledelivery(info) {
      this.$router.push(`/profiledelivery/${info.odId}/${info.odProductId}`);
    },
    loadMore(index) {
      this.pageNum++;
      this.selectMyLadingByStaffId({
        token: this.token,
        staffId: this.staffId,
        state: index,
        pageNum: this.pageNum,
        pageSize: 7
      }).then(res => {
        this.code = res.code;
        this.pickupVolume = this.pickupVolume.concat(res.data);
      });
    },
    getLadingRollType(index, text) {
      if (text == "未用") {
        this.pickupVolume = "";
        this.selectMyLadingByStaffId({
          token: this.token,
          staffId: this.staffId,
          state: 2,
          pageNum: 1,
          pageSize: 7
        }).then(res => {
          this.code = res.code;
          this.pickupVolume = res.data;
        });
      } else {
        this.pickupVolume = "";
        this.selectMyLadingByStaffId({
          staffId: this.staffId,
          token: this.token,
          state: 3,
          pageNum: 1,
          pageSize: 7
        }).then(res => {
          this.code = res.code;
          this.pickupVolume = res.data;
        });
      }
    },
    returnProFile() {
      this.$router.push("/profile");
    },
    goLadingRollGive(id) {
      this.$router.push(`/LadingRollGive/${id}`);
    },
    gocartAddress() {
      this.$router.push({
        name: "cartAddress"
      });
    }
  },
  beforeMount() {
    this.selectMyLadingByStaffId({
      token: this.token,
      staffId: this.staffId,
      state: 2,
      pageNum: this.pageNum,
      pageSize: 7
    }).then(res => {
      this.code = res.code;
      this.pickupVolume = res.data;
    });
  }
};
</script>
