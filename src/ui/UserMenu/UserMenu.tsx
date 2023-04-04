import React, {FC} from 'react';
import styles from './usermenu.css';
import {Link} from "react-router-dom";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useAction} from "../../hooks/useAction";

export const UserMenu: FC<{ isActive: boolean }> = ({isActive}) => {
	const {logoutUser} = useAction();

	if  (isActive) {
		return (
			<div className={styles.menuWrapper}>
				<nav className={styles.navbar}>
					<Link className={styles.anker} to={"/user"}>Профиль</Link>
					<hr/>
					<button onClick={() => {
						logoutUser();
						localStorage.removeItem("token");
					}} className={styles.anker} type={"button"} style={{background: "transparent", border:"none"}}>Выйти</button>
				</nav>
			</div>
		);
	}

	return (
		<>
		</>
	)
}
