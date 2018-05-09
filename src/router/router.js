import Main from '@/view/Main.vue';
export const appRouter = {
    path: '/',
	name: 'main',
	redirect: '/index',
	component: Main,
	children: [
		{ path: 'index', title: 'index', name: 'index', component: resolve => { require(['@/view/index/index.vue'], resolve); } },
    ]
}

export const routers = [
	appRouter,
]