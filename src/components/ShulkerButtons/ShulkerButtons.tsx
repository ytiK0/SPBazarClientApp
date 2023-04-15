import React, {FC, useEffect} from 'react';
import styles from './shulkerbuttons.css';
import {IShulkerButton, ShulkerButton} from "../../ui/ShulkerButton";
import {EditingModes} from "../ShulkerCell";
import {IShulkerCellProps} from "../../store/reducers/shulkerReduser/shulkerReduserTypes";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useAction} from "../../hooks/useAction";
import {EMPTY_CELL} from "../../modules/ShulkerBuild";

export const ShulkerButtons: FC = () => {
	const emptyShulker: IShulkerCellProps[] = new Array(27).fill(EMPTY_CELL(-1))
		.map((cell, index) => ({...cell, shulkerIndex: index}));

	const {editingMode} = useTypedSelector(state => state.shulker);
	const {updateCells, setEditingMode, setDefaultEditingMode} = useAction();

	useEffect(() => {
		clearCells();
	}, [])

	const clearCells = () => {
		updateCells(emptyShulker);
	};

	const clearCell = () => {
		if (editingMode != EditingModes.CLEARING_CELL)
			setEditingMode(EditingModes.CLEARING_CELL)
		else setDefaultEditingMode();
	}

	const fillAll = () => {
		if (editingMode != EditingModes.FILL_ALL)
			setEditingMode(EditingModes.FILL_ALL)
		else setDefaultEditingMode();
	};

	const fillLine = () => {
		if (editingMode != EditingModes.LINE_CELL)
			setEditingMode(EditingModes.LINE_CELL)
		else setDefaultEditingMode();
	};

	const buttons: IShulkerButton[] = [
		{
			buttonText: "Очистить ячейку",
			onClick: clearCell,
			style: {backgroundColor: editingMode == EditingModes.CLEARING_CELL ? "#D34242" : undefined}
		},
		{
			buttonText: "Очистить все ячейки",
			onClick: clearCells,
		},
		{
			buttonText: "Заполнить всё выделенной ячейкой",
			onClick: fillAll,
			style: {backgroundColor: editingMode == EditingModes.FILL_ALL ? "#6699FF" : undefined}
		},
		{
			buttonText: "Заполнит линию выделенной ячейкой",
			onClick: fillLine,
			style: {backgroundColor: editingMode == EditingModes.LINE_CELL ? "#6699FF" : undefined}
		}];



	return (
		<div className={styles.buttonContainer}>
			{buttons.map(button => <ShulkerButton {...button} key={button.buttonText} />)}
		</div>
	);
}
