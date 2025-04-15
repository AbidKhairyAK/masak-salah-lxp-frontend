import useSWRV from 'swrv';

import type { Learning } from '@/types/learning';
import axios from 'axios';


const api = axios.create({
	baseURL: 'http://localhost:3000',
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json'
	},
});

async function fetcher ( url:string ) {
	return api.get(url).then(res => res.data)
}

export function getLearning ( ) 
{
	console.warn('hai');
	const url = '/learning'
	return useSWRV <Learning> (url, fetcher)
}
export default { getLearning }