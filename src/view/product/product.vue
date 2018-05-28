<style lang="less" scoped>
	@import "./product.less";
</style>
<style>
	.details_content img{width: 100%;border: 0;vertical-align: middle}

</style>
<template>
    <!-- 商品详情 页面-->
	<div>
		<!-- 商品主图  有赞轮播组件-->
        <swiper :options="swiperOption">
            <swiper-slide v-for="(image, index) in info[0].images" :key="index">
                <img v-lazy="image" class="img"/>
            </swiper-slide>
        </swiper>
        <!-- 商品详细信息 -->
        <div class="discript">
			<!-- 预售图片 -->
			<img src="" alt="">
			<p class="title">{{info[0].title}}</p>
        	<p class="subtitle">{{info[0].subtitle}}</p>
			<p class="price" v-if="info[0].discount">
				<span>&yen;{{info[0].newprice}}/{{info[0].number}}只</span>
				<span class="old">&yen;{{info[0].oldprice}}</span>
				<span class="discount">{{info[0].discount}}折</span>
			</p>
			<p class="price" v-else>
				<span>&yen;{{info[0].oldprice}}/{{info[0].number}}只</span>
			</p>
		</div>
		<div class="xinxi">
			<p>
				<span>商品类型:</span>
				<span v-for="(type,index) in info[0].productType" :key="index">
					<span class="type">{{type}}</span>
				</span>
			</p>
			<p>
				<span>商品产地:</span>
				<span>{{info[0].origin}}</span>
			</p>
			<p>
				<span>配送方式:</span>
				<span>{{info[0].distribution}}</span>
			</p>
			<p>
				<span>可得积分:</span>
				<span>可获得{{info[0].integral}}积分</span>
			</p>
		</div>
		<div class="details" :style="{marginBottom:marginBottom}">
			<p class="details_title">---- 商品详情 ----</p>
			<div class="details_content" v-html="info[0].content"></div>
		</div>
        <!-- 商品图文详情 -->
		<van-goods-action v-show="show">
			<van-goods-action-mini-btn icon="like-o" text="收藏" />
			<van-goods-action-mini-btn icon="cart" text="购物车" @click="toCart"/>
			<van-goods-action-mini-btn icon="chat" text="客服" />			
			<van-goods-action-big-btn text="加入购物车" @click="openCart"/>
			<van-goods-action-big-btn text="立即购买" primary  @click="openPay('123')"/>
		</van-goods-action>
		<van-actionsheet v-model="show1" title="选择数量">
			<p style="display:fixed">
				<span style="padding-left:1.5rem" >数量</span>
				<van-stepper v-model="number"></van-stepper>
			</p>
			<van-button size="large" style="background-color:#1e1e1e;color:#fff" @click="toCart">加入购物车</van-button>
		</van-actionsheet>
	</div>
</template>
<script>
	import img from "../../assets/img/介绍.png"
import traceabilityVue from '../traceability/traceability.vue';
    export default {
        name:"product_details",
        data(){
            return{
				marginBottom:'50px',
				number:1,
				show:false,
				show1:false,
				type:'',
				swiperOption: {
					loop:true,
					effect:"fade",
				},
                info:[
                {
                    id:"1",//商品ID
                    title:"澄阳湖大闸蟹六对礼盒装AB双套餐可选 2.9-2.9两  12只",//商品标题
                    subtitle:"澄阳湖大闸蟹 AB双套餐",//商品副标题
					oldprice:288.00,//商品原价
					newprice:188.00,
					discount:"7.0",//折扣
					number:12,//商品数量
					type:"0",
                    productType:["大闸蟹·现货"],//商品类型
                    images:[
                        "https://img14.360buyimg.com/popWaterMark/jfs/t17218/268/2177078914/177141/2f4cfd87/5ae920d7N7605a758.jpg",
                        "https://img13.360buyimg.com/popWaterMark/jfs/t18838/254/2140707395/230948/d2c13ef6/5ae920d4N82d84a7f.jpg",
                        "https://img14.360buyimg.com/popWaterMark/jfs/t18088/257/2187333638/209669/c11169a0/5ae920d8N05bc65e2.jpg",
                        "https://img30.360buyimg.com/popWaterMark/jfs/t17695/164/1073632144/214246/a74ac508/5ab8ae48N058b7c22.jpg"
                    ],//商品主图
                    content:'<div class="d-content"><img src="'+img+'"></div>',//详情,//详情
                    distribution:"顺丰空运",//配送方式
                    integral:"200",//购买可获得的积分数
                    origin:"阳澄湖",//商品产地
                }
                    ]
            }
		},
		methods: {
			openPay(num){
				this.$router.push(
					`/cartDetermine?number=`+this.num
				)
			},
			openCart(type){
				this.show1=true;
				this.type=type;
			},
			toCart(){
				this.$router.push(
					`/cart?number=`+this.number
				)
			}
		},
		mounted(){
			let from = this.$route.query.from;
			if(from=='IOS' || from=='Android'){
				this.show=false;
				this.marginBottom='0px'
			}else{
				this.show=true;
			}
		}
    }
</script>
