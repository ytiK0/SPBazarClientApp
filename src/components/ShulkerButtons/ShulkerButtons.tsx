import React, {FC} from 'react';
import styles from './shulkerbuttons.css';
import {IShulkerButton, ShulkerButton} from "../../ui/ShulkerButton";

export const ShulkerButtons: FC<{buttons: IShulkerButton[]}> = ({buttons}) => {
	return (
		<div className={styles.buttonContainer}>
			{buttons.map(button => <ShulkerButton {...button} />)}
		</div>
	);
}
