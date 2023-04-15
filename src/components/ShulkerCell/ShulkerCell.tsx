import React, {FC, useEffect} from 'react';
import styles from './shulkercell.css';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useAction} from "../../hooks/useAction";
import {CountSpinner} from "../CountSpinner";
import {toast} from "react-toastify";
import {EMPTY_CELL} from "../../modules/ShulkerBuild";
import {IShulkerCellProps} from "../../store/reducers/shulkerReduser/shulkerReduserTypes";

export enum EditingModes   {
	DEFAULT = "DEFAULT",
	CLEARING_CELL = "CLEARING_CELL",
	LINE_CELL = "LINE_CELL",
	FILL_ALL = "FILL_ALL"
}

export const ShulkerCell: FC<{shulkerIndex: number}> = ({shulkerIndex}) => {
	const {cells, activeCountSpinnerId, activeIcon, editingMode} = useTypedSelector(state => state.shulker);
	const {updateCells, setActiveCountSpinnerId, removeActiveCountSpinnerId, setDefaultEditingMode} = useAction();
	const thisCellData = cells[shulkerIndex];

	const cellOnClick = () => {
		console.log("cell on click with mode ", editingMode)
		switch (editingMode) {
			case EditingModes.CLEARING_CELL:
				clearCell();
				break;
			case EditingModes.LINE_CELL:
				fillLine();
				break;
			case EditingModes.FILL_ALL:
				fillAll();
				break;
			default:
				fillCell()
		}
	}

	const clearCell = () => {
		cells[shulkerIndex] = EMPTY_CELL(shulkerIndex);

		updateCells(cells);
	}

	const fillCell = () => {
		const mutableCell = cells[shulkerIndex];
		if (activeIcon && activeIcon.iconRef != mutableCell.itemIconName) {
			mutableCell.isEmpty = false;
			mutableCell.itemIconName = activeIcon.iconRef;
			if (!activeIcon.isStackable)
				mutableCell.count = null
			else mutableCell.count = 0;

			updateCells(cells);
		}
		else toast.error(editingMode != EditingModes.DEFAULT ? "can`t do this operation" : "icon not selected")
	}

	const fillAll = () => {
		updateCells(cells.map((item, index) => {
			return {...thisCellData, shulkerIndex: index}}));
		setDefaultEditingMode();
	}

	const fillLine = () => {
		const rowId = Math.floor(shulkerIndex/9);

		const chunks = [];
		for (let i = 0; i < cells.length; i += 9)
			chunks.push(cells.slice(i, i + 9));

		chunks[rowId] = chunks[rowId].map((cell, index) => {
			return {...thisCellData, shulkerIndex: rowId * 9 + index}
		});

		updateCells(new Array<IShulkerCellProps>().concat(...chunks))
		setDefaultEditingMode();
	}

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
			<img onClick={cellOnClick}
			     className={styles.shulkerCellItem}
			     src={"img/" + thisCellData.itemIconName}
			     alt="icon"
			     id={`${shulkerIndex}`}
				 loading={"lazy"}/>
			{thisCellData.count == null ? <></> :
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
