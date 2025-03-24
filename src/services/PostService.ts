import useSWRV from 'swrv';

import type { Post } from '@/types/post';

import api from './_api';
import fetcher from './_fetcher';


export function getSinglePost ( id:number ) {
	return useSWRV <Post> (`/posts/${id}`, fetcher)
}

export default {
	getSinglePost,
};