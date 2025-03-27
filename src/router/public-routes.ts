import type { RouteRecordRaw } from "vue-router";

const public_routes: RouteRecordRaw[] = [
	{ path: '/',	name: 'public.redirect',	redirect: { name: 'admin.home' }},
]

export default public_routes