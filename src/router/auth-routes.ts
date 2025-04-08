import type { RouteRecordRaw } from "vue-router";

const auth_routes: RouteRecordRaw[] = [
	{ path: 'login',	name: 'auth.login',	component: () => import('@/views/admin/auth/LoginPage.vue')},
	{ path: 'register',	name: 'auth.register',	component: () => import('@/views/admin/auth/RegisterPage.vue')},
	{ path: 'forgot-password', name: 'auth.forgot-password', component: () => import('@/views/admin/auth/ForgotPasswordPage.vue')},
]

export default auth_routes