import {Dispatch} from "react";
import {ShulkerAction, ShulkerActionTypes, IShulkerCellProps} from "../reducers/shulkerReduser/shulkerReduserTypes";

export const setActiveIconName = (iconName: string) => {
	return async (dispatch: Dispatch<ShulkerAction>) => {
		dispatch({type:ShulkerActionTypes.SET_ACTIVE_ICON_NAME, payload: iconName});
	}
}

export const deactivateActiveIconName = () => {
	return async (dispatch: Dispatch<ShulkerAction>) => {
		dispatch({type:ShulkerActionTypes.DEACTIVATE_ACTIVE_ICON_NAME});
	}
}

export const setActiveCountSpinnerId = (cellId: number) => {
	return async (dispatch: Dispatch<ShulkerAction>) => {
		dispatch({type:ShulkerActionTypes.SET_ACTIVE_COUNT_SPINNER_ID, payload: cellId});
	}
}

export const removeActiveCountSpinnerId = () => {
	return async (dispatch: Dispatch<ShulkerAction>) => {
		dispatch({type:ShulkerActionTypes.REMOVE_ACTIVE_COUNT_SPINNER_ID});
	}
}

export const setTitle = (title: string) => {
	return async (dispatch: Dispatch<ShulkerAction>) => {
		dispatch({type:ShulkerActionTypes.SET_TITLE, payload: title});
	}
}

export const setDescription = (description: string) => {
	return async (dispatch: Dispatch<ShulkerAction>) => {
		dispatch({type:ShulkerActionTypes.SET_DESCRIPTION, payload: description});
	}
}

export const setPrice = (price: number) => {
	return async (dispatch: Dispatch<ShulkerAction>) => {
		dispatch({type:ShulkerActionTypes.SET_PRICE, payload: price});
	}
}

export const updateCells = (cells: IShulkerCellProps[]) => {
	return async (dispatch: Dispatch<ShulkerAction>) => {
		dispatch({type:ShulkerActionTypes.UPDATE_CELL, payload: cells});
	}
}
export const setCountSpinnerStep = (stepValue: number) => {
	return async (dispatch: Dispatch<ShulkerAction>) => {
		dispatch({type:ShulkerActionTypes.SET_COUNT_SPINNER_STEP, payload: stepValue});
	}
}
export const clearShulkerInfo = () => {
	return async (dispatch: Dispatch<ShulkerAction>) => {
		dispatch({type:ShulkerActionTypes.CLEAR_SHULKER_INFO});
	}
}



