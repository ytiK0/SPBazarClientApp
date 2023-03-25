export interface ShulkerCellProps {
	shulkerIndex: number,
	count: number | null,
	itemIconName: string,
	isEmpty: boolean,
}

export interface ShulkerReducerState {
	cells: ShulkerCellProps[],
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

interface FetchShulkerActionType {
	type: ShulkerActionTypes.FETCH_SHULKER,
	payload: ShulkerCellProps[]
}

interface SetActiveCellActionType {
	type: ShulkerActionTypes.SET_ACTIVE_CELL,
	payload: number
}

interface DeactivateActiveCellActionType {
	type: ShulkerActionTypes.DEACTIVATE_ACTIVE_CELL
}

interface SetActiveCountSpinnerIdActionType {
	type: ShulkerActionTypes.SET_ACTIVE_COUNT_SPINNER_ID,
	payload: number
}

interface ResetActiveCountSpinnerIdActionType {
	type: ShulkerActionTypes.REMOVE_ACTIVE_COUNT_SPINNER_ID
}

interface SetCountSpinnerStepActionType {
	type: ShulkerActionTypes.SET_COUNT_SPINNER_STEP,
	payload: number
}

interface SetTitleActionType {
	type: ShulkerActionTypes.SET_TITLE,
	payload: string
}

interface SetDescriptionActionType {
	type: ShulkerActionTypes.SET_DESCRIPTION,
	payload: string
}

interface SetPriceActionType {
	type: ShulkerActionTypes.SET_PRICE,
	payload: number
}

interface UpdateCellsActionType {
	type: ShulkerActionTypes.UPDATE_CELL,
	payload: ShulkerCellProps[]
}

interface ClearShulkerInfo {
	type: ShulkerActionTypes.CLEAR_SHULKER_INFO,
}

export type ShulkerAction = FetchShulkerActionType | SetActiveCellActionType
		| DeactivateActiveCellActionType | SetActiveCountSpinnerIdActionType
		| ResetActiveCountSpinnerIdActionType | SetTitleActionType
		| SetDescriptionActionType | SetPriceActionType
		| UpdateCellsActionType | SetCountSpinnerStepActionType
		| ClearShulkerInfo;
