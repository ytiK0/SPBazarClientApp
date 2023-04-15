import React, {FC, useEffect, useState} from 'react';
import styles from './enchantmentselect.css';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {AxeEnchants, BootsEnchants, Enchantment, EquipmentEnchants, SwordEnchants} from "../../utils/enchantments";
import {ItemTypes} from "../../utils/iconRefs";

export const EnchantmentSelect: FC<{isOpen: boolean}> = ({isOpen}) => {
	const {activeIcon} = useTypedSelector(state => state.shulker)
	const [excludeEnchants, setExcludeEnchants] = useState<Enchantment[]>([]);
	const [availableEnchants, setAvailableEnchants] = useState<Enchantment[]>([])
	const itemType = activeIcon?.itemType;

	useEffect(() => {
		switch (itemType){
			case ItemTypes.Equipment:
				setAvailableEnchants(EquipmentEnchants);
				break;
			case ItemTypes.Boots:
				setAvailableEnchants(BootsEnchants);
				break;
			case ItemTypes.Sword:
				setAvailableEnchants(SwordEnchants);
				break;
			case ItemTypes.Axe:
				setAvailableEnchants(AxeEnchants);
				break;
			default:
				break
		}
	}, [])

	if (!isOpen)
		return <></>

	return (
		<div className={styles.enchantWindowContainer}>
			{availableEnchants.map(enchant => <div>{enchant.viewName}</div>)}
		</div>
	);
}
