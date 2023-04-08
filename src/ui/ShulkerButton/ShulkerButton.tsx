import React, {CSSProperties, FC} from 'react';
import styles from './shulkerbutton.css';

export interface IShulkerButton {
	onClick: () => void,
	buttonText: string,
	style?: CSSProperties
}

export const ShulkerButton: FC<IShulkerButton> = ({buttonText, onClick, style}) => {
	return (
		<button onClick={onClick}
		        type={"button"}
		        className={styles.button} style={style}>
			{buttonText}
		</button>
	);
}
