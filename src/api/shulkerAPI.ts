import {IShulkerView} from "../store/reducers/shopReducer/shopReducerTypes";
import {$authHost, $host} from "./index";
import {IShulkerCartProps} from "../components/Cart";

export const ShulkerAPI = {
	sendShulker: async (shulker: IShulkerView) => {
		return await $authHost.post("/Shulker", shulker)
			.then(res => res.data)
			.catch(err => console.log(err))
	},

	getShulkerById: async (id: number) => {
		return await $host.get<IShulkerView>(`/Shulker/ById?id=${id}`).then(shulker => shulker.data);
	},

	buyShulker: async (shulkerId: number) => {
		return await $authHost.get(`/Shulker/buy?shulkerId=${shulkerId}`);
	},

	fetchShulkerCartsData: async () => {
		return await $host.get<IShulkerCartProps[]>("/Shulker/all").then(resp => resp.data)
			.catch(err => console.log(err));
	}
}