import { createRouter, createWebHistory } from 'vue-router'

import AuthLayout from '@/layouts/AuthLayout.vue'
import AdminLayout from '@/layouts/AdminLayout.vue'
import PublicLayout from '@/layouts/PublicLayout.vue'

import auth_routes from './auth-routes'
import admin_routes from './admin-routes'
import public_routes from './public-routes'
import { useAuthStore } from '@/stores/auth-store'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{ path: '/auth',	name: 'auth',	component:	AuthLayout,		children: auth_routes },
		{ path: '/admin',	name: 'admin',	component:	AdminLayout,	children: admin_routes, meta: { requires_auth: true } },
		{ path: '/',		name: 'public',	component:	PublicLayout,	children: public_routes },
	]
})


router.beforeEach(async (to, from, next) => {
	const authStore = useAuthStore();

	if (to.meta.guest && authStore.isAuthenticated) {
		next({ name: 'admin.home' });
		return;
	}

	if (to.meta.requires_auth && !authStore.isAuthenticated) {
		next({ name: 'auth.login', query: { redirect: to.fullPath } });
		return;
	}	

	next()
})

export default router