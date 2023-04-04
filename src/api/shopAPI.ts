import {IShulkerView} from "../store/reducers/shopReducer/shopReducerTypes";
import {$authHost} from "./index";

export const ShopAPI = {
	getPaymentLink: async (shulker: IShulkerView) => {
		return await $authHost.post<string>("/Shop/GetPaymentLink", shulker).then(res => res.data).catch(() => null);
	}
}