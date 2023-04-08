import React, {useEffect} from 'react';
import styles from './shulkerbuild.css';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {EditingModes, ShulkerCell} from "../../components/ShulkerCell";
import {useAction} from "../../hooks/useAction";
import {IShulkerCellProps} from "../../store/reducers/shulkerReduser/shulkerReduserTypes";
import {ShulkerButtons} from "../../components/ShulkerButtons";

export const EMPTY_CELL: (index: number) => IShulkerCellProps = (index) => {
	return {
		shulkerIndex: index,
		isEmpty: true,
		itemIconName: "Barrier.png",
		count: null
	}
};

export const ShulkerBuild = () => {
	const emptyShulker: IShulkerCellProps[] = new Array(27).fill(EMPTY_CELL(-1))
		.map((cell, index) => ({...cell, shulkerIndex: index}));

	const {cells, title, editingMode} = useTypedSelector(state => state.shulker);
	const {setTitle, updateCells, setEditingMode, setDefaultEditingMode} = useAction();

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
		console.log("fill all");
		if (editingMode != EditingModes.FILL_ALL)
			setEditingMode(EditingModes.FILL_ALL)
		else setDefaultEditingMode();
	};

	const fillLine = () => {
		console.log("fill line");
		if (editingMode != EditingModes.LINE_CELL)
			setEditingMode(EditingModes.LINE_CELL)
		else setDefaultEditingMode();
	};

	return (
		<div className={styles.shulkerInterface}>
			<input onChange={e => setTitle(e.target.value)}
			       className={styles.shulkerHeadingInput}
			       type="text"
			       name="ShulkerTitle"
			       value={title}
			       placeholder={"Title"}
			       required/>
			<div className={styles.shulkerGrid}>
				{
					cells.map(({shulkerIndex}, index) =>
						<ShulkerCell shulkerIndex={shulkerIndex} key={index}/>)
				}
			</div>
			<ShulkerButtons buttons={[
				{buttonText: "Очистить ячейку", onClick: clearCell},
				{buttonText: "Очистить все ячейки", onClick: clearCells},
				{buttonText: "Заполнить всё выделенной ячейкой", onClick: fillAll},
				{buttonText: "Заполнит линию выделенной ячейкой", onClick: fillLine}
			]}/>
		</div>
	);
}