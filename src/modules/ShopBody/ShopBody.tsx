import React, {FC, useEffect} from 'react';
import styles from './shopbody.css';
import {Cart} from "../../components/Cart";
import {useAction} from "../../hooks/useAction";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import Error from "/static/img/Error.png"
import LoadingSpinner from "/static/img/loadingSpinner.gif"

export const ShopBody: FC = () => {
	const {carts, loading, error} = useTypedSelector(state => state.shop);
	const {fetchShulkerCarts} = useAction();

	useEffect(()=>{
		fetchShulkerCarts();
	}, [])

	if (loading){
		return (
			<div className={styles.loadingSpinnerContainer} >
				<img  src={LoadingSpinner} alt="loading..."/>
			</div>
		);
	}

	if (error) {
		return (
			<div className={styles.errorContainer}>
				<img className={styles.errorIcon} src={Error} alt="error"/>
				<p>{error}</p>
			</div>
		)
	}

	if (carts.length == 0) {
		return <div className={styles.emptyCartsContainer}>
			Нет ящиков...
		</div>
	}

	return (
		<div className={styles.shopBodyContainer}>
			{carts.map(props => <Cart {...props} key={props.shulkerId}/>)}
		</div>
	);
}
