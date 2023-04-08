import React from 'react';
import {Header} from "../../components/Header";
import {ShulkerBuild} from "../../modules/ShulkerBuild";
import {ShulkerDescription} from "../../components/ShulkerDescrition";
import {PriceSpinner} from "../../components/PriceSpinner";
import styles from "./shulkerbuildpage.css"
import {SelectItemWindow} from "../../modules/SelectItemWindow";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useNavigate} from "react-router-dom";
import {Button} from "../../ui/Button";
import {toast} from "react-toastify";
import {IsShulkerValid} from "../../utils/isShulkerValid";
import {IShulkerView} from "../../store/reducers/shopReducer/shopReducerTypes";
import {useAction} from "../../hooks/useAction";
import {ShulkerAPI} from "../../api/shulkerAPI";
import {ShulkerCategoriesSelect} from "../../ui/ShulkerCategorySelect";

const ShulkerBuildPage = () => {
	const {cells, title, price, description} = useTypedSelector(state => state.shulker)
	const {clearShulkerInfo} = useAction();
	const send = async (event: React.MouseEvent) => {
		event.preventDefault();

		if (user != null) {
			const sendingShulker: IShulkerView = {
				shulkerId: 0,
				cells: cells,
				title,
				description,
				price,
				sellerNick: user.userName,
				userId: user.userId
			}
			const [isValid, message] = IsShulkerValid(sendingShulker)
			if (isValid) {
				await ShulkerAPI.sendShulker(sendingShulker).then(() => {
					toast.success("Shulker created" + message);
				});
				clearShulkerInfo();
				navigate("/");
			}
			else toast.error(message);
		}
		else toast.error("user is NULL");

	}
	const {user} = useTypedSelector(state => state.user);
	const navigate = useNavigate()

	return (
		<>
			<Header/>
			<div className={`container`}>
				<div className={styles.shulkerBuild}>
					<ShulkerBuild />
					<SelectItemWindow/>
				</div>
				<div className={styles.shulkerInfo}>
					<ShulkerDescription label={"Описание ящика"}/>
					<div className={styles.middleController}>
						<PriceSpinner/>
						<ShulkerCategoriesSelect />
					</div>
					<Button onClick={send} buttonText={"Send"}/>
				</div>
			</div>
		</>
	);
};

export default ShulkerBuildPage;