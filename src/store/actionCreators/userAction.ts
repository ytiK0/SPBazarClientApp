import {Dispatch} from "react";
import {UserAction, UserActionsTypes} from "../reducers/userReducer/userReducerTypes";

import {UserAPI} from "../../api/userAPI";
import {toast} from "react-toastify";


export const loginUser = () => {
	return async (dispatch: Dispatch<UserAction>) => {
		const userDiscordData = await UserAPI.fetchDiscordUserData();
		const userShulkers = await UserAPI.fetchUserShulkers()
		console.log(userDiscordData);
		dispatch({type: UserActionsTypes.LOGIN,
			payload:{
				...userDiscordData,
				shulkers: userShulkers
			}
		});
	}
}

export const logoutUser = () => {
	return async (dispatch: Dispatch<UserAction>) => {
		dispatch({type: UserActionsTypes.LOGOUT})
	}
}