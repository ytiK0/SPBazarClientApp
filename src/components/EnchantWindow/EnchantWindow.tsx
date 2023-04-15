import React, {useState} from 'react';
import styles from './enchantwindow.css';
import {useSelector} from "react-redux";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {EnchantmentSelect} from "../EnchantmentSellect";

export const EnchantWindow = () => {
	const {activeIcon, } = useTypedSelector(state => state.shulker);
	const [isSelectOpen, setIsOpen] = useState<boolean>(false);


	if (!activeIcon?.isEnchantable)
		return <></>

	return (
		<div className={styles.enchantWindowContainer}>
			<EnchantmentSelect isOpen={isSelectOpen} />
			<h4 className={styles.heading}>Зачарования</h4>
			<button onClick={() => setIsOpen(!isSelectOpen)} className={styles.createEnchantmentButton} type={"button"}>+Создать зачароание</button>
		</div>
	);
}
