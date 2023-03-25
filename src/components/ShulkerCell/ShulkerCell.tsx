import React, {FC, useEffect} from 'react';
import styles from './shulkercell.css';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useAction} from "../../hooks/useAction";
import {CountSpinner} from "../CountSpinner";
import {IsNoStackableItem} from "../../iconConfig/noStackableItems";


export const ShulkerCell: FC<{shulkerIndex: number}> = ({shulkerIndex}) => {
	const {cells, activeCellId, activeCountSpinnerId} = useTypedSelector(state => state.shulker);
	const {updateCells, setActiveCell, setActiveCountSpinnerId, removeActiveCountSpinnerId} = useAction();
	const cellData = cells[shulkerIndex];

	const fillCell = () => {
		const mutableCell = cells[shulkerIndex];
		if (IsNoStackableItem(cellData.itemIconName))
			cells[shulkerIndex] = {...mutableCell, count: null , isEmpty: false};
		else cells[shulkerIndex] = {...mutableCell, isEmpty: false}

		updateCells(cells);
	}

	const setActive = (event: React.MouseEvent<HTMLImageElement>) => {
		const id = parseInt((event.target as HTMLImageElement).id);
		if (activeCellId != id)
			setActiveCell(id);
		else
			setActiveCell(-1);
	}

	const enableCountSpinner = () => {
		if (shulkerIndex == activeCountSpinnerId)
			removeActiveCountSpinnerId();
		else
			setActiveCountSpinnerId(shulkerIndex);
	}

	useEffect(() => {

	}, [])

	if (cellData.isEmpty) {
		return (
			<div onClick={fillCell}
			     className={`${styles.shulkerGridItem} ${styles.empty}`}
			     id={`${cellData.shulkerIndex}`}></div>
		)
	}

	return (
		<div className={`${styles.shulkerGridItem} ${activeCellId == shulkerIndex ? styles.selected : ""}`}>
			<img onClick={setActive}
			     className={styles.shulkerCellItem}
			     src={"img/" + cellData.itemIconName}
			     alt="icon"
			     id={`${shulkerIndex}`}
				 loading={"lazy"}/>
			{IsNoStackableItem(cellData.itemIconName) ? <></> :
				<>
					<span onClick={enableCountSpinner}
					      className={styles.shulkerGridItemCount}>
						{cellData.count ? cellData.count : 0}
					</span>
					<CountSpinner linkedCellId={shulkerIndex}/>
				</> }
		</div>
	);
}
