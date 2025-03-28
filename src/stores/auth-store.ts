import { getCurrentUser, getToken } from "@/services/AuthService";
import type { User, UserAuth } from "@/types/user";
import { defineStore } from "pinia";

export const useAuthStore = defineStore('auth', {
	state: () : UserAuth => ({
		user 	: getCurrentUser(),
		token	: getToken(),
	}),

	getters: {
		isAuthenticated: (state) => !state.token,
		currentUser: (state) => state.user
	},

	actions: {

	}
})