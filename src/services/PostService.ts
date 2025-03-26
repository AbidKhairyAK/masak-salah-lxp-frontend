import useSWRV from 'swrv';

import type { Post, PostPagination } from '@/types/post';

import api from './_api';
import fetcher from './_fetcher';


export function getPostSingle ( id:number ) {
	return useSWRV <Post> (`/posts/${id}`, fetcher)
}

export function getPostList ( page:number = 1, per_page:number = 5 ) {
	return useSWRV <PostPagination> (`/posts?_page=${page}&_per_page=${per_page}&_embed=user`, fetcher)
}

export default { getPostSingle, getPostList }