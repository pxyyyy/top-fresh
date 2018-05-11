import Main from '@/view/Main.vue';
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
export const routers = [
	appRouter,
]