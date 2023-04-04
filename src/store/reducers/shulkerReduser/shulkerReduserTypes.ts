interface IEnchantableItem {

}

interface ICell {
	shulkerIndex: number,
	count: number,
	itemIconName: string,
	isEmpty: boolean,
}

interface IEmptyCell {
	shulkerIndex: number,
	itemIconName: string,
	isEmpty: boolean,
}

interface IEnchantableCell extends IEmptyCell{
	itemType: string
}

export type IShulkerCellProps =ICell | IEmptyCell | IEnchantableCell

export interface IShulkerReducerState {
	cells: IShulkerCellProps[],
	activeCellId: number,
	activeCountSpinnerId: number,
	countSpinnerStep: number,
	title: string,
	description: string,
	price: number
}

export enum ShulkerActionTypes {
	FETCH_SHULKER = "FETCH_SHULKER",
	SET_ACTIVE_CELL = "SET_ACTIVE_CELL",
	DEACTIVATE_ACTIVE_CELL = "DEACTIVATE_ACTIVE_CELL",
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
	type: ShulkerActionTypes.SET_ACTIVE_CELL,
	payload: number
}

interface IDeactivateActiveCellActionType {
	type: ShulkerActionTypes.DEACTIVATE_ACTIVE_CELL
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
