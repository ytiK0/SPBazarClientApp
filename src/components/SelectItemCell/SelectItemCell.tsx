import React, {FC} from 'react';
import styles from './selectitemcell.css';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useAction} from "../../hooks/useAction";

export const SelectItemCell: FC<{ iconName: string }> = ({iconName}) => {
	const {cells, activeCellId} = useTypedSelector(state => state.shulker)
	const {updateCells, deactivateActiveCell} = useAction();

	const setCellImg = () => {
		updateCells(cells.map(cell => {
			if (cell.shulkerIndex == activeCellId)
				return {...cell, itemIconName: iconName}
			return cell;
		}));
		deactivateActiveCell();
	}

	return (
		<div className={styles.item}>
			<img onClick={setCellImg}
			     className={styles.itemImg}
			     src={require("/static/img/shulkerIcons/" + iconName)}
			     alt=""
			     loading={"lazy"}/>
		</div>
	);
}
