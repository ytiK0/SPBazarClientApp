import {$authHost, $host} from "./index";
import {IShulkerSellerInfo} from "../store/reducers/shopReducer/shopReducerTypes";
import {IShulkerCartProps} from "../components/Cart";
import {IUser} from "../store/reducers/userReducer/userReducerTypes";

export const UserAPI = {
	loginDiscord: async (code: string) => {
		return await $host.post<string>(`User/auth/Discord?code=${code}`)
			.then(res => res.data);

	},

	getUserById: async (id: string) => {
		return await $host.get<IShulkerSellerInfo>(`/User/UserById?sellerId=${id}`).then(shulker => shulker.data);
	},

	fetchUserShulkers: async () => {
		return await $authHost.get<IShulkerCartProps[]>("/Shulker").then(res => res.data);
	},

	fetchDiscordUserData: async () => {
		return await $authHost.get<IUser>("/User").then(res => res.data);
	}
}