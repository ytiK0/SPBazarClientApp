import {ShulkerView} from "../store/reducers/shopReducer/shopReducerTypes";
import {$authHost, $host} from "./index";
import {ShulkerCartProps} from "../components/Cart";

export const ShulkerAPI = {
	sendShulker: async (shulker: ShulkerView) => {
		return await $authHost.post("/Shulker", shulker)
			.then(res => res.data)
			.catch(err => console.log(err))
	},

	getShulkerById: async (id: number) => {
		return await $host.get<ShulkerView>(`/Shulker/ById?id=${id}`).then(shulker => shulker.data);
	},

	buyShulker: async (shulkerId: number) => {
		return await $authHost.get(`/Shulker/buy?shulkerId=${shulkerId}`);
	},

	fetchShulkerCartsData: async () => {
		return await $host.get<ShulkerCartProps[]>("/Shulker/all").then(resp => resp.data)
			.catch(err => console.log(err));
	}
}