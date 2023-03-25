import React, {ChangeEvent, FC} from 'react';
import styles from './pricespinner.css';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import changeArrow from "/static/img/changeArrow.png"
import {useAction} from "../../hooks/useAction";

const maxPrice = 10001

export const PriceSpinner: FC = () => {
	const {price} = useTypedSelector(state => state.shulker)
	const {setPrice} = useAction();


	const increment = () => {
		if (price < maxPrice)
			setPrice(price + 1);
	}

	const decrement = () => {
		if (price > 1)
			setPrice(price - 1)
	}

	const handleChange = ({target}: ChangeEvent<HTMLInputElement>) => {
		const value = parseInt(target.value)
		if (value < maxPrice)
			setPrice(value);

		if (isNaN(value)) {
			setPrice(0);
		}
	}

	return (
		<div className={styles.priceSpinnerContainer}>
			<span style={{fontSize: 40}}>Цена:</span>
			<div className={styles.spinnerDisplayContainer}>
				<input onChange={handleChange}
				       className={styles.price}
				       style={{width: 45 + (price? price : 1).toString().length * 25}}
				       type="number"
				       placeholder={"3"}
				       min={0}
				       value={price == 0 ? "" : price}
				       required/>
				<div className={styles.changeArrowContainer}>
						<img onClick={increment}
						     className={styles.changeArrow}
						     src={changeArrow}
						     alt=""/>
						<img onClick={decrement}
						     className={styles.changeArrow}
						     src={changeArrow}
						     alt=""
						     style={{rotate: "180deg"}}/>
				</div>
			</div>
		</div>
	);
}
