import type { RouteRecordRaw } from "vue-router";

const admin_routes: RouteRecordRaw[] = [
	{ path: '',	name: 'admin.home',	component: () => import('@/views/admin/home/HomePage.vue') },
	
	{ path: 'courses',		name: 'admin.courses.list',	component: () => import('@/views/admin/courses/CourseListPage.vue') },
	{ path: 'courses/form',	name: 'admin.courses.form',	component: () => import('@/views/admin/courses/CourseFormPage.vue') },
]

export default admin_routes