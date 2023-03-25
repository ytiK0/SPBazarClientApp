import {UserAction, UserActionsTypes, UserState} from "./userReducerTypes";

const initialState: UserState = {
	isAuth: false,
	user:  null
}

export const userReducer = (state = initialState, action: UserAction) => {
	switch (action.type) {
		case UserActionsTypes.LOGIN:
			return {isAuth: true, user: action.payload};
		case UserActionsTypes.LOGOUT:
			return {isAuth: false, user: null}
		default:
			return state
	}
}