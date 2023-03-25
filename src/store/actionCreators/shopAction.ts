import {Dispatch} from "react";
import {ShopAction, ShopActionTypes, Shulker} from "../reducers/shopReducer/shopReducerTypes";
import {ShulkerAPI} from "../../api/shulkerAPI";
import {UserAPI} from "../../api/userAPI";

export const fetchShulkerCarts = () => {
	return async (dispatch: Dispatch<ShopAction>) => {
		try {
			dispatch({type: ShopActionTypes.FETCH_SHOP_CARTS});
			const carts = await ShulkerAPI.fetchShulkerCartsData();
			if (carts == undefined) throw new Error("Carts is undefined");
			dispatch({type:ShopActionTypes.FETCH_SHOP_CARTS_SUCCESS, payload: carts});
		}
		catch (e: any) {
			dispatch({type:ShopActionTypes.GET_SHULKER_ERROR, payload: e.toString()});
		}
	}
}

export const getShulkerById = (id: number) => {
	return async (dispatch: Dispatch<ShopAction>) => {
		try {
			dispatch({ type: ShopActionTypes.GET_SHULKER });
			const shulkerView = await ShulkerAPI.getShulkerById(id);
			const shulkerSeller = await UserAPI.getUserById(shulkerView.userId);
			const shulker: Shulker = {shulkerView, shulkerSeller}
			dispatch({type:ShopActionTypes.GET_SHULKER_SUCCESS, payload: shulker});
		}
		catch (e: any) {
			dispatch({type:ShopActionTypes.GET_SHULKER_ERROR, payload: e.toString()});
		}
	}
}

export const buyShulkerAction = (id: number) => {
	return async (dispatch: Dispatch<ShopAction>) => {
		try {
			const response = await ShulkerAPI.buyShulker(id);
			if (response.status != 200) throw new Error("Something went wrong");
			dispatch({type: ShopActionTypes.BUY_SHULKER_SUCCESS})
		}
		catch (e: any) {
			dispatch({type: ShopActionTypes.BUY_SHULKER_ERROR, payload: e.toString()})
		}
	}
}