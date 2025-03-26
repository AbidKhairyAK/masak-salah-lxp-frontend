import type { User } from "./user"

export interface Post {
	userId	: number,
	id		: number,
	title	: string,
	body	: string
	user	: User
}

export interface PostPagination {
	first	: number,
	prev	: number,
	next	: number,
	last	: number,
	pages	: number,
	items	: number,
	data	: Post[],
}