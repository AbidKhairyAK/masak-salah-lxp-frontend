export interface User {
	id		: number,
	email	: string,
}

export interface UserAuth {
	user 	: User | null,
	token 	: string | null,
}