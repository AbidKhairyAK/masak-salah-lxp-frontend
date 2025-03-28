import type { RouteRecordRaw } from "vue-router";

const auth_routes: RouteRecordRaw[] = [
	{ path: 'login',	name: 'auth.login',	component: () => import('@/views/admin/auth/LoginPage.vue')},
	
]

export default auth_routes