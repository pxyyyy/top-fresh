<template>
    <div>
        <div class="topbar">
            设置
            <span class="iconfont" @click="last">
                &#xe624;
            </span>
            <p class='release'>
                发布
            </p>
        </div>
        <div class="shareIt">
            <van-row>
                <van-col span="24">
                    <van-rate v-model="value" :size="25" />
                </van-col>
                <van-col span="24" style="padding:20px;">
                    <textarea name="" id="" style="border-radius:10px; padding:15px; background:#f1f1f1;font-size:12px; width:80%;height:200px; color:#8e8e8e;" placeholder="评价一下你购买的商品吧~">
                    </textarea>
                </van-col>
            </van-row>
            <van-row style="padding: 0 50px;">
                <van-col span="6" style="text-align:left;" >
                    <div style="width:60px;height:60px;border:1px dashed #c7c7c7; margin:3px 0;     display: flex;    justify-content: center;    align-items: center;">
                        <van-uploader :after-read="onRead">
                            <van-icon name="photograph" />
                        </van-uploader>
                    </div>
                </van-col>
                 <van-col  span="6" style="text-align:left;" v-for="item in 10">
                    <div class="piclist">
                        <span>x</span>
                    </div>
                </van-col>
            </van-row>
        </div>
    </div>
</template>
<script>
    export
default {
        data() {
            return {
                value:
                1
            }
        },
        methods: {
            last() {
                this.$router.go( - 1);
            },
            onRead(file) {
                console.log(file)
            }
        }
    }
</script>
<style lang="less" scoped>
    .topbar{ width: 100%; text-align: center; background: #3d3d3d; color:
    #E1BF8A; line-height: 46px; position: fixed; z-index: 999; span{ position:
    absolute; top: 0; left: 10px; } p{ position: absolute; top: 0; right: 10px;
    font-size: 14px; } } .shareIt{ width: 100%; position: absolute; top: 45px;
    left: 0; right: 0; bottom: 0; text-align: center; background: #fff; padding-top:
    50px; }
    .piclist{
        width:60px;
        height:60px;
        border:1px dashed #c7c7c7;
        margin:3px 0;  
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        span{
            position: absolute;
            top: -5px;
            right: -5px;
            background: black;
            color: #fff;
            width: 15px;
            height: 15px;
            font-size: 10px;
            text-align: center;
            line-height: 15px;
            border-radius: 8px;
        }
    }
</style>