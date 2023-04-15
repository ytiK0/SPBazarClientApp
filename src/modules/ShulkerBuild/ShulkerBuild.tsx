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
	const {cells, title} = useTypedSelector(state => state.shulker);
	const {setTitle} = useAction();

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
			<ShulkerButtons />
		</div>
	);
}