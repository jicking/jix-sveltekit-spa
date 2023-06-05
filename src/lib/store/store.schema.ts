export interface Todo {
	id: string;
	content: string;
	isDone: boolean;
}

export interface UserAuth {
	username: string;
	securityToken: string;
	refreshToken: string;
	isPullingToken: boolean;
}
