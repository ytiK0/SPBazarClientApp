import {IShulkerCartProps} from "../../../components/Cart";

export interface IUser {
	userName: string,
	discordId: string,
	avatarUrl: string,
	userId: string,
	shulkers: IShulkerCartProps[],
	soldShulkersCount: number,
	purchasedShulkersCount: number
}

export interface IUserState {
	isAuth: boolean,
	user: IUser | null
}

export enum UserActionsTypes {
	LOGIN = "LOGIN",
	LOGOUT = "LOGOUT"
}

interface ILoginAction {
	type: UserActionsTypes.LOGIN
	payload: IUser
}

interface ILogoutAction {
	type: UserActionsTypes.LOGOUT
}

export type UserAction = ILoginAction | ILogoutAction