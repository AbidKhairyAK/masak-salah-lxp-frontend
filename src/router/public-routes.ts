import type { RouteRecordRaw } from "vue-router";

const public_routes: RouteRecordRaw[] = [
	{ path: '/',				name: 'public.home',				component: () => import('@/views/public/LandingPage.vue')},
	{ path: '/:pathMatch(.*)*',	name: 'public.not-found',			component: () => import('@/views/error/NotFoundPage.vue')},
	{ path: '/access-denied',	name: 'public.access_denied',		component: () => import('@/views/error/AccessDeniedPage.vue')},
	{ path: '/courses',			name: 'public.courses',				component: () => import('@/views/public/course-list/CourseListPage.vue')},
	{ path: '/course/detail/:id',name: 'public.course.detail', 		component: () => import('@/views/public/course-list/CourseDetailPage.vue') } 
	
]

export default public_routes