import React, {FC} from 'react';
import styles from './usermenu.css';
import {Link} from "react-router-dom";

export const UserMenu: FC<{ isActive: boolean }> = ({isActive}) => {
	if  (isActive) {
		return (
			<div className={styles.menuWrapper}>
				<nav className={styles.navbar}>
					<Link className={styles.anker} to={"/user"}>Профиль</Link>
					<hr/>
					<Link className={styles.anker} to={""}>Выйти</Link>
				</nav>
			</div>
		);
	}

	return (
		<>
		</>
	)
}
