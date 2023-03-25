import React, {FC} from 'react';
import styles from './countspinner.css';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useAction} from "../../hooks/useAction";

export const CountSpinner: FC<{linkedCellId: number}> = ({linkedCellId}) => {
	const {activeCountSpinnerId, cells, countSpinnerStep} = useTypedSelector(state => state.shulker);
	const {setCountSpinnerStep, removeActiveCountSpinnerId, updateCells} = useAction();

	const upCount = () => {
		const mutableCell = cells[linkedCellId];
		if (mutableCell.count && mutableCell.count + countSpinnerStep < 64)
			cells[linkedCellId] = {...mutableCell, count: mutableCell.count + countSpinnerStep};
		else cells[linkedCellId] = {...mutableCell, count: 64}
		updateCells(cells);
	}

	const downCount = () => {
		const mutableCell = cells[linkedCellId];
		if (mutableCell.count && mutableCell.count - countSpinnerStep > 0)
			cells[linkedCellId] = {...mutableCell, count: mutableCell.count - countSpinnerStep};
		else cells[linkedCellId] = {...mutableCell, count: 1}
		updateCells(cells);
	}

	const ok = () => {
		removeActiveCountSpinnerId()
	}


	return (
		<div className={`${styles.countRollContainer} ${activeCountSpinnerId == linkedCellId ? styles.display : ''}`}>
			<div className={styles.arrowsAndSteps}>
				<div className={styles.arrows}>
					<img onClick={upCount} className={styles.upArrow} id={"plus"}
					     src={ "img/changeArrow.png" } alt=""/>
					<img onClick={downCount} className={styles.downArrow} id={"minus"}
					     src={ "img/changeArrow.png" } alt=""/>
					<button onClick={ok} type="button" className={styles.okButton}>ok</button>
				</div>
				<div className={styles.steps}>
					<div onClick={() => setCountSpinnerStep(1)} className={styles.step}>
						<span>1</span>
					</div>
					<div onClick={() => setCountSpinnerStep(8)} className={styles.step}>
						<span>8</span>
					</div>
					<div onClick={() => setCountSpinnerStep(16)} className={styles.step}>
						<span>16</span>
					</div>
					<div onClick={() => setCountSpinnerStep(32)} className={styles.step}>
						<span>32</span>
					</div>
				</div>

			</div>
		</div>
	);
}
