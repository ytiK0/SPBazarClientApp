import {ShopAction, ShopActionTypes, IShopState} from "./shopReducerTypes";

const initialState: IShopState = {
	shulker: null,
	carts: [],
	loading: false,
	error: null
}

export const shopReducer = (state = initialState, action: ShopAction): IShopState => {
	switch (action.type){
		case ShopActionTypes.FETCH_SHOP_CARTS:
			return {...state, loading: true, error: null};
		case ShopActionTypes.FETCH_SHOP_CARTS_SUCCESS:
			return {...state, loading: false, carts: action.payload};
		case ShopActionTypes.GET_SHULKER_ERROR:
			return {...state, loading: false, error: action.payload};

		case ShopActionTypes.GET_SHULKER:
			return {...state, loading: true, error: null}
		case ShopActionTypes.GET_SHULKER_SUCCESS:
			return {...state, loading: false, shulker: action.payload}
		case ShopActionTypes.GET_CART_ERROR:
			return {...state, loading:false, error: action.payload}

		case ShopActionTypes.BUY_SHULKER_SUCCESS:
			return {...state, shulker: null}

		case ShopActionTypes.BUY_SHULKER_ERROR:
			return {...state, error: action.payload}

		default:
			return state
	}
}