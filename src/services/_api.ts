import axios from 'axios';

const api = axios.create({
	baseURL: import.meta.env.VITE_API_URL || 'https://jsonplaceholder.typicode.com',
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json'
	}
});

export default api;