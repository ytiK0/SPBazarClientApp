import React from 'react';
import styles from './userstatistic.css';
import {Statistic} from "../../ui/Statistic";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {UserInfo} from "../../ui/UserInfo";

export function UserStatistic() {
	const {user} = useTypedSelector(state => state.user)

	return (
		<div className={styles.userStatisticWrap}>
			<UserInfo/>
			<div className={styles.statistics}>
				<Statistic color={"#D34242"} statName={"Купленно"} statValue={user?.purchasedShulkersCount||0}/>
				<Statistic color={"#6DC752"} statName={"Проданно"} statValue={user?.soldShulkersCount||0}/>
			</div>
		</div>
	);
}
