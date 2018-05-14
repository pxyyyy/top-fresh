import Main from '@/view/Main.vue';
import Other from '@/view/Main_product.vue';
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
	}
]
export const routers = [
	appRouter,
	...otherRouter,
]