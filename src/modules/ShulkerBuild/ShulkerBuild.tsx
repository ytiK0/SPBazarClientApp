import React, {useEffect} from 'react';
import styles from './shulkerbuild.css';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {ShulkerCell} from "../../components/ShulkerCell";
import {useAction} from "../../hooks/useAction";
import {IShulkerCellProps} from "../../store/reducers/shulkerReduser/shulkerReduserTypes";
import {toast} from "react-toastify";
import {ShulkerButtons} from "../../components/ShulkerButtons";

export const EMPTY_CELL: IShulkerCellProps = {
	shulkerIndex: -1,
	isEmpty: true,
	itemIconName: "Barrier.png",
	count: 0,
};

function createLine(cells: IShulkerCellProps[]) {
	let slicedShulker = [];
	for (let i = 0; i < cells.length; i += 9) {
		const chunk = cells.slice(i, i + 9);
		slicedShulker.push(chunk);
	}
	return slicedShulker;
}

export const ShulkerBuild = () => {
	const emptyShulker: IShulkerCellProps[] = new Array(27).fill(EMPTY_CELL)
		.map((cell, index) => ({...cell, shulkerIndex: index}));
	const {cells, title, activeCellId} = useTypedSelector(state => state.shulker);
	const {setTitle, updateCells, deactivateActiveCell} = useAction();

	useEffect(() => {
		clearCells();
	}, [])

	const clearCell = () => {
		updateCells(cells.map(cell => {
			if (cell.shulkerIndex == activeCellId)
				return {...EMPTY_CELL, shulkerIndex: activeCellId};
			return cell;
		}));
		deactivateActiveCell();
	}

	const clearCells = () => {
		updateCells(emptyShulker);
	};

	const fillAll = () => {
		if (activeCellId >= 0 && cells[activeCellId].itemIconName !== "Barrier.png") {
			updateCells(new Array(27)
				.fill(cells[activeCellId])
				.map((cells, index) => ({...cells, shulkerIndex: index})))
			deactivateActiveCell()
		}
		else if (activeCellId < 0)
			toast.error("Выберите ячейку шалкера");
		else
			toast.error("Невозможно провести операцию c этой ячейкой");
	};

	const fillLine = () => {
		if (activeCellId >= 0 && cells[activeCellId].itemIconName !== "Barrier.png") {
			const lineIndex = Math.floor(activeCellId/9);
			const fillCell = cells[activeCellId];

			const slicedShulker = createLine(cells);

			slicedShulker[lineIndex] = new Array<IShulkerCellProps>(9).fill({...fillCell});

			updateCells(slicedShulker.flat());
			deactivateActiveCell();
		}
		else if (activeCellId < 0)
			toast.error("Выберите ячейку шалкера");
		else
			toast.error("Невозможно провести операцию c этой ячейкой");
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
					{buttonText: "Заполнить всё выделенной ячейкой", onClick:fillAll},
					{buttonText: "Заполнит линию выделенной ячейкой", onClick: fillLine}
				]} />
			</div>
	);
}