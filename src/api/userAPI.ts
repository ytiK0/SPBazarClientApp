import {$authHost, $host} from "./index";
import {ShulkerSellerInfo} from "../store/reducers/shopReducer/shopReducerTypes";
import {ShulkerCartProps} from "../components/Cart";
import {User} from "../store/reducers/userReducer/userReducerTypes";

export const UserAPI = {
	loginDiscord: async (code: string) => {
		return await $host.post<string>(`User/auth/Discord?code=${code}`)
			.then(res => res.data);

	},

	getUserById: async (id: string) => {
		return await $host.get<ShulkerSellerInfo>(`/User/UserById?sellerId=${id}`).then(shulker => shulker.data);
	},

	fetchUserShulkers: async () => {
		return await $authHost.get<ShulkerCartProps[]>("/Shulker").then(res => res.data);
	},

	fetchDiscordUserData: async () => {
		return await $authHost.get<User>("/User").then(res => res.data);
	}
}