import AdminLayout from '@/layouts/AdminLayout.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{ path: '/', 		name: 'home', 	component: () => import('@/views/HomePage.vue') },
		{ path: '/about', 	name: 'about',	component: () => import('@/views/AboutPage.vue') },

		{ path: '/admin',	component: AdminLayout,	children: [
			{ path: '', 	name: 'admin',	component: () => import('@/views/HomePage.vue') },
		]}
	]
})

export default router