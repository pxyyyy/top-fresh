<style lang="less" scoped>
	@import "./delivery.less";
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
				<span>提货周期:</span>
				<span>{{info[0].integral}}</span>
			</p>
		</div>
		<div class="details">
			<p class="details_title">---- 商品详情 ----</p>
			<div class="details_content" v-html="info[0].content"></div>
		</div>
         <van-button bottom-action @click="goAddress()">马上提取现货 </van-button>
        <!-- 商品图文详情 -->
	</div>
</template>
<script>
    export default {
        name:"product_details",
        data(){
            return{
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
                    content:'<div class="d-content"><img src="//img30.360buyimg.com/popWaterMark/jfs/t19498/108/2431894716/126463/a3756bf0/5af28a62Ne2cd4e4e.jpg"></div><div class="d-content"><img src="//img30.360buyimg.com/popWaterMark/jfs/t17137/235/2364140079/78130/40e5c8b7/5af28a62N2868c0e2.jpg"></div><div class="d-content"><img src="//img30.360buyimg.com/popWaterMark/jfs/t16870/196/2399540650/149936/cff24676/5af28a62N19171db6.jpg"></div><div class="d-content"><img src="//img30.360buyimg.com/popWaterMark/jfs/t17821/286/2384298784/181236/251627fb/5af28a62N80be9aa8.jpg"></div><div class="d-content"><img src="//img30.360buyimg.com/popWaterMark/jfs/t17425/113/2414234401/193633/ccf04a26/5af28a62Nda996d14.jpg"></div><div class="d-content"><img src="//img30.360buyimg.com/popWaterMark/jfs/t17860/324/2348648109/152334/c11b9425/5af28a62Nceca69bf.jpg"></div><div class="d-content"><img src="//img30.360buyimg.com/popWaterMark/jfs/t18118/226/2369909047/173329/aefcb56/5af28a62Na17bdf82.jpg"></div><div class="d-content"><img src="//img30.360buyimg.com/popWaterMark/jfs/t19258/240/2415643848/157626/cb804f5/5af28a63Nb92a3971.jpg"></div><div class="d-content"><img src="//img30.360buyimg.com/popWaterMark/jfs/t19840/296/397182234/129402/4ac4535/5af28a62N55866bc7.jpg"></div><div class="d-content"><img src="//img30.360buyimg.com/popWaterMark/jfs/t16660/326/2335874077/85794/66709cdb/5af28a63N1440a162.jpg"></div><div class="d-content"><img src="//img30.360buyimg.com/popWaterMark/jfs/t17884/359/2377874370/154051/3d7c0f9c/5af28a63Nc75c459f.jpg"></div><div class="d-content"><img src="//img30.360buyimg.com/popWaterMark/jfs/t17056/50/2478338077/174705/b6a3abbf/5af28a63Nad13e7ed.jpg"></div><div class="d-content"><img src="//img30.360buyimg.com/popWaterMark/jfs/t19066/120/2342415215/74818/dc13365b/5af28a63N33585192.jpg"></div><div class="d-content"><img src="//img30.360buyimg.com/popWaterMark/jfs/t19639/323/2396720717/105680/652e0ad4/5af28a63N53c7ce31.jpg"></div><div class="d-content"><img src="//img30.360buyimg.com/popWaterMark/jfs/t17518/143/2400483973/86472/66216098/5af28a63N2bb07f10.jpg"></div><div class="d-content"><img src="//img30.360buyimg.com/popWaterMark/jfs/t17305/266/2369062493/150127/7997283b/5af28a63N5b61f60a.jpg"></div><div class="d-content"><img src="//img30.360buyimg.com/popWaterMark/jfs/t18196/222/2388600417/95992/6983cb86/5af28a63N5d5a37c4.jpg"></div><div class="d-content"><img src="//img30.360buyimg.com/popWaterMark/jfs/t17665/29/2370348061/106086/cb1210e7/5af28a63N0a6f73e7.jpg"></div><br></div>',//详情
                    distribution:"顺丰空运",//配送方式
                    integral:"2018.10.09-2018.12.09",//购买可获得的积分数
                    origin:"阳澄湖",//商品产地
                }
                    ]
            }
		},
		methods: {
			goAddress(){
				var code=this.$route.params.id;
				console.log(code)
				this.$bridge.callHandler('goPickupInfoVC',{'code':code},(data) => {
					console.log("success")
				})
			}
		}
    }
</script>
