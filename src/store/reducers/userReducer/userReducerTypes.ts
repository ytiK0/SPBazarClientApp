import {ShulkerCartProps} from "../../../components/Cart";

export interface User {
	userName: string,
	discordId: string,
	avatarUrl: string,
	userId: string,
	shulkers: ShulkerCartProps[],
	soldShulkersCount: number,
	purchasedShulkersCount: number
}

export interface UserState {
	isAuth: boolean,
	user: User | null
}

export enum UserActionsTypes {
	LOGIN = "LOGIN",
	LOGOUT = "LOGOUT"
}

interface LoginAction {
	type: UserActionsTypes.LOGIN
	payload: User
}

interface LogoutAction {
	type: UserActionsTypes.LOGOUT
}

export type UserAction = LoginAction | LogoutAction