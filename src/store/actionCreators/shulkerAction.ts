import {Dispatch} from "react";
import {
	ShulkerAction,
	ShulkerActionTypes,
	IShulkerCellProps
} from "../reducers/shulkerReduser/shulkerReduserTypes";
import {IIcon} from "../../utils/iconRefs";
import {EditingModes} from "../../components/ShulkerCell";
import {CategoriesOptions} from "../../ui/ShulkerCategorySelect";

export const setActiveIconName = (icon: IIcon) => {
	return async (dispatch: Dispatch<ShulkerAction>) => {
		dispatch({type:ShulkerActionTypes.SET_ACTIVE_ICON, payload: icon});
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

export const setEditingMode = (mode: EditingModes) => {
	return async (dispatch: Dispatch<ShulkerAction>) => {
		dispatch({type:ShulkerActionTypes.SET_EDITING_MODE, payload: mode});
	}

}

export const setDefaultEditingMode = () => {
	return async (dispatch: Dispatch<ShulkerAction>) => {
		dispatch({type:ShulkerActionTypes.SET_DEFAULT_EDITING_MODE});
	}
}
export const setCategory = (category: CategoriesOptions | null) => {
	return async (dispatch: Dispatch<ShulkerAction>) => {
		dispatch({type:ShulkerActionTypes.SET_CATEGORY, payload: category});
	}
}

