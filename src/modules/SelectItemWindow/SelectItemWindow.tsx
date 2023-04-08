import React from 'react';
import styles from './selectitemwindow.css';
import {icons} from "../../utils/iconRefs";
import {SelectItemCell} from "../../components/SelectItemCell";

export function SelectItemWindow() {
	return (
		<div className={styles.littleShulkerContainer}>
			<h2 className={styles.littleShulkerHeading}>Предметы</h2>
			<div className={styles.itemContainer}>
				{icons.map((icon, index) => <SelectItemCell {...icon} key={index} />)}
			</div>
		</div>
	);
}
