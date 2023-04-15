import React, {FC} from 'react';
import styles from './selectitemcell.css';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useAction} from "../../hooks/useAction";
import {IIcon} from "../../utils/iconRefs";

export const SelectItemCell: FC<IIcon> = (icon) => {
	const {activeIcon} = useTypedSelector(state => state.shulker)
	const {setActiveIconName, deactivateActiveIconName} = useAction();

	const setImg = () => {
		if (activeIcon?.iconRef != icon.iconRef)
			setActiveIconName(icon);
		else deactivateActiveIconName();
	}

	return (
		<div className={`${styles.item} ${activeIcon?.iconRef === icon.iconRef ? styles.selected : ""}`}>
			<img onClick={setImg}
			     className={styles.itemImg}
			     src={require("/static/img/shulkerIcons/" + icon.iconRef)}
			     alt={icon.name}
			     loading={"lazy"}
			     draggable={false}/>
		</div>
	);
}
