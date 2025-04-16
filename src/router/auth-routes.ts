import type { RouteRecordRaw } from "vue-router";

const auth_routes: RouteRecordRaw[] = [
	{ path: '',	 		name: 'auth.empty', redirect: { name: 'auth.login' } },
	{ path: 'login',	name: 'auth.login',	component: () => import('@/views/auth/LoginPage.vue')},
	{ path: 'register',	name: 'auth.register',	component: () => import('@/views/auth/RegisterPage.vue')},
	{ path: 'forgot-password', name: 'auth.forgot-password', component: () => import('@/views/auth/ForgotPasswordPage.vue')},
]

export default auth_routes