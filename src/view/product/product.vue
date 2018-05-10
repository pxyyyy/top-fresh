<style lang="less" scoped>
    @import "./product.less";   
</style>

<template>
    <!-- 商品详情 页面-->
	<div>
		<!-- 商品主图  有赞轮播组件-->
        <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in info.images" :key="index">
            <img v-lazy="image" />
        </van-swipe-item>
        </van-swipe>
        <!-- 商品详细信息 -->
        <p class="title">{{info.title}}</p>
        <p class="subtitle">{{info.subtitle}}</p>
        <!-- 商品图文详情 -->
	</div>
</template>
<script>
    export default {
        name:"product_details",
        data(){
            return{
                info:[
                {
                    id:"1",//商品ID
                    title:"澄阳湖大闸蟹六对礼盒装AB双套餐可选 2.9-2.9两  12只",//商品标题
                    subtitle:"澄阳湖大闸蟹 AB双套餐",//商品副标题
                    price:"288.00",//商品原价
                    number:"12",//商品数量
                    type:"大闸蟹·现货",//商品类型
                    images:[
                        "https://img14.360buyimg.com/popWaterMark/jfs/t17218/268/2177078914/177141/2f4cfd87/5ae920d7N7605a758.jpg",
                        "https://img13.360buyimg.com/popWaterMark/jfs/t18838/254/2140707395/230948/d2c13ef6/5ae920d4N82d84a7f.jpg",
                        "https://img14.360buyimg.com/popWaterMark/jfs/t18088/257/2187333638/209669/c11169a0/5ae920d8N05bc65e2.jpg",
                        "https://img30.360buyimg.com/popWaterMark/jfs/t17695/164/1073632144/214246/a74ac508/5ab8ae48N058b7c22.jpg"
                    ],//商品主图
                    content:'<div id="J-detail-content"><div style="text-align: center;"><img id="1" alt="" class="" src="//img30.360buyimg.com/popWaterMark/jfs/t19498/108/2431894716/126463/a3756bf0/5af28a62Ne2cd4e4e.jpg"></div><div style="text-align: center;"><img id="1" alt="" class="" src="//img30.360buyimg.com/popWaterMark/jfs/t17137/235/2364140079/78130/40e5c8b7/5af28a62N2868c0e2.jpg"></div><div style="text-align: center;"><img id="1" alt="" class="" src="//img30.360buyimg.com/popWaterMark/jfs/t16870/196/2399540650/149936/cff24676/5af28a62N19171db6.jpg"></div><div style="text-align: center;"><img id="1" alt="" class="" src="//img30.360buyimg.com/popWaterMark/jfs/t17821/286/2384298784/181236/251627fb/5af28a62N80be9aa8.jpg"></div><div style="text-align: center;"><img id="1" alt="" class="" src="//img30.360buyimg.com/popWaterMark/jfs/t17425/113/2414234401/193633/ccf04a26/5af28a62Nda996d14.jpg"></div><div style="text-align: center;"><img data-lazyload="//img30.360buyimg.com/popWaterMark/jfs/t17860/324/2348648109/152334/c11b9425/5af28a62Nceca69bf.jpg" id="1" alt="" class="ELazy-loading" src="//misc.360buyimg.com/lib/img/e/blank.gif"></div><div style="text-align: center;"><img data-lazyload="//img30.360buyimg.com/popWaterMark/jfs/t18118/226/2369909047/173329/aefcb56/5af28a62Na17bdf82.jpg" id="1" alt="" class="ELazy-loading" src="//misc.360buyimg.com/lib/img/e/blank.gif"></div><div style="text-align: center;"><img data-lazyload="//img30.360buyimg.com/popWaterMark/jfs/t19258/240/2415643848/157626/cb804f5/5af28a63Nb92a3971.jpg" id="1" alt="" class="ELazy-loading" src="//misc.360buyimg.com/lib/img/e/blank.gif"></div><div style="text-align: center;"><img data-lazyload="//img30.360buyimg.com/popWaterMark/jfs/t19840/296/397182234/129402/4ac4535/5af28a62N55866bc7.jpg" id="1" alt="" class="ELazy-loading" src="//misc.360buyimg.com/lib/img/e/blank.gif"></div><div style="text-align: center;"><img data-lazyload="//img30.360buyimg.com/popWaterMark/jfs/t16660/326/2335874077/85794/66709cdb/5af28a63N1440a162.jpg" id="1" alt="" class="ELazy-loading" src="//misc.360buyimg.com/lib/img/e/blank.gif"></div><div style="text-align: center;"><img data-lazyload="//img30.360buyimg.com/popWaterMark/jfs/t17884/359/2377874370/154051/3d7c0f9c/5af28a63Nc75c459f.jpg" id="1" alt="" class="ELazy-loading" src="//misc.360buyimg.com/lib/img/e/blank.gif"></div><div style="text-align: center;"><img data-lazyload="//img30.360buyimg.com/popWaterMark/jfs/t17056/50/2478338077/174705/b6a3abbf/5af28a63Nad13e7ed.jpg" id="1" alt="" class="ELazy-loading" src="//misc.360buyimg.com/lib/img/e/blank.gif"></div><div style="text-align: center;"><img data-lazyload="//img30.360buyimg.com/popWaterMark/jfs/t19066/120/2342415215/74818/dc13365b/5af28a63N33585192.jpg" id="1" alt="" class="ELazy-loading" src="//misc.360buyimg.com/lib/img/e/blank.gif"></div><div style="text-align: center;"><img data-lazyload="//img30.360buyimg.com/popWaterMark/jfs/t19639/323/2396720717/105680/652e0ad4/5af28a63N53c7ce31.jpg" id="1" alt="" class="ELazy-loading" src="//misc.360buyimg.com/lib/img/e/blank.gif"></div><div style="text-align: center;"><img data-lazyload="//img30.360buyimg.com/popWaterMark/jfs/t17518/143/2400483973/86472/66216098/5af28a63N2bb07f10.jpg" id="1" alt="" class="ELazy-loading" src="//misc.360buyimg.com/lib/img/e/blank.gif"></div><div style="text-align: center;"><img data-lazyload="//img30.360buyimg.com/popWaterMark/jfs/t17305/266/2369062493/150127/7997283b/5af28a63N5b61f60a.jpg" id="1" alt="" class="ELazy-loading" src="//misc.360buyimg.com/lib/img/e/blank.gif"></div><div style="text-align: center;"><img data-lazyload="//img30.360buyimg.com/popWaterMark/jfs/t18196/222/2388600417/95992/6983cb86/5af28a63N5d5a37c4.jpg" id="1" alt="" class="ELazy-loading" src="//misc.360buyimg.com/lib/img/e/blank.gif"></div><div style="text-align: center;"><img data-lazyload="//img30.360buyimg.com/popWaterMark/jfs/t17665/29/2370348061/106086/cb1210e7/5af28a63N0a6f73e7.jpg" id="1" alt="" class="ELazy-loading" src="//misc.360buyimg.com/lib/img/e/blank.gif"></div><br></div>',//详情
                    distribution:"顺丰空运",//配送方式
                    integral:"200",//购买可获得的积分数
                    origin:"阳澄湖",//商品产地
                }
                    ]
            }
        }
    }
</script>