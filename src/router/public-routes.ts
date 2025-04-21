import type { RouteRecordRaw } from "vue-router";

const public_routes: RouteRecordRaw[] = [
	{ path: '/',					name: 'public.home',				component: () => import('@/views/public/LandingPage.vue')},
	{ path: '/:pathMatch(.*)*',		name: 'public.not-found',			component: () => import('@/views/error/NotFoundPage.vue')},
	{ path: '/access-denied',		name: 'public.access_denied',		component: () => import('@/views/error/AccessDeniedPage.vue')},
	{ path: '/courses',				name: 'public.courses',				component: () => import('@/views/public/course-list/CourseListPage.vue')},
	{ path: '/course/:id/detail',	name: 'public.course.detail', 		component: () => import('@/views/public/course-list/CourseDetailPage.vue') },
	{ path: '/course/:id/learn', 	component: () => import('@/views/public/learning/LearningPage.vue'),
		children: [
			{ path: 'lesson/:lesson_id', name: 'public.course.lesson', component: () => import('@/views/public/learning/LessonPage.vue') },
		],
		meta: { requires_auth: true}
	},
	{ path: '/my-learning', 		name: 'public.my_learning',			component: () => import('@/views/public/my-learning/MyLearningPage.vue'),
		meta: { requires_auth: true}
	},
	{ path: '/redeem-access-code/course/:id', name: 'public.redeem_access_code', component: () => import('@/views/public/redeem-access-code/RedeemAccessCodePage.vue'),
		meta: { requires_auth: true}
	},
	{ path: '/profile/:email', name: 'public.profile', component: () => import('@/views/public/profile/ProfilePage.vue')}
	
]

export default public_routes