import React, {FC, MouseEvent} from 'react';
import styles from './button.css';

export const Button: FC<{ onClick: (event: MouseEvent) => void, buttonText: string,}> = ({onClick, buttonText}) => {
	return (
		<button className={styles.button} onClick={onClick} type={"button"}>{buttonText}</button>
	);
}
