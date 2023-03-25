import React, {FC} from 'react';
import styles from './sellerinfo.css';
import {useTypedSelector} from "../../hooks/useTypedSelector";

export const SellerInfo: FC = () => {
	const {shulker, loading} = useTypedSelector(state => state.shop);

	if (loading){
		return <div></div>
	}

	return (
		<div className={styles.sellerInfoContainer}>
			<img className={styles.sellerAvatar} src={shulker?.shulkerSeller.avatarUrl} alt=""/>
			<span className={styles.sellerNick}>{shulker?.shulkerSeller.sellerNick}</span>
		</div>
	);
}
