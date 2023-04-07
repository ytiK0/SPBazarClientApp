import React, {FC} from 'react';
import styles from './selectitemcell.css';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useAction} from "../../hooks/useAction";

export const SelectItemCell: FC<{ iconName: string }> = ({iconName}) => {
	const {activeIconName} = useTypedSelector(state => state.shulker)
	const {setActiveIconName, deactivateActiveIconName} = useAction();

	const setImg = () => {
		if (activeIconName != iconName)
			setActiveIconName(iconName);
		else deactivateActiveIconName();
	}

	return (
		<div className={styles.item}>
			<img onClick={setImg}
			     className={styles.itemImg}
			     src={require("/static/img/shulkerIcons/" + iconName)}
			     alt=""
			     loading={"lazy"}/>
		</div>
	);
}
