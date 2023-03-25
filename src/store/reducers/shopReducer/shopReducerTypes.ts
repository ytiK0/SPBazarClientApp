import {ShulkerCartProps} from "../../../components/Cart";
import {ShulkerCellProps} from "../shulkerReduser/shulkerReduserTypes";

export interface ShulkerView extends ShulkerCartProps {
	cells: ShulkerCellProps[]
}

export interface ShulkerSellerInfo {
	sellerNick: string,
	avatarUrl: string
}

export interface Shulker {
	shulkerView: ShulkerView,
	shulkerSeller: ShulkerSellerInfo,
}

export interface ShopState {
	shulker: Shulker | null,
	carts: ShulkerCartProps[],
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

interface FetchShopCartsAction {
	type: ShopActionTypes.FETCH_SHOP_CARTS;
}
interface FetchShopCartsSuccessAction {
	type: ShopActionTypes.FETCH_SHOP_CARTS_SUCCESS;
	payload: ShulkerCartProps[];
}
interface FetchShopCartsErrorAction {
	type: ShopActionTypes.GET_SHULKER_ERROR;
	payload: string;
}

interface GetCartAction {
	type: ShopActionTypes.GET_SHULKER
}

interface GetCartSuccessAction {
	type: ShopActionTypes.GET_SHULKER_SUCCESS
	payload: Shulker
}

interface GetCartErrorAction {
	type: ShopActionTypes.GET_CART_ERROR,
	payload: string
}

interface BuyShulker {
	type: ShopActionTypes.BUY_SHULKER_SUCCESS,
}

interface BuyShulkerError {
	type: ShopActionTypes.BUY_SHULKER_ERROR,
	payload: string
}

export type ShopAction = FetchShopCartsAction | FetchShopCartsSuccessAction | FetchShopCartsErrorAction
	| GetCartAction | GetCartSuccessAction | GetCartErrorAction
	| BuyShulker | BuyShulkerError;
