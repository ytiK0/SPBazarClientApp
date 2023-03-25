import React from 'react';
import styles from './header.css';
import Logo from "../../ui/Logo";
import {AuthButton} from "../../ui/AuthButton";

export function Header (){
	return (
		<header className={styles.header}>
			<div className={ `${styles.headerContainer} container` }>
				<Logo />
				<AuthButton />
			</div>
		</header>
	);
}