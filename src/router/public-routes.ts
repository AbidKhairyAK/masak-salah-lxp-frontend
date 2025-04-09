import type { RouteRecordRaw } from "vue-router";

const public_routes: RouteRecordRaw[] = [
	{ path: '/',				name: 'public.home',				component: () => import('@/views/public/LandingPage.vue')},
	{ path: '/:pathMatch(.*)*',	name: 'public.not-found',			component: () => import('@/views/error/NotFoundPage.vue')},
	{ path: '/access-denied',	name: 'public.access_denied',		component: () => import('@/views/error/AccessDeniedPage.vue')},
	
]

export default public_routes