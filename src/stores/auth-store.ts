import { getCurrentUser, getToken } from "@/services/AuthService";
import type { User, UserAuth } from "@/types/user";
import { defineStore } from "pinia";

export const useAuthStore = defineStore('auth', {
	state: () : UserAuth => ({
		user 	: getCurrentUser(),
		token	: getToken(),
	}),

	getters: {
		isAuthenticated: (state) => !!state.token,
		currentUser: (state) => state.user
	},

	actions: {
		login(userData : UserAuth) {
			this.user = userData.user;
			this.token = userData.token;
			localStorage.setItem('user', JSON.stringify(userData.user));
			localStorage.setItem('token', String(userData.token));
		  },
		logout() {
			this.user = null;
			this.token = null;
			localStorage.removeItem('token');
			localStorage.removeItem('user');
		}
	}
})