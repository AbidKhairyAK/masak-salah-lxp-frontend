import api from "./_api";

export async function login(email: string, password: string) {
	const url = 'api/login'
	const response = await api.post(url, {
		email,
		password
	});
	if(response.data.token){
		localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
	}
	return response.data

}

export function logout() {
	localStorage.removeItem('token');
    localStorage.removeItem('user');
}

export function getCurrentUser() {
	const userStr = localStorage.getItem('user');
	if (userStr) return JSON.parse(userStr);
	return null;
}

export function getToken() {
	return localStorage.getItem('token');
}
