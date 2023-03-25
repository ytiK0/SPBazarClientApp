import axios from "axios";

const $host = axios.create({
	baseURL: process.env.SPBAZAR_API_BASE_URL
});

const $authHost = axios.create({
	baseURL: process.env.SPBAZAR_API_BASE_URL
});

const authInterceptor = (config: any) => {
	config.headers.authorization = `Bearer ${localStorage.getItem("token")}`;
	console.log("item is", localStorage.getItem("token"))
	return config;
}

$authHost.interceptors.request.use(authInterceptor)

export {
	$host,
	$authHost
}