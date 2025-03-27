import useSWRV from 'swrv';

import type { Post, PostPagination } from '@/types/post';

import api from './_api';
import fetcher from './_fetcher';


export function getPostSingle ( id:number ) 
{
	const url = `/posts/${id}`
	return useSWRV <Post> (url, fetcher)
}

export function getPostList ( page:number = 1, per_page:number = 5 ) 
{
	const url = `/posts?_page=${page}&_per_page=${per_page}&_embed=user`
	return useSWRV <PostPagination> (url, fetcher)
}

export default { getPostSingle, getPostList }