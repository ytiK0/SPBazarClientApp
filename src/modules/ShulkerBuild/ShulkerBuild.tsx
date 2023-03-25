import React, {useEffect} from 'react';
import styles from './shulkerbuild.css';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {ShulkerCell} from "../../components/ShulkerCell";
import {useAction} from "../../hooks/useAction";
import {ShulkerCellProps} from "../../store/reducers/shulkerReduser/shulkerReduserTypes";

export const EMPTY_CELL: ShulkerCellProps = {
	shulkerIndex: -1,
	isEmpty: true,
	itemIconName: "Barrier.png",
	count: 0,
};

function createLine(cells: ShulkerCellProps[]) {
	let slicedShulker = [];
	for (let i = 0; i < cells.length; i += 9) {
		const chunk = cells.slice(i, i + 9);
		slicedShulker.push(chunk);
	}
	return slicedShulker;
}

export const ShulkerBuild = () => {
	const emptyShulker: ShulkerCellProps[] = new Array(27).fill(EMPTY_CELL)
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
		if (activeCellId >= 0) {
			updateCells(new Array(27)
				.fill(cells[activeCellId])
				.map((cells, index) => ({...cells, shulkerIndex: index})))
			deactivateActiveCell()
		}
	};

	const fillLine = () => {
		if (activeCellId >= 0) {
			const lineIndex = Math.floor(activeCellId/9);
			const fillCell = cells[activeCellId];

			const slicedShulker = createLine(cells);

			slicedShulker[lineIndex] = new Array<ShulkerCellProps>(9).fill({...fillCell});

			updateCells(slicedShulker.flat());
			deactivateActiveCell();
		}
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
				<div className={styles.buttonContainer}>
					<button onClick={clearCell}
					        type={"button"}
					        className={styles.button}>
						DeleteCell
					</button>
					<button onClick={clearCells}
					        type={"button"}
					        className={styles.button}>
						ClearAllShulker
					</button>
					<button onClick={fillAll}
					        type={"button"}
					        className={styles.button}>
						FillAllWithSelected
					</button>
					<button onClick={fillLine}
					        type={"button"}
					        className={styles.button}>
						FillLineWithSelected
					</button>
				</div>
			</div>
	);
}