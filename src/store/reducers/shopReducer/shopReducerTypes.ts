import {IShulkerCartProps} from "../../../components/Cart";
import {IShulkerCellProps} from "../shulkerReduser/shulkerReduserTypes";

export interface IShulkerView extends IShulkerCartProps {
	cells: IShulkerCellProps[]
}

export interface IShulkerSellerInfo {
	sellerNick: string,
	avatarUrl: string
}

export interface IShulker {
	shulkerView: IShulkerView,
	shulkerSeller: IShulkerSellerInfo,
}

export interface IShopState {
	shulker: IShulker | null,
	carts: IShulkerCartProps[],
	loading: boolean,
	error: string | null
}

export enum ShopActionTypes {
	FETCH_SHOP_CARTS= "FETCH_SHOP_CARTS",
	FETCH_SHOP_CARTS_SUCCESS = "FETCH_SHOP_CARTS_SUCCESS",
	GET_SHULKER_ERROR = "GET_SHULKER_ERROR",
	GET_SHULKER= "GET_SHULKER",
	GET_SHULKER_SUCCESS = "GET_SHULKER_SUCCESS",
	GET_CART_ERROR = "GET_CART_ERROR",
	BUY_SHULKER_SUCCESS="BUY_SHULKER_SUCCESS",
	BUY_SHULKER_ERROR="BUY_SHULKER_ERROR"
}

interface IFetchShopCartsAction {
	type: ShopActionTypes.FETCH_SHOP_CARTS;
}
interface IFetchShopCartsSuccessAction {
	type: ShopActionTypes.FETCH_SHOP_CARTS_SUCCESS;
	payload: IShulkerCartProps[];
}
interface IFetchShopCartsErrorAction {
	type: ShopActionTypes.GET_SHULKER_ERROR;
	payload: string;
}

interface IGetCartAction {
	type: ShopActionTypes.GET_SHULKER
}

interface IGetCartSuccessAction {
	type: ShopActionTypes.GET_SHULKER_SUCCESS
	payload: IShulker
}

interface IGetCartErrorAction {
	type: ShopActionTypes.GET_CART_ERROR,
	payload: string
}

interface IBuyShulker {
	type: ShopActionTypes.BUY_SHULKER_SUCCESS,
}

interface IBuyShulkerError {
	type: ShopActionTypes.BUY_SHULKER_ERROR,
	payload: string
}

export type ShopAction = IFetchShopCartsAction | IFetchShopCartsSuccessAction | IFetchShopCartsErrorAction
	| IGetCartAction | IGetCartSuccessAction | IGetCartErrorAction
	| IBuyShulker | IBuyShulkerError;
