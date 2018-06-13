<style scoped lang="less">
    @import "./Settings.less";
</style>
<template>
    <div>
        <van-nav-bar title="设置" class="evetn-bar">
            <van-icon name="arrow-left" slot="left" class="evetn-icon" @click="last"/>
        </van-nav-bar>
        <van-cell-group style="margin-top:45px;">
            <van-cell is-link v-for="item of FeaturesList" :key="item.id">
                <template slot="title">
                    <p class="van-cell-text">
                        {{item.text}}
                    </p>
                </template>
            </van-cell>
        </van-cell-group>
        <van-row style="background:#fff; padding:10px 0;font-size:14px;text-align:center;color:#f00b32;margin-top:20px;">
            <van-col span="24">
                退出登录
            </van-col>
        </van-row>
    </div>
</template>
<script>
    export
default {
        data() {
            return {
                FeaturesList:
                [{
                    id:
                    "001",
                    text: "绑定账号"
                },
                {
                    id: "002",
                    text: "清处缓存"
                }]
            };
        },
        methods: {
            last() {
                this.$router.go( - 1);
            }
        }
    };
</script>