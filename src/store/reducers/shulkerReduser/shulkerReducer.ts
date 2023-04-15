import {IShulkerReducerState, ShulkerAction, ShulkerActionTypes} from "./shulkerReduserTypes";
import {EditingModes} from "../../../components/ShulkerCell";
import {Enchantment} from "../../../utils/enchantments";

const initialState: IShulkerReducerState = {
	activeIcon: null,
	iconEnchants: [],
	activeCountSpinnerId: -1,
	countSpinnerStep: 1,
	editingMode: EditingModes.DEFAULT,
	cells: [],
	title: "",
	description: "",
	price: 0,
	category: null
}

export const shulkerReducer = (state = initialState, action: ShulkerAction): IShulkerReducerState => {
	switch (action.type){
		case ShulkerActionTypes.FETCH_SHULKER:
			return {...state, cells: action.payload};

		case ShulkerActionTypes.UPDATE_CELL:
			return {...state, cells: action.payload}

		case ShulkerActionTypes.SET_ACTIVE_ICON:
			return {...state, activeIcon: action.payload, iconEnchants: []};
		case ShulkerActionTypes.DEACTIVATE_ACTIVE_ICON_NAME:
			return {...state, activeIcon: null};

		case ShulkerActionTypes.ADD_ENCHANTMENT:
			return {...state, iconEnchants: [...state.iconEnchants, action.payload]}
		case ShulkerActionTypes.REMOVE_ENCHANTMENT:
			return {...state, iconEnchants: state.iconEnchants.map((enchantment) => {
					if (enchantment != action.payload)
						return enchantment;}) as Enchantment[]}
		case ShulkerActionTypes.CLEAR_ENCHANTMENT:
			return {...state, iconEnchants: []}


		case ShulkerActionTypes.SET_ACTIVE_COUNT_SPINNER_ID:
			return {...state, activeCountSpinnerId: action.payload};
		case ShulkerActionTypes.REMOVE_ACTIVE_COUNT_SPINNER_ID:
			return {...state, activeCountSpinnerId: -1};
		case ShulkerActionTypes.SET_COUNT_SPINNER_STEP:
			return {...state, countSpinnerStep: action.payload}

		case ShulkerActionTypes.SET_EDITING_MODE:
			return {...state, editingMode: action.payload, activeIcon: null }
		case ShulkerActionTypes.SET_DEFAULT_EDITING_MODE:
			return {...state, editingMode: EditingModes.DEFAULT}

		case ShulkerActionTypes.SET_TITLE:
			return {...state, title: action.payload};

		case ShulkerActionTypes.SET_DESCRIPTION:
			return {...state, description: action.payload};

		case ShulkerActionTypes.SET_PRICE:
			return {...state, price: action.payload}

		case ShulkerActionTypes.CLEAR_SHULKER_INFO:
			return {...state, description: "", price: 0, title: ""}

		case ShulkerActionTypes.SET_CATEGORY:
			return {...state, category: action.payload}

		default:
			return state;
	}
}