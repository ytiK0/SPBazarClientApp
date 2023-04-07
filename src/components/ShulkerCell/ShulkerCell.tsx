import React, {FC, useEffect} from 'react';
import styles from './shulkercell.css';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useAction} from "../../hooks/useAction";
import {CountSpinner} from "../CountSpinner";
import {IsNoStackableItem} from "../../iconConfig/noStackableItems";


export const ShulkerCell: FC<{shulkerIndex: number}> = ({shulkerIndex}) => {
	const {cells, activeCountSpinnerId} = useTypedSelector(state => state.shulker);
	const {updateCells, setActiveCountSpinnerId, removeActiveCountSpinnerId} = useAction();
	const thisCellData = cells[shulkerIndex];

	const fillCell = () => {
		const mutableCell = cells[shulkerIndex];
		// if (IsNoStackableItem(thisCellData.itemIconName))
			mutableCell.isEmpty = false
		// else cells[shulkerIndex] = {...mutableCell, isEmpty: false};
		console.log(mutableCell, cells[shulkerIndex])

		updateCells(cells);
	}

	// const setActive = (event: React.MouseEvent<HTMLImageElement>) => {
	// 	const id = parseInt((event.target as HTMLImageElement).id);
	// 	if (activeCellId != id)
	// 		setActiveCell(id);
	// 	else
	// 		setActiveCell(-1);
	// }

	const enableCountSpinner = () => {
		if (shulkerIndex == activeCountSpinnerId)
			removeActiveCountSpinnerId();
		else
			setActiveCountSpinnerId(shulkerIndex);
	}

	useEffect(() => {

	}, [])

	if (thisCellData.isEmpty) {
		return (
			<div onClick={fillCell}
			     className={`${styles.shulkerGridItem} ${styles.empty}`}
			     id={`${thisCellData.shulkerIndex}`}></div>
		)
	}

	return (
		<div className={`${styles.shulkerGridItem}`}>
			<img
			     className={styles.shulkerCellItem}
			     src={"img/" + thisCellData.itemIconName}
			     alt="icon"
			     id={`${shulkerIndex}`}
				 loading={"lazy"}/>
			{IsNoStackableItem(thisCellData.itemIconName) ? <></> :
				<>
					<span onClick={enableCountSpinner}
					      className={styles.shulkerGridItemCount}>
						{thisCellData.count ? thisCellData.count : 0}
					</span>
					<CountSpinner linkedCellId={shulkerIndex}/>
				</> }
		</div>
	);
}
