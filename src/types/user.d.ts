export interface User {
	id		: number,
	email	: string,
	name	: string,
	roles	: string[]
}

export interface UserAuth {
	user 	: User | null,
	token 	: string | null,
}