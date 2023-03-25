import React from 'react';
import {ShulkerView} from "../../modules/ShulkerView";
import {Header} from "../../components/Header";
import {ShulkerDescriptionView} from "../../components/ShulkerDescriptionView";
import PriceView from "../../ui/PriceView/PriceView";
import {SellerInfo} from "../../ui/SellerInfo";
import styles from "./shulkerviewpage.css";
import {Button} from "../../ui/Button";
import {useAction} from "../../hooks/useAction";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {toast} from "react-toastify";
import {ShopAPI} from "../../api/shopAPI";

const ShulkerViewPage = () => {
	const {shulker} = useTypedSelector(state => state.shop)
	const {buyShulkerAction} = useAction();

	return (
		<>
			<Header />
			<div className={"container"}>
				<div className={styles.shulker}>
					<ShulkerView />
					<SellerInfo />
				</div>
				<div className={styles.shulkerInfo}>
					<ShulkerDescriptionView />
					<PriceView />
					<Button onClick={async () => {
						//@ts-ignore
						const link = await ShopAPI.getPaymentLink(shulker.shulkerView);
						if (link) {
							//@ts-ignore
							buyShulkerAction(shulker.shulkerView.shulkerId);
							toast.success('omg u bought it');
						} else toast.error("something went wrong")
					}} buttonText={"Купить"} />
				</div>
			</div>
		</>
	);
};

export default ShulkerViewPage;