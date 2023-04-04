import {ShulkerAction, ShulkerActionTypes, IShulkerReducerState} from "./shulkerReduserTypes";

const initialState: IShulkerReducerState = {
	activeCellId: -1,
	activeCountSpinnerId: -1,
	countSpinnerStep: 1,
	cells: [],
	title: "",
	description: "",
	price: 0
}

export const shulkerReducer = (state = initialState, action: ShulkerAction): IShulkerReducerState => {
	switch (action.type){
		case ShulkerActionTypes.FETCH_SHULKER:
			return {...state, cells: action.payload};

		case ShulkerActionTypes.UPDATE_CELL:
			return {...state, cells: action.payload}

		case ShulkerActionTypes.SET_ACTIVE_CELL:
			return {...state, activeCellId: action.payload};
		case ShulkerActionTypes.DEACTIVATE_ACTIVE_CELL:
			return {...state, activeCellId: -1};

		case ShulkerActionTypes.SET_ACTIVE_COUNT_SPINNER_ID:
			return {...state, activeCountSpinnerId: action.payload};
		case ShulkerActionTypes.REMOVE_ACTIVE_COUNT_SPINNER_ID:
			return {...state, activeCountSpinnerId: -1};
		case ShulkerActionTypes.SET_COUNT_SPINNER_STEP:
			return {...state, countSpinnerStep: action.payload}

		case ShulkerActionTypes.SET_TITLE:
			return {...state, title: action.payload};

		case ShulkerActionTypes.SET_DESCRIPTION:
			return {...state, description: action.payload};

		case ShulkerActionTypes.SET_PRICE:
			return {...state, price: action.payload}

		case ShulkerActionTypes.CLEAR_SHULKER_INFO:
			return {...state, description: "", price: 0, title: ""}

		default:
			return state;
	}
}