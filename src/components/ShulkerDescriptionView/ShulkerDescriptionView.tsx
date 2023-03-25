import React, {FC} from 'react';
import styles from './shulkerdescriptionview.css';
import {useTypedSelector} from "../../hooks/useTypedSelector";

export const ShulkerDescriptionView: FC = () => {
	const {shulker, loading} = useTypedSelector(state => state.shop)

	if (loading){
		return <div></div>
	}

	return (
		<div className={styles.descriptionWrapper}>
			<h3 className={styles.descriptionHeading}>Описание ящика</h3>
			<div className={styles.descriptionContainer}>
				<p className={styles.description}>{shulker?.shulkerView.description}</p>
			</div>
		</div>
	);
}
