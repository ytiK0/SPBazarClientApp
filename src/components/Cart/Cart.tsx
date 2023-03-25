import React, {FC} from 'react';
import styles from './cart.css';
import {useNavigate} from "react-router-dom";

export type ShulkerCartProps = {
	shulkerId: number,
	sellerNick: string
	title: string,
	description: string,
	userId: string,
	price: number
}

export const Cart: FC<ShulkerCartProps> = ({shulkerId, title, price,
	                                    description, sellerNick}) => {
	const navigate = useNavigate()

	return (
		<div onClick={() => navigate(`/shulkerView?id=${shulkerId}`)} className={styles.cart} >
			<h4 className={styles.cartHeader}>{title}</h4>
			<p className={styles.cartDescription}>{description}</p>
			<div className={styles.cartContent}>
				<p className={styles.cartSeller}>продовец:
					<span className={styles.cartSellerNick}>{sellerNick}</span>
				</p>
				<p className={styles.cartPrice}>{price} АР</p>
			<button type={"button"} className={styles.cartBuyBtn}>Купить</button>
			</div>
		</div>
	);
}
