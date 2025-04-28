import axios from 'axios';

const api = axios.create({
	baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3333',
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json'
	},
});

// Axios request interceptor untuk menambahkan Authorization header dengan Bearer token
api.interceptors.request.use(
	(config) => {
	  const token = localStorage.getItem('token'); 
	  if (token) {
		config.headers['Authorization'] = `Bearer ${token}`;
	  }
	  return config;
	},
	(error) => {
	  return Promise.reject(error);
	}
  );

export default api;