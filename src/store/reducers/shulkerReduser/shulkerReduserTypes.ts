import {IIcon} from "../../../utils/iconRefs";
import {EditingModes} from "../../../components/ShulkerCell";
import {CategoriesOptions} from "../../../ui/ShulkerCategorySelect";
import {Enchantment} from "../../../utils/enchantments";

export interface IShulkerCellProps {
	shulkerIndex: number,
	count: number | null,
	itemIconName: string,
	isEmpty: boolean,
}

export interface IShulkerReducerState {
	cells: IShulkerCellProps[],
	activeIcon: IIcon | null,
	iconEnchants: Enchantment[],
	activeCountSpinnerId: number,
	editingMode: EditingModes
	countSpinnerStep: number,
	title: string,
	description: string,
	price: number,
	category: CategoriesOptions | null
}

export enum ShulkerActionTypes {
	FETCH_SHULKER = "FETCH_SHULKER",
	SET_ACTIVE_ICON = "SET_ACTIVE_ICON",
	DEACTIVATE_ACTIVE_ICON_NAME = "DEACTIVATE_ACTIVE_ICON_NAME",
	ADD_ENCHANTMENT = "ADD_ENCHANTMENT",
	REMOVE_ENCHANTMENT = "REMOVE_ENCHANTMENT",
	CLEAR_ENCHANTMENT = "CLEAR_ENCHANTMENT",
	SET_ACTIVE_COUNT_SPINNER_ID = "SET_ACTIVE_COUNT_SPINNER_ID",
	REMOVE_ACTIVE_COUNT_SPINNER_ID = "REMOVE_ACTIVE_COUNT_SPINNER_ID",
	SET_COUNT_SPINNER_STEP = "SET_COUNT_SPINNER_STEP",
	SET_TITLE = "SET_TITLE",
	SET_DESCRIPTION = "SET_DESCRIPTION",
	SET_PRICE = "SET_PRICE",
	UPDATE_CELL = "UPDATE_CELL",
	CLEAR_SHULKER_INFO = "CLEAR_SHULKER_INFO",
	SET_EDITING_MODE = "SET_EDITING_MODE",
	SET_DEFAULT_EDITING_MODE = "SET_DEFAULT_EDITING_MODE",
	SET_CATEGORY = "SET_CATEGORY"
}

interface IFetchShulkerAction {
	type: ShulkerActionTypes.FETCH_SHULKER,
	payload: IShulkerCellProps[]
}

interface ISetActiveIconAction {
	type: ShulkerActionTypes.SET_ACTIVE_ICON,
	payload: IIcon
}

interface IDeactivateActiveIconAction {
	type: ShulkerActionTypes.DEACTIVATE_ACTIVE_ICON_NAME
}

interface ISetActiveCountSpinnerIdAction {
	type: ShulkerActionTypes.SET_ACTIVE_COUNT_SPINNER_ID,
	payload: number
}

interface IResetActiveCountSpinnerIdAction {
	type: ShulkerActionTypes.REMOVE_ACTIVE_COUNT_SPINNER_ID
}

interface ISetCountSpinnerStepAction {
	type: ShulkerActionTypes.SET_COUNT_SPINNER_STEP,
	payload: number
}

interface ISetTitleAction {
	type: ShulkerActionTypes.SET_TITLE,
	payload: string
}

interface ISetDescriptionAction {
	type: ShulkerActionTypes.SET_DESCRIPTION,
	payload: string
}

interface ISetPriceAction {
	type: ShulkerActionTypes.SET_PRICE,
	payload: number
}

interface IUpdateCellsAction {
	type: ShulkerActionTypes.UPDATE_CELL,
	payload: IShulkerCellProps[]
}

interface IClearShulkerInfoAction {
	type: ShulkerActionTypes.CLEAR_SHULKER_INFO,
}

interface ISetEditingModeAction {
	type: ShulkerActionTypes.SET_EDITING_MODE,
	payload: EditingModes
}

interface ISetDefaultEditingMode {
	type: ShulkerActionTypes.SET_DEFAULT_EDITING_MODE
}

interface ISetCategory {
	type: ShulkerActionTypes.SET_CATEGORY,
	payload: CategoriesOptions | null
}

interface  IAddEnchantment {
	type: ShulkerActionTypes.ADD_ENCHANTMENT,
	payload: Enchantment
}

interface IRemoveEnchantment {
	type: ShulkerActionTypes.REMOVE_ENCHANTMENT,
	payload: Enchantment
}

interface IClearEnchantment {
	type: ShulkerActionTypes.CLEAR_ENCHANTMENT
}

export type ShulkerAction = IFetchShulkerAction     | ISetActiveIconAction
	| IDeactivateActiveIconAction           | ISetActiveCountSpinnerIdAction
	| IResetActiveCountSpinnerIdAction      | ISetTitleAction
	| ISetDescriptionAction                 | ISetPriceAction
	| IUpdateCellsAction                    | ISetCountSpinnerStepAction
	| IClearShulkerInfoAction               | ISetEditingModeAction
	| ISetDefaultEditingMode                | ISetCategory
	|IAddEnchantment                        | IRemoveEnchantment
	| IClearEnchantment;
