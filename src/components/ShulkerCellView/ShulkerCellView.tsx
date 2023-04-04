import React, {FC} from 'react';
import styles from './shulkercellview.css';
import {IShulkerCellProps} from "../../store/reducers/shulkerReduser/shulkerReduserTypes";

export const ShulkerCellView: FC<IShulkerCellProps> = ({itemIconName, count, isEmpty}) => {

	if (isEmpty){
		return (
			<div className={`${styles.shulkerGridItem} ${styles.empty}`}></div>
		)
	}

	return (
		<div className={styles.shulkerGridItem}>
			<img className={styles.shulkerCellItem}
			     src={"img/" + itemIconName}
			     alt="icon"/>
			<span className={styles.shulkerGridItemCount}>{count}</span>
		</div>
	);
}
