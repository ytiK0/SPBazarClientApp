import React from 'react';
import styles from "./priceview.css";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const PriceView = () => {
	const {shulker, loading} = useTypedSelector(state => state.shop);

	if (loading) {
		return <div></div>
	}

	return (
		<div className={styles.priceContainer}>
			<span className={styles.priceSign}>Цена:</span>
			<span className={styles.price}>{shulker?.shulkerView.price} AP</span>
		</div>
	);
};

export default PriceView;