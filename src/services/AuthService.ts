import { useAuthStore } from "@/stores/auth-store";
import api from "./_api";

export async function login(email: string, password: string) {
	try {	
		const url = 'api/login'
		const response = await api.post(url, {
			email,
			password
		});
		if(response.data.token){
			const authStore = useAuthStore()
			authStore.login(response.data);
		}
		return response.data
	}catch(error) {
		console.error('Login failed:', error);
    	throw error;
	}

}

export async function logout() {
	try{
		const url = 'api/logout'
		await api.post(url);
	
		const authStore = useAuthStore()
		authStore.logout();
	}catch(error) {
		console.error('Logout failed:', error);
    	throw error;
	}
}

export function getCurrentUser() {
	const userStr = localStorage.getItem('user');
	if (userStr) return JSON.parse(userStr);
	return null;
}

export function getToken() {
	return localStorage.getItem('token');
}
