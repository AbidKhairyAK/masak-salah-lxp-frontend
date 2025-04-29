import { useAuthStore } from "@/stores/auth-store";
import api from "./_api";

export async function login(email: string, password: string) {
	try {	
		const url = 'auth/login'
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
    	throw error;
	}

}

export async function logout() {
	try{
		const url = 'auth/logout'
		const authStore = useAuthStore()			
		authStore.logout();
		const response = await api.post(url);
		return response.data
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
	const tokenStr = localStorage.getItem('token');
	if (tokenStr) return JSON.parse(tokenStr);
	return null;
}

export async function register(name: string, email: string, password: string, passwordConfirmation: string) {
    try {
        const url = 'auth/register';
        const response = await api.post(url, {
            name,
            email,
            password,
            password_confirmation: passwordConfirmation
        });
		if(response.data.token){
			const authStore = useAuthStore()
			authStore.login(response.data);
		}
        return response.data;
    } catch (error) {
        throw error;
    }
}

export async function sendPasswordResetEmail(email: string) {
    try {
        const url = 'auth/forgot-password';
        const response = await api.post(url, { email });
        return response.data;
    } catch (error) {
        console.error('Password reset request failed:', error);
        throw error;
    }
}
