import Main from '@/view/Main.vue';
import Other from '@/view/Main_product.vue';
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
    ]
}
export const otherRouter = [
    {
		path: '/delivery',
		name: 'deliveryView',
		component: Other,
		children: [
			{ path: ':id', title: 'delivery', name: 'delivery', component: resolve => { require(['@/view/delivery/delivery.vue'], resolve); } },
		]
  },
	{
		path: '/product',
		name: 'productView',
		component: Other,
		children: [
			{ path: 'details', title: 'product', name: 'product', component: resolve => { require(['@/view/product/product.vue'], resolve); } },
		]
	},
	{
		path: '/delivery',
		name: 'deliveryView',
		component: Other,
		children: [
			{ path: '', title: 'delivery', name: 'delivery', component: resolve => { require(['@/view/delivery/delivery.vue'], resolve); } },
		]
	},
  {
    path: '/cartDetermine',
    name: 'cartDetermine',
    component: Other,
    children: [
      { path: '', title: 'cartDetermine', name: 'cartDetermine', component: resolve => { require(['@/view/cart/components/cartDetermine.vue'], resolve); } },
    ]
	},
	{
    path: '/cartOut',
    name: 'cartOut',
    component: Other,
    children: [
      { path: '', title: 'carryOut', name: 'carryOut', component: resolve => { require(['@/view/cart/components/cartOut.vue'], resolve); } },
    ]
  },
  {
    path: '/eventList',
    name: 'eventList',
    component: Other,
    children: [
      { path: '', title: 'eventList', name: 'eventList', component: resolve => { require(['@/view/event/eventList/eventList.vue'], resolve); } },
    ]
	},
	{
    path: '/cartAddress',
    name: 'cartAddress',
    component: Other,
    children: [
      { path: '', title: 'cartAddress', name: 'cartAddress', component: resolve => { require(['@/view/cart/components/cartAddress.vue'], resolve); } },
    ]
  },
  {
    path: '/cartAddressEditing',
    name: 'cartAddressEditing',
    component: Other,
    children: [
      { path: '', title: 'cartAddress', name: 'cartAddress', component: resolve => { require(['@/view/cart/components/cartAddressEditing.vue'], resolve); } },
    ]
  },
  {
    path: '/shareIt',
    name: 'shareIt',
    component: Other,
    children: [
      { path: '', title: 'shareIt', name: 'cartAddress', component: resolve => { require(['@/view/cart/components/shareIt.vue'], resolve); } },
    ]
  },
  {
    path: '/shareItOut',
    name: 'shareItOut',
    component: Other,
    children: [
      { path: '', title: 'shareItOut', name: 'cartAddress', component: resolve => { require(['@/view/cart/components/shareItOut.vue'], resolve); } },
    ]
  },
  {
    path: '/coupon',
    name: 'coupon',
    component: Other,
    children: [
      { path: '', title: 'coupon', name: 'cartAddress', component: resolve => { require(['@/view/profile/components/coupon.vue'], resolve); } },
    ]
  }
]
export const routers = [
  loginRouter,
	appRouter,
	...otherRouter,
]
