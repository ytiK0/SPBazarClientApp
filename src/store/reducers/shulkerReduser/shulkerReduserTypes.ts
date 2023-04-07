// interface IEnchantableItem {
//
// }

interface ICell {
	shulkerIndex: number,
	count: number | null,
	itemIconName: string,
	isEmpty: boolean,
}

interface IEnchantableCell extends ICell{
	itemType: string
}

export type IShulkerCellProps =ICell | IEnchantableCell

export interface IShulkerReducerState {
	cells: IShulkerCellProps[],
	activeIconName: string | null,
	activeCountSpinnerId: number,
	countSpinnerStep: number,
	title: string,
	description: string,
	price: number
}

export enum ShulkerActionTypes {
	FETCH_SHULKER = "FETCH_SHULKER",
	SET_ACTIVE_ICON_NAME = "SET_ACTIVE_ICON_NAME",
	DEACTIVATE_ACTIVE_ICON_NAME = "DEACTIVATE_ACTIVE_ICON_NAME",
	SET_ACTIVE_COUNT_SPINNER_ID = "SET_ACTIVE_COUNT_SPINNER_ID",
	REMOVE_ACTIVE_COUNT_SPINNER_ID = "REMOVE_ACTIVE_COUNT_SPINNER_ID",
	SET_COUNT_SPINNER_STEP = "SET_COUNT_SPINNER_STEP",
	SET_TITLE = "SET_TITLE",
	SET_DESCRIPTION = "SET_DESCRIPTION",
	SET_PRICE = "SET_PRICE",
	UPDATE_CELL = "UPDATE_CELL",
	CLEAR_SHULKER_INFO = "CLEAR_SHULKER_INFO"
}

interface IFetchShulkerActionType {
	type: ShulkerActionTypes.FETCH_SHULKER,
	payload: IShulkerCellProps[]
}

interface ISetActiveCellActionType {
	type: ShulkerActionTypes.SET_ACTIVE_ICON_NAME,
	payload: string
}

interface IDeactivateActiveCellActionType {
	type: ShulkerActionTypes.DEACTIVATE_ACTIVE_ICON_NAME
}

interface ISetActiveCountSpinnerIdActionType {
	type: ShulkerActionTypes.SET_ACTIVE_COUNT_SPINNER_ID,
	payload: number
}

interface IResetActiveCountSpinnerIdActionType {
	type: ShulkerActionTypes.REMOVE_ACTIVE_COUNT_SPINNER_ID
}

interface ISetCountSpinnerStepActionType {
	type: ShulkerActionTypes.SET_COUNT_SPINNER_STEP,
	payload: number
}

interface ISetTitleActionType {
	type: ShulkerActionTypes.SET_TITLE,
	payload: string
}

interface ISetDescriptionActionType {
	type: ShulkerActionTypes.SET_DESCRIPTION,
	payload: string
}

interface ISetPriceActionType {
	type: ShulkerActionTypes.SET_PRICE,
	payload: number
}

interface IUpdateCellsActionType {
	type: ShulkerActionTypes.UPDATE_CELL,
	payload: IShulkerCellProps[]
}

interface IClearShulkerInfo {
	type: ShulkerActionTypes.CLEAR_SHULKER_INFO,
}

export type ShulkerAction = IFetchShulkerActionType | ISetActiveCellActionType
		| IDeactivateActiveCellActionType | ISetActiveCountSpinnerIdActionType
		| IResetActiveCountSpinnerIdActionType | ISetTitleActionType
		| ISetDescriptionActionType | ISetPriceActionType
		| IUpdateCellsActionType | ISetCountSpinnerStepActionType
		| IClearShulkerInfo;
