import React from 'react';
import styles from './usershulkers.css';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {Cart} from "../../components/Cart";

export function UserShulkers() {
	const {user} = useTypedSelector(state => state.user)

	if (user?.shulkers.length == 0) {
		return <div className={styles.emptyCartsContainer}>
			Нет ящиков...
		</div>
	}

	return (
		<div className={styles.shopBodyContainer}>
			{user?.shulkers.map(props => <Cart {...props} key={props.shulkerId}/>)}
		</div>
	);
}
