import { createRouter, createWebHistory } from 'vue-router'

import AuthLayout from '@/layouts/AuthLayout.vue'
import AdminLayout from '@/layouts/AdminLayout.vue'
import PublicLayout from '@/layouts/PublicLayout.vue'

import auth_routes from './auth-routes'
import admin_routes from './admin-routes'
import public_routes from './public-routes'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{ path: '/auth',	name: 'auth',	component:	AuthLayout,		children: auth_routes },
		{ path: '/admin',	name: 'admin',	component:	AdminLayout,	children: admin_routes },
		{ path: '/',		name: 'public',	component:	PublicLayout,	children: public_routes },
	]
})

export default router