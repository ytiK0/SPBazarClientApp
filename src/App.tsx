import React, {useEffect} from 'react';
import Shop from "./pages/Shop/Shop";
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import {useAction} from "./hooks/useAction";
import ShulkerBuildPage from "./pages/ShulkerBuildPage/ShulkerBuildPage";
import ShulkerViewPage from "./pages/ShulkerViewPage/ShulkerViewPage";
import {UserPage} from "./pages/UserPage";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {useTypedSelector} from "./hooks/useTypedSelector";
import {UserAPI} from "./api/userAPI";

const App = () => {
	const code = new URLSearchParams(useLocation().search).get("code");
	const {isAuth} = useTypedSelector(state => state.user)
 	const navigate = useNavigate();
	const {loginUser} = useAction();

	const login = async (code: string | null) => {
		if (code != null && !isAuth) {
			const token = await UserAPI.loginDiscord(code);
			console.log(token)
			localStorage.setItem("token", token);
			navigate("/");
			toast.success("login success")
		}
		loginUser();
	}

	useEffect(() => {
		login(code)
	}, [code])

	return (
		<>

			<Routes>
				<Route path="/" element={<Shop />}/>
				<Route path="/user" element={<UserPage />}/>
				<Route path="/shulkerBuild" element={<ShulkerBuildPage />}/>
				<Route path="/shulkerView" element={<ShulkerViewPage />}/>
			</Routes>
			<ToastContainer
				position="bottom-right"
				autoClose={1000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="dark"
			/>
		</>
	);
};

export default App;

