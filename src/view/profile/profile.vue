<style lang="less" scoped>
    @import "./profile.less";
</style>
<style>
    .van-hairline--top-bottom::after { border: none; }
</style>
<template>
    <div class="profile">
        <div>
            <div class="information">
                <div class="editicon-content">
                    <span class="editicon">
                    </span>
                    编辑资料
                </div>
                <!--头像-->
                <div class="userBanner">
                    <img src="@/assets/img/userBanner.png" alt="">
                </div>
                <p>
                    <img src="@/assets/img/Avatar.png" alt="">
                </p>
                <div class="posi">
                    <!--名字及电话-->
                    <van-row class="info">
                        <h3>
                            SAMON
                        </h3>
                        <span class="telicon">
                        </span>
                        <strong class="tel">
                            15966320757
                        </strong>
                    </van-row>
                    <!--积分和代金卷-->
                    <van-row class="info info-one">
                        <van-col span="12">
                            <h3>
                                2018
                            </h3>
                            <p>
                                积分
                            </p>
                        </van-col>
                        <van-col span="12">
                            <h3 @click="goCoupon">
                                8
                            </h3>
                            <p @click="goCoupon">
                                代金卷
                            </p>
                        </van-col>
                    </van-row>
                </div>
            </div>
            <!--订单详情-->
            <van-row class="user-links">
                <van-col v-for="(item,index) of informations" :key="item.id" style="width:20%;">
                    <van-tabbar class="Nofixed">
                        <van-tabbar-item icon="" @click="Orders(index)">
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
                <van-cell is-link v-for="(item, index) of FeaturesList" @click="secondLevel(index)"
                :key="item.id">
                    <template slot="title">
                        <p class="user-group-list">
                            <img :src="item.Url">
                        </p>
                        <p class="van-cell-text">
                            {{item.text}}
                        </p>
                    </template>
                </van-cell>
            </van-cell-group>
        </div>
        <!-- 继续选购 -->
        <div class="keepOn">
            <p>
                <span>
                    ——
                </span>
                推荐商品
                <span>
                    ——
                </span>
            </p>
            <div class="img-conent" @click="toProductInfo('123')">
                <img src="../../assets/img/组7@2x.png" alt="">
            </div>
            <div class="img-conent" @click="toProductInfo('123')">
                <img src="../../assets/img/组7@2x.png" alt="">
            </div>
            <div class="img-conent" @click="toProductInfo('123')">
                <img src="../../assets/img/组7@2x.png" alt="">
            </div>
            <div class="img-conent" @click="toProductInfo('123')">
                <img src="../../assets/img/组7@2x.png" alt="">
            </div>
        </div>
    </div>
</template>
<script>
    export
default {
        name:
        "profile",
        data() {
            return {
                informations: [{
                    id: "001",
                    Url: require("../../assets/img/userIcon1.png"),
                    text: "待付款"
                },
                {
                    id: "002",
                    Url: require("../../assets/img/userIcon2.png"),
                    text: "待发货"
                },
                {
                    id: "003",
                    Url: require("../../assets/img/userIcon3.png"),
                    text: "待收货"
                },
                {
                    id: "005",
                    Url: require("../../assets/img/userIcon5.png"),
                    text: "待评价"
                },
                {
                    id: "004",
                    Url: require("../../assets/img/userIcon4.png"),
                    text: "全部订单"
                }],
                FeaturesList: [{
                    id: "001",
                    Url: require("../../assets/img/FeaturesList1.png"),
                    text: "我的提货卷"
                },
                {
                    id: "002",
                    Url: require("../../assets/img/FeaturesList2.png"),
                    text: "收货地址"
                },
                {
                    id: "003",
                    Url: require("../../assets/img/FeaturesList3.png"),
                    text: "拼团订单"
                },
                {
                    id: "004",
                    Url: require("../../assets/img/FeaturesList4.png"),
                    text: "电话客服"
                },
                {
                    id: "005",
                    Url: require("../../assets/img/FeaturesList5.png"),
                    text: "意见反馈"
                },
                {
                    id: "006",
                    Url: require("../../assets/img/FeaturesList6.png"),
                    text: "设置"
                }]
            };
        },
        methods: {
            goCoupon() {
                this.$router.push("/coupon");
            },
            Orders(index) {
                this.$store.commit("setCurrentActiveForProfile", index);
                this.$router.push("/Orders");
            },
            secondLevel(index) {
                switch (index) {
                case 0:
                    this.$router.push("/LadingRoll");
                    break;
                case 1:
                    this.$router.push("/cartAddress");
                    break;
                case 2:
                    this.$router.push("/MyCollage");
                    break;
                case 5:
                    this.$router.push("/Settings");
                    break;
                }
            }
        }
    };
</script>