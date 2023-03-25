import React from 'react';
import styles from './userinfo.css';
import {useTypedSelector} from "../../hooks/useTypedSelector";

export function UserInfo() {
	const {user} = useTypedSelector(state => state.user);
	return (
		<div className={styles.userInfoContainer}>
			<img className={styles.userAvatar} src={user?.avatarUrl} alt=""/>
			<span className={styles.userNick}>{user?.userName}</span>
		</div>
	);
}
