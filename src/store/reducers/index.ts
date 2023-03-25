import {combineReducers} from "redux";
import {shopReducer} from "./shopReducer/shopReducer";
import {userReducer} from "./userReducer/userReducer";
import {shulkerReducer} from "./shulkerReduser/shulkerReducer";

export const rootReducer = combineReducers({
	shop: shopReducer,
	user: userReducer,
	shulker: shulkerReducer,
})

export type RootState = ReturnType<typeof rootReducer>;