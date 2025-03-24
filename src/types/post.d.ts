import type { AxiosResponse } from "axios"

export interface Post {
	userId	: number,
	id		: number,
	title	: string,
	body	: string
}