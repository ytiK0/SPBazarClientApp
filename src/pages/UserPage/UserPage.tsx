import React from 'react';
import styles from './userpage.css';
import {Header} from "../../components/Header";
import {UserStatistic} from "../../components/UserStatistic";
import {UserShulkers} from "../../modules/UserShulkers";
import {useNavigate} from "react-router-dom";


// TODO if user did not login render empty page
export function UserPage() {
	const nav = useNavigate()
	return (
		<>
			<Header />
			<div className={`container ${styles.main}`}>
				<UserStatistic />
				<div className={styles.wrapper}>
					<button onClick={() => nav("/shulkerBuild")} className={styles.addNewButton} type={"button"}>Создать шалкер</button>
					<h3 className={styles.heading}>Шалкеры на проодаже</h3>
					<UserShulkers />
				</div>
			</div>
		</>
	);
}
