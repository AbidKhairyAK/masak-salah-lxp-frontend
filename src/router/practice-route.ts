import type { RouteRecordRaw } from "vue-router";

const practice_routes: RouteRecordRaw[] = [
	{ path: 'single-choice/:practiceId',	name: 'practice.single_choice',	component: () => import('@/views/public/practice/PracticeExamPage.vue')},
]

export default practice_routes