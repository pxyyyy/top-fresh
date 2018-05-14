<style scoped>
    @import "./pick.less";
</style>
<style>
	#app{background-color: #efeff7;}
</style>
<template>
    <div>
        <div class="top">
            <van-cell-group>
                <van-field v-model="value" placeholder="请输入提货码" />
            </van-cell-group>
            <van-button size="large" @click="goDetails()">确定提货</van-button>
        </div>
        <div class="gy">
            <p>---当前供应---</p>
            <div v-for="(product,index) in list" :key="index" class="list">
                <img src="../../assets/img/product.png" alt="" class="img">
                <div class="title">{{product.title}}</div>
                <div class="gg">{{product.liang}}两 x {{product.number}}只</div>
                <div class="price">&yen;{{product.price}}</div> 
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"pick",
    data(){
        return{
            value:"",
            // 当前供应
            list:[
                {
                    title:"阳澄湖大闸蟹4对装礼品卡",
                    liang:"4.0",
                    number:12,
                    price:"299.00",

                },
                {
                    title:"阳澄湖大闸蟹4对装礼品卡",
                    liang:"4.0",
                    number:12,
                    price:"299.00",

                }
            ]
        }
    },
    methods:{
        goDetails:function(){
            this.$router.push(
				 `/delivery/${this.value}`
			);
        }
    }
}
</script>
