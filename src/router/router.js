import Main from '@/view/Main.vue';
import Other from '@/view/Main_product.vue';
import productDetails from '@/view/productDetails.vue';

export const loginRouter = {
  path: '/login',
  name: 'login',
  meta: {
      title: 'login - 登录'
  },
  component: resolve => { require(['@/view/login/login.vue'], resolve); },

};
export const appRouter = {
  path: '/',
	name: 'main',
	redirect: '/index',
	component: Main,
	children: [
		{ path: 'index', title: 'index', name: 'index', component: resolve => { require(['@/view/index/index.vue'], resolve); } },
		{ path: 'event', title: 'event', name: 'event', component: resolve => { require(['@/view/event/event.vue'], resolve); } },
		{ path: 'cart', title: 'cart', name: 'cart', component: resolve => { require(['@/view/cart/cart.vue'], resolve); } },
		{ path: 'profile', title: 'profile', name: 'profile', component: resolve => { require(['@/view/profile/profile.vue'], resolve); } },
		// { path: 'goodsList', title: 'goodsList', name: 'goodsList', component: resolve => { require(['@/view/goodsList/goodList.vue'], resolve); } },
    ]
}

// 商品详情
export const productRouter = [
  {
	  path: '/product',
	  name: 'product',
	  component:productDetails,
	  children:[
		  { path: ':id', title: 'product', name: 'product', component: resolve => { require(['@/view/product/product.vue'], resolve); } },
	  ]
  },
  {
	  path: '/collageDetail',
	  name: 'collageDetail',
	  component:productDetails,
	  children:[
		  { path: ':id', title: 'collageDetail', name: 'collageDetail', component: resolve => { require(['@/view/collageDetail/collageDetail.vue'], resolve); } },
	  ]
  },
  {
	  path: '/collageShare',
	  name: 'collageShare',
	  component:productDetails,
	  children:[
		  { path: ':id', title: 'collageShare', name: 'collageShare', component: resolve => { require(['@/view/collageShare/collageShare.vue'], resolve); } },
	  ]
  }
];
export const otherRouter = [
  {
		path: '/pick',
		name: 'pickView',
		component: Other,
		children: [
			{ path: '', title: 'pick', name: 'pick', component: resolve => { require(['@/view/pick/pick.vue'], resolve); } },
		]
	},
	{
		path: '/goodsSpecial',
		name: 'goodsSpecialView',
		component: Other,
		children: [
			{ path: '', title: 'goodsSpecial', name: 'goodsSpecial', component: resolve => { require(['@/view/goodsSpecial/goodsSpecial.vue'], resolve); } },
		]
  },
    {
		path: '/delivery',
		name: 'deliveryView',
		component: Other,
		children: [
			{ path: ':id', title: 'delivery', name: 'delivery', component: resolve => { require(['@/view/delivery/delivery.vue'], resolve); } },
		]
  },
	{
		path: '/goodsList',
		name: 'goodsListView',
		component: Other,
		children: [
			{ path: ':id', title: 'goodsList', name: 'goodsList', component: resolve => { require(['@/view/goodsList/goodList.vue'], resolve); } },
		]
	},
  {
    path: '/cartDetermine',
    name: 'cartDetermine',
    component:  resolve => { require(['@/view/cart/components/cartDetermine.vue'], resolve); }
	},
	{
    path: '/cartOut',
    name: 'cartOut',
    component: resolve => { require(['@/view/cart/components/cartOut.vue'], resolve); }
  },
  {
    path: '/eventList',
    name: 'eventList',
    component: resolve => { require(['@/view/event/components/eventList.vue'], resolve); }
	},
	{
    path: '/cartAddress',
    name: 'cartAddress',
    component: resolve => { require(['@/view/cart/components/cartAddress.vue'], resolve); }
  },
  {
    path: '/cartAddressEditing',
    name: 'cartAddressEditing',
    component: resolve => { require(['@/view/cart/components/cartAddressEditing.vue'], resolve); }
  },
  {
    path: '/shareIt',
    name: 'shareIt',
    component: resolve => { require(['@/view/cart/components/shareIt.vue'], resolve); }
  },
  {
    path: '/shareItOut',
    name: 'shareItOut',
    component:  resolve => { require(['@/view/cart/components/shareItOut.vue'], resolve); }
  },
  {
    path: '/coupon',
    name: 'coupon',
    component: resolve => { require(['@/view/profile/components/coupon.vue'], resolve); }
  },
  {
    path: '/Orders',
    name: 'Orders',
    component: resolve => { require(['@/view/profile/components/Orders.vue'], resolve); }
  },
  {
    path: '/LadingRoll',
    name: 'LadingRoll',
    component: resolve => { require(['@/view/profile/components/LadingRoll.vue'], resolve); }
  },
  {
    path: '/LadingRollGive',
    name: 'LadingRollGive',
    component: resolve => { require(['@/view/profile/components/LadingRollGive.vue'], resolve); }
  },
  {
    path: '/OrderDetails',
    name: 'OrderDetails',
    component: resolve => { require(['@/view/profile/components/OrderDetails.vue'], resolve); }
  },
  {
    path: '/MyCollage',
    name: 'MyCollage',
    component: resolve => { require(['@/view/profile/components/MyCollage.vue'], resolve); }
  },
  {
    path: '/CollageSuccess',
    name: 'CollageSuccess',
    component: resolve => { require(['@/view/profile/components/CollageSuccess.vue'], resolve); }
  },
  {
    path: '/CollageFailure',
    name: 'CollageFailure',
    component: resolve => { require(['@/view/profile/components/CollageFailure.vue'], resolve); }
  },
  {
    path: '/teamwork',
    name: 'teamwork',
    component: resolve => { require(['@/view/teamwork/teamwork'], resolve); }
  },
  {
    path: '/teamworkPayment',
    name: 'teamworkPayment',
    component: resolve => { require(['@/view/teamwork/teamworkPayment'], resolve); }
  }
]
export const routers = [
  loginRouter,
	appRouter,
	...productRouter,
	...otherRouter,
]
